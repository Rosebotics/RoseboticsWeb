var activity = [

	"For the next set of questions, consider the following code snippet:<pre>for j in range(3):<br>    for k in range(1, 6):<br>        print(j, end='')<br>    print()</pre>Note:  the   <code>end=''</code>   in the print statement causes a space instead of the default newline to appear after the items of the print statement are printed.  Combined with the no-argument print statement, the effect is to print all the items on each iteration of the j loop on the same line.  So there will be 3 lines printed by this problem, each with 5 numbers on it.",
	"<br><br><b>1.</b> How many lines will the above code snippet print? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^3$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>2.</b> How many numbers will be printed on each line? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^5$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>3.</b> What will appear on the FIRST line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["00000", true, "Correct!"],
			["12345", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>4.</b> What will appear on the SECOND line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["00000", false, "Please try again."],
			["11111", true, "Correct!"],
			["22222", false, "Please try again."],
			["33333", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>5.</b> What will appear on the THIRD line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["00000", false, "Please try again."],
			["11111", false, "Please try again."],
			["22222", true, "Correct!"],
			["33333", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br>For the next set of questions, consider the following code snippet:<pre>for j in range(3):<br>    for k in range(1, 6):<br>        print(k, end='')<br>    print()</pre>",
	"<b>6.</b> How many lines will the above code snippet print? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^3$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>7.</b> How many numbers will be printed on each line? <br>",

	{
		questionType: "freetext",
		correctAnswerRegex: /^5$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>8.</b> What will appear on the FIRST line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["00000", false, "Please try again."],
			["12345", true, "Correct!"],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>9.</b> What will appear on the SECOND line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["11111", false, "Please try again."],
			["12345", true, "Correct!"],
			["23456", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>10.</b> What will appear on the THIRD line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["12345", true, "Correct!"],
			["23456", false, "Please try again."],
			["34567", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br>For the next set of questions, consider the following code snippet:<pre>for j in range(3):<br>    for k in range(1, 6):<br>        print(j + k, end='')<br>    print()</pre>",
	"<b>11.</b> How many lines will the above code snippet print? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^3$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>12.</b> How many numbers will be printed on each line? <br>",

	{
		questionType: "freetext",
		correctAnswerRegex: /^5$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>13.</b> What will appear on the FIRST line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["12345", true, "Correct!"],
			["23456", false, "Please try again."],
			["34567", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>14.</b> What will appear on the SECOND line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["12345", false, "Please try again."],
			["23456", true, "Correct!"],
			["34567", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>15.</b> What will appear on the THIRD line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["12345", false, "Please try again."],
			["23456", false, "Please try again."],
			["34567", true, "Correct!"],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br>For the next set of questions, consider the following code snippet:<pre>for j in range(4):<br>    for k in range(1, j + 2):<br>        print(j + k, end='')<br>    print()</pre>",
	"<b>16.</b> How many lines will the above code snippet print? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^4$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>17.</b> What will appear on the FIRST line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["1234", false, "Please try again."],
			["1", true, "Correct!"],
			["23", false, "Please try again."],
			["345", false, "Please try again."],
			["4567", false, "Please try again."],
			["12", false, "Please try again."],
			["123", false, "Please try again."],
			["1234", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>18.</b> What will appear on the SECOND line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["1234", false, "Please try again."],
			["1", false, "Please try again."],
			["23", true, "Correct!"],
			["345", false, "Please try again."],
			["4567", false, "Please try again."],
			["12", false, "Please try again."],
			["123", false, "Please try again."],
			["1234", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>19.</b> What will appear on the THIRD line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["1234", false, "Please try again."],
			["1", false, "Please try again."],
			["23", false, "Please try again."],
			["345", true, "Correct!"],
			["4567", false, "Please try again."],
			["12", false, "Please try again."],
			["123", false, "Please try again."],
			["1234", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
	"<br><br><b>20.</b> What will appear on the FOURTH line that is printed? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["1234", false, "Please try again."],
			["1", false, "Please try again."],
			["23", false, "Please try again."],
			["345", false, "Please try again."],
			["4567", true, "Correct!"],
			["12", false, "Please try again."],
			["123", false, "Please try again."],
			["1234", false, "Please try again."],
			["None of the above.", false, "Please try again."],
		]
	},
];