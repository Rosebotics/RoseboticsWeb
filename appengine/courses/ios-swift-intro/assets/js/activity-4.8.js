var activity = [



    "After making the video I felt bad about using the older UIDevice.currentDevice() approach.  I suppose I should use the newer trait collection approach.  Can you change your code to this...<br>",

    "<img style='width: 100%' src='assets/img/traitcollection.png' alt='Trait collection code'><br><br>",
    "Note, keep the commented out code around as well (just like above) as that will be useful later with the xImage and oImage constants.  The UIDevice approach is nice because it can be used outside of the class (which will be what we need later).<br><br>",

    "<b>1.</b> Did that work just the same?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep.  Identical performance.", true, "Correct!" ],
				["Didn't work", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> Why might that code be better than the UIDevice solution?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["It be nice to do the exact same thing as the Storyboard.  Just in case there is a compact width iPad or regular width iPhone introduced someday.", true, "Correct! Yeah and it's unlikely that it'll ever be an issue, but I thought I'd share that alternative approach." ],
				["No value at present and no potential future value at all.", false, "Please try again." ] ]
	},


];
