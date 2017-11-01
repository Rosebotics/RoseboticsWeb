var activity = [

	"<b>1.</b> Based on your background with Python in this course, do you know how to work with an <b>int</b> in Python code?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes", true, "Correct!"],
			["No", false, "Please try again."]
		]
	},

	"<br><br><b>2.</b> Do you know how to make an instance of a class (an object) and work with instance variables?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes", true, "Correct!"],
			["No", false, "Please try again."]
		]
	},

	"<br><br><b>3.</b> Therefore, do you know how to use the ColorSensor's .reflected_light_intensity and .color values?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes", true, "Correct!  They are just two int values"],
			["No", false, "Please try again."]
		]
	},

	"<br><br><b>4.</b> If the robot was sitting on a white surface what value might the <b>reflected_light_intensity</b> instance variable be?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["1023", false, "Please try again."],
			["95", true, "Correct!  That would be 95% of the light is reflected"],
			["15", false, "Please try again."],
			["0", false, "Please try again."]
		]
	},
	"<br><br><b>5.</b> Are the two statements below functionally identical?<br>",

	"<pre>if color_sensor.color == 5:<br>    do_stuff()<br<br><br>if color_sensor.color == ev3.ColorSensor.COLOR_RED:<br>    do_stuff()</pre>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes, they are basically the same statement, the top one is easier to know what it is doing and better programming practice though", true, "Correct!"],
			["No, they are different.  Only the second one will check for the value of red.", false, "Please try again."]
		]
	},

	"<br><br><b>6.</b> Why is the line <code>assert self.color_sensor</code> important?<br>",

	{
		questionType: "multiple choice",
		choices: [
			["It connects the Color Sensor", false, "Please try again."],
			["That line will crash the program right away if the physical color sensor wasn't able to connect", true, "Correct!"],
			["That line should be avoided and will always crash the program", false, "Please try again."],
			["That line shouldn't be used because you want to program to have issues later that are hard to debug", false, "Please try again."]
		]
	},
];