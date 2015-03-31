var activity = [

    "<b>1.</b> The last thing we did in the video was comment out three lines of code in the AppDelegate.  What did those do?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Something with setting up the Storyboard", false, "Please try again." ],
				["Something with the Navigation controller", false, "Please try again." ],
				["Something with Core Data's managedObjectContext that we'll have to add back later", true, "Correct!" ],
				["Something with with UIAlertViews (i.e. Dialogs)", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> What is the acronym you hear a lot when you deal with saving data in a database?  _reate, _ead, ... <br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /CRUD/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: CRUD"
	},

    "<br><br><b>3.</b> Match each description to the appropriate letter.<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> Editing an object",
					choices : [ "C", "R", "U", "D" ],
					correctIndex : 2
				},
				{
					questionHTML : "<b>b.</b> Adding a new object",
					choices : [ "C", "R", "U", "D" ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>c.</b> Performing a query to view the existing data",
					choices : [ "C", "R", "U", "D" ],
					correctIndex : 1
				}, {
					questionHTML : "<b>d.</b> Removing data",
					choices : [ "C", "R", "U", "D" ],
					correctIndex : 3
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hint: Create (add), Read (view), Update (edit), Delete (remove)",
	},

    "<br><br><b>4.</b> What is the name of the Apple object that lets you have an Array of View Controllers and makes the top one visible?<br>",


	{
		questionType : "multiple choice",
		choices : [
				["Stack controller", false, "Please try again." ],
				["Navigation controller", true, "Correct!" ],
				["Push queue controller", false, "Please try again." ],
				["LIFO controller", false, "Please try again." ] ]
	},


];
