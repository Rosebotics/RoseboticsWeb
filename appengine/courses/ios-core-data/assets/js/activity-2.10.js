var activity = [

    "<b>1.</b> Why did we use a full view controller instead of just a Dialog with a text field here?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["We had to use a view controller to add a Task.  ", false, "Please try again." ],
        ["Being able to add a Star was critically important", false, "Please try again." ],
        ["You will need it for the lab so we started setting it up now.", true, "Correct!" ],
        ["I thought another view controller would be easier than just using a dialog (alert view)", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> Unlike a Selection Segue, when you make a Manual Segue in the storyboard you need to add code to fire it.  What method is that?  (you can omit the :sender: part of the method)<br>",

  {
    questionType : "freetext",
    correctAnswerRegex : /performSegueWithIdentifier/i,
    correctAnswerOutput : "Correct!",
    incorrectAnswerOutput : "Please try again.",
    showAnswerOutput : "Here is the answer:  performSegueWithIdentifier"
  },

  "<br><br><b>3.</b> A 'Show' segue slides over from the right, adds a navigation bar, adds a back button, and makes the view visible to the user.<br>",

  {
    questionType : "multiple choice group",
    questionsList : [
        {
          questionHTML : "When you use a 'Present Modally' segue which of those happen?",
          choices : [ "Slides over from the right", "Adds a navigation bar", "Adds the back button", "Makes the view visible to the user", "Slides up from the bottom" ],
          correctIndex : [3,4]
        }],
    allCorrectOutput : "Well done!",
    someIncorrectOutput : "Please try again. Hints: The first three are not true",
  },

];
