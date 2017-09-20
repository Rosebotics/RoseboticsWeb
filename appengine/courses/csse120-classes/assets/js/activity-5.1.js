var activity = [

	"<b>1.</b> <code>11 + 22</code> evaluates to: (NOTE: write <code>error</code> if evaluating the expression generates an error.) <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^33$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>2.</b> <code>'11' + '22'</code> evaluates to: (NOTE: write <code>error</code> if evaluating the expression generates an error.) <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /1122/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>3.</b> <code>'11' + str(3 + 3) + '22'</code> evaluates to: (NOTE: write <code>error</code> if evaluating the expression generates an error.) <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /11622/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>4.</b> <code>'11' + 33</code> evaluates to: (NOTE: write <code>error</code> if evaluating the expression generates an error.) <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /error/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>5.</b> What does the following code snippet print: <pre> x = 1 <br> y = 2 <br> z = 3 <br> print(x, y, z)</pre> <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>1, 2, 3</code>", false, "Please try again."],
			["<code>1 2 3</code>", true, "Correct!"],
			["<code>6</code>", false, "Please try again."],
			["<code>123</code>", false, "Please try again."],
		]
	},
	"<br><br><b>6.</b> What does the following code snippet print: <pre> x = 1 <br> y = 2 <br> z = 3 <br> print(str(x) + str(y) + str(z))</pre> <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>1, 2, 3</code>", false, "Please try again."],
			["<code>1 2 3</code>", false, "Please try again."],
			["<code>6</code>", false, "Please try again."],
			["<code>123</code>", true, "Correct!"],
		]
	},
	"<br><br><b>7.</b> What does the following code snippet print: <pre> x = 1 <br> y = 2 <br> z = 3 <br> print(x + y + z)</pre> <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>1, 2, 3</code>", false, "Please try again."],
			["<code>1 2 3</code>", false, "Please try again."],
			["<code>6</code>", true, "Correct!"],
			["<code>123</code>", false, "Please try again."],
		]
	},
	"<br><br><b>8.</b> What does the following code snippet print: <pre> x = 1 <br> y = 2 <br> z = 3 <br> print(str(x + y) + str(z))</pre> <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^33$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},

];