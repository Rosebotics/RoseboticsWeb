var activity = [

    "<b>1.</b> Which sign-in methods did we <b>Enable</b> on the console?<br>",
    {
      questionType : "multiple choice group",
      questionsList : [ {
        questionHTML : "",
        choices : [ "Email/Password", "Google", "Facebook", "Twitter", "GitHub", "Anonymous", "Rosefire" ],
        correctIndex : [ 0, 1, 5 ]
      } ],
      allCorrectOutput : "Well done! Note, we will do Rosefire (custom auth) but we didn't need to enable it.",
      someIncorrectOutput : "Please try again. Hints: Note, we will do Rosefire (custom auth) but we didn't need to enable it.",
    },

    "<br><br><b>2.</b> What pods did we add?<br>",
    {
      questionType : "multiple choice group",
      questionsList : [ {
        questionHTML : "",
        choices : [ "Firebase", "Firebase/Storage", "Firebase/Database", "Firebase/RemoteConfig", "Firebase/Auth", "Firebase/Messaging" ],
        correctIndex : [ 0, 2, 4 ]
      } ],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again. Hints: There were three Firebase pods total.",
    },

    "<br><br><b>3.</b> Do you think this will be the last time you add some pods and run <b>pod install</b> in this unit?<br>",

    {
      questionType : "multiple choice",
      choices : [ [ "Obviously we have every pod we need for this app. I'm guessing we're done adding pods.", false, "Please try again." ],
          [ "I'm guessing there are more pods coming.  Pods seem to be all the rage these days.", true, "Correct!" ] ]
    },

];
