var db = openDatabase('fettle_fling', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `users` (id integer primary key AUTOINCREMENT, name varchar,username varchar,gender varchar,age number)');
    // tx.executeSql('drop table users');
    tx.executeSql('CREATE TABLE IF NOT EXISTS `questioncategory` (id integer primary key, category varchar,type_of_eval varchar)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS `direct_questions` (id integer primary key AUTOINCREMENT, question varchar,option1 varchar,option2 varchar,option3 varchar,option4 varchar,option5 varchar,correctanswer varchar,question_type varchar, categoryid integer)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS `combinational` (id integer primary key AUTOINCREMENT, question varchar,option1 varchar,option2 varchar,option3 varchar,option4 varchar,question_type varchar, categoryid integer)');
    
    // tx.executeSql('drop table users');
});
db.transaction(function (tx) {
    
    //QUESTIONCATEGORY TABLE DATA
    tx.executeSql("insert into questioncategory values(1,'cocentration',0)");
    tx.executeSql("insert into questioncategory values(2,'eq','combinational')");
    tx.executeSql("insert into questioncategory values(3,'iq',0)");
   // tx.executeSql("insert into questioncategory values(4,'nutrition',0)");
    tx.executeSql("insert into questioncategory values(4,'stress',0)");
    tx.executeSql("insert into questioncategory values(5,'analogy',`direct_questions`)");
    tx.executeSql("insert into questioncategory values(6,'classification',`direct_questions`)");
    tx.executeSql("insert into questioncategory values(7,'logic',`direct_questions`)");
    tx.executeSql("insert into questioncategory values(8,'personality','combinational')");
   
                     
  // modified IQ analogy
                  
      tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(1,'Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related. (img src="img/analog1.jpg")', 1, 2, 3, 4, null, 1, 'analogy', 5)");   
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(2,'Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related. (img src="img/analog2.jpg")', 1, 2, 3, 4, null, 4, 'analogy', 5)");   
     tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(3,'The words beside each other are related in the same way as the words in next sequence. For each item, find the word that completes the second word.  candle : hut   lamp : cottage   floodlight : ?' , 'tent',' city', 'dwelling', 'house', null, 'house', 'analogy', 5)");   
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(4,'Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words.   EXPLORE : DISCOVER','read : skim',' research : learn',' write : print',' think : relate', 'sleep : wake',' research : learn', 'analogy', 5)"); 
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values('COBBLER : SHOE','jockey : horse','contractor : building','mason : stone','cowboy : boot','potter : paint','contractor : building', 'analogy',5)");
     tx.executeSql("insert into direct_questions(question,option1,option2,option3,option4,option5,correctanswer, question_type, categoryid) values('Odometer is to mileage as compass is to','speed','hiking','needle','direction',null,'direction','analogy',5)");
    tx.executeSql("insert into direct_questions(question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values('Hand is to ring as head is to','cap','ear','gloves','bat',null,'cap','analogy',5)");
    tx.executeSql("insert into direct_questions(question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values('Cup is to bowl as vacuum cleaner is to','broom','spoon','mat','table',null,'broom','analogy',5)");

    //iq classification
    
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(1,'Choose the word which is different from the rest.','Kiwi','Eagle','Emu','Ostrich',null,'Eagle','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(2,'Choose the word which is different from the rest.','Rigveda','Yajurveda','Atharvaveda','Ayurveda','Samveda','Ayurveda','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(3,'Choose the word which is different from the rest.','Gangtok','Singhbhum','Hyderabad','Chennai','Bhubaneshwar','Singhbhum','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(4,'Choose the word which is different from the rest.','Tailor','Carpenter','Blacksmith','Barber','Engineer','Barber','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(5,'Choose the word which is different from the rest.','Eyes','Ears','Hands','Legs','Nose','Nose','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(6,'Choose the word which is different from the rest.','Volume','Size','Large','Shape','Weight','Large','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(7,'Choose the word which is different from the rest.','Walk','Pull','Hear','Jump','Run','Hear','classification',6)");
     tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(8,'Choose the word which is different from the rest.','Teach','Instruct','Educate','Explain','null','Instruct','classification',6)");
 
                  
       //iq logic
    
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(1,'At the end of a banquet 10 people shake hands with each other. How many handshakes will there be in total?','100','20','45','50','90','45','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(2,'The day before the day before yesterday is three days after Saturday. What day is it today?','Monday','Tuesday','Wednesday','Thursday','Friday','Friday','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(3,' Which number should come next in the series<br>1, 3, 6, 10, 15,','8','11','24','21','27','21','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(4,'165135 is to peace as 1215225 is to','lead','love ','loop','castle',null,'love','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(5,'Library is to book as book is to','page','copy ','binding','cover',null,'page','logic',7)");
    
    //personality
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(1,' 'What you see first (img src="img/1.jpg")', 'face=1','apple=2','person sitting=3',null,'personality',8)");
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(2,' 'What you see first (img src="img/2.jpg")', 'car=1','Man with binocular=2','letter A=3',null,'personality',8)");
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(3,' 'What you see first (img src="img/3.jpg")', 'Bowling pins=1','footprints=2','nesting dolls=3',null,'personality',8)");
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(4,' 'What you see first (img src="img/4.jpg")', 'apple=1','butterfly=2','knife=3',null,'personality',8)");
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(5,' 'What you see first (img src="img/5.jpg")', 'face=1','dog=2','precipice=3',null,'personality',8)");
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(6,' 'What you see first (img src="img/6.jpg")', 'crocodile=1','mountains and water=2','people in boat=3',null,'personality',8)");
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(7,' 'What you see first (img src="img/7.jpg")','whale=1','moon and light on water=2','a person surfing=3',null,'personality',8)");
    
    //EQ 
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(1,'You're on an airplane which suddenly hits extremely bad turbulence and begins rocking from side to side. What do you do?', 'Continue to read your book or magazine, or watch the movie, paying little attention to the turbulence.','Become wary of an emergency, carefully monitoring the flight attendants and reading the emergency instructions card.','A little of both above.','I’m not sure; I’ve never noticed.','personality',8)");
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(2,'You've taken a group of 4-year-olds to the park, and one of them starts crying because the others won't play with her. What do you do?', 'Stay out of it; let the kids deal with it on their own.','Talk to her and help her to figure out ways in which to get the other kids to play with her.','Tell her in a kind voice not to cry.','Try to distract the crying girl by showing her some other things she could play with.','personality',8)");
    
    
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(3,'Assume you had hoped to get an A in one of your courses, but you have just found out you got a C– on the midterm. What do you do?', 'Sketch out a specific plan for ways to improve your grade and resolve to follow through on your plans.','Resolve to do better in the future.','Tell yourself it really doesn't matter much how you do in that particular course, and concentrate instead on other classes where your grades are higher.','Go to the professor and try to talk her into giving you a better grade.','personality',8)");
    
    
     tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(4,'Imagine you are an insurance salesman calling prospective clients. Fifteen people in a row have hung up on you, and you are getting discouraged. What do you do?', 'Call it a day and hope you have better luck tomorrow.','Reassess what you are doing that may be undermining your ability to make a sale.','Try something new on the next call, and keep plugging away.','Consider another line of work.','personality',8)");
    
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(5,'You are a manager in an organization that is trying to encourage respect for racial and ethnic diversity. You overhear someone telling a racist joke. What do you do?', 'Ignore it—it's only a joke.','Call the person into your office for a reprimand.','Speak up on the spot, saying that such jokes are inappropriate and will not be tolerated in your organization.','Suggest to the person telling the joke he go through a diversity training program.','personality',8)");
    
    
   tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(6,'You are trying to calm down a friend who has worked himself up into a fury at a driver in another car who has cut dangerously close in front of him. What do you do?', 'Tell him to forget it; he's okay now and it's no big deal.','Put on one of his favourite tapes and try to distract him.','Join him in putting down the other driver, but exaggerate your reaction.','Tell him about a time something like this happened to you and how you felt as mad as he does now, but then you saw that the other driver was on the way to the hospital emergency room.','personality',8)"); 
    
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(7,'You and your boyfriend/girlfriend have gotten into an argument that has escalated into a shouting match. In the heat of the moment, you are both making personal attacks that you don't really mean. What's the best thing to do?', 'Take a 20-minute break and then continue the discussion.','Stop the argument - stay silent, no matter what your partner says.','Say that you're sorry and ask your partner to apologize too..','Stop for a moment, collect your thoughts, and then state your side of the argument as clearly as you can.','personality',8)");
    
    
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(8,'You have been assigned to lead a work group that is trying to come up with a creative solution to a nagging problem at work. What is the first thing you do?', 'Draw up an agenda and allot time for discussion of each item so you make best use of your time together.','Have people take the time to get to know each other better.','Begin by asking each person for ideas about how to solve the problem, while ideas are fresh.','Start with a brainstorming session, encouraging everyone to say whatever comes to mind, no matter how wild their idea is.','personality',8)");
    
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(9,'Imagine that you have a 5-year-old son who is extremely timid, and has been hypersensitive about—and a bit fearful of—new people and places since he was born. What do you do?', 'Accept that he has a shy temperament and think of ways to shelter him from situations that would upset him.','Take him to a child psychiatrist for help.','Deliberately expose him to lots of new people and places so he can get over his fear..','Engineer an ongoing series of challenging but manageable experiences that will teach him that he can handle new people and places.','personality',8)");
    
    
    tx.executeSql("insert into combinational(id,question,option1,option2,option3,option4,question_type,categoryid) values(10,'For some time now, you have wanted to return to playing the musical instrument you learned to play when you were younger. You have finally gotten around to practicing again, and want to make the best use of your time. What do you do?', 'Hold yourself to a strict practice time every day.',Choose pieces that stretch your abilities a bit.','Practice only when you are really in the mood.','Pick pieces that are far beyond your current ability, but that you can master with diligent effort.','personality',8)");
    
    
        
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