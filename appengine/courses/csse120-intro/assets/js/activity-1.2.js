var activity = [

    "<b>1.</b> What is the name of the programming language that we will use in this course?<br>",
    {
      questionType : "freetext",
      correctAnswerRegex : /python/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },

    "<br><br><b>2.</b> True or False: The programming language for our course is mostly just used to teach beginners how to program (like Scratch or block languages for kids).<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "True", false, "Please try again." ],
          [ "False", true,
              "Correct!  Python is a powerful language that is used in industry.  This website uses Python!" ] ]
    },

    "<br><br><b>3.</b> True or False: Many software engineers see themselves as an <em>artist</em> who creates beautiful artifacts, much as a painter or musician would.<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "True", true, "Correct!" ], [ "False", false, "Please try again." ] ]
    },

    "<br><br><b>4.</b> This course focuses on:<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "All of software engineering.", false, "Please try again." ],
          [ "The subset of software engineering called <em>software development.</em>", true,
              "Correct!" ] ]
    },

    "<br><br><b>5.</b> True or False: Software engineers rarely interact with other people when doing their job well.<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "True", false, "Please try again." ],
          [ "False", true, "Correct!" ] ]
    },

    "<br><br><b>6.</b> True or False: Men are usually better software engineers than women are.<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "True", false, "Please try again." ],
          [ "False", true, "Correct!" ] ]
    },

    "<br><br><b>7.</b> True or False: Software engineering requires being a creative thinker.<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "True", true, "Correct!" ],
          [ "False", false, "Please try again." ] ]
    },

];
