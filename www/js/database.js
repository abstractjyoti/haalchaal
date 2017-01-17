var db = openDatabase('fettle_fling', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `users` (id integer primary key AUTOINCREMENT, name varchar,username varchar,gender varchar,age number)');
    // tx.executeSql('drop table users');
});

angular.module('fettleflingdb', [])
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
                            $cordovaToast
                                .show("Here's a message", 'long', 'center')
                                .then(function (success) {
                                    console.log('Success');
                                }, function (error) {
                                    console.log('Error');
                                });

                        }

                    }, null);
                });

            }
        }
    });