var activity = [

    "<b>1.</b> Which of the variables below are Optional variables?",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "var a : String?", "var b : String? = \"B\"", "var c = \"C\"", "let d : String? = \"D\"" ],
					correctIndex : [0, 1]
				}, ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: The d one is nonesense, there are two that are optionals.",
	},

    "<br><br><b>2.</b> The <b>.toInt()</b> function returns an Optional Int.  For example <b>b.toInt()</b> would return an Int?, what would that value of <b>b.toInt()</b> be using the declaration of <b>b</b> above?<br>",
	{
		questionType : "freetext",
		correctAnswerRegex : /nil/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: nil"
	},

    "<br><br><b>3.</b> If we had <b>var five = \"5\"</b> then did <b>five.toInt()!</b> we'd get an <b>Int</b> instead of an <b>Int?</b>.  What is that technique called when you convert an Optional into a Required variable in that way?<br>",

	{
		questionType : "multiple choice",
		choices : [
				["Optional Chaining", false, "Please try again." ],
				["Forced Unwrapping", true, "Correct!" ],
				["Optional Binding",  false, "Please try again."],
				["Automatic Unboxing", false, "Please try again." ] ]
	},

    "<br><br><b>4.</b> If you DO force unwrap an Optional and the value was nil at the time, what happens?<br>",

	{
		questionType : "multiple choice",
		choices : [
				["Silently does nothing", false, "Please try again." ],
				["Runtime error that crashes the app", true, "Correct!" ] ]
	},


];
