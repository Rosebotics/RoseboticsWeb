var activity = [

	"<b>1.</b> Choose the expression that represents the <em>first</em> item in a sequence named <strong><em>seq</em></strong>: <br>",
	{
		questionType: "multiple choice",
		choices: [
			["seq[0]", true, "Correct!"],
			["seq[1]", false, "Please try again."],
			["seq", false, "Please try again."],
			["seq[len(seq)]", false, "Please try again."],
			["seq[len(seq) - 1]", false, "Please try again."],
			["0", false, "Please try again."],
			["1", false, "Please try again."],
		]
	},
	"<br><br><b>2.</b> Choose the expression that represents the <em>last</em> item in a sequence named <strong><em>seq</em></strong>: <br>",
	{
		questionType: "multiple choice",
		choices: [
			["seq[len(seq) - 1]", true, "Correct!"],
			["seq[len(seq)]", false, "Please try again."],
			["seq[1]", false, "Please try again."],
			["seq(len)", false, "Please try again."],
			["seq(len - 1)", false, "Please try again."],
			["len(seq)", false, "Please try again."],
			["len(seq) - 1", false, "Please try again."],
		]
	},
	"<br><br><b>3.</b> Given that <strong></em>seq</em></strong> is a sequence, what is the result of the expression <pre>seq[len(seq)]</pre> <br>",
	{
		questionType: "multiple choice",
		choices: [
			["An IndexError is generated.", true, "Correct!"],
			["The result is the last item of the sequence.", false, "Please try again."],
			["The result is the length of the sequence.", false, "Please try again."],
			["A syntax error is generated.", false, "Please try again."],
		]
	},
	"<br><br><b>4.</b> A fellow student turns to you and says 'I don't understand why my code is giving me an error on this line: <pre>s[len(s)] = 40</pre> I used <strong>len(s)</strong> before in my FOR loop and it seemed to work just fine!' The FOR loop to which they referred is: <pre>for k in range(len(s)): <br>    s[k] = k</pre> What do you tell them to explain why their statement <pre>s[len(s)] = 40</pre> is wrong? <br>",
	{
		questionType: "multiple choice",
		choices: [
			["Previously you used len(s) as an argument to the RANGE function. The last value that the RANGE function yields is the argument - 1 so you accessed the last element in the sequence at index len(s) - 1.  The index len(s) is actually <strong><em>one past the end of the sequence!</em></strong>", true, "Correct!"],
			["I don't know, all of your code seems valid. There is probably a problem with Eclipse.", false, "Please try again."],
			["You probably changed the length of the sequence s sometime between when you used it in your FOR loop and when you later access an element with the code <strong>s[len(s)]</strong>.", false, "Please try again."],
			["You can only use a number for the index of a sequence and len(s) is not a number.", false, "Please try again."],
		]
	},

];