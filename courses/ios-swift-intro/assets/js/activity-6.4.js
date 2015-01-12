var activity = [

    "<b>1.</b> When you use an enum with a switch statement and you want to do the same thing for multiple enum options how do you do that?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Just like Swift.  Put the options on the same case line and separate them with a comma", false, "Please try again." ],
				["You make multiple case statements and let the code intentionally fall through so that the group of cases all run the same code.", true, "Correct!" ] ]
	},

    "<br><br><b>2.</b> If you had an enum called State and wanted an option for Ready, what name should you make that option?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Ready", false, "Please try again." ],
				["State_Ready", false, "Please try again." ],
				["StateReady", true, "Correct!" ],
				["NSReady", false, "Please try again." ] ]
	},

    "<br><br><b>3.</b> If you had an enum for Month and you had a variable <b>Month m = MonthDecember;</b> what would the rawvalue be?<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /11/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer is 11"
	},
];
