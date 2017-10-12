var activity = [

	"<b>1.</b> If you hit Ctrl C to exit a program from the SSH Terminal, what is that most like?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["It's like hitting the back button to exit a program", false, "Please try again."],
			["It's like an intentional crash of your program to exit", true, "Correct!"]
		]
	},

	"<br><br><b>2.</b> Mark each of the following as a State or as an Event.<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> The door is shut",
				choices: ["State", "Event"],
				correctIndex: 0
			},
			{
				questionHTML: "<b>b.</b> The door just shut",
				choices: ["State", "Event"],
				correctIndex: 1
			},
			{
				questionHTML: "<b>c.</b> The button is pressed",
				choices: ["State", "Event"],
				correctIndex: 0
			}, {
				questionHTML: "<b>d.</b> The button just got pressed",
				choices: ["State", "Event"],
				correctIndex: 1
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: There is a pattern to the solution.",
	},


	"<br><br><b>3.</b> What does your code need to do to use States versus Events<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> Event",
				choices: ["Code is polling to check the status of a sensor", "Something happen, now a function needs to be called"],
				correctIndex: 1
			},
			{
				questionHTML: "<b>b.</b> State",
				choices: ["Code is polling to check the status of a sensor", "Something happen, now a function needs to be called"],
				correctIndex: 0
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again.",
	},

];