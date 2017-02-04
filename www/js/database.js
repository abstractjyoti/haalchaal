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
                $cordovaToast
                    .show('Here is a message', 'long', 'center')
                    .then(function (success) {
                        // success
                    }, function (error) {
                        // error
                    });
                console.log("checkLogin");
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `users` where username="' + username + '"', [], function (tx, results) {
                        console.log($cordovaToast.show("Here's a message", 'long', 'center'));
                        if (results.rows.length == 1) {
                            $cordovaToast
                                .show('Here is a message', 'long', 'center')
                                .then(function (success) {
                                    // success
                                }, function (error) {
                                    // error
                                });
                        }

                    }, null);
                });

            }
        }
    });