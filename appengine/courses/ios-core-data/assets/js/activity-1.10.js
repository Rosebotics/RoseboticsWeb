var activity = [

    "<b>1.</b> Passing an NSError into a function was different than what you might have expected.  Instead of just passing in a reference to an object, we passed in a <b>pointer to</b> the reference.  Assuming we have var error : NSError? then how do we pass in a pointer?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["*error", false, "Please try again." ],
				["&error", true, "Correct!" ],
				["self->error", false, "Please try again." ],
				["error.pointer", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> We did a LOT in this video, after we did R to get an array of quotes, then we went on to do C to add a quote.  This was different too.  Instead of using an init constructor method on our NSManagedObject subclass we did something TOTALLY different.  What did we do?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["We used an init constructor on the managedObjectContext", false, "Please try again." ],
				["We created a new object by calling the class method, insertNewObjectForEntityForName, on the NSEntityDescription class.", true, "Correct!" ],
				["We created a MovieQuote by calling createNewObjectForEntityForName on the managedObjectContext", false, "Please try again. Although that would've probably made more sense. :)" ] ]
	},

    "<br><br><b>3.</b> When you <b>save</b> the managedObjectContext it sets the error pointer if there was an error AND it returns true or false.  What does it mean if that <b>save</b> method returns false?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["It means error = false, there was NO error.", false, "Please try again." ],
				["It means saved = false, the save did NOT occur, but the error will be nil", false, "Please try again." ],
				["It means saved = false, the save did NOT occur.  Anytime the save fails the error pointer will ALWAYS be non-nil to explain the failure", true, "Correct!" ] ]
	},

];
