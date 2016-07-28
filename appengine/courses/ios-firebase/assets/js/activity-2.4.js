var activity = [

    "<b>1.</b> What is the least secure type of Firebase auth?<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["Email/Password", false, "Please try again." ],
          ["Google", false, "Please try again." ],
          ["Rosefire", false, "Please try again." ],
          ["Anonymous", true, "Correct!" ] ]
    },

    "<br><br><b>2.</b> If someone signs in with Anonymous auth, versus some other method, what differences are there beyond this point in our app?  Is Anonymous auth given basically the same rights (autherization) as other methods?<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["For the rest of the app it doesn't matter how they signed in.  Anonymous auth will work exactly the same as the better sign-in methods that will be coming later.", true, "Correct!" ],
          ["Users that sign in via anonymous auth have no rights to read or write data", false, "Please try again." ] ]
    },

    "<br><br><b>3.</b> After we implement the real sign-in methods like Email/Password, Google auth, and Rosefire, do you think we'll leave Anonymous auth as an option?<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["Nope. It's for our testing only. Once we have real auth it'll get removed.", true, "Correct!" ],
          ["No harm in leaving it as an option if users want to be in an incognito guest mode. It will work well for them.", false, "Please try again." ] ]
    },

    "<br><br><b>4.</b> If you tried to push a Password object with a service, password, username, and another field called websiteUrl, would that work? Would our rules allow it?<br>",

    {
      questionType : "multiple choice",
      choices : [
          ["So long as it has a password and a service you are fine. It'll pass the rules.", false, "Please try again." ],
          ["So long as it has a password, service, and a username you are fine. It'll pass the rules.", false, "Please try again." ],
          ["Since it has something in addition to password, service, and username it'll get 'Permission Denied' due to our rules", true, "Correct!" ] ]
    },


];
