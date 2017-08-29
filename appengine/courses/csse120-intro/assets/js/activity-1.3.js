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

];
