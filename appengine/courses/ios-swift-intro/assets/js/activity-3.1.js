var activity = [

    "<b>1.</b> In the Basics.playground file how did we declare a constant and variable?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["var for a variable, const for a constant", false, "Please try again." ],
				["int for a variable, const for a constant", false, "Please try again." ],
				["var for a variable, let for a constant", true, "Correct!" ],
				["var for a variable, #define for a constant", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> If you wanted to make a Character variable (and be sure it's a Character not a String) which syntax below is correct?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["let myChar = 'B'", false, "Please try again." ],
				["let myChar = \"B\"", false, "Please try again." ],
				["var myChar = \"B\"", false, "Please try again.  I believe that Swift would infer myChar as a String instead of a Character." ],
				["var myChar : Character = \"B\"", true, "Correct!" ],
				["Character myChar = \"B\"", false, "Please try again."  ] ]
	},

    "<br><br><b>3.</b> If you wanted to print out the variable myChar, for example displaying \"myChar = B\", what syntax <b>should</b> you use?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["println(\"myChar = \\(myChar)\")", true, "Correct!"],
				["println(\"myChar\" + \"\\(myChar)\")", false, "Please try again.  Works but not recommended." ],
				["println(\"myChar = \" + myChar)", false, "Please try again.  Works but not recommended." ],
				["println(\"myChar = %s\", myChar)", false, "Please try again."  ] ]
	},

];
