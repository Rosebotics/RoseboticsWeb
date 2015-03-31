var activity = [

    "<b>1.</b> When you use the keyword <b>let</b> within a switch case statement to get the Associated values that is called <b>Value Binding</b>.  Are you required to use Value Binding or can you specify a value?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["You are required to use Value Binding.  That is the only way to use the Associated Value in a switch statement.", false, "Please try again." ],
				["You don't have to use Value Binding.  You can put a value into the case statement to filter for matching Associated values.", true, "Correct!" ]]
	},

    "<br><br>Name each Swift enum / switch feature described below.<br>",

    "<br><b>2.</b> If you REALLY need the C style behavior of a switch statement to let the code execution continue into the next case, use this statement at the end of the case.<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Raw Values", false, "Please try again." ],
				["Associated Values", false, "Please try again." ],
				["Value Binding", false, "Please try again." ],
				["Switch statement <b>where</b> clauses", false, "Please try again." ],
				["Break in a Switch Statement", false, "Please try again." ],
				["fallthrough", true, "Correct!" ]]
	},

    "<br><br><b>3.</b> When you use a switch with an enum you MUST handle all values, so you regularly add a default case that you want to do nothing.  Interestingly every case (including the default case) must have some code present.  So what do you add there to do nothing, but still have at least one line of code?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Raw Values", false, "Please try again." ],
				["Associated Values", false, "Please try again." ],
				["Value Binding", false, "Please try again." ],
				["Switch statement <b>where</b> clauses", false, "Please try again." ],
				["Break in a Switch Statement", true, "Correct!" ],
				["fallthrough", false, "Please try again." ]]
	},

    "<br><br><b>4.</b> In the lecture we pulled out the Associated values for .InProgress and set them to the variables numComplete and totalToDo.  What is that trick called?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Raw Values", false, "Please try again." ],
				["Associated Values", false, "Please try again." ],
				["Value Binding", true, "Correct!" ],
				["Switch statement <b>where</b> clauses", false, "Please try again." ],
				["Break in a Switch Statement", false, "Please try again." ],
				["fallthrough", false, "Please try again." ]]
	},

    "<br><br><b>5.</b> There is a lot more you can do with switch statements.  You could read about it <a target='_blank' href='https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/Swift_Programming_Language/ControlFlow.html#//apple_ref/doc/uid/TP40014097-CH9-ID127'>here</a> if you like. One of the things we did NOT cover in the video was using Value Binding THEN putting on an additional condition onto the case statement based on the values of the Assocated Values (for example seeing if they are equal).  What do you think that might be called (you can do the reading in the link or guess)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Raw Values", false, "Please try again." ],
				["Associated Values", false, "Please try again." ],
				["Value Binding", false, "Please try again." ],
				["Switch statement <b>where</b> clauses", true, "Correct!" ],
				["Break in a Switch Statement", false, "Please try again." ],
				["Labeled Statements", false, "Please try again." ]]
	},

    "<br><br><b>6.</b> With all these new things you can do with enums (including adding functions) and switch statement features, do you think it will be more common to see enums in Swift compared to other programming languages?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["You bet.  I'm ready to start seeing and using more enums.", true, "Correct!  Obviously this is an opinion question, but excellent job picking the correct answer!" ],
				["Probably still won't see them used much.  I don't see many enum classes in Java code examples and they have some of these features.", false, "Please try again." ]]
	},
];
