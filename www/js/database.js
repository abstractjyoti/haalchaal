var db = openDatabase('fettle_fling', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS `users` (id integer primary key AUTOINCREMENT, name varchar,username varchar,gender varchar,age number)');
    /* tx.executeSql('drop table users');
    tx.executeSql('drop table questioncategory');
    tx.executeSql('drop table direct_questions');
    tx.executeSql('drop table combinational');
*/
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
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [1, " How frequently do you moderately exercise? ", "Daily or more often |1", "Once or twice a week |2", "Once or twice a month |3", "Seldom |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [2, " How often do you get a full, restful night of sleep? ", "Most every night |1", "Four to five times a each week |2", "Two to three times each week |3", "Seldom |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [3, " To what extent is your energy sufficient for our work and daily activities? ", "to a very great extent |1", "to some extent |2", "to little extent |3", "to very little extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [4, " How closely does your weight approach the ideal level? ", "My weight is at the ideal level |1", "My weight is close to the idea level |2", "My weight is not close to the ideal level |3", "I am dangerously overweight (underweight) |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [5, " To what extent do you eat a nutritious diet? ", "to a very great extent |1", "to some extent |2", "to little extent |3", "to very little extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [6, " Which of the following best describes your use of tobacco? ", "In no period of my life have I had the habit of smoking or chewing tobacco. |1", "Early in my life for a short period I smoked or chewed tobacco |2", "I stopped smoking or chewing tobacco over the past two years |3", "I currently smoke or chew tobacco |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [7, " Which of the following best describes your use of alcohol? ", "I do not abuse alcohol, and never have.  (Abuse is defined as drinking more than two |1", " |2", "Very occasionally I abuse alcohol. |3", "I have a history of abusing alcohol, but am not presently abusing it. |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [8, " To what extent do you believe that you have a history of coping well with highly stressful situations? ", "to a very great extent |1", "to a great extent |2", "to a little extent |3", "to a very little extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [9, "  How confident are you of being able to control your emotions in stressful situations? ", "I never let my emotions run away me. |1", "I seldom let my emotions run away with me. |2", "I sometimes let my emotions run away with me. |3", "I often let my emotions run away with me. |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [10, " When things are not going well, how likely are you to view the situation as being temporary    rather than permanent? ", "very likely |1", "likely |2", "unlikely |3", "very unlikely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [11, " When something bad happens to you, how likely are you to exaggerate its importance? ", "very unlikely |1", "unlikely |2", "likely |3", "very likely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [12, " When stressed by a complex situation, how likely are you to focus your attention on those  aspects of the situation that you can manage? ", "very likely |1", "likely |2", "unlikely |3", "very unlikely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [13, " When highly stressed, how capable are you of changing your thinking to calm down? ", "very capable |1", "capable |2", "incapable |3", "very incapable |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [14, " When confronted with a stressful situation, how likely are you to wait passively for events to   develop rather than to take charge? ", "very unlikely |1", "unlikely |2", "likely |3", "very likely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [15, " Which of the following courses of action are you most likely to take when you have become thoroughly frustrated? ", "identify an alternate goal and pursue it |1", "pursue a relaxing activity |2", "withdraw and fell sorry for yourself |3", "vent your aggression on someone weaker than  you |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [16, " If you had worn an article of clothing one day and then found it to be flawed, how likely would you be to return it and ask for a refund? ", "very likely |1", "likely |2", "unlikely |3", "very unlikely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [17, " When an unexpected, negative event happens to you, how likely are you to actively seek information about the event and how to cope with it? ", "very likely |1", "likely |2", "unlikely |3", "very unlikely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [18, " How much decision-making power so you have in your family? ", "more power than any other member of my family |1", "as much power as any other member of my family |2", "less power than most members of my family |3", "less power than any other member of my family |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [19, " How much decision-making power do you have in your working environment?  (if not working outside the home at present, use your last job as a basis for answering this question.) ", "more power than most members of my work team |1", "as much power as any other member of my work team |2", "less power than most members of my work team |3", "less power than any other member of my work team |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [20, " To what extent do you believe that events in your life are merely the result of luck, fate, or chance? ", "to very little extent |1", "to little extent |2", "to some extent |3", "to a great extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [21, " What is your best guess as to the extent and quality of contact you had with your parent(s) shortly after birth? ", "was given an above average amount of contact by happy parent(s) |1", "was given an average amount of contact by happy parent(s) |2", "was given an average amount of contact by unhappy (perhaps angry) parent(s) |3", "was given a below average amount of contact by unhappy (perhaps angry) parent(s) |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [22, " During your early childhood, to what extent was your mother both calm and generally permissive? ", "to a very great extent |1", "to some extent |2", "to little extent |3", "to very little extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [23, " How easily do you make friends in a strange situation? ", "very easily |1", "easily |2", "uneasily |3", "very uneasily |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [24, " When highly stressed, how likely are you to ask friends or relatives for help? ", "very likely |1", "likely |2", "unlikely |3", "very unlikely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [25, " In comparison with other people, how likely are you to see others as threatening, uncooperative, or exploitative? ", "highly unlikely |1", "unlikely |2", "likely |3", "highly likely |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [26, " How often are you confused about the intentions of others toward you? ", "very infrequently |1", "infrequently |2", "frequently |3", "very frequently |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [27, " To what extent are you aware of practical, healthy ways of relaxing? ", "to a very great extent |1", "to some extent |2", "to little extent |3", "to very little extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [28, " How frequently do you pursue some highly relaxing practice? ", "daily or more often |1", "once or twice a week |2", "once or twice a month |3", "seldom |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [29, " How often do you engage in a spiritual practice such as prayer, mediation, or inspirational reading to enrich your interior life? ", "daily or more often |1", "once or twice a week |2", "once or twice a month |3", "seldom |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [30, " How connected do you feel to your conception of a higher power or to a worthy cause? ", "to a very great extent |1", "to some extent |2", "to little extent |3", "to very little extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [31, " To what extent do you believe your life has purpose? ", "to a very great extent |1", "to some extent |2", "to little extent |3", "to very little extent |4", "", 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,4,?)", [32, " How much contact do you have with what you would consider a spiritual community? ", "very much |1", "much |2", "very little |3", "none |4", "", 1]);
});

db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [33, " You have been denied a promotion by the management for which you were eligible. Moreover,one of your juniors has been promoted. You are emotionally upset and feel frustrated. What will you do?  ", "Talk it over with your boss and ask for reconsideration of the management’s decision.|15", "Start abusing the colleague who superseded you.|5", "Move to court and obtain a stay order to get justice.|10", "Identify your shortcomings and try to improve your performance.|20", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [34, " A freshly recruited professional graduate joins your organisation as a management trainee. Aftera few weeks, she complains to you that she was not being taken seriously by her subordinates. What will you suggest her?  ", "Ask her to handle the situation herself and not bother you with trivial matters.|5", "Tell her that such behaviour should be ignored.|10", "Ask her to be bold, face the challenge and overcome the problem.|15", "Empathize with her and help her figure out ways to get others to work with her.|20", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [35, " At the workplace, due to some misunderstanding, your colleagues stop talking to you. You areconvinced that there was no fault of yours. How will you react? ", "Wait till they come and start talking to you again.|15", "Take the initiative, go forward and start talking to them.|20", "Let things take their own time to improve.|5", "Ask someone to mediate.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [36, " You get into an argument with your colleague and end up attacking him/her personally. Lateryou realize that you never intended to tarnish the image of your colleague. How will you handle such ugly situation? ", "Sit calmly and consider what triggered off the arguments and was it possible to control youranger at that point of time.|20", "Avoid future arguments and leave the room.|15", "Apologise to your colleague for your behaviour.|10", "Continue with the argument till you reach some definite conclusion.|5", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [37, " Imagine you are an insurance salesperson selling insurance policies. You approach a number ofprospective clients who slam the door on your face and refuse to buy policies. What will you do? ", "Blame yourself and stop work for the day.|5", "Reassess your capabilities as an insurance salesperson.|20", "Come out with fresh strategies to overcome similar situations in future.|15", "Contact the clients again some other day.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [38, " When someone directly criticizes your behaviour, how will you behave?", "Tend to close up and stop listening.|10", "Carefully listen to their opinion.|20", "Tend to get upset about it.|5", "Think of ways to change your behaviour.|15", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [39, " You are on an aircraft and suddenly the air‐hostess announces that it has been hijacked by theterrorists. Everyone is in a state of shock. What will be your reaction? ", "Blame yourself for choosing an inauspicious day for travelling.|5", "Be in emotional control and attend to the instructions of the pilot/air hostess.|20", "Continue to read your magazine and pay little attention to the incident.|15", "Cry out and vow not to travel by air in future.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [40, " Imagine that you are a police officer posted in a sensitive area. You get information of violentethnic clashes between two religious communities in which people have been killed from both sides and property damaged. What action will you take? ", "Decide not to visit the spot personally as there may be a danger to your life.|10", "Relax; this is not the first time riots have taken place.|5", "Try to handle the situation by taking action as per law.|20", "Reach the spot and assuage the feelings of the victims.|15", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [41, " Your grown up daughter starts arguing with you every now and then. She tells you that youcannot impose your old‐fashioned attitudes and outdated values on her. How will you tackle her? ", "Accept her statement in helplessness and take a low profile position in the family.|5", "Send her to a psychologist to learn her adjust with her environment.|10", "Manage your emotions and explain your point of view as patiently as possible.|20", "Talk to her and understand her emotions, beliefs and attitudes.|15", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [42, " After  weeks  of  merger  of  two  largest  financial  firms,  hundreds  of  employees  were expected to lose their jobs. You, being the General Manager (HQ), were told to convey to the employee the decision of the management. How will you convey the message? ", "Give a gloomy picture and tell them you have no option but to fire half of them.|5", "Give a bright picture and tell them that the company will be blessed with talented people fromboth firms.|20", "Tell them that you will collect more information to be fair and update them every few days onhow things will take shape.|15", "Announce the decision and let the employees take a decision about what they want.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [43, " You are a professor in a college. While delivering a lecture, a student comments that you havenot prepared the topic properly and you are just passing the time. This has hurt your self esteem. What will be your reaction? ", "Report to the principal of the college about the unruly behavior of the student.|5", "Order the student to leave the classroom at once.|10", "Ask him/her to meet you in your chamber after the class to explain what he/she wants.|15", "Judge the emotions of the class and promise to make amendments accordingly.|20", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [44, " As CEO of a company, while taking a meeting with the union, one of the union leaders levelsserious allegations of corruption and favoritism against you. How will you react? ", "Continue with the discussion and listen to their demands with a cool head.|20", "Ask union leader to make allegations in writing and offer an impartial enquiry.|15", "Cancel further negotiation and ask the union leader to apologise first.|10", "Leave the room after assigning the responsibility to your subordinate to continue with the|5", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [45, "You had an argument with your spouse on some trivial family matter and are not on speakingterms for sometime. The situation is causing mental disturbance to both of you. What will you do? ", "Stick to your stand; after all you were never at fault.|5", "Try to break the ice by analysing the reasons for the conflict.|15", "Make first move and ease the situation.|20", "Wait for your spouse to make the first move to restore normalcy.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [46, " You hail from a rural area and take admission in a city college. You find your classmates tauntingyou as you are not smart and are unable to speak good English. How will you manage yourself? ", "Ignore them.|10", "Shout back and tell them to mind their own business.|15", "Leave studies half way and go back to your village.|5", "Accept their challenge and prove that you can match them.|20", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [47, " While speaking to an audience, you feel that:", "It is difficult to convey your speech.|10", "You are partly comfortable in conveying your speech.|15", "You are comfortable in conveying your speech.|20", "You feel that you will do better with some more practice.|5", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [48, "Your friend’s sister, who got married just one year back, is heading for a divorce. She is highlyeducated and economically self dependent. She comes to you for guidance. What will you advise her?  ", "Tell her to go ahead with the divorce as she is a first class MBA and her husband can not takeher for granted|5", "Empathize with her for marring an academically average person.|10", "Advise her to talk to her husband and figure out the reasons behind the mal‐adjustment.|20", "Tell  her  that  academic  qualifications  are  important  but  these  do  not  help  in  leading  a|15", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [49, "There is blind girl in your class. She trips on her way out of the class. You see a few of yourfriends making fun of her and laughing at her. What will you do? ", "Laugh along with your friends.|5", "Ignore the incident as they are your friends.|10", "Help the blind girl make her way out of the class room but say nothing to your friends.|15", "Help the girl and then confront your friends for being so insensitive.|20", 9, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [50, " While having an argument with someone, if you lose, you:", "Feel totally beaten.|5", "Wait for the next opportunity to beat your opponents.|10", "Winning and losing are part of the game.|15", "Analyse the reasons for the loss.|20", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [51, "  You are working as HRD General Manager in a large multi‐national company that recruit dozensof fresh MBAs, engineers and other professionals on senior positions every year. This requires time, energy and money. However, you find that 75 percent of the young recruits are leaving the company after around two years of work experience to join more attractive jobs. What will you do? ", "Ignore the trend. There is rampant unemployment and you can find more people lined up tojoin your company.|5", "Try to find out the root cause of their leaving the job and take corrective measures to retainthem as you have already invested in them heavily.|20", "Increase the pay package and lure them in working with you.|15", "Change the selection criteria and recruit people on the basis of their need and requirements.|10", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [52, "You have been involuntarily transferred to a remote project and posted under a new boss.Although you have been given a pay hike and also a promise for promotion in near future yet, you are not comfortableYour family can not shift along with you due to education of your children. You are in a sensitive area and your security is also at risk. You are undergoing a mild level of stress. How will you diffuse the stress? ", "Enjoy. After all there has been a hike in your pay for working in a sensitive area.|15", "Wait. It may turn out to be an opportunity for early promotion.|20", "Lament. Why should such terrible things happen to you only?|10", "Act in haste. Think to resign and find out a new job for you.|5", 11, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [53, "You have lived your life for so many years on this earth. How would you like to explain your life atthe moment in one sentence? ", "Successful: Well, I am a contended person who got whatever could make me feel happy.|20", "OK: Well, it’s a mixed experience for me. It’s 50:50.|15", "Comfortable: Well, destiny is in the hand of God. Man is just a puppet.|10", "Uncomfortable: Well, I feel I deserved better but could not get it.|5", 10, 1]);
});
db.transaction(function (tx) {
    tx.executeSql("insert into combinational_question values(?,?,?,?,?,?,'text',?,2,?)", [54, " As an HRD manager you have to recruit a large number of employees for a multinational firm.After the written test and interview you find that most of candidates who qualified are women. What will be your reaction? ", "Hire women employees. They deserve it as they have qualified the selection criteria.|20", "Well it’s a women’s world. Hire them any way.|15", "Hire male and female employees in equal number.|10", "Avoid women employees as they are a liability.|5", 9, 1]);
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