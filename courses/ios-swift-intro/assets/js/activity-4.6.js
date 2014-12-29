var activity = [

    "<b>1.</b> On the iPad the top of the Usable Area view snapped to the Nav Bar.  On the iPhone the top of the Usable Area view snapped to the status bar (the status bar has the battery icon), so those had to be separate.  However the left and right (leading and trailing) constaints always went to the far left and far right of the superview.  In the video we added those on both Final Value storyboards, but if we wanted to reduce the number of constraints, where could we have added those two constraints so that they existed only once?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["wAny hAny", false, "Please try again. The Usable Area view doesn't exist on that Storyboard at all." ],
				["wCompact hRegular", false, "Please try again." ],
				["wAny hRegular", true, "Correct!" ],
				["wRegular hRegular", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> Why did we set an Aspect Ratio constrait to the iPhone Game Board view?  Couldn't we have just set a width constraint AND a height constraint?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Sure.  That'd be fine.  It'd scale.", false, "Please try again." ],
				["Not really.  Since iPhone 6 and iPhone 6 plus have different widths than the 3.5\" and 4\" iPhones an aspect ratio constaint was the only good solution.", true, "Correct!" ],]
	},

    "<br><br><b>3.</b> The iPhone uses a UILabel for the game state title, whereas the iPad uses a Navigation Bar with Navigation Item inside of it for the game state title.  Is that going to get us in trouble later?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep.  That's gonna be a big mess.", false, "Please try again." ],
				["Not really.  They are totally independent views and we'll set the appropriate one in code later.  No biggy.", true, "Correct!" ],]
	},

];
