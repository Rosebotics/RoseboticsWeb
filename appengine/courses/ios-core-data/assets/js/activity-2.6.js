var activity = [

    "<b>1.</b> In order to set the text in the Navigation item for the TasksViewController what property did we set?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["The .text property of the navigation item", false, "Please try again." ],
        ["The .text property of the UITableView", false, "Please try again." ],
        ["The .title property of the UITableView", false, "Please try again." ],
        ["The .title property of the view controller", true, "Correct!  Kinda neat that the view controller's title is wired to be visible for UITableViewControllers" ] ]
  },

    "<br><br><b>2.</b> Some segues automatically push on a view controller when the user makes a click.  They don't require any code, just make the connection in the Storybaord and you are done.  What type of segue is that?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Manual Segue", false, "Please try again." ],
        ["Selection Segue", true, "Correct! BTW we'll learn about Manual segues later in this unit.  They require a connection AND code to fire." ] ]
  },

  "<br><br><b>3.</b> AFTER a user clicks to fire a segue event, but BEFORE the next view controller is seen, which methods are called?",

  {
    questionType : "multiple choice group",
    questionsList : [
        {
          questionHTML : "",
          choices : [ "viewDidAppear of the TasksViewController", "viewWillAppear of the TasksViewController", "prepareForSegue of the ListsViewController", "viewWillDisappear of the ListsViewController" ],
          correctIndex : [1,2,3]
        } ],
    allCorrectOutput : "Well done!  You will find prepareForSegue is often the most useful though. :)  Especially for passing data between view controllers.",
    someIncorrectOutput : "Please try again. Hints: There are 3.",
  },

];
