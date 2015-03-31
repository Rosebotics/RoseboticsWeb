var activity = [

    "<b>1.</b> In this video we had to override a table view delegate method to determine if a row could be deleted and a method to actually delete the data.  What were those methods called?<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "canEditRowAtIndexPath", "cellForRowAtIndexPath", "didSelectRowAtIndexPath", "numberOfRowsInSection", "commitEditingStyle" ],
					correctIndex : [0, 4]
				}],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again.",
	},

    "<br><br><b>2.</b> We had to <b>yet again</b> make a special case due to my special empty message.  For deleting quotes the special case is for <b>movieQuotes.count</b> just becoming what?<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /0/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "The answer is 0"
	},


];
