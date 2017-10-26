var activity = [


	"<b>1.</b> Did you finish the remaining TODO in m5_tkinter_practice.py?<br>Only TODO 7 is required, TODO 8 is optional.<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Yes", true, "Correct!  Great."],
			["No", false, "Please try again. You need to finish that TODO now."]
		]
	},
	"<br><br><b>2.</b> When you use a button callback function with an Entry box what argument do you pass into the button callback function?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["The string that is in the Entry box", false, "Please try again."],
			["The Entry box object", true, "Correct!  Then within that function you'll get the string from the Entry box"],
			["The Tk root object", false, "Please try again."]
		]
	},

	"<br><br><b>3.</b> What method do you call on the ttk.Entry object to get the string that is in the box?<br>",
	{
		questionType: "freetext",
		correctAnswerRegex: /get/i,
		correctAnswerOutput: "Correct! The .get() method",
		incorrectAnswerOutput: "Please try again."
	},

	"<br><br><b>4.</b> Sometimes we want the user to put a number into the box.  Then we use <code>int(entry_box.get())</code> or <code>float(entry_box.get())</code> to convert the string to a number.  What happens if the user puts in something that is not a number?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["The program converts that value to 0", false, "Please try again."],
			["The program crashes and that's ok, not worried about it", true, "Correct!"],
			["The program would crash and you need to fix that!!!", false, "Please try again."]
		]
	},

];