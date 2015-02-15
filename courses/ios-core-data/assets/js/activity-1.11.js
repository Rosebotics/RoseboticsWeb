var activity = [

    "<b>1.</b> The most interesting feature in this video was how Editing a quote worked BEFORE this video.  What neat issue was there pre-video if you Edited a quote?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["There was nothing interesting about the behavior before this video, it simply didn't save",  false, "Please try again." ],
				["If you edited a quote and closed the app it wouldn't save, but if you edited a quote, then created a quote, then the edit WOULD save.", true, "Correct!  Before this video we edited an NSManagedObject but nobody hit save!  But creating a different quote hits save!" ],
				["Editing already worked before this video", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> We got access to the managedObectContext in the Detail View Controller by passing it from the Master View Controller to the Detail View Controller during prepareForSegue.  How else could we have gotten access to the managedObjectContext within the Detail View Controller?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["We could get a reference to the App Delegate and get the managedObjectContext from an App Delegate property", true, "Correct!" ],
				["We already have access to it in all View Controllers", false, "Please try again." ],
				["There is no other way to do it!", false, "Please try again." ] ]
	},

	"<br><br>Tip, the next couple videos are good and useful, but the work we do in future videos won't be noticable by the user.  So learn the NSFetchedResultsController skills so that you know 'best practice', but keep in mind that the current code works JUST FINE and future videos won't add <b>user</b> value!"
];
