var activity = [

    "<b>1.</b> There are four functions that are useful to override with touches (listed below).  Which one did we use in this video?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["touchesBegan:withEvent:", true, "Correct!"],
				["touchesMoved:withEvent:", false, "Please try again." ],
				["touchesEnded:withEvent:", false, "Please try again."  ],
				["touchesCancelled:withEvent:", false, "Please try again." ] ]
	},



    "<br><br><b>2.</b> On the simulator it was fine only moving the logo on a mouse click, but on a real device it's be weird if the logo didn't follow your finger as it moved.  Which function would you need to override to fix that issue?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["touchesBegan:withEvent:", false, "Please try again." ],
				["touchesMoved:withEvent:", true, "Correct!"],
				["touchesEnded:withEvent:", false, "Please try again."  ],
				["touchesCancelled:withEvent:", false, "Please try again." ] ]
	},

	"<br><br>It's nice that Apple picked such easy to remember names. :)"

];
