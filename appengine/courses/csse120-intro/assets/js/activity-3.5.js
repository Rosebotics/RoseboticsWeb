var activity = [

    "<b>1.</b> In Python, every item of data is called an:<br>",


    {
      questionType : "freetext",
      correctAnswerRegex : /object/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again.",
      showAnswerOutput : "Here is the answer: Object"
    },
    "<br><br><b>2.</b> True or False: in Python, programmers can define their <em>own</em> classes.?<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["True", true, "Correct!" ],
          ["False", false, "Please try again." ] ]
    },

    "<br><br><b>3.</b> Every class has 3 things, a <b>name</b>, <b>instance variables</b>, and... <br>",
    {
      questionType : "freetext",
      correctAnswerRegex : /methods/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },

    "<br><br><b>4.</b> True or False:  If <code>p1</code> and <code>p2</code> are both instances of a <code>Point</code> class, the <strong>names</strong> of the instance variables for <code>p1</code> are the same as the <strong>names</strong> of the instance variables for <code>p2</code>.<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["True", true, "Correct!" ],
          ["False", false, "Please try again." ] ]
    },

    "<br><br><b>5.</b> True or False:  If <code>p1</code> and <code>p2</code> are both instances of a <code>Point</code> class, the <strong>values</strong> of the instance variables for <code>p1</code> are the same as the <strong>values</strong> of the instance variables for <code>p2</code>.<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["True", false, "Please try again." ],
          ["False", true, "Correct!" ] ]
    },


    "<br><br>",
    {
      questionType : "multiple choice group",
      questionsList : [
        {
          questionHTML : "<b>6a.</b> The <strong><em>instance variables</em></strong> of a class:",
          choices : [ "describe the operations that instances of the class can do", "describe the data that instances of the class hold"],
          correctIndex : 1
        },
        {
          questionHTML : "<b>6b.</b> The <strong><em>methods</em></strong> of a class:",
          choices : [ "describe the operations that instances of the class can do", "describe the data that instances of the class hold"],
          correctIndex : 0
        },
      ],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again.",
    },

];
