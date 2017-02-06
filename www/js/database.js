var db = openDatabase('fettle_fling', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `users` (id integer primary key AUTOINCREMENT, name varchar,username varchar,gender varchar,age number)');
    // tx.executeSql('drop table users');
    tx.executeSql('CREATE TABLE IF NOT EXISTS `questioncategory` (id integer primary key, catname varchar,parentid integer)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS `questions` (id integer primary key AUTOINCREMENT, question varchar,option1 varchar,option2 varchar,option3 varchar,option4 varchar,option5 varchar,correctanswer varchar,explanation varchar,catid integer)');
    // tx.executeSql('drop table users');
});
db.transaction(function (tx) {
    //QUESTIONCATEGORY TABLE DATA
    tx.executeSql("insert into questioncategory values(1,'cocentration',0)");
    tx.executeSql("insert into questioncategory values(2,'eq',0)");
    tx.executeSql("insert into questioncategory values(3,'iq',0)");
    tx.executeSql("insert into questioncategory values(4,'nutrition',0)");
    tx.executeSql("insert into questioncategory values(5,'stress',0)");
    tx.executeSql("insert into questioncategory values(6,'analogy',3)");
    tx.executeSql("insert into questioncategory values(7,'classification',3)");
    tx.executeSql("insert into questioncategory values(8,'logic',3)");
    //QUESTION TABLE DATA
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('EXPLORE : DISCOVER','read : skim','research : learn','write : print','think : relate','sleep : wake','research : learn',6)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('COBBLER : SHOE','jockey : horse','contractor : building','mason : stone','cowboy : boot','potter : paint','contractor : building',6)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Odometer is to mileage as compass is to','speed','hiking','needle','direction',null,'direction',6)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Hand is to ring as head is to','cap','ear','gloves','bat',null,'cap',6)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Cup is to bowl as vacuum cleaner is to','broom','spoon','mat','table',null,'broom',6)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Kiwi','Eagle','Emu','Ostrich',null,'Eagle',7)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Rigveda','Yajurveda','Atharvaveda','Ayurveda','Samveda','Ayurveda',7)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Gangtok','Singhbhum','Hyderabad','Chennai','Bhubaneshwar','Singhbhum',7)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Tailor','Carpenter','Blacksmith','Barber','Engineer','Barber',7)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Eyes','Ears','Hands','Legs','Nose','Nose',7)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Volume','Size','Large','Shape','Weight','Large',7)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Walk','Pull','Hear','Jump','Run','Hear',7)");
    /*  tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Teach','Instruct','Educate','Explain','null','Instruct',7)");*/
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('At the end of a banquet 10 people shake hands with each other. How many handshakes will there be in total?','100','20','45','50','90','45',8)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('The day before the day before yesterday is three days after Saturday. What day is it today?','Monday','Tuesday','Wednesday','Thursday','Friday','Friday',8)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values(' Which number should come next in the series<br>1, 3, 6, 10, 15,','8','11','24','21','27','21',8)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('165135 is to peace as 1215225 is to','lead','love ','loop','castle',null,'love',8)");
    tx.executeSql("insert into questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Library is to book as book is to','page','copy ','binding','cover',null,'page',8)");

    // tx.executeSql('drop table users');
});


angular.module('fettleflingdb', ['ngCordova'])
    .factory('MyDatabase', function ($cordovaToast, $location) {
        return {
            insertUser: function (userinfo, scope) {
                db.transaction(function (tx) {
                    tx.executeSql('INSERT INTO `users` ( name,username,gender,age) VALUES ("' + userinfo.firstname + " " + userinfo.lastname + '","' + userinfo.username + '","' + userinfo.gender + '",' + userinfo.age + ')');
 $location.path('/app/login');
                });
            },

            checkLogin: function (username, scope) {

                console.log("checkLogin");
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `users` where username="' + username + '"', [], function (tx, results) {
                        // console.log($cordovaToast.show("Here's a message", 'long', 'center'));
                        if (results.rows.length == 1) {
                            //if(result.rows.item(0).password==password)
                            $location.path('/app/options');
                            /* else 
                               $scope.passwordnotmatched="Wrong password !";  */
                        } else {
                            scope.userdoesnotexist = "User does no exists !";
                            console.log(scope.userdoesnotexist);
                        }

                    }, null);
                });

            }
        }
    });