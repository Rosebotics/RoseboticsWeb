var activity = [

	"Consider this code snippet:",
	"<pre>ev3.Leds.set_color(__________, ____________)</pre>",
	"<b>1.</b> Fill in the blanks.<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> What values might go into blank 1",
				choices: ["ev3.Leds.LEFT", "ev3.Leds.BLACK", "ev3.Leds.RED", "ev3.Leds.RIGHT", "ev3.Leds.BLUE", "ev3.Leds.AMBER", "ev3.Leds.GREEN", ],
				correctIndex: [0, 3]
			},
			{
				questionHTML: "<b>a.</b> What values might go into blank 2",
				choices: ["ev3.Leds.LEFT", "ev3.Leds.BLACK", "ev3.Leds.RED", "ev3.Leds.RIGHT", "ev3.Leds.BLUE", "ev3.Leds.AMBER", "ev3.Leds.GREEN", ],
				correctIndex: [1, 2, 5, 6]
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: The LEDs are red/green LEDs.  No combination of red and green make BLUE",
	},

	"<br><br>Consider the following poorly written code snippet:",
	"<pre>ev3.Sound.tone(1000, 5).wait()</pre>",
	"<b>2.</b> What frequency would this command try to play?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["1 Hz", false, "Please try again."],
			["5 Hz", false, "Please try again."],
			["1000 Hz", true, "Correct!"],
			["5000 Hz", false, "Please try again."]
		]
	},
	"<br><br><b>3.</b> For how long would the robot play that frequency?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["5 millisecond", true, "Correct!"],
			["1000 milliseconds", false, "Please try again."],
			["5 seconds", false, "Please try again."],
			["1000 seconds", false, "Please try again."],
			["5000 seconds", false, "Please try again."]
		]
	},
	"<br><br><b>4.</b> Write the line of code needed to play 500 Hz for 1 second.<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /ev3.Sound.tone\(500\,\s*1000\)/,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
		showAnswerOutput: "Here is the answer: ev3.Sound.tone(500, 1000)"
	},
	"<br><br><b>5.</b> When using the ev3.Screen it's common to temporarially turn off the Brickman program.  Why?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["When Brickman is running there is no way to draw to the screen", false, "Please try again."],
			["You wouldn't ever turn off Brickman", false, "Please try again."],
			["Brickman will refresh the screen every 1 second or so with the Brickman UI, so it's annoying", true, "Correct!"],
		]
	},
	"<br><br><b>6.</b> What command do you type into the SSH terminal to temporarially stop the Brickman program<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /sudo chvt 6/,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},
	"<br><br><b>7.</b> What command do you type into the SSH terminal to restart the Brickman program<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /sudo chvt 1/,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},
	"<br><br><b>8.</b> What is the password to use sudo on our robots?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /^C\$\$E120$/,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again.",
	},


];