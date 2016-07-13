var activity = [

    "<b>1.</b> What are the keys that are within a MovieQuote object?",

    {
      questionType : "multiple choice group",
      questionsList : [
          {
            questionHTML : "",
            choices : [ "A randomly generated key", "movie", "moviequote", "quote" ],
            correctIndex : [1,3]
          } ],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again. Hints: There are 2 keys in a MovieQuote",
    },

    "<br><br><b>2.</b> What is the name of the Firebase path that all of our MovieQuote objects will be on?<br>",

    {
      questionType : "freetext",
      correctAnswerRegex : /quotes/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again.",
      showAnswerOutput : "Here is the answer: quotes"
    },

    "<br><br><b>3.</b> In our Firebase Database JSON tree what type of key goes in the blank?<br>username-movie-quotes/quotes/______/movie<br>",

    {
      questionType : "multiple choice",
      choices : [
          ["An index value of 0, 1, 2, ... for every MovieQuote in the list", false, "Please try again." ],
          ["The word moviequote", false, "Please try again." ],
          ["A randomly generated, base64, Firebase key", true, "Correct!" ],
          ["generatedKey1", false, "Please try again." ] ]
    },
];
