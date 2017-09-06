var activity = [

	"<b>1.</b> What is the value of <code>x</code> after the following code executes?<br>",
	"<img src='assets/img/accumulators-1.png' alt='code'><br><br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^8$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},

	"<br><br><b>2.</b> What is the value of <code>y</code> after the following code executes?<br>",
	"<img src='assets/img/accumulators-2.png' alt='y = 2  y = y * 2  y = y * 3'><br><br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^12$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},


	"<br><br> For the next 3 questions, consider the following code (you are encouraged to make notes to trace the code).<br>",
	"<img src='assets/img/accumulators-3.png' alt='x = 1  y = 2  z = x + y  x = x + 2  y = y * 2  z = z + x + y  x = x + 3  y = y * 3  z = z + x + y'><br>",
	"<b>3.</b> What is the value of <code>x</code> after the above code executes?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^6$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},

	"<br><br><b>4.</b> What is the value of <code>y</code> after the above code executes? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^12$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>5.</b> What is the value of <code>z</code> after the above code executes? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^28$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	}
];