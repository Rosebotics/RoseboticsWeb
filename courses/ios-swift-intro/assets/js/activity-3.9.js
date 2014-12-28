var activity = [

    "<b>1.</b> Another function that receives a Closure is the <b>.sort()</b> function on an array.  Let's say we were sorting an array of UIButtons based on their .tag property.  What is the correct syntax?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["buttons.sort({ (UIButton, UIButton) -> Bool in return tag < tag })", false, "Please try again." ],
				["buttons.sort(func(a : UIButton, b : UIButton) -> Bool { return a.tag < b.tag })", false, "Please try again." ],
				["buttons.sort({ (a : UIButton, b : UIButton) -> Bool in return a.tag < b.tag })", true, "Correct!" ],
				["buttons.sort({ (a, b) -> Bool in return a.tag < b.tag })", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> How would you convert this function into a Closure expression:<br>func stringRepeater(originalString : String, repeatCount : Int) -> String { ... }<br>",
	{
		questionType : "multiple choice",
		choices : [
				["{ (originalString : String, repeatCount : Int) -> String in ... } ", true, "Correct!"  ],
				["{ (String, Int) -> String in ... } ", false, "Please try again."  ],
				["func(originalString : String, repeatCount : Int) -> String { ... }", false, "Please try again." ],
				["stringRepeater(originalString : String, repeatCount : Int) -> String { ... }", false, "Please try again."]]
	},

];
