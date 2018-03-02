var activity = [

    "<b>1.</b> True or False: You should expect to master the material of this video:<br>",
   {
      questionType : "multiple choice",
      choices : [
          [ "From the video alone.", false, "Please try again." ],
          [ "From the video PLUS the exercises you do in class that reinforce the ideas of this video.", true,
              "Correct!" ] ]
    },

    "<br><br><b>2.</b> Files with Python code are called:<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "Anacondas", false, "Please try again." ],
        [ "Trouble", false, "Please try again." ],
        [ "Packages", false, "Please try again." ],
        [ "Modules", true, "Correct!" ] ]
    },

    "<br><br><b>3.</b> Comments and Strings (check all that apply)<br>",
    {
      questionType : "multiple choice group",
      questionsList : [
          {
            questionHTML : "<b>a.</b> Check each of the following that is a <em>comment</em>",
            choices : ["'Once upon a time...'", "\"Once upon a time...\"", "Once upon a time...", "# Once upon a time...", "# dave = 5" ],
            correctIndex : [3,4]
          },
          {
            questionHTML : "<b>b.</b> Check each of the following that is a <em>string</em>",
            choices : ["'Once upon a time...'", "\"Once upon a time...\"", "Once upon a time...", "# Once upon a time..." ],
            correctIndex : [0, 1]
          } ],
      allCorrectOutput : "Correct!  Well done!",
      someIncorrectOutput : "Please try again. Hints: There is only 1 comment, but there are 2 strings to check!",
    },

    "<br><br><b>4.</b> When a <em>print</em> statement runs, it displays text:<br>",
    {
        questionType : "multiple choice",
        choices : [ [ "On the nearest printer", false, "Good guess, and the right answer 60 years ago, but no longer. Please try again." ],
            [ "In outer space", false, "Please try again." ],
            [ "In a window that is called the <b><em>Console</em></b> or <b><em>Run</em></b> window", true, "Correct!  BTW, the command to display text is called <em>print</em> (instead of <em>display</em> or something like that) because in the first computer systems, there was NO SCREEN - instead, output appeared on a physical printer.  Early programmers chose the name <em>print</em> for this command, reasonably enough.  The same name persists to this day even though nothing is literally <em>printed</em> by the command!  (Instead, the text shows up in a window on your screen, inside your IDE.)" ] ]
    },

    "<br><br><b>5.</b> A <b><em>function</em></b> is:<br>",
    {
        questionType : "multiple choice",
        choices : [ [ "Something that prints things", false, "Although <em>print</em> is a function, not all functions print things. Please try again." ],
            [ "Something to avoid", false, "Please try again." ],
            [ "A chunk of code that has a name", true, "Correct!" ] ]
    },

    "<br><br><b>6.</b> Consider the following code snippet: <blockquote><code>print(45, 20 * 10)<br>print(1, 2, 3, 4)</code></blockquote>How many times is the <code>print</code> function CALLED?",
    {
        questionType : "multiple choice",
        choices : [ [ "One time", false, "Although <em>print</em> has a single DEFINITION, it is CALLED two times here. Please try again." ],
            [ "Two times", true, "Correct!" ],
            [ "Six times", false, "Although these two statements print more than two numbers, the <em>print</em> function is CALLED here only two times. Please try again." ] ]
    },

    "<br><br><b>7.</b> Continuing to refer to the two <em>print</em> statements above, how many LINES are printed when the code runs?",
    {
        questionType : "multiple choice",
        choices : [ [ "One", false, "There are TWO <em>print</em> statements in the above, and each displays all its output on a single line. Please try again." ],
            [ "Two", true, "Correct! In the form that you will use most often, each <em>print</em> displays all its output on a single line. (Later in the course, you will see how to make <em>print</em> behave in more sophisticated ways.)" ],
            [ "More than two", false, "In the form that you will use most often, each <em>print</em> displays all its output on a single line.  Please try again." ] ]
    },

    "<br><br><b>8.</b> Continuing to refer to the two <em>print</em> statements above, how many NUMBERS are printed when the code runs?",
    {
        questionType : "multiple choice",
        choices : [ [ "Two", false, "Please try again." ],
            [ "Six.", true, "Correct!  Note that <code>20 * 10</code> is <em>evaluated</em> and results in a SINGLE number." ],
            [ "Seven", false, "The expression <code>20 * 10</code> is <em>evaluated</em> and results in a SINGLE number. Please try again." ] ]
    },

    "<br><br><b>9.</b> Which of the following would print a single <em>blank</em> line?",
    {
        questionType : "multiple choice",
        choices : [ [ "<code>print</code>", false, "To CALL a function, and hence to make it run, you MUST have the parentheses, even if there is nothing needed inside the parentheses. Please try again." ],
            [ "<code>print()</code>", true, "Correct! To make a function run, you must ALWAYS put parentheses immediately after the function name, even if there is nothing needed inside the parentheses." ],
            [ "<code>print(0)</code>", false, "This would print the number zero, NOT a BLANK line.  Please try again." ] ]
    },
];
