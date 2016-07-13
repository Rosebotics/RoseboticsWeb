var activity = [

    "<b>1.</b> Were you able to run the template and then completely strip out everything?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Yep all set.", true, "Great!" ],
        ["I had some real issues", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> What is the acronym you hear a lot when you deal with saving data in a database?  _reate, _ead, ... <br>",

  {
    questionType : "freetext",
    correctAnswerRegex : /CRUD/i,
    correctAnswerOutput : "Correct!",
    incorrectAnswerOutput : "Please try again.",
    showAnswerOutput : "Here is the answer: CRUD"
  },

    "<br><br><b>3.</b> Match each description to the appropriate letter.<br>",

  {
    questionType : "multiple choice group",
    questionsList : [
        {
          questionHTML : "<b>a.</b> Editing an object",
          choices : [ "C", "R", "U", "D" ],
          correctIndex : 2
        },
        {
          questionHTML : "<b>b.</b> Adding a new object",
          choices : [ "C", "R", "U", "D" ],
          correctIndex : 0
        },
        {
          questionHTML : "<b>c.</b> Performing a query to view the existing data",
          choices : [ "C", "R", "U", "D" ],
          correctIndex : 1
        }, {
          questionHTML : "<b>d.</b> Removing data",
          choices : [ "C", "R", "U", "D" ],
          correctIndex : 3
        } ],
    allCorrectOutput : "Well done!",
    someIncorrectOutput : "Please try again. Hint: Create (add), Read (view), Update (edit), Delete (remove)",
  },

    "<br><br><b>4.</b> What is the name of the Apple object that lets you have an Array of View Controllers and makes the top one visible?<br>",


  {
    questionType : "multiple choice",
    choices : [
        ["Stack controller", false, "Please try again." ],
        ["Navigation controller", true, "Correct!" ],
        ["Push queue controller", false, "Please try again." ],
        ["LIFO controller", false, "Please try again." ] ]
  },


];
