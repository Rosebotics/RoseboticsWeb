var activity = [

	"<b>1.</b> On a piece of paper, implement the following function, per its doc-string.  You do NOT have to be completely correct, just try to get the main idea correct, with guidance from the reading. After you have made a reasonable try, compare your code to the solution below by clicking the button. <pre>def make_simple_list(m, n):<br>    '''<br>    Returns the list [m, m+1, m+2, ... n],<br>    where m and n are the given arguments.<br>    For example, if m is 5 and n is 13,<br>    then this function returns:<br>        [5, 6, 7, 8, 9, 10, 11, 12, 13]<br>    '''</pre>",
	'<button class="show-hide-solution-btn" data-target="solution1">Show / Hide Solution</button>',
	"<br><div style='display:none' id='solution1'>Here is a solution to the previous problem.  Compare your solution to it.  There are many ways to solve this problem, your solution may be different. Bring any questions about this problem to class.<pre>def make_simple_list(m, n):<br>    ''' Same specification as on the previous item. '''<br>    seq = []<br>    for k in range(m, n + 1):<br>        seq = seq + [k]<br>    return seq<br></pre></div>",
	"<br><br><b>2.</b> Consider the following code.  What should the missing statement be (that is, the statement marked ???).<pre>def make_list(n):<br>    '''<br>    Returns the list [1, 2, 3, ... n],<br>    where n is the given argument.<br>    For example, if n is 5,<br>    then this function returns:<br>        [1, 2, 3, 4, 5]<br>    '''<br>    seq = []<br>    for k in range(n):<br>        ???<br>    return seq<br></pre> <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>        seq = seq[k]</code>", false, "Please try again."],
			["<code>        seq = seq[k + 1 ]</code>", false, "Please try again."],
			["<code>        seq = seq + k</code>", false, "Please try again."],
			["<code>        seq = seq + k + 1</code>", false, "Please try again."],
			["<code>        seq = seq[k] + [k]</code>", false, "Please try again."],
			["<code>        seq[k] = seq[k] + [k]</code>", false, "Please try again."],
			["<code>        seq = seq + [k + 1]</code>", true, "Correct!"],
			["<code>        seq = seq + seq[k]</code>", false, "Please try again."],
			["<code>        seq = seq + seq[k + 1]</code>", false, "Please try again."],
		]
	},
	"<br><br><b>3.</b> What does the following code snippet print: <pre> x = 0 <br> for k in range(5): <br>     x = x + (2 * k) <br> print(x) </pre> <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^20$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>4.</b> What does the following code snippet print: (Note: If your answer includes any commas, put a SINGLE SPACE after each comma, to help out the automated grading.) <pre> x = [] <br> for k in range(5): <br>     x = x + [(2 * k)] <br> print(x) </pre> <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^\[0, 2, 4, 6, 8\]$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>5.</b> What does the following code snippet print: (Hint: ignore the comma in the code, but ask in class why it is necessary.) (Note: If your answer includes any commas, put a SINGLE SPACE after each comma, to help out the automated grading.) <pre> x = () <br> for k in range(5): <br>     x = x + ((2 * k),) <br> print(x) </pre> <br>",

	{
		questionType: "freetext",
		correctAnswerRegex: /^\(0, 2, 4, 6, 8\)$/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>6.</b> What does the following code snippet print: (Note: If your answer includes any commas, put a SINGLE SPACE after each comma, to help out the automated grading.) <pre> x = '' <br> for k in range(5): <br>     x = x + str(2 * k) <br> print(x) </pre> <br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /02468/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br>In the above question, make sure that you understand why applying the built-in <code>str</code> function is necessary.",
];

$(document).ready(function () {
	$(".show-hide-solution-btn").click(function () {
		let targetId = $(this).data("target")
		$("#" + targetId).toggle();
	});
})