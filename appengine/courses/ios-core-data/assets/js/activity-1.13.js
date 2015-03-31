var activity = [

    "<b>1.</b> Why did it crash before we used the NSFetchedResultsControllerDelegate method?  I don't get it?  We added a row to Core Data then we inserted a row (same with delete) right within the UIAlertAction closure, but it crashed before we 'fixed' it.  What's up?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["It crashed because the data wasn't really added to Core Data", false, "Please try again." ],
				["It was just a timing thing.  We were adding the row immediately after making the Core Data change.  The row then got added BEFORE the fetched results controller was notified about the Core Data change.", true, "Correct!" ],
				["It crashed because too many rows were made.", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> Does delete work right now?  Did we fix that since we removed the array?  Exactly which parts of CRUD are done already?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["R (read is the only one done)", false, "Please try again." ],
				["CR", false, "Please try again." ],
				["CRU", false, "Please try again." ],
				["CRUD (all are done)", true, "Correct!  Yeah it's all done.  We are ONLY missing the animations.  Let's go do that!" ] ]
	},

];
