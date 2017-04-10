var db = openDatabase('fettle_fling', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `users` (id integer primary key AUTOINCREMENT, name varchar,username varchar,password varchar,gender varchar,age number)');
    /* tx.executeSql('drop table users');
    tx.executeSql('drop table questioncategory');
    tx.executeSql('drop table direct_questions');
    tx.executeSql('drop table combinational');
*/
});
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `userrecords` (id integer primary key AUTOINCREMENT, userid integer,catid integer,score integer,status varchar,dates CURRENT_TIMESTAMP,min_value integer,max_value integer)');
});
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `questioncategory` (id integer primary key , category varchar,parentid integer,type_of_eval varchar)');

});
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `direct_questions` (id integer primary key AUTOINCREMENT, question varchar,option1 varchar,option2 varchar,option3 varchar,option4 varchar,option5 varchar,correctanswer varchar,question_type varchar, categoryid integer)');
});
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `combinational_question` (id integer primary key AUTOINCREMENT, question varchar,option1 varchar,option2 varchar,option3 varchar,option4 varchar,que_format varchar,sub_type integer, categoryid integer,que_set integer)');
});

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `evaluation` (id integer primary key, catid integer,min_score integer,max_score integer,behaviour varchar,recommend varchar, status varchar,que_set integer)');
});


/*=======
    tx.executeSql('CREATE TABLE IF NOT EXISTS `questioncategory` (id integer primary key, catname varchar,parentid integer)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS `questions` (id integer primary key AUTOINCREMENT, question varchar,option1 varchar,option2 varchar,option3 varchar,option4 varchar,option5 varchar,correctanswer varchar,explanation varchar,catid integer,questiontype varchar)');
>>>>>>> origin/master*/
// tx.executeSql('drop table users');
//});
db.transaction(function (tx) {
    tx.executeSql("insert into users(id,name,username,gender,age) values(1,'Jyoti','jp','female',20)");
});
db.transaction(function (tx) {
    //user
    // 
    //QUESTIONCATEGORY TABLE DATA
    tx.executeSql("insert into questioncategory values(1,'cocentration',0,'combinational_question')");
    tx.executeSql("insert into questioncategory values(2,'eq',0,'combinational_question')");
    tx.executeSql("insert into questioncategory values(3,'iq',0,'combinational_question')");

    tx.executeSql("insert into questioncategory values(4,'stress',0,'combinational_question')");
    tx.executeSql("insert into questioncategory values(5,'analogy',3,'combinational_question')");
    tx.executeSql("insert into questioncategory values(6,'classification',3,'direct_questions')");
    tx.executeSql("insert into questioncategory values(7,'logic',3,'direct_questions')");
    tx.executeSql("insert into questioncategory values(8,'personality',0,'combinational_question')");
    tx.executeSql("insert into questioncategory values(12,'Wellness Scale ',4,'combinational_question')");
    tx.executeSql("insert into questioncategory values(13,'Thought Control Scale ',4,'combinational_question')");
    tx.executeSql("insert into questioncategory values(14,'Active Coping Scale',4,'combinational_question')");
    tx.executeSql("insert into questioncategory values(15,'Social Ease Scale ',4,'combinational_question')");
    tx.executeSql("insert into questioncategory values(16,'Tension reduction Scale ',4,'combinational_question')");
    tx.executeSql("insert into questioncategory values(17,'Spiritual Practice Scale ',4,'combinational_question')");




});
db.transaction(function (tx) {
    tx.executeSql("insert into questioncategory values(9,'sensitivity',2,'combinational_question')");
});
db.transaction(function (tx) {
    tx.executeSql("insert into questioncategory values(10,'maturity',2,'combinational_question')");
});
db.transaction(function (tx) {
    tx.executeSql("insert into questioncategory values(11,'competency',2,'combinational_question')");
});
/*db.transaction(function (tx) {
    tx.executeSql("insert into questioncategory values(12,'personality',0,'combinational_question')");
});
db.transaction(function (tx) {
    tx.executeSql("insert into questioncategory values(13,'personality',0,'combinational_question')");
});*/
// modified IQ analogy
/*   db.transaction(function (tx) {             
      tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(1,'Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.<br>img/analog1.jpg', 1, 2, 3, 4, null, 1, 'analogy', 5)");   
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(2,'Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.<br> img/analog2.jpg', 1, 2, 3, 4, null, 4, 'analogy', 5)");   
     tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(3,'The words beside each other are related in the same way as the words in next sequence. For each item, find the word that completes the second word.  candle : hut   lamp : cottage   floodlight : ?' , 'tent',' city', 'dwelling', 'house', null, 'house', 'analogy', 5)");   
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(4,'every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words.   EXPLORE : DISCOVER','read : skim',' research : learn',' write : print',' think : relate', 'sleep : wake',' research : learn', 'analogy', 5)"); 
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(5,'COBBLER : SHOE','jockey : horse','contractor : building','mason : stone','cowboy : boot','potter : paint','contractor : building', 'analogy',5)");
     tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer, question_type, categoryid) values(6,'Odometer is to mileage as compass is to','speed','hiking','needle','direction',null,'direction','analogy',5)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(7,'Hand is to ring as head is to','cap','ear','gloves','bat',null,'cap','analogy',5)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(8,'Cup is to bowl as vacuum cleaner is to','broom','spoon','mat','table',null,'broom','analogy',5)");

    //iq classification
    
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(9,'Choose the word which is different from the rest.','Kiwi','Eagle','Emu','Ostrich',null,'Eagle','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(10,'Choose the word which is different from the rest.','Rigveda','Yajurveda','Atharvaveda','Ayurveda','Samveda','Ayurveda','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(11,'Choose the word which is different from the rest.','Gangtok','Singhbhum','Hyderabad','Chennai','Bhubaneshwar','Singhbhum','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(12,'Choose the word which is different from the rest.','Tailor','Carpenter','Blacksmith','Barber','Engineer','Barber','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(13,'Choose the word which is different from the rest.','Eyes','Ears','Hands','Legs','Nose','Nose','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(14,'Choose the word which is different from the rest.','Volume','Size','Large','Shape','Weight','Large','classification',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(15,'Choose the word which is different from the rest.','Walk','Pull','Hear','Jump','Run','Hear','classification',6)");
     tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(16,'Choose the word which is different from the rest.','Teach','Instruct','Educate','Explain','null','Instruct','classification',6)");
 
    
  /*  tx.executeSql("insert into questioncategory values(4,'nutrition',0)");
    tx.executeSql("insert into questioncategory values(5,'stress',0)");
    tx.executeSql("insert into questioncategory values(6,'analogy',3)");
    tx.executeSql("insert into questioncategory values(7,'classification',3)");
    tx.executeSql("insert into questioncategory values(8,'logic',3)");
    tx.executeSql("insert into questioncategory values(9,'personality',0)");*/
