var activity = [

    "<b>1.</b> Most of the String functions are exactly what you'd expect, so these questions will kinda focus on weird ones.<br>One that is wierd is getting the length.  How would you get the length of <b>roseHulman</b> if it was declared as:<br><b>let roseHulman = \"Rose-Hulman\"</b>?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["len(roseHulman)", false, "Please try again." ],
				["roseHulman.length", false, "Please try again." ],
				["roseHulman.size", false, "Please try again." ],
				["roseHulman.count", false, "Please try again." ],
				["countElements(roseHulman)", true, "Correct!" ]]
	},

    "<br><br><b>2.</b> What is it called when you put variables into a string like this:  <b>var myString = \"I love \\(roseHulman).\"</b><br>",
	{
		questionType : "freetext",
		correctAnswerRegex : /string interpolation/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: String Interpolation"
	},

    "<br><br><b>3.</b> Due to allowing multibyte unicode Characters, creating a substring of a string is a little wierd.  How would you use the <b>roseHulman</b> string above to get \"<b>-H</b>\"?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["roseHulman[4..<6]", false, "Please try again." ],
				["roseHulman[4...5]", false, "Please try again." ],
				["roseHulman[advance(roseHulman.startIndex, 4)...advance(roseHulman.startIndex, 6)]", false, "Please try again." ],
				["roseHulman[advance(roseHulman.startIndex, 4)...advance(roseHulman.startIndex, 5)]", true, "Correct!" ],
				["roseHulman[advance(startIndex, 4)...advance(startIndex, 5)]", false, "Please try again." ]]
	},


];
