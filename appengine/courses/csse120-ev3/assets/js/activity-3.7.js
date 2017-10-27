var activity = [

	"<b>1.</b> If you didn't want to do something, but instead wanted to assign someone else to do the job for you.  That person would be a __________?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /delegate/i,
		correctAnswerOutput: "Correct!",
		incorrectAnswerOutput: "Please try again. Hint: It is the name of an instance variable in the MqttClient class",
	},

	"<br><br><b>2.</b> If your LEGO_NUMBER = 12 and you call the method <code>mqtt_client.connect_to_ev3()</code><br>",
	{
		questionType: "multiple choice group",
		questionsList: [{
				questionHTML: "<b>a.</b> What topic would you be subscribed to",
				choices: ["lego99/topic_name", "lego12/topic_name", "lego12/msg4ev3", "lego12/msg4pc"],
				correctIndex: 3
			},
			{
				questionHTML: "<b>b.</b> What topic would you publish to",
				choices: ["lego99/topic_name", "lego12/topic_name", "lego12/msg4ev3", "lego12/msg4pc"],
				correctIndex: 2
			}
		],
		allCorrectOutput: "Well done!",
		someIncorrectOutput: "Please try again.",
	},

	"<br><br><b>3.</b> If the program on your PC runs the command <code>mqtt_client.send_message('beep')</code> what better be true?<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["The EV3 program better not have a delegate", false, "Please try again." ],
          ["The delegate on the EV3 better not have a method called beep", false, "Please try again." ],
          ["The beep method better have only 1 parameter", false, "Please try again." ],
          ["The robot better not be on", false, "Please try again." ],
          ["The EV3 program better have a delegate set and that delegate better have a method called .beep() that receives no arguments.", true, "Correct!" ] ]
	},

	"<br><br><b>4.</b> True or False: The delegate on your EV3 program should always be an instance of the robo.Snatch3r class.<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["True. The robot should be passed into MqttClient constructor", false, "Please try again." ],
          ["False. Often the robot IS the delegate for the EV3, but it doesn't have to be", true, "Correct!" ] ]
	},

	"<br><br><b>5.</b> True or False: If your side of the program doesn't receive messages then you don't need to set the delegate within the MqttClient constructor (i.e. it's ok blank).<br>",
    {
      questionType : "multiple choice",
      choices : [
          ["True", true, "Correct! The delegate is only needed for receiving messages. No messages = No Delegate needed" ],
          ["False", false, "Please try again." ] ]
	},

];