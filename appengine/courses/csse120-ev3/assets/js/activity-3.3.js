var activity = [

	"Consider the code below",
	"<pre>root = tkinter.Tk()<br>frame1 = ttk.Frame(_____, padding=10)<br>frame1.grid()<br>hello_button = ttk.Button(_____, text='Forward')<br>hello_button.grid()</pre>",
	"<b>1.</b> What goes into the first blank?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /root/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},
	"<br><br><b>2.</b> What goes into the second blank?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /frame1/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again."
	},

	"<br><br><b>3.</b> Is the following code the correct syntax to print 'Hello' if the button is pressed?<br>",
	"<pre>hello_button.command = lambda: print('Hello')</pre>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes, that line of code looks good!", false, "Please try again."],
			["No, that is not the right syntax for connecting a callback function", true, "Correct!"]
		]
	},

	"<br><br><b>4.</b> The syntax used to connect a callback function (as attempted above), is most similar to what Python syntax style<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Python syntax for working with objects", false, "Please try again."],
			["Python syntax for working with lists", false, "Please try again."],
			["Python syntax for working with dictionaries", true, "Correct!"],
			["Python syntax for working with strings", false, "Please try again."]
		]
	},
	"<br><br>Consider these two approaches to printing 'Hello' on a button click.",
	"<pre>hello_button = ttk.Button(frame1, text='Forward')<br>hello_button['command'] = lambda: print('Hello')<br>hello_button.grid()</pre>",
	"<pre>hello_button = ttk.Button(frame1, text='Forward')<br>hello_button['command'] = lambda: print_hello()<br>hello_button.grid()<br><br>def print_hello:<br>    print('Hello')</pre>",

	"<b>5.</b> Which approach above works<br>",
	{
		questionType: "multiple choice",
		choices: [
			["The top one", false, "Please try again."],
			["The bottom one", false, "Please try again."],
			["They both work", true, "Correct!"],
			["Neither works", false, "Please try again."]
		]
	},
	"<br><br><b>6.</b> Which approach above is easiest for this problem?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["The top one", true, "Correct!"],
			["The bottom one", false, "Please try again."],
			["Neither", false, "Please try again."]
		]
	},
	"<br><br><b>7.</b> Which approach above is more future proof if you change your mind on what the button should do?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["The top one", false, "Please try again."],
			["The bottom one", true, "Correct!"],
			["Neither", false, "Please try again."]
		]
	},
];