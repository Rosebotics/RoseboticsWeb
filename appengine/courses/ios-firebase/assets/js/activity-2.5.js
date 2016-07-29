var activity = [

    "<b>1.</b> Why do we make the <b>key</b> field optional in the Password object? Why use <b>var key: String?</b> instead of just <b>var key: String!</b><br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Not all objects that are stored in the Firebase Database have a key", false, "Please try again." ],
        ["When we display data in our table we don't need a key for all the Passwords", false, "Please try again." ],
        ["For that 0.0001 millisecond when we make a Password before pushing it to Firebase we don't have the key field set.  All other times there is a key on there.", true, "Correct!" ] ]
  },

    "<br><br><b>2.</b> In Android development and web development Firebase uses the verb <b>push</b> to get an auto generated key and add a new object to the Database.  In iOS development what is the name of the method used to <b>push</b> a new Password to the Database?<br>",

    {
      questionType : "freetext",
      correctAnswerRegex : /childByAutoId/i,
      correctAnswerOutput : "Correct! childByAutoId()",
      incorrectAnswerOutput : "Please try again.",
      showAnswerOutput : "Here is the answer: childByAutoId()"
    },


    "<br><br><b>3.</b> At this moment we have CRUD working with Anonymous Auth.  When we implement Email/Password Auth, Rosefire Auth, and Google Auth will the CRUD methods change?<br>",


    {
      questionType : "multiple choice",
      choices : [
          ["They will change a lot", false, "Please try again." ],
          ["They will change a little but not much", false, "Please try again." ],
          ["They will not change.  Doesn't matter how someone signs in", true, "Correct! That's really cool btw. Now when a new auth method works it'll just work all the way through too." ] ]
    },

];
