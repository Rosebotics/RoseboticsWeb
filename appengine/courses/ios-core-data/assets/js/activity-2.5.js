var activity = [

    "<b>1.</b> If you are adding a UIAlertAction for Cancel to an ActionSheet then later to an AlertView, how similar is the code?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["It's the exact same", true, "Correct!" ],
        ["Completely different", false, "Please try again." ],
        ["There are some similarities", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> The message in the AlertView was set to listToEdit.title.  What happens if listToEdit is nil?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["The app will crash, just like it would in Android", false, "Please try again." ],
        ["No biggy.  Messaging nil will just return nil and the message field will be blank.  Totally safe.", true, "Correct!" ],
        ["No idea!  It will be a completely unexpected result.", false, "Please try again." ] ]
  },

  "<br><br><b3.</b> After the user edits the title of a list we decided to set self.showRenameButtons to NO.  What else needs to happen?<br>",
{
  questionType : "multiple choice",
  choices : [
      ["Save the context", false, "Please try again.  self.showRenameButtons is just a variable that has no impact on Core Data" ],
      ["Reload the table", true, "Correct!" ],
      ["Create a new NSFetchedResultsController", false, "Please try again." ] ]
},

];
