var questioncat = "";
var questioncategory = [];
var questionset = [];
var maincatid;
//var jstoragevalue = {};
angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, MyDatabase, $cordovaToast, $location) {
    $scope.showform = true;
    $scope.donotpressbackground = true;
    $scope.changepassword = false;
    if ($.jStorage.get("user") != null)
        $location.path('/app/flipgame');
    else
        $location.path('/app/login');
    $scope.user = {};
    $scope.user.username = "";
    $scope.user.password = "";
    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {


        $scope.passwordrequired = $scope.user.password == "" ? "Please enter password !" : "";
        $scope.usernamerequired = $scope.user.username == "" ? "Please enter username !" : "";
        if ($scope.passwordrequired == "" && $scope.usernamerequired == "") {

            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM `users` where username="' + $scope.user.username + '"', [], function (tx, results) {
                    // console.log($cordovaToast.show("Here's a message", 'long', 'center'));
                    if (results.rows.length == 1) {
                        if (!$scope.changepassword) {
                            if (results.rows.item(0).password == $scope.user.password) {
                                $scope.userdoesnotexist = '';
                                $scope.passwordnotmatched = '';
                                console.log("matched");
                                $.jStorage.set("user", {
                                    id: results.rows.item(0).id,
                                    name: $scope.user.username
                                });

                                $location.path('/app/options');
                            } else {
                                console.log("not matched");
                                $scope.passwordnotmatched = "Wrong password !";
                            }
                        } else {
                            tx.executeSql("update users set password='" + $scope.user.password + "' where username='" + $scope.user.username + "'");
                            $scope.user.password = "";
                            $scope.user.username = "";
                            $scope.showform = true;
                        }

                    } else {
                        console.log("not exits matched");
                        $scope.userdoesnotexist = "User does no exists !";

                    }
                    $scope.$apply();

                }, null);
            });





        }

    };
    $scope.signUp = function () {

        $location.path('/app/signup');
    }
    $scope.logout = function () {
        $.jStorage.flush();
        $location.path("/app/login");
    }

    $scope.backbutton = function () {

        $location.path('/app/options');


    }
    $scope.changevalue = function () {
        $scope.donotpressbackground = !$scope.donotpressbackground;
    }

    $scope.forgotpassword = function () {
        $scope.showform = !$scope.showform;
        $scope.user = {};


    }
    $scope.changepasswordsection = function () {
        $scope.changepassword = true;
        $scope.doLogin();
    }

})


