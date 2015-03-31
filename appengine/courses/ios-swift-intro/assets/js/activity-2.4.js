var activity = [

    "<b>1.</b> Why didn't we just use String interpolation to set the labels? i.e. redLabel.text = \"\\(redSlider.value)\"<br>",
	{
		questionType : "multiple choice",
		choices : [
				["That doesn't work.", false, "Please try again." ],
				["It would display too many digits", true, "Correct!"],
				["It would display a String not a floating point value and that'd look bad", false, "Please try again."  ],
				["That is not valid Swift code", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> What is the shortcut key combo to press the home key on the simulator?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["H", false, "Please try again." ],
				["Shift-H", false, "Please try again." ],
				["Command-Shift-H", true, "Correct!"  ] ]
	},

    "<br><br><b>3.</b> Did you complete the Color Sliders app (and submit it on Moodle if taking this course for credit)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep.  All set!  My icons are in there too :)", true, "Great!" ],
				["No so much.", false, "Well ya kinda need to get that done.  Take a break and work on it tomorrow." ] ]
	},

];
