var activity = [

	"<b>1.</b> If there was a module named <b>m6_pc_something_cool.py</b>, on which device would you expect to run that file?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["You'd run it on your computer", true, "Correct!"],
			["You'd transfer it to the EV3 and use SSH to run it on the robot", false, "Please try again."]
		]
	},
	"<br><br><b>2.</b> If you wanted to send a message to the broker for <b>m1_pc_shared_cirlces.py</b> what MqttClient method would you use?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>mqtt_client.connect_to_pc()</code>", false, "Please try again."],
			["<code>mqtt_client.send_message('on_circle_draw', ['red', 80, 80])</code>", true, "Correct!"],
			["<code>mqtt_client.send_message('on_circle_draw', 'red', 80, 80)</code>", false, "Please try again."],
			["<code>mqtt_client.send_message('ev3', ['on_circle_draw', 'red', 80, 80])</code>", false, "Please try again."]
		]
	},

	"<br><br><b>3.</b> Are you expected to use Tkinter and MQTT in your self-selected project (that will begin after the Analog Sensors unit)?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes", true, "Correct! So be sure you understand the MQTT modules. :)"],
			["No. It's not required.", false, "Please try again."]
		]
	},

	"<br><br><b>4.</b> Have you changed the value of the LEGO_NUMBER within the <b>libs/mqtt_remote_method_calls.py</b> file yet?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Nope, not yet, still set as 99.  One person on our team will change it when we have the robot connected, commit that change, transfer the change to the EV3, then everyone else will need to git update.", true, "Correct! So be sure you understand the MQTT modules"],
			["Yep it has been changed already!", false, "Please try again.  If you DID do it, then make sure you upload that file to your EV3, so that the file is up to date on your EV3. (now mark the other answer to get the question right)"]
		]
	},
	"<br><br>Note, that every time you run an MQTT program it prints your lego number in the subscription and publish topic names.  So you'll know if it's not right.",
	
];