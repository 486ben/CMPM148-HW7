//First card
firstCard = {
  prompt: "Are you ",
  rightChoiceText: "Happy Boy",
  rightChoice: function(){
    addResource("Happiness", 10)   
    addToTopDeck("Happy")
    addResource("Time", -20)
    },
  
  leftChoiceText: "Sad Boy", 
  leftChoice: function(){
    addResource("Happiness", -50)
    addToTopDeck("Sad")
    addResource("Time", -20)
  },
  name: "Who you are?",
  resultText: "",
  image: "./images/p1.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  //collboration card: 
  "uniqueIDList" : ["Happy", "Sad", "make_friend", "group_of_friend", "lonely_kid","back_to_home",
  "reason","basketball","library_study","next_day_school","thinking","effect","Chemistry","PE", "Math",
  "math_question", "Answer_check", "lunchtime", "playtime", "next_class", "greet", "last_class", "afterschool", "afterschool_program", 
  "skateboarding", "soccer", "back_home","victory", "have_fun","Homework","New_friend", "its_ok", "finish","third_day_school", "T_after_school",
  "END","END1","END2", "Th_after_school", "T_backhome_1","T_backhome_2","T_backhome_3",

],
  
  //No. 2
  "Happy" : {
    prompt: "You get a chance to a new school! today is Monday! It's your first day to school!",
    rightChoiceText: "Yeh! Let's go!",
      rightChoice: function(){
      addToTopDeck("make_friend")
      addResource("Happiness", 3) 
      },
    leftChoiceText: "XD HAHA. . .No, stupid school", 
    leftChoice: function(){
      addToTopDeck("Happy")
      addResource("Happiness", -3) 
    },
    name: "It's School Time!",
    resultText: "",
    image: "./images/p2.png",
    priority: 2,
    pack : "none"
  },

  //No. 3
  "Sad": {
    prompt: "Your family members and you move into a new place. You feel lonely and unhappy. ",
    rightChoiceText: "Try to be happy",
      rightChoice: function(){
      addToTopDeck("Happy")
      addResource("Happiness", 3) 
      },
    leftChoiceText: "Ready for new life", 
    leftChoice: function(){
      addToTopDeck("Happy")
      addResource("Happiness", 3) 
    },
    name: "Lonely place",
    resultText: "",
    image: "./images/p3.png",
    priority: 2,
    pack : "none"
  },

  //No. 4
  "make_friend": {
    prompt: "You saw a group of students and also a lonely kid. You go...",
    rightChoiceText: "Make friend with a group of students",
      rightChoice: function(){
      addToTopDeck("group_of_friend")
      enemiesMade += 10
      addResource("Time", 3)
      addResource("Happiness", 3) 
      },
    leftChoiceText: "Make friend with lonely kid", 
    leftChoice: function(){
      addToTopDeck("lonely_kid")
      enemiesMade += 1
      addResource("Time", 3)
      addResource("Happiness", -3) 
    },
    name: "who should you make with?",
    resultText: "",
    image: "./images/p4.png",
    priority: 2,
    pack : "none"
  },

  //No. 5
  "group_of_friend": {
    prompt: "You had make many friend! They invite you to play basketball now!",
    rightChoiceText: "Sure! I come!",
      rightChoice: function(){
        addToTopDeck("basketball")
        addResource("Time", 10)
        addResource("Happiness", 3) 
      },
    leftChoiceText: "nah, maybe next time", 
    leftChoice: function(){
      addToTopDeck("back_to_home")
      addResource("Time", 3)
      addResource("Happiness", -6) 
      enemiesMade -= 5
    },
    name: "Invited from friend",
    resultText: "",
    image: "./images/p5.png",
    priority: 2,
    pack : "none"
  },

  //No. 6
  "lonely_kid": {
    prompt: "You and the lonely kid have a long conversation, His name is Andy and he send the invited...",
    rightChoiceText: "Do you want to go to library?",
      rightChoice: function(){
        addToTopDeck("library_study")
        addResource("Happiness", 3) 
        addResource("Time", 3)
      },
    leftChoiceText: "nah, maybe next time", 
    leftChoice: function(){
      addToTopDeck("back_to_home")
      addResource("Happiness", -3) 
      addResource("Time", 3)
    },
    name: "Invited from Andy",
    resultText: "",
    image: "./images/p1.png",
    priority: 2,
    pack : "none"
  },

  //No. 7
  "back_to_home": {
    prompt: "You go back home and finish the homework. During the dinner time, Your family is asking you how are you today...",
    rightChoiceText: "School is great",
      rightChoice: function(){
        addToTopDeck("reason")
        addResource("Time", 3)
        addResource("Happiness", 3) 
      },
    leftChoiceText: "School is horrible", 
    leftChoice: function(){
       addToTopDeck("thinking")
       addResource("Time", 3)
       addResource("Happiness", -10) 
    },
    name: "Dinner and the question from family",
    resultText: "",
    image: "./images/p6.png",
    priority: 2,
    pack : "none"
  },

  //No. 8
  "reason": {
    prompt: "Mother: Do you make friend at school? ",
    rightChoiceText: "Yes, I make many friend",
      rightChoice: function(){
        addToTopDeck("next_day_school")
        addResource("Happiness", 3) 
        addResource("Time", 3)
      },
    leftChoiceText: "I will make more friend tomorrow...", 
    leftChoice: function(){
       addToTopDeck("thinking")
       addResource("Time", 3)
       addResource("Happiness", -3) 
    },
    name: "The ask from mother",
    resultText: "",
    image: "./images/happy.png",
    priority: 2,
    pack : "none"
  },

  //No. 9
  "basketball": {
    prompt: "You enjoy to play basketball with them, they treat you like a real friend. Soon, the time is faster, It's time to go home!",
    rightChoiceText: "See you tomorrow! My friend",
      rightChoice: function(){
        addToTopDeck("back_to_home")
        addResource("Happiness", 3) 
        addResource("Time", 3)
      },
    leftChoiceText: "go to library to find a textbook", 
    leftChoice: function(){
      addToTopDeck("library_study")
      addResource("Time", 3)
    },
    name: "Basketball game!",
    resultText: "",
    image: "./images/happy.png",
    priority: 2,
    pack : "none"
  },

  //No. 10
  "library_study": {
    prompt: "After a short walk, you reach to library, You found the lonely kid! You say hi to him and study with him about the math assignment. The time is 5:30pm now!",
    rightChoiceText: "I am going home, see you!",
      rightChoice: function(){
        addToTopDeck("back_to_home")
      },
    leftChoiceText: "Nice to meet you! Andy!", 
    leftChoice: function(){
      addToTopDeck("back_to_home")
      enemiesMade += 1
    },
    name: "Study the assignment with Andy in library",
    resultText: "",
    image: "./images/p3.png",
    priority: 2,
    pack : "none"
  },

  //No. 11
  "next_day_school": {

    prompt: "You woke up early today and arrived at school full of energy. After having breakfast at school, your first class was Chemistry. You met a few friends who invited you to play basketball yesterday, It seen like they have the same class with you.",
    rightChoiceText: "Sit next to them",
      rightChoice: function(){
        addToTopDeck("PE")
        addResource("Time", -10)
      },
    leftChoiceText: "Sit with different classmates", 
    leftChoice: function(){
      addToTopDeck("Chemistry")
      addResource("Time", -10)
      enemiesMade += 2
    },
    name: "Second day in school",
    resultText: "",
    image: "./images/p8.png",
    priority: 2,
    pack : "none"
  },

  //No. 12
  "thinking": {
    prompt: "You sleep on the bed and thinking about everything that happened today. While you are happy, but you are also nervous how tomorrow look like. ",
    rightChoiceText: "Well, let's see and hope for tomorrow",
      rightChoice: function(){
        addToTopDeck("next_day_school")
        addResource("Time", -20)
      },
    leftChoiceText: "Fear, can't sleep well tomorrow", 
    leftChoice: function(){
      addToTopDeck("effect")
      addResource("Happiness", -6) 
      addResource("Time", -20)
    },
    name: "how is tomorrow look like?",
    resultText: "",
    image: "./images/p7.png",
    priority: 2,
    pack : "none"
  },

  //No. 13
  "effect": {
    prompt: "Due to your wandering thoughts last night, unsurprisingly, you ended up being late today! You have already missed your Chemistry class and can only hurriedly make your way to school and attend Physical Education class.",
    rightChoiceText: "Well, let's go back school soon",
      rightChoice: function(){
        addToTopDeck("PE")
        addResource("Time", 3)
        addResource("Happiness", 1) 
      },
      //remark
    leftChoiceText: "Go to school tomorrow.", 
    leftChoice: function(){
      addToTopDeck("effect")
      addResource("Happiness", -3) 
    },
    name: "how is tomorrow look like?",
    resultText: "",
    image: "./images/p2.png",
    priority: 2,
    pack : "none"
  },

  //No. 14
  "Chemistry": {

    prompt: "You meet two new classmates during the class, One is Jacky and one is Amy. they are nice and helpful! You having a good time with them. Soon, the class is over!",
    rightChoiceText: "Nice to meet you! See you tomorrow! Jacky and Amy!",
      rightChoice: function(){
        addToTopDeck("PE")
        addResource("Time", 3)
        addResource("Happiness", 3) 
      },
    leftChoiceText: "Go to next class without talk to them", 
    leftChoice: function(){
      addToTopDeck("PE")
      addResource("Time", 10)
      enemiesMade -= 2
    },
    name: "Two Friend from Chemistry",
    resultText: "",
    image: "./images/p9.png",
    priority: 2,
    pack : "none"
  },

  //No. 15
  "PE": {

    prompt: "Your second class is PE class. You saw few friend from previous class. The teacher is asking you play basketball.",
    rightChoiceText: "Play with the friend from yesterday, which you guy become true real friend",
      rightChoice: function(){
        addToTopDeck("math")
        addResource("Time", 3)
        addResource("Happiness", 3) 
      },
    leftChoiceText: "Play with different classmates, which you make more friend", 
    leftChoice: function(){
      addToTopDeck("math")
      addResource("Time", 3)
      addResource("Happiness", 3) 
      enemiesMade += 2
    },
    name: "Make friend from PE class",
    resultText: "",
    image: "./images/p5.png",
    priority: 2,
    pack : "none"
  },

  //No. 16
  "math": {

    prompt: "Your third class is Math class. You saw Andy! Are you ",
    rightChoiceText: "Sit next to Andy, which you guy become true real friend",
      rightChoice: function(){
        addToTopDeck("Answer_check")
        addResource("Happiness", 3) 
      },
    leftChoiceText: "Sit next to different classmates", 
    leftChoice: function(){
      addToTopDeck("math_question")
      addResource("Happiness", 3) 
      enemiesMade += 3
    },
    name: "Make friend from math class",
    resultText: "",
    image: "./images/p10.png",
    priority: 2,
    pack : "none"
  },

  //No. 17
  "math_question": {

    prompt: "You make 3 new friend: Kyle, kevin and Kelly. It seen like they are facing a hard math problem",
    rightChoiceText: "Give them hint to help them",
      rightChoice: function(){
        addToTopDeck("lunchtime")
      },
    leftChoiceText: "teach them step by step and give the solution", 
    leftChoice: function(){
      addToTopDeck("lunchtime")
      enemiesMade -= 3
      
    },
    name: "Should you help them on question",
    resultText: "",
    image: "./images/p11.png",
    priority: 2,
    pack : "none"
  },

  //No. 18
  "Answer_check": {

    prompt: "You finish the course work early, Andy want to double check with you!",
    rightChoiceText: "Sure!",
      rightChoice: function(){
        addToTopDeck("lunchtime")
      },
    leftChoiceText: "No! That's cheating", 
    leftChoice: function(){
      addToTopDeck("lunchtime")
      enemiesMade -= 1
      
    },
    name: "Check the answer with Andy",
    resultText: "",
    image: "./images/p11.png",
    priority: 2,
    pack : "none"
  },

  //No. 19
  "lunchtime": {

    prompt: "You finish the morning class, it's lunch time! You saw few friend in the cafeteria",
    rightChoiceText: "Sit next to few of your friend",
      rightChoice: function(){
        addToTopDeck("next_class")
        addResource("Time", 3)
        enemiesMade -= 5
      },
    leftChoiceText: "Invite all the friend and sit together", 
    leftChoice: function(){
      addToTopDeck("playtime")
      addResource("Happiness", 6) 
      addResource("Time", 3)
      enemiesMade += 15
    },
    name: "Enjoy the lunch",
    resultText: "",
    image: "./images/p12.png",
    priority: 2,
    pack : "none"
  },

  //No. 20
  "playtime": {

    prompt: "With your invite, all you friend sit together and introduce itselfAfter the lunch, all of you decide to play a game in the computer lab. Soon, the class start it!",
    rightChoiceText: "Go to next class yourself",
      rightChoice: function(){
        addToTopDeck("next_class")
      },
    leftChoiceText: "Go to next class with friend", 
    leftChoice: function(){
      addToTopDeck("next_class")
      addResource("Happiness", 3) 
    },
    name: "Playground fun time",
    resultText: "",
    image: "./images/p13.png",
    priority: 2,
    pack : "none"
  },

  //No. 21
  "next_class": {

    prompt: "You went to the class, It's a English class, you don't see any friend from this class, so you can...",
    rightChoiceText: "Sit by youself",
      rightChoice: function(){
        addToTopDeck("last_class")
        addResource("Time", 3)
      },
    leftChoiceText: "Sit with different students", 
    leftChoice: function(){
      addToTopDeck("greet")
      addResource("Time", 3)
      addResource("Happiness", 3) 
      enemiesMade += 4
    },
    name: "English class",
    resultText: "",
    image: "./images/p11.png",
    priority: 2,
    pack : "none"
  },
  
  //No. 22
  "greet": {

    prompt: "You sit with different classmates, Your teacher assign a teamwork for today class ",
    rightChoiceText: "Work together with classmates, but no sharing answer",
      rightChoice: function(){
        addToTopDeck("last_class")
        enemiesMade += 2
      },
    leftChoiceText: "Work together with classmates, but check answer together", 
    leftChoice: function(){
      addToTopDeck("last_class")
      enemiesMade += 2
    },
    name: "TeamWork during the Class",
    resultText: "",
    image: "./images/p13.png",
    priority: 2,
    pack : "none"
  },

  //No. 23
  "last_class": {

    prompt: "English class is over! You still have one more class to go! The last class is Art class",
    rightChoiceText: "Quickly go over the class by yourself",
      rightChoice: function(){
        addToTopDeck("afterschool")
        addResource("Time", 3)
      },
    leftChoiceText: "Do the work with different classmates", 
    leftChoice: function(){
      addToTopDeck("greet")
      addResource("Time", 3)
      enemiesMade += 2
    },
    name: "Enjoy the lunch",
    resultText: "",
    image: "./images/p14.png",
    priority: 2,
    pack : "none"
  },

  //No. 24
  "afterschool": {

    prompt: "Finally! The class is over! No more school! You meet with your friend, You can...",
    rightChoiceText: "Walk back home.",
      rightChoice: function(){
        addToTopDeck("back_home")
        addResource("Happiness", -6)
        addResource("Time", 3) 
      },
    leftChoiceText: "Join the afterschool program with friends", 
    leftChoice: function(){
      addToTopDeck("afterschool_program")
      addResource("Happiness", 3)
      addResource("Time", 3) 
      enemiesMade += 2
    },
    name: "Enjoy the lunch",
    resultText: "",
    image: "./images/p4.png",
    priority: 2,
    pack : "none"
  },

  //No. 25
  "afterschool_program": {

    prompt: "You went to afterschool_program, the teacher want to assign the team, you found two insteresting sport",
    rightChoiceText: "skateboarding with friends",
      rightChoice: function(){
        addToTopDeck("skateboarding")
        addResource("Happiness", 3)
        addResource("Time", 3) 
        enemiesMade += 5
      },
    leftChoiceText: "Join the soccer with friends", 
    leftChoice: function(){
      addToTopDeck("soccer")
      addResource("Happiness", 3) 
      addResource("Time", 3)
      enemiesMade += 5
    },
    name: "Chose a sport to enjoy during afterschool program",
    resultText: "",
    image: "./images/p2.png",
    priority: 2,
    pack : "none"
  },

  //No. 26
  "skateboarding": {

    prompt: "You get the skateboard and you having fun, but it's your first time learn how to play skateboard...",
    rightChoiceText: "Join with students to learn shateboard",
      rightChoice: function(){
        addToTopDeck("have_fun")
        addResource("Happiness", 3) 
        addResource("Time", 3)
        enemiesMade += 2
      },
    leftChoiceText: "practice the skateboard by yourself", 
    leftChoice: function(){
      addToTopDeck("Homework")
      addResource("Time", 3)
      addResource("Happiness", -10) 
    },
    name: "skateboarding game",
    resultText: "",
    image: "./images/p16.png",
    priority: 2,
    pack : "none"
  },

  //No. 27
  "soccer": {

    prompt: "You chose the soccer ball game! You team leader give you two location chose: striker or goalkeeper",
    rightChoiceText: "striker",
      rightChoice: function(){
        //next class
        addToTopDeck("victory")
        addResource("Happiness", 6) 
        addResource("Time", 3)
      },
    leftChoiceText: "goalkeeper", 
    leftChoice: function(){
      addToTopDeck("victory")
      addResource("Happiness", 3)
      addResource("Time", 3) 
    },
    name: "soccer ball game!",
    resultText: "",
    image: "./images/p17.png",
    priority: 2,
    pack : "none"
  },

  //No. 28
  "have_fun": {

    prompt: "You learn the skateboarding faster than other students, time is moving soon! You friend invite you to play soccer!",
    rightChoiceText: "nah, I need to go home now!",
      rightChoice: function(){
        addToTopDeck("back_home")
        addResource("Happiness", -12) 
        addResource("Time", -12)
      },
    leftChoiceText: "play soccer game, then go home!", 
    leftChoice: function(){
      addToTopDeck("soccer")
      enemiesMade += 30
      addResource("Happiness", 3)
      addResource("Time", -12) 
    },
    name: "Having fun on skateboard and invite for soccer game!",
    resultText: "",
    image: "./images/p18.png",
    priority: 2,
    pack : "none"
  },

  //No. 29
  "Homework": {

    prompt: "After a while, you feel board and want to finish the assignment!",
    rightChoiceText: "Go home early and finish",
      rightChoice: function(){
        addToTopDeck("back_home")
        addResource("Time", -3)
      },
    leftChoiceText: "Go to ask help from afterschool program teacher", 
    leftChoice: function(){
      addToTopDeck("icebreaker")
      addResource("Happiness", 3) 
      addResource("Time", 3)
      enemiesMade += 6
    },
    name: "You team win the soccer ball game!",
    resultText: "",
    image: "./images/p11.png",
    priority: 2,
    pack : "none"
  },

  //No. 30
  "victory": {

    prompt: "You are playing an important role in your team, you help the team to win a big victory! Everyone know you now!",
    rightChoiceText: "It's time to go home!",
      rightChoice: function(){
        addToTopDeck("back_home")
        addResource("Time", 3)
      },
    leftChoiceText: "Go to skateboard team for more fun", 
    leftChoice: function(){
      addToTopDeck("skateboarding")
      enemiesMade += 3
      addResource("Time", 3)
    },
    name: "You team win the soccer ball game!",
    resultText: "",
    image: "./images/p18.png",
    priority: 2,
    pack : "none"
  },

  //No. 31
  "icebreaker": {

    prompt: "You went for homework help, Since you are new! Teacher want to do introuduce youself!",
    rightChoiceText: "Sure!",
      rightChoice: function(){
        addToTopDeck("New_friend")
        addResource("Happiness", -3) 
        addResource("Time", 3)
        enemiesMade += 4
      },
    leftChoiceText: "I am shy to speak!", 
    leftChoice: function(){
      addToTopDeck("its_ok")
      addResource("Happiness", -3) 
      addResource("Time", 3)
      enemiesMade += 4
    },
    name: "Introuduce youself to everyone!",
    resultText: "",
    image: "./images/p12.png",
    priority: 2,
    pack : "none"
  },

  //No. 32
  "New_friend": {

    prompt: "You went for homework help, You got new friend and new teacher as your support, You finish your homework faster than do it yourself!",
    rightChoiceText: "happy!",
      rightChoice: function(){
        addToTopDeck("finish")
        addResource("Time", 3)
      },
    leftChoiceText: "Thank you! I am going home!", 
    leftChoice: function(){
      addToTopDeck("back_home")
      addResource("Time", -3)
    },
    name: "You get homework help from friend and teacher",
    resultText: "",
    image: "./images/p4.png",
    priority: 2,
    pack : "none"
  },
  
  //No. 33
  "its_ok": {

    prompt: "It's okay, just try, no one will make fun of you!",
    rightChoiceText: "Sure!",
      rightChoice: function(){
        addToTopDeck("finish")
      },
    leftChoiceText: "Sorry, (you run away)!", 
    leftChoice: function(){
      addToTopDeck("back_home")
      addResource("Happiness", -12) 
    },
    name: "Chance to introuduce yourself",
    resultText: "",
    image: "./images/p1.png",
    priority: 2,
    pack : "none"
  },

  //No. 34
  "finish": {

    prompt: "Would you like me to double check your homework? Ask by teacher",
    rightChoiceText: "No, I can go home and check myself!",
      rightChoice: function(){
        addToTopDeck("back_home")
        addResource("Time", -3)
      },
    leftChoiceText: "Thank you for your help! Please!", 
    leftChoice: function(){
      addToTopDeck("back_home")
      addResource("Happiness", 3)
      addResource("Time", 3) 
    },
    name: "You get extra support from teacher",
    resultText: "",
    image: "./images/p9.png",
    priority: 2,
    pack : "none"
  },

  //No. 35
  "back_home": {

    prompt: "After finish the program, You go back home. Your father cook a great dinner tonight! You Mother ask: Do you make friend today. ",
    rightChoiceText: "I make a lot of friend!, I am doing well!",
      rightChoice: function(){
        addToTopDeck("third_day_school")
        addResource("Happiness", 3)
        addResource("Time", 3) 
      },
    leftChoiceText: "I make some friend,but they are nice!", 
    leftChoice: function(){
      addToTopDeck("third_day_school")
      addResource("Happiness", -6) 
      addResource("Time", 3)
    },
    name: " back home after school",
    resultText: "",
    image: "./images/p6.png",
    priority: 2,
    pack : "none"
  },

  //No. 36
  "third_day_school": {

    prompt: "It's Third day for school! With the previous day, It seen like you would like to make more friend!",
    rightChoiceText: "Of course, I love school",
      rightChoice: function(){
        addToTopDeck("T_after_school")
        addResource("Happiness", 3) 
      },
    leftChoiceText: "I dislike school now, but I need more time to change", 
    leftChoice: function(){
      addToTopDeck("END")
      addResource("Happiness", -10) 
    },
    name: " New day of school again!",
    resultText: "",
    image: "./images/p15.png",
    priority: 2,
    pack : "none"
  },

  //No. 37
  "T_after_school": {

    prompt: "Same day like previous day, You didn't make a lot of friend because you know most of them",
    rightChoiceText: "That's not a problem, let's go to after program!",
      rightChoice: function(){
        addToTopDeck("Th_after_school")
        addResource("Happiness", 3) 
      },
    leftChoiceText: "Maybe I should go back home!", 
    leftChoice: function(){
      addToTopDeck("END")
      addResource("Happiness", -10) 
    },
    name: " Third day after school",
    resultText: "",
    image: "./images/p15.png",
    priority: 2,
    pack : "none"
  },

  //No. 38
  "Th_after_school": {

    prompt: "Today you try different activities! You also speak out during the ice breaker! You teacher:",
    rightChoiceText: "You improve! Oh yeah!",
      rightChoice: function(){
        addResource("Happiness", 3) 
        addToTopDeck("T_backhome")
      },
    leftChoiceText: "Thank to speak! Don't be shy and help yourself!", 
    leftChoice: function(){
      addToTopDeck("T_backhome")
      addResource("Happiness", 3) 
    },
    name: " Third day after school",
    resultText: "",
    image: "./images/p9.png",
    priority: 2,
    pack : "none"
  },

  //No. 39
  "T_backhome": {

    prompt: "Mother: You looks happy today! Anything good?",
    rightChoiceText: "Of course! I enjoy the school!",
      rightChoice: function(){
        //next class
        addToTopDeck("T_backhome_1")
      },
    leftChoiceText: "I doing okay! Thanks!", 
    leftChoice: function(){
      addToTopDeck("T_backhome_2")
    },
    name: " Third day went back home!",
    resultText: "",
    image: "./images/happy.png",
    priority: 2,
    pack : "none"
  },
  
  //No. 40
  "T_backhome_1": {

    prompt: "Father: Good to heard that! It seen like you make a lot of friend! Do you still want to change to new school?",
    rightChoiceText: "No! I enjoy the school!",
      rightChoice: function(){
        //next class
        addToTopDeck("T_backhome_2")
      },
    leftChoiceText: "No! Thanks!", 
    leftChoice: function(){
      addToTopDeck("T_backhome_3")
    },
    name: " Third day went back home!",
    resultText: "",
    image: "./images/p1.png",
    priority: 2,
    pack : "none"
  },

  //No. 41
  "T_backhome_2": {

    prompt: "Father: Ha? I see! Last chance! Do you still want to change to new school? You are crying at the first day of school",
    rightChoiceText: "Ha! Nope! i want to stay!",
      rightChoice: function(){
        //next class
        addToTopDeck("END1")
      },
    leftChoiceText: "Fine! What ever", 
    leftChoice: function(){
      addToTopDeck("END1")
    },
    name: " Father's joke!",
    resultText: "",
    image: "./images/happy.png",
    priority: 2,
    pack : "none"
  },

  //No. 42
  "T_backhome_3": {

    prompt: "Mother: Enough! Father! He is changing his mind! He is happy boy now!",
    rightChoiceText: "END",
      rightChoice: function(){
        //next class
        addToTopDeck("END1")
      },
    leftChoiceText: "END", 
    leftChoice: function(){
      addToTopDeck("END2")
    },
    name: " The End",
    resultText: "",
    image: "./images/p18.png",
    priority: 2,
    pack : "none"
  },

  //No. 43
  "END": {

    prompt: "You did not enjoy the school, you always escape the school and your grade is low, You didn't get a well pay job!",
    rightChoiceText: "Thank you! and Play again?",
      rightChoice: function(){
        //next class
        addToTopDeck("Happy")
      },
    leftChoiceText: "I accept! I am loster! but want to play again!", 
    leftChoice: function(){
      addToTopDeck("Happy")
    },
    name: " Ending with Sad and lose!",
    resultText: "",
    image: "./images/p12.png",
    priority: 2,
    pack : "none"
  },
  //No. 44
  "END1": {

    prompt: "You did enjoy the school, You make a lot of friend! Your friend and school support you go to higher education!",
    rightChoiceText: "Thank you! and Play again?",
      rightChoice: function(){
        //next class
        addToTopDeck("Happy")
      },
    leftChoiceText: "I accept! I want to play again!", 
    leftChoice: function(){
      addToTopDeck("Happy")
    },
    name: " Ending part 1",
    resultText: "",
    image: "./images/p18.png",
    priority: 2,
    pack : "none"
  },

  //No. 45
  "END2": {

    prompt: "You did enjoy the school, however, You didn't make a lot of friend! but few friend are truely helpful and support for you!, You are happy!",
    rightChoiceText: "Thank you! and Play again?",
      rightChoice: function(){
        //next class
        addToTopDeck("Happy")
      },
    leftChoiceText: "I accept! I want to play again!", 
    leftChoice: function(){
      addToTopDeck("Happy")
    },
    name: " Ending part 2",
    resultText: "",
    image: "./images/p18.png",
    priority: 2,
    pack : "none"
  },
}




