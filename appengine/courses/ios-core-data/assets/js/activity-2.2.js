var activity = [

    "<b>1.</b> Answer these questions about our Core Data model:<br>",

    {
      questionType : "multiple choice group",
      questionsList : [ {
        questionHTML : "<b>a.</b> Which relationship is a 'To Many' relationship",
        choices : [ "The tasks relationship on the List entity", "The list relationship on the Task entity" ],
        correctIndex : 0
      }, {
        questionHTML : "<b>b.</b> Which relationship is a 'To One' relationship",
        choices : [ "The tasks relationship on the List entity", "The list relationship on the Task entity" ],
        correctIndex : 1
      }, {
        questionHTML : "<b>c.</b> Which of these attributes are Strings",
        choices : [ "List title", "Task task", "Task starred" ],
        correctIndex : [ 0, 1 ]
      } ],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again.",
    },

    "<br><br><b>2.</b> How did we decide to sort the List table view?<br>",
    {
      questionType : "multiple choice",
      choices : [
          [ "There is no sorting order", false, "Please try again." ],
          [ "Sorted by creation date", false, "Please try again." ],
          [
              "Alphabetical and it'll work just like non-programmers expect",
              false,
              "Please try again.  We were a little lazy.  With our code we'll get ASCII alphabetical order.  If you really want real alphabetically see this post http://stackoverflow.com/questions/2013158/iphone-coredata-how-to-fetch-managed-objects-and-sorting-them-ignoring-case" ],
          [
              "Alphabetical based on the ASCII value, such that all uppercase letters like 'Z' (ascii value 90) are before lowercase letters like 'a' (ascii value 97)",
              true, "Correct!" ] ]
    },

];
