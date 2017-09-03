var activity = [

    "<b>1.</b> What keyword marks the beginning of a <b>function definition</b><br>",


    {
      questionType : "freetext",
      correctAnswerRegex : /def/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },


    "<br><br><b>2.</b> What notation marks the <b>body</b> of the function (that is, how can we tell when one function ends and another starts)<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "Curly braces ({})", false, "Please try again." ],
        [ "Colon (:)", false, "Please try again." ],
        [ "A new line or return", false, "Please try again." ],
        [ "Indentation", true, "Correct!" ] ]
    },

    "<br><br><b>3.</b> What is the name of the function that <b>prints</b> things (i.e., displays them on the console)?<br>",

    {
      questionType : "freetext",
      correctAnswerRegex : /print/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },

    "<br><br><b>4.</b> Consider the following code snippet: <pre>def foo():<br>    print('nice!')<br>    x = 5<br>    x = x * 10<br>    print(x)<br><br>def blah():<br>    print('ok')</pre>  How many functions does the snippet define?<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "None", false, "Please try again." ],
        [ "1", false, "Please try again." ],
        [ "2", true, "Correct!" ],
        [ "3", false, "Please try again." ],
        [ "4", false, "Please try again." ],
        [ "More than 4", false, "Please try again." ] ]
    },

    "<br><br><b>5.</b> Consider the following code snippet: <pre>def main():<br>    blah()<br>    blah()<br>    blah()<br><br>def blah():<br>    print('one')<br>    print('two')<br><br>main()</pre>  How many lines does the above code snippet print on the Console when it runs?<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "None", false, "Please try again." ],
        [ "1", false, "Please try again." ],
        [ "2", false, "Please try again." ],
        [ "3", false, "Please try again." ],
        [ "4", false, "Please try again." ],
        [ "5", false, "Please try again." ],
        [ "6", true, "Correct!" ],
        [ "More than 6", false, "Please try again." ] ]
    },

    "<br><br><b>6.</b> What does the above code snippet cause to appear on the Console?<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "None", false, "Please try again." ],
        [ "<pre>one<br>two<br></pre>", false, "Please try again." ],
        [ "<pre>one<br>one<br>one<br>two<br>two<br>two<br></pre>", false, "Please try again." ],
        [ "<pre>one<br>two<br>one<br>two<br>one<br>two<br></pre>", true, "Correct!" ],
        [ "None of the above.", false, "Please try again." ] ]
    },

    "<br><br><b>7.</b> Consider the following program for the next several questions:<br>",
    "<img src='assets/img/quiz02-01.jpg' alt='quiz02-01 code'><br>",

    {
      questionType : "multiple choice group",
      questionsList : [
          {
            questionHTML : "<b>a.</b> Check all the line numbers for lines that <em>call</em> a function.",
            choices : [ "Line 1", "Line 2", "Line 3", "Line 6", "Line 7", "Line 8", "Line 9", "Line 11", "Line 14", "Line 15", "Line 17"],
            correctIndex : [1, 2, 4, 5, 6, 7, 9, 10]
          },
          {
            questionHTML : "<b>b.</b> Check all the line numbers for lines that <em>begin</em> a <em>function definition</em>.",
            choices : [ "Line 1", "Line 2", "Line 3", "Line 6", "Line 7", "Line 8", "Line 9", "Line 11", "Line 14", "Line 15", "Line 17"],
            correctIndex : [0, 3, 8]
          } ],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again. Hints: Part a has 8 correct answers and Part b has 3 correct answers.",
    },

];
