var activity = [

    "<b>1.</b> To be honest I don't expect you to learn a lot about the NSFetchedResultsController until you start USING it.  However I DO want you to look at the design pattern used here to load the property.  Match the descriptions below...<br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> A stored property (like most properties we use) that is an optional NSFetchedResultsController",
					choices : [ "fetchedResultsController", "_fetchedResultsController"],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> A computed property (we've used them a little, for example <b>description</b>) that is a required non-nil NSFetchedResultsController)",
					choices : [ "fetchedResultsController", "_fetchedResultsController"],
					correctIndex : 0
				},
				{
					questionHTML : "<b>c.</b> The property that you should pretty much always use in your code",
					choices : [ "fetchedResultsController", "_fetchedResultsController"],
					correctIndex : 0
				}, {
					questionHTML : "<b>d.</b> The property that you should probably NEVER use in your code (unless setting it to <b>nil</b> to force the computed property to refresh)",
					choices : [ "fetchedResultsController", "_fetchedResultsController"],
					correctIndex : 1
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Each answer is used twice.",
	},

	"<br><br>BTW if you are still not comfortable with computed properties you can read more <a target='_blank' href='https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Properties.html#//apple_ref/doc/uid/TP40014097-CH14-ID259'>here</a>.",

    "<br><br><b>2.</b> An NSFetchedResultsController is the manager for a fetch request.  What fetch request is it managing?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The exact same fetch request we've been using all along to get MovieQuotes sorted by lastTouchDate (newest first)", true, "Correct!" ],
				["A new fetch request for MovieQuotes", false, "Please try again." ] ]
	},

];
