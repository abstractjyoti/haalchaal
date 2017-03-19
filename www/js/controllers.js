var questioncategory = "";
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
            questioncategory = category;
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM `questioncategory` where catname="' + category + '"', [], function (tx, results) {

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
        console.log(questioncategory);
        $scope.messagebeforequestion = questioncategory = "personality" ? "What you see FIRST" : "";
        $scope.questionarray = [{}];
        $scope.answers=[];
        var getQuestionsById = function () {

            db.transaction(function (tx) {
                tx.executeSql('SELECT id FROM `questioncategory` where parentid="' + $stateParams.id + '"', [], function (tx, results) {

                    if (results.rows.length <= 0) {
                        tx.executeSql('SELECT * FROM `questions` where catid="' + $stateParams.id + '"', [], function (tx, results) {
                            console.log(results.rows.length);

                            for (var i = 0; i < results.rows.length; i++) {
                                // console.log(results.rows.item(i));
                                $scope.questionarray[i] = results.rows.item(i);



                                console.log($scope.questionarray[i]);


                            }




                        }, null);

                    }


                }, null);
            });



        }


        getQuestionsById();

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