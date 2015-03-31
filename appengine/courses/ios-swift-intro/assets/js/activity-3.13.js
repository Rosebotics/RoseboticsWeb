var activity = [

    "<b>1.</b> When you make a constructor in Swift what is the name of that function?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Same name as the class name.", false, "Please try again." ],
				["Same name as the filename.", false, "Please try again." ],
				["init", true, "Correct!" ],
				["__init__", false, "Please try again." ],
				["constructor", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> In Java if you need to refer to the instance itself within a class you use the keyword, <b>this</b>.  What is the keyword for the instance in Swift?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["this (same as Java)", false, "Please try again." ],
				["obj", false, "Please try again." ],
				["any name you like so long as you define it", false, "Please try again." ],
				["self", true, "Correct!" ] ]
	},

    "<br><br><b>3.</b> Are you required to always say the word self when referring to instance variables and methods?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep.  For example self.name or self.balance (just like Python)", false, "Please try again." ],
				["You can if you REALLY want to, but usually you don't.  You MIGHT say <b>self.</b> if you want to clarify what variable you want, if a local and instance variable have the same name (common in constructors)", true, "Correct!" ] ]
	},

    "<br><br><b>4.</b> When we created an object with parameters we used the external parameters names, BankAccount(<b>name</b>: \"Dave\", <b>balance</b>: 100.00).  Where we required to say <b>name:</b> and <b>balance:</b> the external parameter names?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep. Required for all parameters in a constructor (which is similar to optional parameters which also require you to use the external parameter names)", true, "Correct!"  ],
				["You can if you REALLY want to, but you don't have to.  We just did it for fun.", false, "Please try again."] ]
	},

];
