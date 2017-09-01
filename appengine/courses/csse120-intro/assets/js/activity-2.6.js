var activity = [

    "<b>1.</b> What class does the number 17 belong to?<br>",
    {
      questionType : "freetext",
      correctAnswerRegex : /int/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },

    "<br><br><b>2.</b> True of False: For any given class, the maximum number of instances of that class is 10. <br>",
    {
      questionType : "multiple choice",
      choices : [
          ["True", false, "Please try again." ],
          ["False", true, "Correct!" ] ]
    },

    "<br><br><b>3.</b> Only one of the following choices might be a valid notation for <em>constructing</em> an instance of a <code>Dog</code> class as defined in the rosegraphics (abbreviated rg) module.  Which one?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["rg.Dog.dog", false, "Please try again." ],
        ["rg.Point.dog", false, "Please try again." ],
        ["rg.Dog", false, "Please try again." ],
        ["rg.Dog('poodle')", true, "Correct!" ],
        ["rg.dog('poodle')", false, "Please try again." ],
        ["rg.Poodle()", false, "Please try again." ]]
  },

  "<br><br><b>4.</b> True of False: After you have typed a few letters of the name of a class in PyCharm, it usually pops up the full name, and you can then just press the Enter key to have PyCharm auto-fill that name for you.<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["True", true, "Correct!" ],
        ["False", false, "Please try again." ] ]
  },

  "<br><br><b>5.</b> Which of the following constructs a Point object (as defined in the rosegraphics module) and gives the name <code>p1</code> to it.<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["p1 = rg.Point(4, 100)", true, "Correct!" ],
        ["p1 = rg(4, 100)", false, "Please try again." ],
        ["p1 = (4, 100)", false, "Please try again." ] ]
  },

  "<br><br><b>6.</b> Consider the following code.  What does it print? <pre>  p2 = rg.Point(7, 3)<br>  p1 = rg.Point(100, 50)<br>  print((4 * p1.x) + p2.y)<br></pre><br>",
  {
    questionType : "freetext",
    correctAnswerRegex : /403/i,
    correctAnswerOutput : "Correct!",
    incorrectAnswerOutput : "Please try again."
  },

  "<br><br><b>7.</b> What trick can we use in PyCharm to figure out what <b>instance variables</b> and <b>methods</b> an object has?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["A hat trick.", false, "Please try again." ],
        ["The DOT trick, which is: Type the object's name, followed by a DOT (i.e., PERIOD), pause, and look at the pop-up help that appears.", true, "Correct!" ],
        ["Google it.", false, "Please try again." ] ]
  },

  "<br><br><b>8.</b> In the pop-up help window that appears from the DOT trick.<br>",
  {
    questionType : "multiple choice group",
    questionsList : [
        {
          questionHTML : "What letter indicates that the item being shown is a <strong><em>method</em></strong>?",
          choices : [ "m for (method)", "iv (for instance variable)", "f (for field which is an other name for instance variable)" ],
          correctIndex : 0
        },
        {
          questionHTML : "What letter indicates that the item being shown is an <em>instance variable</em>?",
          choices : [ "m for (method)", "iv (for instance variable)", "f (for field which is an other name for instance variable)" ],
          correctIndex : 2
        } ],
    allCorrectOutput : "Well done!",
    someIncorrectOutput : "Please try again. Hints: There is no iv.",
  },




];

