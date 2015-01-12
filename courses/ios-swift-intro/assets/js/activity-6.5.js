var activity = [

    "<b>1.</b> If you want to put the numbers 7, 8, and 9 into an NSArray called nums what is the line of code you'd write?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["var nums = [7, 8, 9]", false, "Please try again." ],
				["var nums : [Int] = [7, 8, 9]", false, "Please try again." ],
				["NSArray* nums = @[7, 8, 9]", false, "Please try again." ],
				["NSArray* nums = @[@7, @8, @9]", true, "Correct!" ] ]
	},

    "<br><br><b>2.</b> An NSArray has a property to get the size of the array what is the name of that property <b>nums.________</b>?<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /count/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: count"
	},

];
