var activity = [

    "<b>1.</b> What was the superclass to the BankAccount class?<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /NSObject/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: NSObject"
	},

    "<br><br><b>2.</b> What was the return type for the initializer?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["BankAccount*", false, "Please try again." ],
				["NSObject*", false, "Please try again." ],
				["id", true, "Correct!  Yes, it is weird that id is not just NSObject*, but that's just how it works. id is VERY similar to NSObject*, but always use id as the generic pointer." ],
				["AtmBankAccount*", false, "Please try again." ] ]
	},

];
