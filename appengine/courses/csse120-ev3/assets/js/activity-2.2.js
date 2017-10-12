var activity = [

	"When we first discussed callback functions we made simple callbacks like this:<br>",
	"<pre>def print_hello(state):<br>    if state:<br>        print('hello')<br><br><br>btn = ev3.Button()<br>btn.on_down = print_hello</pre>",
	"<b>1.</b> What is the problem with that style of simple callback?<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["It doesn't work", false, "Please try again." ],
          ["You can only use 1 line of code", false, "Please try again." ],
          ["You can't pass parameters to the callback other than state", true, "Correct!" ],
          ["There are no parameters at all", false, "Please try again." ] ]
    },

	"<br><br>Consider the code templates below<br>",
	"<pre>keyword name(arguments):<br>    print('Can have')<br>    print('many statements')</pre>",
	"<pre>name = keyword arguments:<br>    print('Can have only 1 statement')</pre>",

	"<b>2.</b> What is the keyword in code snippet 1 to make a function?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /def/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},

	"<br><br><b>3.</b> What is the keyword in code snippet 2 to make a function?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /lambda/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},

	"<br><br>Consider the following code<br>",
	"<pre>def print_multiples(state, my_str, n):<br>    if state:<br>        for k in range(n):<br>            print(my_str)<br><br><br>btn = ev3.Button()<br>btn.on_down = lambda state: print_multiples(state, 'Dave', 3)</pre>",
	"<b>4.</b> When you press the down button what all happens?<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> What happens first ",
				choices: ["The print_multiples function prints 'Dave' 3 times, one 'Dave' per line",
					"The print_multiples function runs but prints nothing",
					"The lambda function calls the def function print_multiples, passing in False, 'Dave', and 3",
					"The lambda function calls the def function print_multiples, passing in True, 'Dave', and 3",
					"Under the hood the system calls btn.on_down(True)",
					"Under the hood the system calls btn.on_down(False)"
				],
				correctIndex: 4
			},
			{
				questionHTML: "<b>b.</b> What happens second",
				choices: ["The print_multiples function prints 'Dave' 3 times, one 'Dave' per line",
					"The print_multiples function runs but prints nothing",
					"The lambda function calls the def function print_multiples, passing in False, 'Dave', and 3",
					"The lambda function calls the def function print_multiples, passing in True, 'Dave', and 3",
					"Under the hood the system calls btn.on_down(True)",
					"Under the hood the system calls btn.on_down(False)"
				],
				correctIndex: 3
			},
			{
				questionHTML: "<b>c.</b> What happens thrid",
				choices: ["The print_multiples function prints 'Dave' 3 times, one 'Dave' per line",
					"The print_multiples function runs but prints nothing",
					"The lambda function calls the def function print_multiples, passing in False, 'Dave', and 3",
					"The lambda function calls the def function print_multiples, passing in True, 'Dave', and 3",
					"Under the hood the system calls btn.on_down(True)",
					"Under the hood the system calls btn.on_down(False)"
				],
				correctIndex: 0
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again.",
	},
	"<br><br><b>5.</b> When the down button is released what will happen?<br>",

	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> What happens first ",
				choices: ["The print_multiples function prints 'Dave' 3 times, one 'Dave' per line",
					"The print_multiples function runs but prints nothing",
					"The lambda function calls the def function print_multiples, passing in False, 'Dave', and 3",
					"The lambda function calls the def function print_multiples, passing in True, 'Dave', and 3",
					"Under the hood the system calls btn.on_down(True)",
					"Under the hood the system calls btn.on_down(False)"
				],
				correctIndex: 5
			},
			{
				questionHTML: "<b>b.</b> What happens second",
				choices: ["The print_multiples function prints 'Dave' 3 times, one 'Dave' per line",
					"The print_multiples function runs but prints nothing",
					"The lambda function calls the def function print_multiples, passing in False, 'Dave', and 3",
					"The lambda function calls the def function print_multiples, passing in True, 'Dave', and 3",
					"Under the hood the system calls btn.on_down(True)",
					"Under the hood the system calls btn.on_down(False)"
				],
				correctIndex: 2
			},
			{
				questionHTML: "<b>c.</b> What happens thrid",
				choices: ["The print_multiples function prints 'Dave' 3 times, one 'Dave' per line",
					"The print_multiples function runs but prints nothing",
					"The lambda function calls the def function print_multiples, passing in False, 'Dave', and 3",
					"The lambda function calls the def function print_multiples, passing in True, 'Dave', and 3",
					"Under the hood the system calls btn.on_down(True)",
					"Under the hood the system calls btn.on_down(False)"
				],
				correctIndex: 1
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again.",
	},

	"<br><br>Categorize each name below as either an instance variable of type _______ or as a method?<br>",
	"Then select which class it belongs to <b>ev3.Button</b>, <b>ev3.TouchSensor</b>, or <b>ev3.RemoteControl</b>.<br>",
	"Then select if that name is used with States or Events<br><br>",

	"<b>6.</b> on_blue_up<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> <b>on_blue_up</b> is the name for an...",
				choices: ["Instance variable of type bool", "Instance variable of type function", "method"],
				correctIndex: 1
			},
			{
				questionHTML: "<b>b.</b> <b>on_blue_up</b> is part of which class?",
				choices: ["ev3.Button", "ev3.TouchSensor", "ev3.RemoteControl"],
				correctIndex: 2
			},
			{
				questionHTML: "<b>c.</b> <b>on_blue_up</b> is used when...",
				choices: ["working with States", "working with Events"],
				correctIndex: 1
			},
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again.",
	},

	"<br><br><b>7.</b> process<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> <b>process</b> is the name of a...",
				choices: ["Instance variable of type bool", "Instance variable of type function", "method"],
				correctIndex: 2
			},
			{
				questionHTML: "<b>b.</b> <b>process</b> is part of which class(es)?",
				choices: ["ev3.Button", "ev3.TouchSensor", "ev3.RemoteControl"],
				correctIndex: [0, 2]
			},
			{
				questionHTML: "<b>c.</b> <b>process</b> is used when...",
				choices: ["working with States", "working with Events"],
				correctIndex: 1
			},
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again.",
	},

	"<br><br><b>8.</b> is_pressed<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> <b>is_pressed</b> is the name for an...",
				choices: ["Instance variable of type bool", "Instance variable of type function", "method"],
				correctIndex: 0
			},
			{
				questionHTML: "<b>b.</b> <b>is_pressed</b> is part of which class?",
				choices: ["ev3.Button", "ev3.TouchSensor", "ev3.RemoteControl"],
				correctIndex: 1
			},
			{
				questionHTML: "<b>c.</b> <b>is_pressed</b> is used when...",
				choices: ["working with States", "working with Events"],
				correctIndex: 0
			},
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again.",
	},

	"<br><br><b>9.</b> With our robot how many instances would you make (max) for each of the following classes?<br>",

    {
		questionType : "multiple choice group",
		questionsList : [
			{
			  questionHTML : "<b>a.</b> ev3.Button",
			  choices : [ "0", "1", "4", "As many as you want!" ],
			  correctIndex : 1
			},
			{
			  questionHTML : "<b>a.</b> ev3.TouchSensor",
			  choices : [ "0", "1", "4", "As many as you want!" ],
			  correctIndex : 1
			},
			{
			  questionHTML : "<b>a.</b> ev3.RemoteControl",
			  choices : [ "0", "1", "4", "As many as you want!" ],
			  correctIndex : 2
			},],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again.",
	  },

];