.controller('OptionsCtrl', function ($scope, MyDatabase, $location) {
        $scope.$on('$ionicView.enter', function () {
            if ($.jStorage.get('user'))
                optionctrl();
            else
                $location.path('/app/login');


        });
        var optionctrl = function () {
            $scope.getCatId = function (category) {
                questioncat = category;
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `questioncategory` where category="' + category + '"', [], function (tx, results) {

                        if (results.rows.length > 0) {

                            $location.path('/app/questions/' + results.rows.item(0).id);
                            //  $location.replace();
                            console.log(results.rows.item(0).id);
                            $scope.$apply();
                        }

                    }, null);
                });



            }



        }

    })
    .controller('QuestionsCtrl', function ($scope, MyDatabase, $location, $stateParams, $interval) {
        $scope.$on('$ionicView.enter', function () {
            $scope.maincategory = questioncat.charAt(0).toUpperCase() + questioncat.substr(1, questioncat.length - 1);
            console.log($scope.maincategory + "  " + questioncat);
            $scope.messagebeforequestion = questioncategory == "personality" ? "What you see FIRST" : "";
            // console.log($scope.messagebeforequestion);
            $scope.questionarray = [{}];
            $scope.answers = {};
            $scope.display = [];
            maincatid = $stateParams.id;
            $scope.showoption = false;
            getQuestionsById();


        });


        //  var questioncategory = [];
        // Array shuffling 

        var questionshuffling = function () {

            //  console.log(inputarray);
            for (var i = 0; i < $scope.questionarray.length; i++) {
                var randomvalue = Math.floor(Math.random() * $scope.questionarray.length);
                var t;
                t = $scope.questionarray[i];
                $scope.questionarray[i] = $scope.questionarray[randomvalue];
                $scope.questionarray[randomvalue] = t;
            }
            console.log($scope.questionarray);
        }

        var stop;
      /*  $scope.timerCountdown = function () {
            // set number of seconds until the pizza is ready
            $scope.countDown = 0;

            // start the countdown
            stop = $interval(function () {
                // decrement remaining seconds
                console.log($scope.countDown);
                $scope.countDown++;
                // if zero, stop $interval and show the popup
                if ($scope.countDown === 5) {
                    $interval.cancel(stop);
                    $scope.showoption = true;

                }
            }, 1000, 0); // invoke every 1 second
        };
*/


        //Get Questions
        var getQuestionsById = function () {

            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM `questioncategory` where id="' + $stateParams.id + '"', [], function (tx, results) {

                    tx.executeSql('SELECT * FROM `questioncategory` where parentid="' + $stateParams.id + '"', [], function (tx, result) {

                        questioncategory = [];
                        if (result.rows.length > 0) {

                            for (var i = 0; i < result.rows.length; i++)
                                questioncategory.push({
                                    id: result.rows.item(i).id,
                                    category: result.rows.item(i).category,
                                    scores: 0,
                                    length: 0
                                });
                        } else
                            questioncategory.push({
                                id: $stateParams.id,
                                category: results.rows.item(0).category,
                                scores: 0,
                                length: 0
                            });

                        $scope.$apply();

                    });
                    tx.executeSql('SELECT * FROM `' + results.rows.item(0).type_of_eval + '`where categoryid="' + $stateParams.id + '"', [], function (tx, results) {
                        console.log(results.rows.item(0));
                        console.log(results.rows.length);

                        for (var i = 0; i < results.rows.length; i++) {
                            // console.log(results.rows.item(i));
                            $scope.questionarray[i] = results.rows.item(i);
                            $scope.display[i] = i == 0 ? true : false;





                        }
                        questionshuffling();

                        questionset = $scope.questionarray;
                        console.log("QUESTIONSET :" + questionset + "  " + $scope.showoption);
                     
                        $scope.$apply();

                    }, null);



                }, null);

            });



        }



        $scope.submit = function () {
            console.log($scope.answers);
        };
        $scope.changequestion = function (index, indextobchanged) {
            $scope.showoption = false;

            if (indextobchanged < $scope.display.length && indextobchanged >= 0) {
                $scope.display[indextobchanged] = true;
                $scope.display[index] = false;
                console.log($scope.answers[index]);

            } else {
                $scope.calculateresult();
                $location.path('/app/result');
            }
           /* if (questioncat == 'personality')
                $scope.timerCountdown();*/

        };

        $scope.calculateresult = function () {
            var score = 0,
                totalscore = 0,
                totallength = $scope.questionarray.length;
            console.log(questioncategory);
            for (var i = 0; i < $scope.questionarray.length; i++) {

                for (var j = 0; j < questioncategory.length; j++) {
                    if (questioncategory.length > 1) {
                        if ($scope.questionarray[i].sub_type == questioncategory[j].id) {
                            //  questioncategory[j].scores += $scope.answers[i];
                            if ($scope.answers[i])
                                questioncategory[j].scores += parseInt($scope.answers[i].split("|")[1]);
                            questioncategory[j].length++;
                        }
                    } else {
                        if ($scope.answers[i])
                            questioncategory[j].scores += parseInt($scope.answers[i].split("|")[1]);
                        questioncategory[j].length++;
                    }


                }
                if ($scope.answers[i])
                    totalscore += parseInt($scope.answers[i].split("|")[1]);
            }








        };




    })

