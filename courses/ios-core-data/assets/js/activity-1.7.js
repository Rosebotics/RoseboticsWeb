var activity = [

    "<b>1.</b> One little detail we picked up when creating the Detail View Controller Storyboard was creating UILabels with more than 1 line.  In this video we wanted the UILabel to be able to grow to whatever size it wants.  What value did we use for that?  Lines = _____<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /0/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "The answer is 0"
	},

    "<br><br><b>2.</b>  We used a <b>Selection</b> segue here (instead of a Manual segue) which automatically fired.  However we had to do some work just before it fires.  What method did we use to solve that problem?  (i.e. when did we pass in the movieQuote)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["prepareForSegue", true, "Correct!" ],
				["performSegue", false, "Please try again." ],
				["didSelectRowAtIndexPath", false, "Please try again." ],
				["cellForRowAtIndexPath", false, "Please try again." ] ]
	},

];
