var activity = [

	"<b>1.</b> Name that sensor<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> Uses a on-board microprocessor to do image recognition, to find the centroid of color blobs",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 2
			},
			{
				questionHTML: "<b>b.</b> Can be used with the remote control (when it is in beacon mode) to find the remote control's distance away and heading",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 0
			},
			{
				questionHTML: "<b>c.</b> Can be used for line following by looking below the robot to check for white or black",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 1
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: Each sensor is used once",
	},

	"<br><br><b>2.</b> Sometimes when refering to sensors I use slang names. Match the slang names to the real names.<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> The line following sensor",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 1
			},
			{
				questionHTML: "<b>b.</b> The IR remote sensor",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 0
			},
			{
				questionHTML: "<b>c.</b> The camera",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 2
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: Line following uses the Color Sensor",
	},


	"<br><br><b>3.</b> Guess which sensor you might use for each task.<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> Determining the distance from the robot to the wall based on reflected IR light",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 0
			},
			{
				questionHTML: "<b>b.</b> Determining the color of the floor that the robot is sitting on",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 1
			},
			{
				questionHTML: "<b>c.</b> Determining where the color blue is at somewhere in a room",
				choices: ["Infrared Sensor", "Color Sensor", "Pixy Camera"],
				correctIndex: 2
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: Each answer is used once.",
	},



	"<br><br><b>4.</b> On the Snatch3r robot where is each sensor mounted?<br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> Color Sensor",
				choices: ["Mounted on the side of the robot", "In the very front pointing forwards", "On the bottom"],
				correctIndex: 2
			},
			{
				questionHTML: "<b>b.</b> Infrared Sensor",
				choices: ["Mounted on the side of the robot", "In the very front pointing forwards", "On the bottom"],
				correctIndex: 1
			},
			{
				questionHTML: "<b>c.</b> Pixy Camera",
				choices: ["Mounted on the side of the robot", "In the very front pointing forwards", "On the bottom"],
				correctIndex: 0
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again. Hints: Each answer is used once.",
	},
];