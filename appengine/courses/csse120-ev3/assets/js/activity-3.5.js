var activity = [

	"Consider the code snippet below:",
	"<pre>button1 = ttk.Button(main_frame, text='Button 1')<br>button1.grid(row=0, column=1)<br><br>button2 = ttk.Button(main_frame, text='Button 2')<br>button2.grid(row=0, column=0)</pre>",
	"<b>1.</b> Which button will be on the right?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Button 1", true, "Correct!"],
			["Button 2", false, "Please try again."],
			["Neither, they will be stacked vertically", true, "Correct!"]
		]
	},
	"<br>Imagine we changed the code above to be:",
	"<pre>button1 = ttk.Button(main_frame, text='Button 1')<br>button1.grid(row=9, column=10)<br><br>button2 = ttk.Button(main_frame, text='Button 2')<br>button2.grid(row=9, column=3)</pre>",

	"<b>2.</b> If there are no other buttons, will this new version of the code be the same layout or different?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["It will actually layout exactly the same since the empty rows and columns will be 0 pixels big", true, "Correct!"],
			["The second version of the code will produce a different layout", false, "Please try again."]
		]
	},

	"<br><br><b>3.</b> In this video we snuck in a VERY important skill, <b>keyboard callback functions</b>.<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> Mark the ways that keyboard callbacks are the same as button callbacks",
				choices: ["They both use lambda", "They both use a dictionary-like syntax", "They both call functions when their event occurs", "They both receive an argument by default called <b>event</b>"],
				correctIndex: [0, 2]
			},
			{
				questionHTML: "<b>b.</b> Mark which things are true of a <b>button</b> callback function",
				choices: ["Uses a dictionary-like syntax", "It is bound to root", "It has a built in argument called event", "It uses a method called .bind() which receives two parameters, a string and a lambda function", "It is set on a button"],
				correctIndex: [0, 4]
			},
			{
				questionHTML: "<b>c.</b> Mark which things are true of a <b>keyboard</b> callback function",
				choices: ["Uses a dictionary-like syntax", "It is bound to root", "It has a built in argument called event", "It uses a method called .bind() which receives two parameters, a string and a lambda function", "It is set on a button"],
				correctIndex: [1, 2, 3]
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: a --> 2 boxes, b --> 2 boxes, c --> 3 boxes",
	},

	"<br><br><b>4.</b> Which of the following strings represent keyboard keys that can be used with the .bind() function<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "Review your code to answer this problem, as you might guess wrong",
				choices: ["&lt;Up&#62;", "&lt;up&#62;", "&lt;Space&#62;", "&lt;space&#62;", "&lt;a&#62;", "&lt;b&#62;", "&lt;c&#62;"],
				correctIndex: [0, 3, 4, 5, 6]
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: <Space> is NOT right.",
	},

];