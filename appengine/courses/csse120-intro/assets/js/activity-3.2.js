var activity = [

    "Consider the following function definition:<br>",
    "<img src='assets/img/quiz02-02.png' alt='quiz02-02 code'>",
    "<br><br><b>1.</b> What is the <strong><em>name</em></strong> of the function? HINT: There should be no parentheses in your answer.?<br>",

    {
      questionType : "freetext",
      correctAnswerRegex : /f_to_c/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },

    "<br><br><b>2.</b> How many parameters does the function have?<br>",
    {
      questionType : "multiple choice",
      choices : [
        [ "None", false, "Please try again." ],
        [ "1", true, "Correct!" ],
        [ "2", false, "Please try again." ],
        [ "More than 2", false, "Please try again." ] ]
    },

    "<br><br><b>3.</b> Why are functions <em>powerful?</em> (Choose all that apply.)?",
    {
      questionType : "multiple choice group",
      questionsList : [
          {
            questionHTML : "",
            choices : [ "They do calculations.", "They can have comments.", "They improve organization and make it easier to maintain the program.", "They allow code re-use" ],
            correctIndex : [2, 3]
          } ],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again. Hints: 2 answers are correct.",
    },

    "<br><br><b>4.</b> Choose the statement that correctly calls the <b>f_to_c</b> function.<br>",
    {
      questionType : "multiple choice",
      choices : [
        [ "f_to_c(5)", true, "Correct!" ],
        [ "f_to_c 5", false, "Please try again." ],
        [ "def f_to_c(5)", false, "Please try again." ],
        [ "f_to_c", false, "Please try again." ] ]
    },

];
