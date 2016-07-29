var activity = [

    "<b>1.</b> When a developer uses only the Email / Password auth approach does the user need to create a custom password for this app?<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "Yep.  Yet another email/password combo for the user to have to remember.", true, "Correct! Can you tell I don't like that approach? :)" ],
          [ "The answer above it correct.  Select it. :)", false, "Please try again." ] ]
    },

    "<br><br><b>2.</b> In this unit I had two users, they were a@b.com and president@us.gov.  Is there a way to prevent that kind of nonsense in a real app?<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "Yep.  You just need to send them emailVerification and make sure the emailVerified boolean is true before authorizing them to enter.",
              true, "Correct!" ], [ "No way to control what email a user enters", false, "Please try again." ] ]
    },

    "<br><br><b>3.</b> Which of these methods was used for the <b>Sign up</b> button?<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "FIRAuth.auth()?.createUserWithEmail(password:completion:)", true, "Correct!" ],
          [ "FIRAuth.auth()?.signInWithEmail(password:completion:)", false, "Please try again." ],
          [ "FIRApp.createUserWithEmail(password:completion:)", false, "Please try again." ],
          [ "FIRApp.signInWithEmail(password:completion:)", false, "Please try again." ] ]
    },

];
