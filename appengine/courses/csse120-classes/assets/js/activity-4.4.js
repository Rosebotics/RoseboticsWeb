var activity = [

    "<b>1.</b> What RANGE statement would you use if you wanted to print <em>every third element</em> of sequence <strong><em>x</em></strong>, starting at index 1, <em>fowards</em>? Assume that the sequence will have at least 2 elements. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["range(1, len(x), 3)", true, "Correct!"],
			["range(0, len(x), 3)", false, "Please try again."],
			["range(2, len(x), 3)", false, "Please try again."],
			["range(1, len(x) - 1, 3)", false, "Please try again."],
			["range(0, len(x) - 1, 3)", false, "Please try again."],
			["range(2, len(x) - 1, 3)", false, "Please try again."],
			["range(1, len(x) - 3, 3)", false, "Please try again."],
			["range(0, len(x) - 3, 3)", false, "Please try again."],
			["range(2, len(x) - 3, 3)", false, "Please try again."],
		]
	},
	"<br><br><b>2.</b> Which of the following statements constructs a <em>list</em> containing three numbers and assigns the variable <strong><em>numbers</em></strong> to that list. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["numbers = [11, 7, 13]", true, "Correct!"],
			["numbers = (11, 7, 13)", false, "Please try again."],
			["numbers = '[11, 7, 13]'", false, "Please try again."],
			["numbers = ['11', '7', '13']", false, "Please try again."],
			["numbers = '11, 7, 13'", false, "Please try again."],
		]
	},
	"<br><br><b>3.</b> Which of the following statements changes the <em>beginning</em> element (that is, the 11) in the list <strong><em>numbers</em></strong> from the previous problem to 66. <br>",
	{
		questionType: "multiple choice",
		choices: [
			["numbers[0] = 66", true, "Correct!"],
			["numbers[len(numbers)] = 66", false, "Please try again."],
			["numbers[1] = 66", false, "Please try again."],
			["numbers[11] = 66", false, "Please try again."],
			["numbers = 66", false, "Please try again."],
			["numbers(0) = 66", false, "Please try again."],
			["numbers(11)= 66", false, "Please try again."],
			["numbers[2] = 4", false, "Please try again."],
			["numbers[3] = 4", false, "Please try again."],
			["numbers[4] = 4", false, "Please try again."],
			["numbers[len(numbers)] = 4", false, "Please try again."],
			["numbers[] = 4", false, "Please try again."],
			["numbers[4] = 2", false, "Please try again."],
			["numbers[4] = 3", false, "Please try again."],
			["numbers[13] = 4", false, "Please try again."],
			["numbers[4] = 13", false, "Please try again."],
		]
	},

];
