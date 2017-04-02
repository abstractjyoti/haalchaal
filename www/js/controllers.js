var questioncat = "";
var questioncategory = [];
var questionset = [];
angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, MyDatabase, $cordovaToast) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };
    $scope.user = {};
    $scope.user.username = ""

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        //  $cordovaToast.show('This might take several minutes, please hold on...', 'long', 'bottom');
        // console.log($cordovaToast);
        MyDatabase.checkLogin($scope.user.username, $scope);

    };
})

.controller('PlaylistsCtrl', function ($scope, $cordovaToast) {
        $scope.playlists = [
            {
                title: 'Reggae',
                id: 1
        },
            {
                title: 'Chill',
                id: 2
        },
            {
                title: 'Dubstep',
                id: 3
        },
            {
                title: 'Indie',
                id: 4
        },
            {
                title: 'Rap',
                id: 5
        },
            {
                title: 'Cowbell',
                id: 6
        }
  ];

    })
    .controller('OptionsCtrl', function ($scope, MyDatabase, $location) {
        $scope.getCatId = function (category) {
            questioncat = category;
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM `questioncategory` where category="' + category + '"', [], function (tx, results) {

                    if (results.rows.length > 0) {

                        $location.path('/app/questions/' + results.rows.item(0).id);
                        console.log(results.rows.item(0).id);
                        $scope.$apply();
                    }

                }, null);
            });



        }





    })
    .controller('QuestionsCtrl', function ($scope, MyDatabase, $location, $stateParams) {
       // console.log(questioncategory);
        $scope.messagebeforequestion = questioncategory == "personality" ? "What you see FIRST" : "";
        // console.log($scope.messagebeforequestion);
        $scope.questionarray = [{}];
        $scope.answers = {};
        $scope.display = [];
        //  var questioncategory = [];

        var getQuestionsById = function () {

            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM `questioncategory` where id="' + $stateParams.id + '"', [], function (tx, results) {

                    tx.executeSql('SELECT * FROM `questioncategory` where parentid="' + $stateParams.id + '"', [], function (tx, results) {
                        if (results.rows.length > 0) {
                            for (var i = 0; i < results.rows.length; i++)
                                questioncategory.push({
                                    id: results.rows.item(i).id,
                                    category: results.rows.item(i).category,
                                    scores: 0
                                });
                        }
                    });
                    tx.executeSql('SELECT * FROM `' + results.rows.item(0).type_of_eval + '`where categoryid="' + $stateParams.id + '"', [], function (tx, results) {
                        console.log(results.rows.item(0));
                        console.log(results.rows.length);

                        for (var i = 0; i < results.rows.length; i++) {
                            // console.log(results.rows.item(i));
                            $scope.questionarray[i] = results.rows.item(i);
                            $scope.display[i] = i == 0 ? true : false;





                        }
                        questionset = $scope.questionarray;



                    }, null);



                }, null);
            });



        }


        getQuestionsById();
        $scope.submit = function () {
            console.log($scope.answers);
        };
        $scope.changequestion = function (index, indextobchanged) {

            if (indextobchanged < $scope.display.length && indextobchanged >= 0) {
                $scope.display[indextobchanged] = true;
                $scope.display[index] = false;

            } else
                $scope.calculateresult();
        };

        $scope.calculateresult = function () {


            for (var i = 0; i < $scope.questionarray.length; i++) {
                if (questioncategory.length > 0) {
                    for (var j = 0; j < questioncategory.length; j++) {
                        if ($scope.questionarray[i].sub_type == questioncategory[j].id)
                        //  questioncategory[j].scores += $scope.answers[i];
                            if ($scope.answers[i])
                            questioncategory[j].scores += parseInt($scope.answers[i].split("|")[1]);
                    }

                }

            }
            console.log(questioncategory);

        };




    })
    .controller('ResultCtrl', function ($scope, MyDatabase, $location) {
        $scope.result = [];
        for (var i = 0; i < questioncategory.length; i++)
            $scope.result.push();
        $scope.value = 1.5;
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




    })
    .controller('SignupCtrl', function ($scope, MyDatabase, $location) {
        $scope.user = {};
        $scope.user.username = "";
        $scope.user.firstname = "";
        $scope.user.lastname = "";
        $scope.user.gender = "";
        $scope.user.age = "";
        $scope.validateForAge = function () {

            if ($scope.user.age < 0 || $scope.user.age > 999) {
                console.log("called");
                $scope.user.age = "";
            }


        }
        $scope.checkUniqueUser = function () {

            if (!$scope.user.username == "") {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `users` where username="' + $scope.user.username + '"', [], function (tx, results) {

                        if (results.rows.length > 0) {
                            $scope.userexists = "User already exists !";
                            console.log($scope.userexists);
                        }

                    }, null);
                });
            }


        }

        $scope.signup = function () {

            MyDatabase.insertUser($scope.user, $scope);

        }





    });