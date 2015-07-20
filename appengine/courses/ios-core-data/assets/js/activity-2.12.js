var activity = [

    "<b>1.</b> In the [CoreDataUtils saveContext] method we had to use the managedObjectContext.  Why didn't we just use the __managedObjectContext variable directly?  Why did we call the function to get it?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["We have to call the managedObjectContext function to get the managedObjectContext and don't have access to the __managedObjectContext variable directly", false, "Please try again." ],
        ["If the code happen to work out such that the first call to [CoreDataUtils saveContext] was before the first call to [CoreDataUtils managedObjectContext], then using __managedObjectContext directly would fail.", true, "Correct!" ],
        ["Trick question we DID use the __managedObjectContext directly in the saveContext method.", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> Did this refactor help make the app better?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Nope.  Same app.", false, "Please try again.  I consider the app 'better' because how you write your code is important for the long term health of the app." ],
        ["Of course!  Why do it if it didn't make the app better.", true, "Correct! And it didn't really even take that long to write those methods once instead of 4 times. ;)" ] ]
  },

];
