var activity = [

    "<b>1.</b> The Custom UITableViewCell trick is REALLY handy.  What is one thing you need to remember to do when making a Custom cell?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["You need to make a custom subclass of UITableViewCell and set the custom class attribute in the Storyboard", true, "Correct!" ],
				["You need to set the Style to Custom and that's it!", false, "Please try again." ],
				["You need to clear the background color", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> If the initialQueryComplete property is <b>false</b> (and the count of the array is 0) what message will be displayed?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["No Movie Quotes", false, "Please try again." ],
				["Loading Movie Quotes... (with a spinner)", true, "Correct!" ]]
	},

    "<br><br><b>3.</b> If the initialQueryComplete property is <b>true</b> (and the count of the array is 0) what message will be displayed?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["No Movie Quotes", true, "Correct!" ],
				["Loading Movie Quotes... (with a spinner)", false, "Please try again." ]]
	},

];
