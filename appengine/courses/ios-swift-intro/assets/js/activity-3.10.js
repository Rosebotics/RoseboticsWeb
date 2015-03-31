var activity = [

    "<b>1.</b> Another function that receives a Closure is the <b>.sort()</b> function on an array (we talked about this one in the questions before).  Let's say we were again sorting an array of UIButtons based on their .tag property, such that the correct fully verbose Closure expression syntax is:<br>buttons.sort({ (a : UIButton, b : UIButton) -> Bool in return a.tag < b.tag })<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "What options below are valid shorthand syntax?",
					choices : [ "buttons.sort { (a : UIButton, b : UIButton) -> Bool in return a.tag < b.tag }",
					            "buttons.sort { return $0.tag < $1.tag }",
					            "buttons.sort { $0.tag < $1.tag }",
					            "buttons.sort { < }" ],
					correctIndex : [0, 1, 2]
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: All but the last one are fine.",
	},

	"<br><br><b>2.</b> Each step in the shorthands above uses a trick which has a name.  Name that trick!<br>",
	"From: buttons.sort({ (a : UIButton, b : UIButton) -> Bool in return a.tag < b.tag })<br> To: buttons.sort { (a : UIButton, b : UIButton) -> Bool in return a.tag < b.tag }<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Inferring Type From Context", false, "Please try again." ],
				["Shorthand Argument Names", false, "Please try again." ],
				["Operator Functions", false, "Please try again." ],
				["Trailing Closures", true, "Correct!" ],
				["Implicit Returns from Single-Expression Closures", false, "Please try again."]]
	},
	"<br><br>From: buttons.sort { (a : UIButton, b : UIButton) -> Bool in return a.tag < b.tag }<br> To: buttons.sort { return $0.tag < $1.tag }<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Inferring Type From Context", true, "Correct!" ],
				["Shorthand Argument Names", false, "Please try again." ],
				["Operator Functions", false, "Please try again." ],
				["Trailing Closures", false, "Please try again." ],
				["Implicit Returns from Single-Expression Closures", false, "Please try again."]]
	},
	"<br><br>From: buttons.sort { return $0.tag < $1.tag }<br> To: buttons.sort { $0.tag < $1.tag }<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Inferring Type From Context", false, "Please try again." ],
				["Shorthand Argument Names", false, "Please try again." ],
				["Operator Functions", false, "Please try again." ],
				["Trailing Closures", false, "Please try again." ],
				["Implicit Returns from Single-Expression Closures", true, "Correct!"]]
	},



];
