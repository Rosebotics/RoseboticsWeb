var activity = [

	"<b>1.</b> What is the name (address) of the Rose-Hulman MQTT broker (server) that you will use for 100% of your MQTT work?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["mosquitto.csse.rose-hulman.edu", true, "Correct!"],
			["broker.mqttdashboard.com", false, "Please try again."],
			["35.194.247.175", false, "Please try again."],
			["lego99.wlan.rose-hulman.edu", false, "Please try again."]
		]
	},

	"<br><br><b>2.</b> What is the name (address) of the free public MQTT broker (server) that I used in this video due to their cool packet sniffer tool?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["mosquitto.csse.rose-hulman.edu", false, "Please try again."],
			["broker.mqttdashboard.com", true, "Correct!"],
			["35.194.247.175", false, "Please try again."],
			["lego99.wlan.rose-hulman.edu", false, "Please try again."]
		]
	},

	"<br><br><b>3.</b> Fill in the blank: Under the hood the MQTT messages we have a topic and a message, then the message we format as JSON so that we can send more complex messages.  Within that JSON message there are two fields.  The first field is called '______', which is a string that must match the name of a method to call on the other end.<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /type/i,
		correctAnswerOutput: "Correct! Yeah, perhaps a better name would've been 'method_name'",
		incorrectAnswerOutput: "Please try again."
	},

	"<br><br><b>4.</b> Fill in the blank: The second field is called '______' which is a <b>list</b> of the arguments to the method.<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /payload/i,
		correctAnswerOutput: "Correct! Yeah, perhaps a better name would've been 'arguments'",
		incorrectAnswerOutput: "Please try again."
	},

	"<br><br><b>5.</b> This video was titled '<b>MQTT Under the Hood</b>'.  When you write your code for the MQTT modules, do you think you'll need to know all the details about topic names, JSON formatting, etc?<br>",
    {
		questionType : "multiple choice",
		choices : [
			["Of course I'll need to know and remember all of these details!", false, "Please try again." ],
			["Not really.  It's good to know, but the library will handle many of the details for me", true, "Correct!" ]]
	  },
];