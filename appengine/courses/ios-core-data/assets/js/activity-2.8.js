var activity = [

    "<b>1.</b> When you connect an IBOutlet or an IBAction to a cell prototype in the Storyboard, where do those put the code side connections?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Into the view controller header file", false, "Please try again." ],
        ["Into the table view", false, "Please try again." ],
        ["Into the custom UITableViewCell subclass header file", true, "Correct!" ],
        ["No connection needed", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> In this video how many IBOutlets and IBActions did we make?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["2 outlets, 2 actions", false, "Please try again." ],
        ["1 outlet, 2 actions", false, "Please try again." ],
        ["2 outlets, 1 action", true, "Correct!  IBOutlets to the UIButton and UILabel and an IBAction on the UIButton" ],
        ["1 outlet, 1 action", false, "Please try again." ] ]
  },

  "<br><br><b>3.</b> In the ListsViewController we had a method called _configureCell:atIndexPath: now for Tasks we have a method called configureCellForTask: why didn't we start the function with an underscore?<br>",
  {
    questionType : "freetext",
    correctAnswerRegex : /(private|public)/i,
    correctAnswerOutput : "Correct!",
    incorrectAnswerOutput : "Please try again.  You should probably have said the word 'private or public' in your response",
    showAnswerOutput : "Here is the answer - It a public method in the TaskCell class called externally, not a private method"
  },

];
