var activity = [

    "<b>1.</b> The Swift switch statement is a little different than some other languages mainly because...<br>",
	{
		questionType : "multiple choice",
		choices : [
				["There is no fall through, meaning you don't need to use break statements all the time", true, "Correct!  BTW if you REALLY want fall through there is a fallthrough command to override the default behavior."  ],
				["Switch statements can only be used with enum variables", false, "Please try again." ],
				["Switch statements don't have a way to make a default case", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> If you wanted to make rawValues on the Weekday enum be printable how would you have declared that enum?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["enum Weekday { case Monday = \"Monday\" ... ", false, "Please try again." ],
				["enum Weekday : String { case Monday = \"Monday\" ... ", true, "Correct!" ],
				["enum Weekday : Int { case Monday = \"Monday\" ... ", false, "Please try again." ],
				["enum Weekday : Character { case Monday = \"Monday\" ... ", false, "Please try again." ] ]
	},

    "<br><br><b>3.</b> Assuming you DID make the Weekday enum as above.  Would this line of code work?<br>var monday = Weekday(rawValue: \"Monday\")!<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep.  That's the idea with rawValues.  You can go either way, to a rawValue or from a rawValue",  true, "Correct!" ],
				["No that won't work.", false, "Please try again." ]]
	},

];
