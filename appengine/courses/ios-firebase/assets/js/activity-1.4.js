var activity = [

    "<b>1.</b> We had to add some pods to our Podfile.  Select the pods below that we added?",
    {
      questionType : "multiple choice group",
      questionsList : [
          {
            questionHTML : "",
            choices : [ "CocoaPods", "Firebase", "Firebase/Storage", "Firebase/Database", "SWRevealViewController" ],
            correctIndex : [1, 3]
          }],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again. Hints: There were 2.  Both related to Firebase.",
    },

    "<br><br><b>2.</b> The steps to install Firebase into your app are...<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Really complex and they change for every app you make.  It'll be really hard to learn the setup.", false, "Please try again." ],
        ["Easy after you do it a few times.  It just looks complex at first (which you are now passed).", true, "Correct!" ]]
  },

  "<br><br><b>3.</b> Is your Favorite Things app setup and prepared to use Firebase?<br>",
{
  questionType : "multiple choice",
  choices : [
      ["You bet.  Let's use it already.", true, "Great.  Click Next Page to continue." ],
      ["No working", false, "Please try again. We'll need that app to build off of later." ]]
},

];
