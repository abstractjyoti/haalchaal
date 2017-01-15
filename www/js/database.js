var db = openDatabase('fettle_fling', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `users` (id integer primary key AUTOINCREMENT, name varchar,username varchar,gender varchar,age number)');
    // tx.executeSql('drop table users');
});

angular.module('fettleflingdb', ['ngCordova'])
    .factory('MyDatabase', function ($cordovaToast) {
        return {
            insertUser: function (userinfo) {
                db.transaction(function (tx) {
                    tx.executeSql('INSERT INTO `users` ( name,username,gender,age) VALUES ("' + userinfo.firstname + " " + userinfo.lastname + '","' + userinfo.username + '","' + userinfo.gender + '",' + userinfo.age + ')');

                });
            },

            checkLogin: function (username) {
               
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `users` where username="' + username + '"', [], function (tx, results) {
                        if (results.rows.length == 1) {
                            $cordovaToast.showLongBottom('You are logged in !').then(function (success) {
                                console.log("Toast is shown !");
                                // success
                            }, function (error) {
                                // error
                                 console.log("Toast is not shown !");
                            });

                        }

                    }, null);
                });

            }
        }
    });