//QUESTION TABLE DATA
/*
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(17,'EXPLORE : DISCOVER','read : skim','research : learn','write : print','think : relate','sleep : wake','research : learn',6)");
    tx.executeSql("insert into direct_questionsid,(question,option1,option2,option3,option4,option5,correctanswer,catid) values(18,'COBBLER : SHOE','jockey : horse','contractor : building','mason : stone','cowboy : boot','potter : paint','contractor : building',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(19,'Odometer is to mileage as compass is to','speed','hiking','needle','direction',null,'direction',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(20,'Hand is to ring as head is to','cap','ear','gloves','bat',null,'cap',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(21,'Cup is to bowl as vacuum cleaner is to','broom','spoon','mat','table',null,'broom',6)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(22,'Choose the word which is different from the rest.','Kiwi','Eagle','Emu','Ostrich',null,'Eagle',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(23,'Choose the word which is different from the rest.','Rigveda','Yajurveda','Atharvaveda','Ayurveda','Samveda','Ayurveda',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(24,'Choose the word which is different from the rest.','Gangtok','Singhbhum','Hyderabad','Chennai','Bhubaneshwar','Singhbhum',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(25,'Choose the word which is different from the rest.','Tailor','Carpenter','Blacksmith','Barber','Engineer','Barber',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(26,'Choose the word which is different from the rest.','Eyes','Ears','Hands','Legs','Nose','Nose',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(27,'Choose the word which is different from the rest.','Volume','Size','Large','Shape','Weight','Large',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(28,'Choose the word which is different from the rest.','Walk','Pull','Hear','Jump','Run','Hear',7)");
    /*  tx.executeSql("insert into direct_questions(question,option1,option2,option3,option4,option5,correctanswer,catid) values('Choose the word which is different from the rest.','Teach','Instruct','Educate','Explain','null','Instruct',7)");*/
/*  tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(29,'At the end of a banquet 10 people shake hands with each other. How many handshakes will there be in total?','100','20','45','50','90','45',8)");
  tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(30,'The day before the day before yesterday is three days after Saturday. What day is it today?','Monday','Tuesday','Wednesday','Thursday','Friday','Friday',8)");
  tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(31,' Which number should come next in the series<br>1, 3, 6, 10, 15,','8','11','24','21','27','21',8)");
  tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(32,'165135 is to peace as 1215225 is to','lead','love ','loop','castle',null,'love',8)");
  tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,catid) values(33,'Library is to book as book is to','page','copy ','binding','cover',null,'page',8)");*/



/* //Personality
    tx.executeSql("insert into questions(question,option1 ,option2 ,option3,catid,questiontype ) values ('img/1.jpg', 'face,1','apple,2','person sitting,3',9,'img')");
                  
    tx.executeSql("insert into questions(question,option1 ,option2 ,option3,catid,questiontype ) values ('img/2.jpg', 'car,1','Man with binocular,2','letter A,3',9,'img')");
    tx.executeSql("insert into questions(question,option1 ,option2 ,option3,catid,questiontype ) values ('img/3.jpg', 'Bowling pins,1','footprints,2','nesting dolls,3',9,'img')");
    tx.executeSql("insert into questions(question,option1 ,option2 ,option3,catid,questiontype ) values ('img/4.jpg', 'apple,1','butterfly,2','knife,3',9,'img')");
    tx.executeSql("insert into questions(question,option1 ,option2 ,option3,catid,questiontype ) values ('img/5.jpg', 'face,1','dog,2','precipice,3',9,'img')");
    tx.executeSql("insert into questions(question,option1 ,option2 ,option3,catid,questiontype ) values ('img/6.jpg', 'crocodile,1','mountains and water,2','people in boat,3',9,'img')");
    tx.executeSql("insert into questions(question,option1 ,option2 ,option3,catid,questiontype) values ('img/7.jpg', 'whale,1','moon and light on water,2','a person surfing,3',9,'img')");
>>>>>>> origin/master*/

//iq logic

/* tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(34,'At the end of a banquet 10 people shake hands with each other. How many handshakes will there be in total?','100','20','45','50','90','45','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(35,'The day before the day before yesterday is three days after Saturday. What day is it today?','Monday','Tuesday','Wednesday','Thursday','Friday','Friday','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(36,' Which number should come next in the series<br>1, 3, 6, 10, 15,','8','11','24','21','27','21','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(37,'165135 is to peace as 1215225 is to','lead','love ','loop','castle',null,'love','logic',7)");
    tx.executeSql("insert into direct_questions(id,question,option1,option2,option3,option4,option5,correctanswer,question_type,categoryid) values(38,'Library is to book as book is to','page','copy ','binding','cover',null,'page','logic',7)");
     });
    //personality
    
    db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question(id,question,option1,option2,option3,option4,question_type,categoryid) values(1,'What you see first;img/1.png', 'face=1','apple=2','person sitting=3',null,'text',8)");
     tx.executeSql("insert into combinational_question(id,question,option1,option2,option3,option4,question_type,categoryid) values(2, 'What you see first ;img/2.png', 'car=1','Man with binocular=2','letter A=3',null,'text',8)");
     tx.executeSql("insert into combinational_question(id,question,option1,option2,option3,option4,question_type,categoryid) values(3, 'What you see first ;img/3.png', 'Bowling pins=1','footprints=2','nesting dolls=3',null,'text',8)");
     tx.executeSql("insert into combinational_question(id,question,option1,option2,option3,option4,question_type,categoryid) values(4,'What you see first;img/4.png', 'apple=1','butterfly=2','knife=3',null,'text',8)");
     tx.executeSql("insert into combinational_question(id,question,option1,option2,option3,option4,question_type,categoryid) values(5, 'What you see first ;img/5.png', 'face=1','dog=2','precipice=3',null,'text',8)");
     tx.executeSql("insert into combinational_question(id,question,option1,option2,option3,option4,question_type,categoryid) values(6, 'What you see first ;img/6.png', 'crocodile=1','mountains and water=2','people in boat=3',null,'text',8)");
     tx.executeSql("insert into combinational_question(id,question,option1,option2,option3,option4,question_type,categoryid) values(7,'What you see first;img/7.png','whale=1','moon and light on water=2','a person surfing=3',null,'text',8)");
    
    //EQ 
    })
     db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[8,"You're on an airplane which suddenly hits extremely bad turbulence and begins rocking from side to side. What do you do?", "Continue to read your book or magazine, or watch the movie, paying little attention to the turbulence.","Become wary of an emergency, carefully monitoring the flight attendants and reading the emergency instructions card.","A little of both above.","I’m not sure; I’ve never noticed."]);
     });
 db.transaction(function (tx) {
     tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[9,"You've taken a group of 4-year-olds to the park, and one of them starts crying because the others won't play with her. What do you do?", "Stay out of it; let the kids deal with it on their own.","Talk to her and help her to figure out ways in which to get the other kids to play with her.","Tell her in a kind voice not to cry.","Try to distract the crying girl by showing her some other things she could play with."]);
 });
     db.transaction(function (tx) {
     tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[10,"Assume you had hoped to get an A in one of your courses, but you have just found out you got a C– on the midterm. What do you do?", "Sketch out a specific plan for ways to improve your grade and resolve to follow through on your plans.","Resolve to do better in the future.","Tell yourself it really doesn't matter much how you do in that particular course, and concentrate instead on other classes where your grades are higher.","Go to the professor and try to talk her into giving you a better grade."]);
    
     });
 db.transaction(function (tx) {
     tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[11,"Imagine you are an insurance salesman calling prospective clients. Fifteen people in a row have hung up on you, and you are getting discouraged. What do you do?", "Call it a day and hope you have better luck tomorrow.","Reassess what you are doing that may be undermining your ability to make a sale.","Try something new on the next call, and keep plugging away.","Consider another line of work."]);
    
 });
 db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[12,"You are a manager in an organization that is trying to encourage respect for racial and ethnic diversity. You overhear someone telling a racist joke. What do you do?", "Ignore it—it's only a joke.","Call the person into your office for a reprimand.","Speak up on the spot, saying that such jokes are inappropriate and will not be tolerated in your organization.","Suggest to the person telling the joke he go through a diversity training program."]);
 });
     db.transaction(function (tx) {
   tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[13,"You are trying to calm down a friend who has worked himself up into a fury at a driver in another car who has cut dangerously close in front of him. What do you do?","Tell him to forget it; he`s okay now and it`s no big deal.","Put on one of his favourite tapes and try to distract him.","Join him in putting down the other driver, but exaggerate your reaction.","Tell him about a time something like this happened to you and how you felt as mad as he does now, but then you saw that the other driver was on the way to the hospital emergency room."]); 
     });
     db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[14,"You and your boyfriend/girlfriend have gotten into an argument that has escalated into a shouting match. In the heat of the moment, you are both making personal attacks that you don`t really mean. What`s the best thing to do?","Take a 20-minute break and then continue the discussion.","Stop the argument - stay silent, no matter what your partner says.","Say that you're sorry and ask your partner to apologize too.","Stop for a moment, collect your thoughts, and then state your side of the argument as clearly as you can."]);
     });
    
     db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[15,"You have been assigned to lead a work group that is trying to come up with a creative solution to a nagging problem at work. What is the first thing you do?","Draw up an agenda and allot time for discussion of each item so you make best use of your time together.","Have people take the time to get to know each other better.","Begin by asking each person for ideas about how to solve the problem, while ideas are fresh.","Start with a brainstorming session, encouraging everyone to say whatever comes to mind, no matter how wild their idea is."]);
     });
     db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[16,"Imagine that you have a 5-year-old son who is extremely timid, and has been hypersensitive about—and a bit fearful of—new people and places since he was born. What do you do?","Accept that he has a shy temperament and think of ways to shelter him from situations that would upset him.","Take him to a child psychiatrist for help.","Deliberately expose him to lots of new people and places so he can get over his fear..","Engineer an ongoing series of challenging but manageable experiences that will teach him that he can handle new people and places."]);
    
     });
 db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',8)",[17,"For some time now, you have wanted to return to playing the musical instrument you learned to play when you were younger. You have finally gotten around to practicing again, and want to make the best use of your time. What do you do?","Hold yourself to a strict practice time every day.","Choose pieces that stretch your abilities a bit.","Practice only when you are really in the mood.","Pick pieces that are far beyond your current ability, but that you can master with diligent effort."]);
    
    
        
});*/
//EQ QUESTIONS
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [1, "How frequently do you moderately exercise?", "Daily or more often |1", "Once or twice a week |2", "Once or twice a month |3", "Seldom |4", 12, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [2, "How often do you get a full,restful night of sleep?", "Most every night |1", "Four to five times a each week |2", "Two to three times each week |3", "Seldom |4", 12, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [3, "To what extent is your energy sufficient for our work and daily activities? ", "To a very great extent |1", "To some extent |2", "To little extent |3", "To very little extent |4", 12, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [4, "How closely does your weight approach the ideal level? ", "My weight is at the ideal level |1", "My weight is close to the idea level |2", "My weight is not close to the ideal level |3", "I am dangerously overweight (underweight) |4", 12, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [5, "To what extent do you eat a nutritious diet? ", "To a very great extent |1", "To some extent |2", "To little extent |3", "To very little extent |4", 12, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [6, "Which of the following best describes your use of tobacco?", "In no period of my life have I had the habit of smoking or chewing tobacco. |1", "Early in my life for a short period I smoked or chewed tobacco |2", "I stopped smoking or chewing tobacco over the past two years |3", "I currently smoke or chew tobacco |4", 12, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [7, "Which of the following best describes your use of alcohol?", "I do not abuse alcohol, and never have.(Abuse is defined as drinking more than two drinks within a short period such as an evening.)|1", "Very occasionally I abuse alcohol. |2", "I have a history of abusing alcohol, but am not presently abusing it.|3", "I am presently abusing alcohol.|4", 12, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [8, "To what extent do you believe that you have a history of coping well with highly stressful situations? ", "To a very great extent |1", "To a great extent |2", "To a little extent |3", "To a very little extent |4", 13, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [9, "How confident are you of being able to control your emotions in stressful situations? ", "I never let my emotions run away me. |1", "I seldom let my emotions run away with me. |2", "I sometimes let my emotions run away with me. |3", "I often let my emotions run away with me. |4", 13, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [10, "When things are not going well, how likely are you to view the situation as being temporary rather than permanent? ", "Very likely |1", "Likely |2", "Unlikely |3", "Very unlikely |4", 13, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [11, "When something bad happens to you, how likely are you to exaggerate its importance? ", "Very unlikely |1", "Unlikely |2", "Likely |3", "Very likely |4", 13, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [12, "When stressed by a complex situation, how likely are you to focus your attention on those aspects of the situation that you can manage? ", "Very likely |1", "Likely |2", "Unlikely |3", "Very unlikely |4", 13, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [13, " When highly stressed, how capable are you of changing your thinking to calm down? ", "Very capable |1", "Capable |2", "Incapable |3", "Very incapable |4", 13, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [14, " When confronted with a stressful situation, how likely are you to wait passively for events to develop rather than to take charge? ", "Very unlikely |1", "Unlikely |2", "Likely |3", "Very likely |4", 14, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [15, "Which of the following courses of action are you most likely to take when you have become thoroughly frustrated?", "Identify an alternate goal and pursue it |1", "Pursue a relaxing activity |2", "Withdraw and fell sorry for yourself |3", "Vent your aggression on someone weaker than  you |4", 14, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [16, "If you had worn an article of clothing one day and then found it to be flawed, how likely would you be to return it and ask for a refund? ", "Very likely |1", "Likely |2", "Unlikely |3", "Very unlikely |4", 14, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [17, "When an unexpected, negative event happens to you, how likely are you to actively seek information about the event and how to cope with it? ", "Very likely |1", "Likely |2", "Unlikely |3", "Very unlikely |4", 14, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [18, "How much decision-making power so you have in your family?", "More power than any other member of my family |1", "As much power as any other member of my family |2", "Less power than most members of my family |3", "Less power than any other member of my family |4", 14, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [19, "How much decision-making power do you have in your working environment? (if not working outside the home at present, use your last job as a basis for answering this question.) ", "More power than most members of my work team |1", "As much power as any other member of my work team |2", "Less power than most members of my work team |3", "Less power than any other member of my work team |4", 14, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [20, "To what extent do you believe that events in your life are merely the result of luck, fate, or chance? ", "To very little extent |1", "To little extent |2", "To some extent |3", "To a great extent |4", 14, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [21, "What is your best guess as to the extent and quality of contact you had with your parent(s) shortly after birth? ", "Was given an above average amount of contact by happy parent(s) |1", "Was given an average amount of contact by happy parent(s) |2", "Was given an average amount of contact by unhappy (perhaps angry) parent(s) |3", "Was given a below average amount of contact by unhappy (perhaps angry) parent(s) |4", 15, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [22, "During your early childhood, to what extent was your mother both calm and generally permissive? ", "To a very great extent |1", "To some extent |2", "To little extent |3", "To very little extent |4", 15, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [23, "How easily do you make friends in a strange situation? ", "Very easily |1", "Easily |2", "Uneasily |3", "Very uneasily |4", 15, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [24, "When highly stressed, how likely are you to ask friends or relatives for help? ", "Very likely |1", "Likely |2", "Unlikely |3", "Very unlikely |4", 15, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [25, "In comparison with other people, how likely are you to see others as threatening, uncooperative, or exploitative? ", "Highly unlikely |1", "Unlikely |2", "Likely |3", "Highly likely |4", 15, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [26, "How often are you confused about the intentions of others toward you? ", "Very infrequently |1", "Infrequently |2", "Frequently |3", "Very frequently |4", 15, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [27, "To what extent are you aware of practical, healthy ways of relaxing? ", "To a very great extent |1", "To some extent |2", "To little extent |3", "To very little extent |4", 16, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [28, "How frequently do you pursue some highly relaxing practice? ", "Daily or more often |1", "Once or twice a week |2", "Once or twice a month |3", "Seldom |4", 16, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [29, "How often do you engage in a spiritual practice such as prayer, mediation, or inspirational reading to enrich your interior life? ", "Daily or more often |1", "Once or twice a week |2", "Once or twice a month |3", "Seldom |4", 17, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [30, "How connected do you feel to your conception of a higher power or to a worthy cause? ", "To a very great extent |1", "To some extent |2", "To little extent |3", "To very little extent |4", 17, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [31, "To what extent do you believe your life has purpose? ", "To a very great extent |1", "To some extent |2", "To little extent |3", "To very little extent |4", 17, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [32, "How much contact do you have with what you would consider a spiritual community? ", "Very much |1", "Much |2", "Very little |3", "None |4", 17, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [33, "You have been denied a promotion by the management for which you were eligible. Moreover,one of your juniors has been promoted. You are emotionally upset and feel frustrated. What will you do?", "Talk it over with your boss and ask for reconsideration of the management’s decision.|15", "Start abusing the colleague who superseded you.|5", "Move to court and obtain a stay order to get justice.|10", "Identify your shortcomings and try to improve your performance.|20", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [34, "A freshly recruited professional graduate joins your organisation as a management trainee.Aftera few weeks, she complains to you that she was not being taken seriously by her subordinates. What will you suggest her?", "Ask her to handle the situation herself and not bother you with trivial matters.|5", "Tell her that such behaviour should be ignored.|10", "Ask her to be bold, face the challenge and overcome the problem.|15", "Empathize with her and help her figure out ways to get others to work with her.|20", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [35, "At the workplace, due to some misunderstanding, your colleagues stop talking to you. You are convinced that there was no fault no yours. How will you react?", "Wait till they come and start talking to you again.|15", "Take the initiative, go forward and start talking to them.|20", "Let things take their own time to improve.|5", "Ask someone to mediate.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [36, "You get into an argument with your colleague and end up attacking him/her personally. Later you realize that you never intended to tarnish the image of your colleague. How will you handle such ugly situation?","Sit calmly and consider what triggered off the arguments and was it possible to control your anger at that point of time.|20", "Avoid future arguments and leave the room.|15", "Apologise to your colleague for your behaviour.|10", "Continue with the argument till you reach some definite conclusion.|5", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [37, "Imagine you are an insurance salesperson selling insurance policies. You approach a number of prospective clients who slam the door on your face and refuse to buy policies. What will you do?", "Blame yourself and stop work for the day.|5", "Reassess your capabilities as an insurance salesperson.|20", "Come out with fresh strategies to overcome similar situations in future.|15", "Contact the clients again some other day.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [38, "When someone directly criticizes your behaviour, how will you behave?", "Tend to close up and stop listening.|10", "Carefully listen to their opinion.|20", "Tend to get upset about it.|5", "Think of ways to change your behaviour.|15", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [39, "You are on an aircraft and suddenly the airhostess announces that it has been hijacked by the terrorists. Everyone is in a state of shock. What will be your reaction?", "Blame yourself for choosing an in auspicious day for travelling.|5", "Be in emotional control and attend to the instructions of the pilot/air hostess.|20", "Continue to read your magazine and pay little attention to the incident.|15", "Cry out and vow not to travel by air in future.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [40, "Imagine that you are a police officer posted in a sensitive area. You get information of violent ethnic clashes between two religious communities in which people have been killed from both sides and property damaged. What action will you take?", "Decide not to visit the spot personally as there may be a danger to your life.|10", "Relax; this is not the first time riots have taken place.|5", "Try to handle the situation by taking action as per law.|20", "Reach the spot and assuage the feelings of the victims.|15", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [41, "Your grown up daughter starts arguing with you every now and then.She tells you that you cannot impose your old fashioned attitudes and outdated values on her.How will you tackle her?", "Accept her statement in helplessness and take a low profile position in the family.|5", "Send her to a psychologist to learn her adjust with her environment.|10", "Manage your emotions and explain your point of view as patiently as possible.|20", "Talk to her and understand her emotions, beliefs and attitudes.|15", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [42, "After weeks of merger of two largest financial firms, hundreds of employees were expected to lose their jobs. You, being the General Manager(HQ),were told to convey to the employee the decision of the  management. How will you convey the message?", "Give a gloomy picture and tell them you have no option but to fire half of them.|5", "Give a bright picture and tell them that the company will be blessed with talented people from both firms.|20", 
"Tell them that you will collect more information to be fair and update them every few days on how things will take shape.|15", "Announce the decision and let the employees take a decision about what they want.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [43, "You are a professor in a college. While delivering a lecture, a student comments that you have not prepared the topic properly and you are just passing the time.This has hurt your self esteem .What will be your reaction?", "Report to the principal of the college about the unruly behavior of the student.|5", "Order the student to leave the classroom at once.|10", "Ask him/her to meet you in your chamber after the class to explain what he/she wants.|15", "Judge the emotions of the class and promise to make amendments accordingly.|20", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [44, "As CEO of a company, while taking a meeting with the union, one of the union leaders levels serious allegations of corruption and favoritism against you.How will you react?","Continue with the discussion and listen to their demands with a cool head.|20", "Ask union leader to make allegations in writing and offer an impartial enquiry.|15", "Cancel further negotiation and ask the union leader to apologise first.|10", "Leave the room after assigning the responsibility to your subordinate to continue with the|5", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [45, "You had an argument with your spouse on some trivial family matter and are not on speakingterms for sometime. The situationis causing mental disturbance to both of you. What will you do?", "Stick to your stand; after all you were never at fault.|5", "Try to break the ice by analysing the reasons for the conflict.|15", "Make first move and ease the situation.|20", "Wait for your spouse to make the first move to restore normalcy.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [46, "You hail from a rural area and take admission in a city college. You find your classmates taunting you as you are not smart and are unable to speak good English. How will you manage yourself? ", "Ignore them.|10", "Shout back and tell them to mind their own business.|15", "Leave studies half way and go back to your village.|5", "Accept their challenge and prove that you can match them.|20", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [47, "While speaking to an audience, you feel that:", "It is difficult to convey your speech.|10", "You are partly comfortable in conveying your speech.|15", "You are comfortable in conveying your speech.|20", "You feel that you will do better with some more practice.|5", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [48, "Your friend’s sister, who got married just one year back,is heading for a divorce.She is highly educated and economically self dependent. She come so you for guidance .What will you advise her?", "Tell her to go ahead with the divorce as she is a first class MBA and her husband can not takeher for granted|5", "Empathize with her for marring an academically average person.|10", "Advise her to talk to her husband and figure out the reasons behind the mal‐adjustment.|20",                           "Tell her that academic qualifications are important but these do not help in leading a successful married life.|15", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [49, "There is blind girl in your class. She trips on her way out of the class. You see a few of your friends making fun of her and laughing at her. What will you do? ", "Laugh along with your friends.|5", "Ignore the incident as they are your friends.|10", "Help the blind girl make her way out of the class room but say nothing to your friends.|15", "Help the girl and then confront your friends for being so insensitive.|20", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [50, "While having an argument with someone, if you lose, you:", "Feel totally beaten.|5", "Wait for the next opportunity to beat your opponents.|10", "Winning and losing are part of the game.|15", "Analyse the reasons for the loss.|20", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [51, "You are working as HRD General Manager in a large multi national company that recruit dozens of fresh MBAs, engineers and other professionals on senior positions every year. This requires time, energy and money. However, you find that 75 percent of the young recruits are leaving the company after around two years of work experience to join more attractive jobs. What will you do? ", "Ignore the trend. There is rampant unemployment and you can find more people lined up tojoin your company.|5", "Try to find out the root cause of their leaving the job and take corrective measures to retain them as you have already invested in them heavily.|20", "Increase the pay package and lure them in working with you.|15", "Change the selection criteria and recruit people on the basis of their need and requirements.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [52, "You have been involuntarily transferred to a remote project and posted under a new boss. Although you have been given a pay hike and also a promise for promotion in near future yet, you are not comfortable. Your family can not shift along with you due to education of your children. You are in a sensitive area and your security is also at risk. You are undergoing a mild level of stress. How will you diffuse the stress?", "Enjoy. After all there has been a hike in your pay for working in a sensitive area.|15", "Wait. It may turn out to be an opportunity for early promotion.|20", "Lament. Why should such terrible things happen to you only?|10", "Act in haste. Think to resign and find out a new job for you.|5", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [53, "You have lived your life for so many years on this earth. How would you like to explain your life at the moment in one sentence ?", "Successful: Well, I am a contended person who got whatever could make me feel happy.|20", "OK: Well,it’s a mixed experience for me. It’s 50:50.|15", "Comfortable: Well, destiny is in the hand of God. Man is just a puppet.|10", "Uncomfortable: Well, I feel I deserved better but could not get it.|5", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [54, "As an HRD manager you have to recruit a large number of employees for a multinational firm. After the written test and interview you find that most of candidates who qualified are women. What will be your reaction?", "Hire women employees. They deserve it as they have qualified the selection criteria.|20", "Well it’s a women’s world. Hire them any way.|15", "Hire male and female employees in equal number.|10", "Avoid women employees as they are a liability.|5", 9, 1]);
});

//eq evaluation

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [1, 9, 91, 100, "You regularly have “meltdowns”,you think with their heart,you talk everything out,you don’t rush through life, put your whole hearts into whatever it is that you are doing,you pay attention even to small details, You are powerfully affected by the feelings of others,You often end up in situations “by accident”, you can give great advice to others, and lastly u guys know your worth very well", "Try progressive muscle relaxation.Change your posture as Facial expressions and posture have an effect on our moods.", "extremely high eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [2, 9, 81, 90, "you are well mannered and polite,you are passionate, you believe in karma and how everything happens for a reason, They have strong intuitions, you can always put the shoe on the other foot, and understand what it must be like for someone else to go through certain struggles in life, you can truly hold concern for other people when you see others in a difficult situation, you put others before yourself", "Write down what is upsetting you. If you are too upset to write a formal sentence, feel free to write anything, write messy, or even scrawl.", "high eq"]);
});


db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [3, 9, 56, 80, "you can read people well,you have a special bond with animals in whereby animals trust them completely ,In order to make sense of the world, you ask a lot of questions, you make very calculated decisions,you are problem solvers and you gain satisfaction with decision-making,you stand up for what you feel is right and you can admit when you are wrong.", "Physically distract yourself- To break the cycle of negative thoughts try to distract yourself with music or simply go for a walk", "moderate eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [4, 9, 31, 55, "you generally avoid new experiences, ideas, or people, you focus only on self,you stay ignorant about inner motives,you embrace negativity,you fight with your head and heart,You just lose it—almost every time.", "Get feedback as You can’t work on a problem you don’t understand, Press the pause button for some while and try to stay free.", "low eq"]);
});


db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [5, 9, 0, 30, "You consistently perform poorly at work, You criticize others on every chance you get, You can’t lead, or work in, a team, You can’t lead, or work in, a team, You’re afraid to try anything new, You let all kinds of negativity get you, You keep on arguing—even when there’s no point already.", "Speak Up Your Mind,Beware of the gap between intent and impact and try to Wear both shoes", "very low eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [6, 10, 121, 140, "Maturity grows from a seed of awareness; an awareness of the self and the actions you take.Once you have established a robust awareness of yourself, you are better positioned to exert a degree of self-control.You accept that we are all accountable for our own choices and the wider impact they may have on the world.", "Try belly breathing. Find a healthy distraction.Speak to your highest self.", "extremely high eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [7, 10, 101, 120, "Even though you appreciate the importance of each decision you take, you remain a humble and modest person. You never take yourself to be above others, regardless of your status, wealth, power, or influence. you are able to accept yourselves for who you are; you practice kindness even in the face of their shortcomings.You can seek to improve yourself and grow as an individual.", "Celebrate your strengths.Forgive yourself, and move on. ", "high eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [8, 10, 81, 100, "Alongside acceptance of yourself comes a sense of gratitude for all of the wonderful things that exist in your life. You develop the ability to see the immense benefits and value of both big and the small.A side effect of being grateful is that you feel more empathy and concern for others.you can’t help always but wish well upon those around you.You celebrate the success of others and embrace movements that seek to improve the welfare of everyone and not just the privileged few. ", "Shush your inner critic.Perform charitable acts. Fake it ‘til you make it. ", "moderate eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [9, 10, 46, 80, " Everything Is A Joke for you.Yeah, it's great to be  witty and playful, but everything in life isn't a joke. you lack self-awareness, your words don't match their actions. your Personality is Fluid. you are not Open-minded you see things as black and white or right and wrong.", "Develop your interests.Know when it is okay to be silly,think twice before acting.", "low eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [10, 10, 0, 45, " you can't Handle your Scandals. you don't look for solutions to problems because that might entail uncomfortable emotions. Love and intimacy can be hard for you people to deal with.you are not good at letting the little things go for the sake of keeping the peace. you can't deal with loneliness. you are not flexible to your surrounding", "Be respectful of others. Avoid gossip, rumors, and talking about others behind their backs.Be genuine.Think beyond yourself.", "very low eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [11, 11, 126, 200, " you have Positive vision,you believe that you have the skills needed to figure out things, find the resources, build a team, and consistently deliver the desired results, you are perfectly comfortable telling people that they don’t have all the answers. you are comfortable choosing your words carefully to make yourr point, and are equally comfortable listening to others.", "Expanding Your Vision in your field of interest.Create a Vision: Start by Dreaming.", "extremely high eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [12, 11, 96, 125, " you think Asking questions is a great way to signal to others that you don’t assume you already know the answer and, secondly that you value the other person’s opinion.you feel truly blessed with your life and find it easy to acknowledge the good work of others. you Are open to risks or, at least, calculated risks.you learn from your mistakes. you believe you can successfully accomplish your goals, and pursue them regardless of uncertainty. ", "Explore The Power of the Mind, Drink loads of water frequently to handle risk overheads.", "high eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [13, 11, 76, 95, " When you are complimented, you feel comfortable and worthy of accepting the compliment.you love to be told, 'You can’t do that,' or 'It won’t work here.' When you hear those words, it triggers the 'Watch me!' response. even in difficult or stressful situations, you remain calm", "Question the thought.Replace the negativity in your surroundings.Try to relax your muscles.", "moderate eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [14, 11, 51, 75, "Because you people believe you “can,” you set more goals, take decisive action, and get more things done. you don’t sit around wasting time second guessing yourselves. When people feel your confidence radiate, they are naturally inclined to trust you.you have both the knowledge to recognize a hazard and the authority to correct it.", "Get some exercise.Focus on your senses.", "low eq"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [15, 11, 0, 50, " you believe that you can't make a difference in the world, you consider yourself an ordinary person. you hesitate to admit what you don’t know.you talk a lot and Talking too much is a common sign of lacking confidence. you are not good in formulating questions and you dont feel like exploring things out. you cant express gratitude for others", "talk less and choose your words carefully.Stop making mountains out of molehills.Live in and come back to this moment.", "very low eq"]);
});


//personality


db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,?,?,?,?)", [55, "What you see first;img/1.png", "face|1", "apple|2", "person sitting|3", null, "img", null, 8, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,?,?,?,?)", [56, 'What you see first ;img/2.png', 'car|1', 'Man with binocular|2', 'letter A|3', null, 'img', null, 8, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,?,?,?,?) ", [57, 'What you see first ;img/3.png', 'Bowling pins|1', 'footprints|2', 'nesting dolls|3', null, 'img', null, 8, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,?,?,?,?) ", [58, 'What you see first;img/4.png', 'apple|1', 'butterfly|2', 'knife|3', null, 'img', null, 8, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,?,?,?,?)", [59, 'What you see first ;img/5.png', 'face|1', 'dog|2', 'precipice|3', null, 'img', null, 8, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,?,?,?,?)", [60, 'What you see first ;img/6.png', 'crocodile|1', 'mountains and water|2', 'people in boat|3', null, 'img', null, 8, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,?,?,?,?)", [61, 'What you see first;img/7.png', 'whale|1', 'moon and light on water|2', 'a person surfing|3', null, 'img', null, 8, 1]);
});



//evaluation

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation(id,catid ,min_score ,max_score,que_set ,status) values(16,2,0,125,1,'Try  the  Test  some  other Day')");
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation(id,catid ,min_score ,max_score,que_set ,status) values(17,2,126,200,1,'Low EQ')");
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation(id,catid ,min_score ,max_score,que_set ,status) values(18,2,201,270,1,'Moderate EQ')");
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation(id,catid ,min_score ,max_score,que_set,status ) values(19,2,271,310,1,'High EQ')");
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation(id,catid ,min_score ,max_score,que_set ,status) values(20,2,311,440,1,'Extremely  high EQ')");
});

//personality eval

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [21, 8, 7, 9, "you have a uniquecreative personality. the main thing in life for you are your intuition, wisdom, joy, satisfaction and curiosity.the world for you is full of mystery and is made up of so many different things, situations and people which are all constantly stimulating your imagination. your life is painted in a multitude of beautiful colours, and you're always looking at it through the prism of creativity. you can turn anything that happens to you into something positive, and you never look for simple answers to life's questions", "", "Creative Personality"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [22, 8, 10, 13, "you are happiest when your life plans have been 'cast in iron'. changes simply stress you out. you are very attentive, but sometimes you can miss important details which might help you see the bigger picture. you have the ability to pay attention to your feelings and know the difference between your need and desires. you have a fairly stable opinion of yourself. you know what your strong point are. Stability for you means personal development & growth. the two most important things for you are planning and consistency", "", "Stable personality"]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [23, 8, 14, 17, "you have an incredibly optimistic personality. you can adapt to new situations with striking ease. you can find a common language with people, and very rarely feel lonely. you strongly value all expressions of love, as well as friendly relationships. you try not to judge people by their appearance, and always strive to get to know them better. you're also a very strong person. if something bad happens, you dont lose your head-instead you do your best to get to the root of the problem.", "", "Optimistic Personality"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [24, 8, 18, 21, "you have a uniquecreative personality. the main thing in life for you are your intuition, wisdom, joy, satisfaction and curiosity.the world for you is full of mystery and is made up of so many different things, situations and people which are all constantly stimulating your imagination. your life is painted in a multitude of beautiful colours, and you're always looking at it through the prism of creativity. you can turn anything that happens to you into something positive, and you never look for simple answers to life's questions", "", "Creative Personality"]);
});

//iq evaluation

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [25, 3, 121, 165, "you are highly adaptable. you have no special talents, you are only passionately curious.you have insatiable curiosity.you don't close yourselves off to new ideas or opportunities.you are willing to accept and consider other views with value and broad-mindedness and that you are open to alternative solutions.you like your own company.you people tend to be very individualistic.you people are able to overcome impulsiveness by planning, clarifying goals, exploring alternative strategies and considering consequences before starting.you people tend to have a great sense of humor.", "Keep learning and update yourself routinely", "Gifted"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [26, 3, 121, 130, "you are sensitive to other people's experiences. you people always strive to learn as much as they can from their mistakes and move on. you have the ability to adapt to any situations.you people are problem solvers and analyze every situation they come across and apply the knowledge they have to tackle them.you have high Self-Control.you take calculated risks.you are Humble: pride always comes before a fall, you know this too well. Disagreements frequently arise because of a misunderstanding between people, and this will usually be the case with you", "Explore as much as you can.Do regular high cardio exercise. ", "High IQ"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [27, 3, 90, 120, "you people are often the most quiet people in the room.you tend to know a lot about a wide range of topics, and not just a few basic things. you look for ways to educate yourselves.you easily find a way to manage work, home life and outside interests very well. you are often bored with one type of work.you people typically never make other people look stupid by mocking them or making them feel inferior. you people realize the value of balance in every area of their lives.", " meditate that will allow your brain to function efficiently and it also maintains your mood and stress level. Learn an instrument well. Play the brain game:  It will improve your working memory", "Average IQ"]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [28, 3, 50, 89, "You Simply Cannot Explain Yourself.you People generally get bored and uninterested in anything that requires you to think too much or to acquire more self-awareness.You Have A Hard Time Understanding Things.you are generally less curious and interested to find out new things. you have poor social skills in play-learn situations, poor dressing and feeding skills as well as delayed hygiene and self-care.", " Read at least one book a week. Start to notice the patterns. Intelligence all boils down to pattern recognition.Buy the book Boost Your IQ by Carolyn Skitt, and play all the games.take natural supplements like Caffeine or Creatine or dark chocolate.", "Low IQ"]);
});


// Strees eval

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [29, 4, 0, 1.4, " Over-planning each day. you feel the need to stick to a strict schedule daily, you live in fear of falling behind or overlooking a task. With too much to do and not enough time, it’s easy to think that 'efficient' means doing everything at once. you are among those who chases two rabbits catches neither.you feel like a failure if you don’t come out on top—even when the only competition is your own expectations. you people need confirmation from outside sources that they’re doing okay and performing well.you have inability to relax without feeling guilty.", " Practice the 4 A's- Avoid, Alter, Adapt & Accept, learn to say no,Get moving: Put on some music and dance around, feel relaxed.Connect to others- Reach out to a colleague at work.Share your feelings.Adjust your standards.Create a balanced schedule.", "Below average stresscoper"]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [30, 4, 1.5, 2.4, "you are impatience with delays. When you’re under pressure, everything in life takes on urgency and the additional burdens to get everything done as fast as possible.you are chronically late or forgetful of commitments. your schedule at times cause problems in personal or professional relationships. you have forgotten what it’s like to have fun for fun’s sake.you have 'grown up' so much that playtime actually causes you anxiety.you find yourself missing out on what you might otherwise deem meaningful.you are Compulsive to overwork.", "Take time to know who you are and what you wish to achieve.Meet new people by taking a class or joining a club.Make time for fun and relaxation.Relaxation techniques such as yoga, meditation, and deep breathing activate the body’s relaxation response, a state of restfulness that is the opposite of the fight or flight or mobilization stress response, practice such techniques.", "Average stresscoper"]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [31, 4, 2.5, 3.4, "you are Flexible and open to options. When you have captured all of your commitments, you are able to make clear decisions whenever an opportunity presents itself.You find it easier to manage relationships as you are clear on what commitments you can and cannot make.You are able to look ahead and see where you might need to improve your knowledge or skills.You have an ability to determine what is truly important and focus your energy on that.You can handle anything which is thrown at you and you are confident in your ability to do so", " Curl up with a good book, Learn to forgive, Listen to music, Watch a comedy,Don't over-commit yourself, Prioritize tasks.", "Above average stresscoper"]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [32, 4, 3.5, 4, "you do not just manage your work, you manage your life. Because you have a well structured system to ensure that everything which needs to get done gets done. You are in charge of your life and you have developed the personal productivity mindset to deal with whatever life throws at you.You know your purpose, you have a clear vision and a plan to achieve each goal.if you cannot control it or influence it, you are going to find it difficult to change it because You focus on what you can change.From the smile on your face to the boundless energy with which you move, you exemplify the positivity which most people can only dream of.", " Maintain balance with a healthy lifestyle, Reduce caffeine and sugar,Get enough sleep- Adequate sleep fuels your mind, as well as your body.", "Superior stresscoper"]);
});


/*(id integer primary key, catid integer, min_score integer, max_score integer, behaviour varchar, recommend varchar, status varchar, que_set integer)*/
//concentration eval

db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [33, 1, 0, 6, "You have absolute control over your attention. When you need to clear your mind of distractions, you become a blank slate and are ready for necessary tasks, no matter the duration. You don't need peace and quiet because you can work in the noisiest, most distracting environments. You can listen to complicated stories, solve complex problems, and then dive right into the next thing.", " Read at least one book a week. Start to notice the patterns. Intelligence all boils down to pattern recognition.Buy the book Boost Your IQ by Carolyn Skitt, and play all the games.take natural supplements like Caffeine or Creatine or dark chocolate.", "Excellent concentration"]);
});


db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [34, 1, 7, 13, "You've found your sweet spot between getting intensely wrapped up in concentration and being open to worthwhile interruptions. Sometimes you have the patience for involved tasks and other times your mind wanders and it's a challenge to get it focused. You might find yourself wondering 'Is this over yet?' or you could get so immersed that hours fly by.", " Read at least one book a week. Start to notice the patterns. Intelligence all boils down to pattern recognition.Buy the book Boost Your IQ by Carolyn Skitt, and play all the games.take natural supplements like Caffeine or Creatine or dark chocolate.", "Balanced concentration"]);
});


db.transaction(function (tx) {
    tx.executeSql("insert into evaluation values(?,?,?,?,?,?,?,1)", [35, 1, 14, 20, "You have a short attention span, but no worries! You get bored with the ordinary, mundane things in life and have a wanderlust for excitement. Because you are seeking out new and interesting horizons, you'll be the person who comes up with the innovative ideas that change the world. ", " Read at least one book a week. Start to notice the patterns. Intelligence all boils down to pattern recognition.Buy the book Boost Your IQ by Carolyn Skitt, and play all the games.take natural supplements like Caffeine or Creatine or dark chocolate.", "Low concentration"]);
});









db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [62, " I often daydream during lectures or tune out when a speaker is boring.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [63, " I am easily distracted by visual stimulation (e.g., movement, colors).", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [64, " I am easily distracted by background noise (e.g., voices, noise).", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [65, " I am easily distracted by internal thoughts or feelings.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [66, " My study area is often cluttered or disorganized.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [67, " It is difficult to listen even when spoken to directly.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [68, " I have trouble sleeping through the night.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [69, " Because my mind wanders, I find it difficult to concentrate for more than 15 minutes.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [70, " I am not able to keep my mind focused on studying.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [71, " It is difficult for me to sit still for 50 minutes.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [72, " I often procrastinate on projects and papers.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [73, " I turn on the radio, television, or stereo when I study.", "Yes |1", "No |0", null, null, 0, 1])
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [74, " I have trouble getting back to work after I've been interrupted.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [75, " I find that even though I schedule time, I don't actually accomplish very much.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [76, " When I finish reading a textbook, I often have to re-read what I've read and/or I often don't really remember what I've read.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [77, " I often speak or act without thinking.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [78, " I have difficulty paying close attention to details which often results in careless errors.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [79, " On the average, I drink more than 2 caffeinated coffees or teas (6-8 oz. each) or more than 2 caffeinated colas (12 oz. each) each day.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [80, " When I drink caffeine, I do NOT feel 'jittery' or 'hyper'.", "Yes |1", "No |0", null, null, 0, 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,1,?)", [81, " I can drink caffeine right before bedtime and still go to sleep.", "Yes |1", "No |0", null, null, 0, 1]);
});


angular.module('fettleflingdb', ['ngCordova'])
    .factory('MyDatabase', function ($cordovaToast, $location) {
        return {
            insertUser: function (userinfo, scope) {
                db.transaction(function (tx) {
                    tx.executeSql('INSERT INTO `users` (name,username,password,gender,age) VALUES(?,?,?,?,?)', [userinfo.firstname + " " + userinfo.lastname, userinfo.username.toLowerCase(), userinfo.password, userinfo.gender, userinfo.age]);
                    $location.path('/app/login');
                    scope.$apply();
                });
            },

            checkLogin: function (username, scope) {

                console.log("checkLogin");
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM `users` where username="' + username + '"', [], function (tx, results) {
                        // console.log($cordovaToast.show("Here's a message", 'long', 'center'));
                        if (results.rows.length == 1) {
                            if (result.rows.item(0).password == password)
                                $location.path('/app/options');
                            /*  else 
                                 $scope.passwordnotmatched="Wrong password !";  */
                        } else {
                            scope.userdoesnotexist = "User does no exists !";
                            console.log(scope.userdoesnotexist);
                            return false;
                        }

                    }, null);
                });

            }
        }
    });