var activity = [

    "<b>1.</b> If you are really (really) observant you'll notice that we made 2 enums and we put both into the .h file.  However you only need to put enums into the .h if they are used publicly.  So which enum COULD be moved into the .m file because it is NOT used publicly (i.e. NOT used in the View Controller code)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["MarkType", false, "Please try again." ],
				["GameState", true, "Correct!  This is why I didn't get any errors when I typed XWin instead of XWon.  It's interally used only so no problem." ] ]
	},

    "<br><br><b>2.</b> When we made the array of <b>MarkType</b>s for the gameBoard we made it as an ivar instead of a property (because we had to).  ivar's are how things used to always work.  There are a few differences and a few things you don't get with an ivar that a property does for you?<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "Mark all correct statements below:",
					choices : [ "Properties provide for you a getter and setter method automagically, we don't get that with an ivar",
					            "Properties help take care of automatic reference counting (ARC) related issues.",
					            "Properties are FASTER than ivars when the code is run",
					            "Properties are instance variables for each instance of the class (1 for each instance), whereas ivars are class variables (1 for the whole class to share).",
					            "When referencing a property from within the class code you say self. however with an ivar you don't say self."],
					correctIndex : [0, 1, 4]
				} ],
		allCorrectOutput : "Well done!  Yeah they are both ways to make instance variables.  And comically Properties are slower due to extra overhead, but they are still preferred.",
		someIncorrectOutput : "Please try again. Hints: The top two and the last one. :)",
	}

];
