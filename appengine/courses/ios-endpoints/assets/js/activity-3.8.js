var activity = [

    "<b>1.</b> Assume you have a variable called myNextPageToken which is a valid next page token that you could use if you wanted.<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "Which of the following are syntactically valid ways to call the _queryForQuotes method?",
					choices : [ "_queryForQuotes()", "_queryForQuotes(nil)", "_queryForQuotes(pageToken: nil)", "_queryForQuotes(myNextPageToken)", "_queryForQuotes(pageToken: myNextPageToken)" ],
					correctIndex : [0,2,4]
				}],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: ...",
	},


    "<br><br><b>2.</b> What type of variable is the nextPageToken?  Is it something magical or just an ...<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /NSString/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: NSString"
	},

];
