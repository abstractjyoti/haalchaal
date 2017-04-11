// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'fettleflingdb', 'ngCordova', 'ngRadialGauge'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        //if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
            $cordovaPlugin.someFunction().then(success, error);

      // }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.search', {
            url: '/search',
            views: {
                'menuContent': {
                    templateUrl: 'templates/search.html'
                }
            }
        })
        .state('app.questions', {
            url: '/questions/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/questions.html',
                    controller: 'QuestionsCtrl'
                }
            }
        })
        .state('app.game', {
            url: '/game',
            views: {
                'menuContent': {
                    templateUrl: 'templates/game.html'
                }
            }
        })
        .state('app.oddone', {
            url: '/oddone',
            views: {
                'menuContent': {
                    templateUrl: 'templates/oddone.html',
                    controller: 'GameCtrl'
                }
            }
        })
        .state('app.flipgame', {
            url: '/flipgame',
            views: {
                'menuContent': {
                    templateUrl: 'templates/flipgame.html',
                    controller: 'FlipGameCtrl'
                }
            }
        })
        .state('app.result', {
            url: '/result',
            views: {
                'menuContent': {
                    templateUrl: 'templates/result.html',
                    controller: 'ResultCtrl'
                }
            }
        })
        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login.html',
                    controller: 'AppCtrl'
                }
            }
        })

    .state('app.options', {
        url: '/options',
        views: {
            'menuContent': {
                templateUrl: 'templates/options.html',
                controller: 'OptionsCtrl'
            }
        }
    })


    .state('app.history', {
        url: '/history',
        views: {
            'menuContent': {
                templateUrl: 'templates/history.html',
                controller: 'HistoryCtrl'
            }
        }
    })


    .state('app.sinup', {
        url: '/signup',
        views: {
            'menuContent': {
                templateUrl: 'templates/signup.html',
                controller: 'SignupCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});