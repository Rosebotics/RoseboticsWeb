var activity = [

	"<b>1.</b> True or False? A <strong><em>box and pointer diagram</em></strong> helps explain the idea that a variable is a REFERENCE to its value.<br>",
	{
		questionType: "multiple choice",
		choices: [
			["True", true, "Correct!"],
			["False", false, "Please try again."],
		]
	},
	"<br><br><b>2.</b> True or False?  A <strong><em>box and pointer diagram</em></strong> helps show the CONSEQUENCES of the idea that a variable is a REFERENCE to its value. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["True", true, "Correct!"],
			["False", false, "Please try again."],
		]
	},
	"<br><br><b>3.</b> A <em>block and pointer diagram</em>: <br>",
	{
		questionType: "multiple choice",
		choices: [
			["Shows the flow of control of a program.", false, "Please try again."],
			["Gives hints for how to ship boxes safely.", false, "Please try again."],
			["Explains why cats chase laser pointers.", false, "Please try again."],
			["Shows a snapshot of the variables and their values at a given point of a program's execution.", true, "Correct!"],
		]
	},
	"<br><br><b>4.</b> True or False?  In Python, every piece of data is an <em>OBJECT</em>. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["True", true, "Correct!"],
			["False", false, "Please try again."],
		]
	},
	"<br><br><b>5.</b> True or False?  Every object has a <em>TYPE</em>. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["True", true, "Correct!"],
			["False", false, "Please try again."],
		]
	},
	"<br><br><b>6.</b> What is the <em>TYPE</em> of the object <code>98.6</code>? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>int</code> (shorthand for integer)", false, "Please try again."],
			["<code>float</code> (shorthand for floating-point number)", true, "Correct!"],
			["<code>str</code> (shorthand for string)", false, "Please try again."],
			["None of the above", false, "Please try again."],
		]
	},
	"<br><br><b>7.</b> What is the type of the object <code>48</code>? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>int</code> (shorthand for integer)", true, "Correct!"],
			["<code>float</code> (shorthand for floating-point number)", false, "Please try again."],
			["<code>str</code> (shorthand for string)", false, "Please try again."],
			["None of the above", false, "Please try again."],
		]
	},
	"<br><br><b>8.</b> What is the type of the object <code>'Once upon a time ...'</code>? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>int</code> (shorthand for integer)", false, "Please try again."],
			["<code>float</code> (shorthand for floating-point number)", false, "Please try again."],
			["<code>str</code> (shorthand for string)", true, "Correct!"],
			["None of the above", false, "Please try again."],
		]
	},
	"<br><br><b>9.</b> What is the type of the object <code>\"HELLO\"</code>? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>int</code> (shorthand for integer)", false, "Please try again."],
			["<code>float</code> (shorthand for floating-point number)", false, "Please try again."],
			["<code>str</code> (shorthand for string)", true, "Correct!"],
			["None of the above", false, "Please try again."],
		]
	},
	"<br><br><b>10.</b> Consider the line of code: <pre> c2 = rg.Circle(rg.Point(100, 300), 45) </pre> Are the following equivalent?<br> <code>c2</code> <strong><em>REFERS to</em></strong> the rg.Circle whose center is at (100, 300) and whose radius is 45. <br> <code>c2</code> <strong><em>POINTS to</em></strong> the rg.Circle whose center is at (100, 300) and whose radius is 45. <br> <code>c2</code> is the <strong><em>NAME OF</em></strong> the rg.Circle whose center is at (100, 300) and whose radius is 45. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes, they are equivalent.", true, "Correct!"],
			["No, they are NOT equivalent.", false, "Please try again."],
		]
	},
	"<br><br><b>11.</b> Consider the line of code: <pre> x = 53 </pre> True or False: <code>x</code> refers to the integer 53. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["True", true, "Correct!"],
			["False", false, "Please try again."],
		]
	},
	"<br><br><b>12.</b> Consider the line of code: <pre> s = 'Greetings, earthling!' </pre> True or False: <code>s</code> is the name of the string 'Greetings, earthling!'. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["True", true, "Correct!"],
			["False", false, "Please try again."],
		]
	},
	"<br><br><b>13.</b> Consider the line of code: <pre> s = 'Greetings, earthling!' </pre> True or False: <code>s</code> points to the string 'Greetings, earthling!'. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["True", true, "Correct!"],
			["False", false, "Please try again."],
		]
	},
	"<br><br><b>14.</b> Which of the following are CONTAINER objects? <br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
			questionHTML: "",
			choices: [
				"<code>rg.Point(0, 0)</code>",
				"<code>0</code>",
				"<code>(0, 0)</code>",
				"<code>[0, 0, 0]</code>",
				"<code>rg.Rectangle(rg.Point(3, 20), rg.Point(300, 500))</code>",
				"<code>100</code>",
				"<code>0.0</code>",
				"<code>'Hello'</code>",
				"<code>'H'</code>",
				"<code>''</code> (that is, the empty string)",
				"The Python object <code>None</code>",
				"The Python object <code>True</code>",
			],
			correctIndex: [0, 2, 3, 4, 7, 8, 9]
		}],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: There are 7 correct answers.",
	},
	"<br><br><b>15.</b> Consider the Python statement: <pre> temperature = 98.6 </pre> Which of the following is a correct box-and-pointer diagram of that statement? <blockquote> <img src='assets/img/box-and-pointer-rules-1-and-2a.png'><br><br> <img src='assets/img/box-and-pointer-rules-1-and-2b.png'></blockquote> <br>",
	{
		questionType: "multiple choice",
		choices: [
		["The FIRST diagram (on the top) is correct.", false, "Please try again."],
		["The SECOND diagram (on the bottom) is correct.", true, "Correct!"],
		]
	  },
	"<br><br><b>16.</b> Consider the Python statement: <pre> center = rg.Point(50, 30) </pre> Which of the following is a correct box-and-pointer diagram of that statement? <blockquote> <img src='assets/img/box-and-pointer-rule3a.png'> <br> <br> <img src='assets/img/box-and-pointer-rule3b.png'> <br> <br> <img src='assets/img/box-and-pointer-rule3c.png'> </blockquote> <br>",
	{
		questionType: "multiple choice",
		choices: [
		["The FIRST diagram (on the top) is correct.", false, "Please try again."],
		["The SECOND diagram (in the middle) is correct.", false, "Please try again."],
		["The THIRD diagram (on the bottom) is correct.", true, "Correct!"],
		]
	  },
	"<br><br><b>17.</b> Consider the code snippet: <pre> x = 50 <br> y = 30 <br> center = rg.Point(x, y) </pre> Which of the following is a correct box-and-pointer diagram for that snippet? <blockquote> <img src='assets/img/box-and-pointer-rules-1-2-and-3a.png'> <br> <br> <img src='assets/img/box-and-pointer-rules-1-2-and-3b.png'> </blockquote> <br>",
	{
		questionType: "multiple choice",
		choices: [
		["The FIRST diagram (on the top) is correct.", false, "Please try again."],
		["The SECOND diagram (on the bottom) is correct.", true, "Correct!"],
		]
	  },
	"<br><br><b>18.</b> Consider the code snippet: <pre> y = 7 <br> y = y * 3 </pre> The box-and-pointer diagram after the FIRST line executes is as follows: ",
	"<blockquote> <img src='assets/img/box-and-pointer-rule-4.png'> </blockquote>",
	"On a piece of scratch paper (NOT here in this quiz), re-draw the above diagram and then augment your diagram to show the effect of the SECOND line of code shown above. AFTER you draw the finished diagram on your sheet of paper compare your solution to the one below by clicking the button. <br>",
	'<button class="show-hide-solution-btn" data-target="solution18">Show / Hide Solution</button>',
	'<img width="90%" style="margin-left: 15px; display:none;" id="solution18" src="assets/img/box-and-pointer-rule-4b.png" alt="solution"><br>',

	"<br><br><b>19.</b> Consider the code snippet: <pre> x = 10 <br> y = x * 2 <br> p = rg.Point(x, y) <br> x = 40 <br> p.y = 30 </pre> The box-and-pointer diagram after the FIRST THREE lines execute is as follows:",
	"<blockquote> <img src='assets/img/box-and-pointer-rule-4c.png'> </blockquote>",
	"On a piece of scratch paper (NOT here in this quiz), re-draw the above diagram and then augment your diagram to show the effect of the last two lines of code shown above. AFTER you draw the finished diagram on your sheet of paper compare your solution to the one below by clicking the button. <br>",
	'<button class="show-hide-solution-btn" data-target="solution19">Show / Hide Solution</button>',	
	"<img width='90%' style='margin-left: 15px; display:none;' id='solution19' src='assets/img/box-and-pointer-rule-4d.png'>",
	
	"<br><br><b>20.</b> Consider the code snippet: <pre> number1 = 88 <br> number2 = number1 </pre> Explain what is WRONG about the following attempt at a box-and-pointer diagram for the above code snippet:",
	"<blockquote> <img src='assets/img/box-and-pointer-variables-never-point-to-variables.png'> <br>",
	"Nothing to turn in for this question just say in your head what is wrong with it.",
	"<br><br><b>21.</b> Consider the code snippet: <pre> r = 66 <br> r2 = r <br> center = rg.Point(90, 40) <br> circle = rg.Circle(center, r) <br> r = 35 <br> center.x = 200 <br> <br> print(r) <br> print(r2) <br> print(center) </br> print(circle) </pre> Determine IN YOUR HEAD (that is, without using a computer and without using any scratch paper) what would be printed when the above code snippet executes. Just write your answer on your sheet of paper.<br>",
	
	"<br><br><b>22.</b> On a piece of scratch paper (NOT here in this quiz), draw a box and pointer diagram for the FIRST FOUR lines of the code snippet in the previous problem. (Nothing to turn in for this problem: just draw on your paper.) <br>",
	
	'<button class="show-hide-solution-btn" data-target="solution22">Show / Hide Solution</button>',	
	"<img width='90%' style='margin-left: 15px; display:none;' id='solution22' src='assets/img/box-and-pointer-rules-summary-a.png'>",
	
	"<br><br><b>23.</b> Augment your box-and-pointer diagram for the previous problem to include the remaining two lines of its code snippet. AFTER you draw the finished diagram on your sheet of paper compare your solution to the one below by clicking the button. <br>",	
	'<button class="show-hide-solution-btn" data-target="solution23">Show / Hide Solution</button>',	
	"<img width='90%' style='margin-left: 15px; display:none;' id='solution23' src='assets/img/box-and-pointer-rules-summary-b.png'>",
	
	"<br><br><b>24.</b> Now that you have a box-and-pointer diagram for the above code snippet, consider again: What what would be printed when the above code snippet executes?  <strong> Compare your answer now to what you wrote previously when asked the same question earlier.</strong>  Are your answers the same?  If they are NOT the same, and you are uncertain which is correct, <strong> bring any questions that you have to class.</strong> <br>",
	
];

$(document).ready(function() {
	$(".show-hide-solution-btn").click(function() {
		let targetId = $(this).data("target")
		$("#" + targetId).toggle();
	});
})