.controller('FlipGameCtrl', function ($scope, MyDatabase, $location, $timeout, $interval, $ionicPopup) {

    $scope.numbers = [{
            "id": "img/bg.jpg",
            "title": "img/image1.png"
        },
        {
            "id": "img/bg.jpg",
            "title": "img/image2.png"
        },
        {
            "id": "img/bg.jpg",
            "title": "img/image3.png"
        },
        {
            "id": "img/bg.jpg",
            "title": "img/image4.png"
        },
        {
            "id": "img/bg.jpg",
            "title": "img/image5.png"
        },
        {
            "id": "img/bg.jpg",
            "title": "img/image6.png"
        },
        {
            "id": "img/bg.jpg",
            "title": "img/image7.png"
        },
        {
            "id": "img/bg.jpg",
            "title": "img/image8.png"
        }]

    $scope.cardarray = [];
    $scope.images = [];
    $scope.rotate = [];
    var previousindex = -1;
    var proceed = true;
    var sufflearray = function (array) {
        for (var i = 0; i < array.length; i++) {
            var randomvalue = Math.floor(Math.random() * array.length);
            var t;
            t = array[i];
            array[i] = array[randomvalue];
            array[randomvalue] = t;
        }


        return array;


    }




    for (var j = 0; j < 2; j++) {
        var newarray = sufflearray($scope.numbers.slice())
        for (var i = 0; i < newarray.length; i++) {
            $scope.cardarray.push(newarray[i]);
            $scope.images.push(newarray[i].id);
            $scope.rotate.push(true);
        }
    }
    sufflearray($scope.cardarray);
    console.log($scope.cardarray);


    $scope.getArray = function (number) {

        return new Array(number);
    }
    var checkforsamevalue = function (index) {
        if ($scope.cardarray[index].title != $scope.cardarray[previousindex].title) {
            $scope.rotate[previousindex] = true;
            $scope.rotate[index] = true;


            console.log(previousindex + " " + index);

            console.log($scope.images[index]);
            setTimeout(function () {
                $scope.images[previousindex] = $scope.cardarray[previousindex].id;
                $scope.images[index] = $scope.cardarray[index].id;


                //   previousindex = -1;

                $scope.$digest();
            }, 500);


        }
        setTimeout(function () {

            previousindex = -1;
            proceed = true;
            $scope.$digest();
        }, 1050);

    }

    $scope.checkselection = function (index) {

        if (proceed && $scope.rotate[index]) {
            proceed = false;
            $scope.rotate[index] = false;
            setTimeout(function () {

                $scope.images[index] = $scope.cardarray[index].title;



                $scope.$digest();
            }, 500);

            setTimeout(function () {

                $scope.images[index] = $scope.cardarray[index].title;

                if (previousindex != -1)
                    checkforsamevalue(index);

                else {
                    previousindex = index;
                    proceed = true;
                }

                $scope.$digest();
            }, 1200);

        }


    }


})






