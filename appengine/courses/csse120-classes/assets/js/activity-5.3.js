var activity = [
	"<pre>def foo1(seq):<br>    total = 0<br>    for k in range(len(seq) /\/ 2):<br>        total = total + seq[1 + (2 * k)]<br>    return total</pre>",
	"<b>1.</b> To what number does <code>foo1([3])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^0$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},


	"<br><br><b>2.</b> To what number does <code>foo1([3, 6])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^6$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},

	"<br><br><b>3.</b> To what number does <code>foo1([3, 6, 1, 4, 9, 5])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^15$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},

	"<br><pre>def foo2(seq):<br>    total = 0<br>    for k in range(1, len(seq), 2):<br>        total = total + seq[k]<br>    return total</pre>",
	"<b>4.</b> To what number does <code>foo2([3])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^0$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},

	"<br><br><b>5.</b> To what number does <code>foo2([3, 6])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^6$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},
	"<br><br><b>6.</b> To what number does <code>foo2([3, 6, 1, 4, 9, 5])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^15$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},
	"<br><pre>def foo3(seq):<br>    total = 0<br>    m = 1<br>    for _ in range(len(seq) /\/ 2):<br>        total = total + seq[m]<br>        m = m + 2<br>    return total<br></pre>",
	"<b>7.</b> To what number does <code>foo3([3])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^0$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},
	"<br><br><b>8.</b> To what number does <code>foo3([3, 6])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^6$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},
	"<br><br><b>9.</b> To what number does <code>foo3([3, 6, 1, 4, 9, 5])</code> evaluate? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^15$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},
	"<br><br>For the next set of questions, consider the following two attempts at a function that <strong>returns the first negative item in the sequence of numbers, or <code>None</code> if the sequence contains no negative numbers.</strong>  One function is correct and the other is wrong.  <pre>def find1(numbers):<br>    for k in range(len(numbers)):<br>        if numbers[k] < 0:<br>            return numbers[k]<br>        else:<br>            return None<br><br><br>def find2(numbers):<br>    for k in range(len(numbers)):<br>        if numbers[k] < 0:<br>            return numbers[k]<br>    return None<br></pre>",
	"<br><br><b>10.</b> What gets returned by the function call <code>find1( [-3, 6, 1, 4, 9, 5] )</code>? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^-3$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>11.</b> What gets returned by the function call <code>find1( [3, 6, 1, 4, 9, 5] )</code>? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^None$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
		showAnswerOutput: "Here is the answer: None"
	},
	"<br><br><b>12.</b> What gets returned by the function call <code>find2( [3, 6, 1, 4, 9, 5] )</code>? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^None$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
		showAnswerOutput: "Here is the answer: None"
	},
	"<br><br><b>13.</b> What gets returned by the function call <code>find1( [3, -6, 1, 4, 9, 5] )</code>? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^None$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
		showAnswerOutput: "Here is the answer: None"
	},
	"<br><br><b>14.</b> What gets returned by the function call <code>find2( [3, -6, 1, 4, 9, 5] )</code>? <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^-6$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>15.</b> Which attempt is correct? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>find1</code>", false, "Please try again."],
			["<code>find2</code>", true, "Correct!"],
		]
	}
];