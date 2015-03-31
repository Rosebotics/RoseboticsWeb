var activity = [

    "<b>1.</b> I love optional values in functions!  They end up being so handy.  Assuming you had <b>this</b> function:<br><b>func stringDoubler(originalString : String, repeatCount : Int = 2) -> String { ... }</b><br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "How could you call it?",
					choices : [ "That's not a valid function", "stringDoubler(\"Test\", repeatCount: 5)", "stringDoubler(\"Test\", alternativeMultiple: 5)", "stringDoubler(\"Test\")", "stringDoubler()" ],
					correctIndex : [1,3]
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Two of them are correct",
	},

];