.controller('GameCtrl', function ($scope, MyDatabase, $location, $timeout, $interval, $ionicPopup) {
        $scope.$on('$ionicView.enter', function () {
            game();

        })
        var game = function () {
            $scope.ambiguousletterpairs = [[7, 1], ["B", 8], ["Q", "O"], [1, "I"]];
            $scope.message = "";
            var timecount = 0;
            var changeindex = function () {

                $scope.child = Math.floor(Math.random() * 8);
                $scope.parent = Math.floor(Math.random() * 8);
                $scope.parent = $scope.parent == 0 ? 4 : $scope.parent;
                $scope.parent = $scope.parent == 0 ? 4 : $scope.parent;
                console.log($scope.random + "  " + $scope.parent + "  " + $scope.child);

            }
            var showpopup = function (title, msg, path) {
                $ionicPopup.alert({
                    title: title,
                    template: msg,
                }).then(function (res) {
                    if (path)
                        $location.path(path);
                    else {
                        changeindex();
                        $scope.timerCountdown();
                    }

                });
            }

            var gameplay = function () {


                $scope.random = Math.floor(Math.random() * $scope.ambiguousletterpairs.length);
                showpopup("Let's start !", 'Find ' + $scope.ambiguousletterpairs[$scope.random][1]);



            }


            //    $scope.countDown = 0; // number of seconds remaining
            var stop;
            $scope.timerCountdown = function () {
                // set number of seconds until the pizza is ready
                $scope.countDown = 0;

                // start the countdown
                stop = $interval(function () {
                    // decrement remaining seconds
                    console.log($scope.countDown);
                    $scope.countDown++;
                    // if zero, stop $interval and show the popup
                    if ($scope.countDown === 15) {
                        $interval.cancel(stop);
                        var alertPopup = showpopup('Oops ! Time Up..', 'Try again later', '/app/options');

                    }
                }, 1000, 0); // invoke every 1 second
            };



            $scope.checkfornext = function (pindex, cindex) {
                $interval.cancel(stop);
                timecount++;
                if (pindex == $scope.parent && cindex == $scope.child) {


                    $scope.random = $scope.random + 1 >= $scope.ambiguousletterpairs.length ? $scope.random + 1 - $scope.ambiguousletterpairs.length : $scope.random + 1;

                    timecount != 3 ? showpopup('Congratulations !', 'Now find ' + $scope.ambiguousletterpairs[$scope.random][1]) : showpopup('Congratulations !', 'You did a great job !', '/app/options');

                } else {

                    showpopup('Oops !Wrong selection..!', 'Try again later', '/app/options');
                }

            }
            gameplay();


            // timer();








            console.log($scope.ambiguousletterpairs);


            $scope.getNumber = function (num) {
                return new Array(num);
            }


        }



    })
    .controller('ResultCtrl', function ($scope, MyDatabase, $location, $ionicScrollDelegate, $compile) {
        $scope.showresult = true;
        $scope.result = [];
        $scope.recommendation = [];
        var count = 0,
            totalscore = 0,
            totallength = 0;
        var color = ['#DEDEDE', '#8DCA2F', '#FDC702', '#FF7700', '#C50200'];
        var upperLimit = 0,
            lowerLimit = 0,
            value = 0,
            precision = 2,
            unit = "";
        var ranges = [];
        if (questioncat == "stress") {

            var totalscores = 0;

            for (var i = 0; i < questioncategory.length; i++)
                totalscores += questioncategory[i].scores / questioncategory[i].length;

            questioncategory = [];


            questioncategory.push({
                id: maincatid,
                category: questioncat,
                scores: Math.round(totalscores / 6),
                length: questionset.length
            });
        }
        var prepareValueMeter = function (results) {

            upperLimit = results.rows.item(results.rows.length - 1).max_score;
            lowerLimit = results.rows.item(0).min_score;
            console.log(upperLimit + " " + lowerLimit + " " + value);
            ranges = [];
            for (var j = 0; j < results.rows.length; j++) {
                ranges.push({
                    min: results.rows.item(j).min_score,
                    max: results.rows.item(j).max_score,
                    color: color[j]
                });
                if (questioncategory[count].scores <= results.rows.item(j).max_score && questioncategory[count].scores >= results.rows.item(j).min_score)
                    $scope.recommendation.push({
                        category: questioncategory[count].category,
                        prediction: results.rows.item(j).behaviour,
                        suggestion: results.rows.item(j).recommend,
                        status: results.rows.item(j).status

                    });


            };

            console.log(count);
            $scope.result.push({
                value: questioncategory[count].scores,
                upperLimit: upperLimit,
                lowerLimit: lowerLimit,
                unit: unit,
                precision: precision,
                ranges: ranges
            });
            count++;
            console.log($scope.result);

        }
        db.transaction(function (tx) {
            for (var i = 0; i < questioncategory.length; i++) {
                totalscore += questioncategory[i].scores;

                tx.executeSql('SELECT * FROM `evaluation` where catid= ' + questioncategory[i].id + ' order by min_score', [], function (tx, results) {
                    console.log(questioncategory);
                    prepareValueMeter(results);
                    /*
                  
                     upperLimit = results.rows.item(results.rows.length - 1).max_score;
                      lowerLimit = results.rows.item(0).min_score;
                      value = questioncategory[i].scores;
                      console.log( upperLimit+" "+lowerLimit+" "+ value);
                    $scope.result.push({
                          value: value,
                          upperLimit: upperLimit,
                          lowerLimit: lowerLimit,
                          unit: unit,
                          precision: precision,
                          ranges: ranges
                      });*/
                    /* console.log(results.rows.item(results.rows.length - 1).max_score + "   " + ranges);
                   
                     $scope.$apply();
                   
                     console.log(ranges);
                     $scope.result.push({
                         value: value,
                         upperLimit: upperLimit,
                         lowerLimit: lowerLimit,
                         unit: unit,
                         precision: precision,
                         ranges: ranges*/
                    //  $scope.$apply();
                }, null);

            }
            console.log($scope.result[1]);
        });

        db.transaction(function (tx) {
            if (questioncategory.length > 1) {
                var totalscores = 0;

                for (var i = 0; i < questioncategory.length; i++)
                    totalscores += questioncategory[i].scores;

                questioncategory.push({
                    id: maincatid,
                    category: "Over all " + questioncat,
                    scores: totalscores,
                    length: questionset.length
                });



                tx.executeSql('SELECT * FROM `evaluation` where catid= ' + maincatid + ' order by min_score', [], function (tx, results) {
                    if (results.rows.length > 0)
                        prepareValueMeter(results);

                }, null)


            }
        });


        /*    //  $scope.result.push();
        $scope.value = 2;
        $scope.upperLimit = 6;
        $scope.lowerLimit = 0;
        $scope.unit = "kW";
        $scope.precision = 2;
        $scope.ranges = [
            {
                min: 0,
                max: 1.5,
                color: '#DEDEDE'
        },
            {
                min: 1.5,
                max: 2.5,
                color: '#8DCA2F'
        },
            {
                min: 2.5,
                max: 3.5,
                color: '#FDC702'
        },
            {
                min: 3.5,
                max: 4.5,
                color: '#FF7700'
        },
            {
                min: 4.5,
                max: 6.0,
                color: '#C50200'
        }
    ];


*/
        $scope.changeshowresultvalue = function () {
            $scope.showresult = !$scope.showresult;

        }
        $scope.$watch('showresult', function () {
            console.log('hey, myVar has changed!');
            $ionicScrollDelegate.scrollTop();
            if (!$scope.showresult) {
                angular.element(document.querySelector('.firstclass')).addClass('active');
                angular.element(document.querySelector('.bodyoffirstclass')).trigger('click');
                //  angular.element(document.querySelector('.collapsible')).collapsible('open', 0);
                /* $(".collapsible").collapsible({
                     accordion: false
                 });*/

            }
        });


    })
    .controller('SignupCtrl', function ($scope, MyDatabase, $location) {
        $scope.user = {};
        $scope.user.username = "";
        $scope.user.firstname = "";
        $scope.user.lastname = "";
        $scope.user.gender = "";
        $scope.user.age = "";
        $scope.user.password = "";
        $scope.validateForAge = function () {

            if ($scope.user.age < 0 || $scope.user.age > 999) {
                console.log("called");
                $scope.user.age = "";
            }


        }
        $scope.checkUniqueUser = function () {
            $scope.usernamerequired = "";
            if (!$scope.user.username == "") {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `users` where username="' + $scope.user.username.toLowerCase() + '"', [], function (tx, results) {

                        if (results.rows.length > 0) {
                            $scope.userexists = "User already exists !";
                            console.log($scope.userexists);
                        } else
                            $scope.userexists = "";

                    }, null);
                });
            }


        }
        $scope.checkPassword = function () {

            $scope.passwordrequired = "";
            $scope.password = $scope.user.password.length < 6 ? "Minimum password length should be 6 !" : "";


        }

        $scope.signup = function () {
            $scope.namerequired = $scope.user.lastname == "" || $scope.user.firstname == "" ? "Name is required !" : "";
            $scope.usernamerequired = $scope.user.username == "" ? "Username is required !" : "";
            $scope.passwordrequired = $scope.user.password == "" ? "Password is required !" : "";
            if ($scope.namerequired == "" && $scope.usernamerequired == "" && $scope.passwordrequired == "")
                MyDatabase.insertUser($scope.user, $scope);

        }





    });