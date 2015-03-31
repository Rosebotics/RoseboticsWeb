var activity = [

    "<b>1.</b> How many elements are there in a tuple?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["2", false, "Please try again." ],
				["Any number.  Doesn't have to be 2.  The example could've used MANY it just happen to use 2.", true, "Correct!" ]]
	},

    "<br><br><b>2.</b> In the video we chose to return a tuple from a function and saved the result into independent variables directly?  If instead we saved the result into a single variable, for example: <b>var myTuple = stringLetterRepeater(\"Ow! \", 4)</b><br>How could we get out the parts (which were collated and uncollated parts in this case)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["var collated = myTuple[0]   and   var uncollated = myTuple[1]", false, "Please try again." ],
				["var collated = myTuple.0   and   var uncollated = myTuple.1", true, "Correct!" ],
				["var collated = myTuple.$0   and   var uncollated = myTuple.$0", false, "Please try again." ],
				["var collated = myTuple.index(0)   and   var uncollated = myTuple.index(1)", false, "Please try again." ] ]
	},

];
