var activity = [

    "<b>1.</b>We made a property for the TaskDetailViewController called <b>starred</b>.  Why didn't we just make a Task and use the starred property, or in the case of an Edit just use the starred property of the task? (select the best answer)<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["The starred property of a task is an NSNumber, which is a pain to work with so we just made a BOOL", false, "Please try again.  Yeah there are two good answers.  The second one is the 'best' answer." ],
        ["It's important when you are potentially doing an edit to keep state changes in temporary variables in case the user hits cancel", true, "Correct!"],
        ["We had to use a BOOL and couldn't use an NSNumber that wraps a bool", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> We connected a delegate to the UITextField.  Once the view controller was connected as the delegate it needs to implement the UITextFieldDelegate methods.  Which of those methods are you REQUIRED to implement?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["textFieldShouldBeginEditing:", false, "Please try again." ],
        ["textFieldDidBeginEditing:", false, "Please try again." ],
        ["textFieldShouldEndEditing:", false, "Please try again." ],
        ["textFieldDidEndEditing:", false, "Please try again." ],
        ["textField:shouldChangeCharactersInRange:replacementString:", false, "Please try again." ],
        ["textFieldShouldClear:", false, "Please try again." ],
        ["textFieldShouldReturn:", false, "Please try again." ],
        ["None of the methods in the UITextFieldDelegate protocol are required.  They are all optional.", true, "Correct!" ] ]
  },


  "<br><br><b>3.</b> Which UITextFieldDelegate method did we use to hide the keyboard if the users presses the Return key?<br>",
{
  questionType : "multiple choice",
  choices : [
      ["textFieldShouldBeginEditing:", false, "Please try again." ],
      ["textFieldDidBeginEditing:", false, "Please try again." ],
      ["textFieldShouldEndEditing:", false, "Please try again." ],
      ["textFieldDidEndEditing:", false, "Please try again.  Not this one (but a good guess)" ],
      ["textField:shouldChangeCharactersInRange:replacementString:", false, "Please try again." ],
      ["textFieldShouldClear:", false, "Please try again." ],
      ["textFieldShouldReturn:", true, "Correct!" ] ]
},

];
