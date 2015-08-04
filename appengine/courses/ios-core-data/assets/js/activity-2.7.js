var activity = [

    "<b>1.</b> If you want to update the tasks array and then redisplay the table, how would you do that?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Call self.tableView reloadData", false, "Please try again." ],
        ["Set the self.tasks = nil THEN call self.tableView reloadData", true, "Correct!" ],
        ["Click back on the TasksViewController then click on the row again to do the resort", false, "Please try again.  We don't want to do that to our users. ;)" ] ]
  },

    "<br><br><b>2.</b> Our List .title attributes are used to sort the List table in ASCII alphabetical, however our Tasks are sorted using case insensitive alphabetical.  In a real app is this something you should fix?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Oh yeah, in a production, shipping app you should make things like that consistent for sure, but in this example... eh", true, "Correct!  The one I'd fix is the sorting of the List btw to use case insensitive alphabetical" ],
        ["Nobody will ever notice, no biggy", false, "Please try again." ],
        ["'a' is always before 'Z' regardless of ASCII alphabetical or case insensitive alphabetical", false, "Please try again." ] ]
  },

];
