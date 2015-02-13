var activity = [
    "<b>1.</b> In order to get the special empty message we had to make a new prototype cell in the Storyboad, and modify what two methods for the table....<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "canEditRowAtIndexPath", "cellForRowAtIndexPath", "didSelectRowAtIndexPath", "numberOfRowsInSection", "numberOfSectionsInTableView" ],
					correctIndex : [1, 3]
				}],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again.",
	},

    "<br><br><b>2.</b> If we are adding quotes we had to make a special case for self.movieQuotes.count == what?<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /1/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "The answer is 1"
	},

    "<br><br><b>3.</b> If we did care about animations would we need to make that special cases?<br>",

	{
		questionType : "multiple choice",
		choices : [
				["Yes. It's still be required.", false, "Please try again." ],
				["No. You could just tableView.reloadData() always and it'd work fine (with no animations)", true, "Correct!" ]]
	},

];
