var activity = [

    "<b>1.</b> What are some things you can do with Firebase?<br>",
  {
    questionType : "multiple choice",
    choices : [
       ["Save data to the cloud", false, "Please try again." ],
       ["Use synchronous real-time sockets for data communication instead of RESTful APIs", false, "Please try again." ],
        ["Host your web app", false, "Please try again." ],
        ["Help you do authentication for user login using a variety of options", false, "Please try again." ],
        ["All of the above", true, "Correct!" ] ]
  },

    "<br><br><b>2.</b> By default Firebase secures your data by requiring the user to be authenticated.  We didn't really want that in this app.  So instead of the .read and .write rules being the default <b>\"auth != null\"</b> what did we type instead?<br>",

    {
      questionType : "freetext",
      correctAnswerRegex : /true/i,
      correctAnswerOutput : "Correct! We just said it is true all that time that a .read or .write action should be approved in our rules (fine for now)",
      incorrectAnswerOutput : "Please try again.",
      showAnswerOutput : "Here is the answer: true"
    },


    "<br><br><b>3.</b> How much code did you write for the Firebase Backend as a Service (BaaS)?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["A little bit less than an AppEngine backend", false, "Please try again." ],
        ["A lot more than a Node.js server", false, "Please try again." ],
        ["About the same as a Flask + SQLAlchmey app hosted on Heroku", false, "Please try again." ],
        ["None.  Unlike a PaaS (Platform as a Service), a BaaS has no backend code needed.", true, "Correct!" ] ]
  },

];
