var activity = [

    "<b>1.</b>Which option below would make a FIRDatabaseReference (a pointer to a Firebase Database node) to our <b>quotes</b> path?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["FIRDatabase.database().reference()", false, "Please try again." ],
        ["FIRApp.database().reference().child(\"quotes\")", false, "Please try again." ],
        ["Firebase.reference().child(\"quotes\")", false, "Please try again." ],
        ["FIRDatabase.database().reference().child(\"quotes\")", true, "Correct!" ] ]
  },

    "<br><br><b>2.</b> Could we have used a single .Value event observer on the quotes path to retrieve all quotes instead of using 3 different observers?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Yes.  It'd work. It's just not recommended when working with the repeated object pattern. So it works but there is a better way.", true, "Correct!" ],
        ["Can't use a .Value observer.  You must use .ChildAdded .ChildChanged and .ChildRemoved.", false, "Please try again." ] ]
  },

  "<br><br><b>3.</b> For this app could we have just added the 3 event observers to viewDidLoad and never remove the observers?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Sure. In this app they really don't need to be removed. Only removing them to show best practice for bigger apps.", true, "Correct!" ],
        ["When you add a continuous observer you are required to remove it, otherwise it will eventually cause your app to crash.", false, "Please try again." ] ]
  },

  "<br><br><b>4.</b> We are working through the R in CRUD.  What is the current status of our C, U, and D from this app to Firebase?<br>",
  {
  questionType : "multiple choice",
  choices : [
      ["They still work.", false, "Please try again." ],
      ["We haven't even started them.  We're only half way through R.", true, "Correct!" ] ]
  },


];
