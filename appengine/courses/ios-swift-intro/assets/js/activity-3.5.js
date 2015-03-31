var activity = [

    "<b>1.</b> Is this legal?  var myArray : [String] = [\"Dave\", \"Bob\", 17]?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Sure.  Swift allows you to have mixed types in arrays.", false, "Please try again." ],
				["Sure.  In Swift the compiler will convert 17 into a String.", false, "Please try again." ],
				["Sure.  In Swift the array will become an [AnyObject] array automatically.", false, "Please try again." ],
				["Not legal.  That's a compile time error.", true, "Correct!  You can't mix types in the array in Swift" ]]
	},

    "<br><br><b>2.</b> Combining what we know about collections and optional, what is this?  var myArray : [UIView]?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["A syntax error", false, "Please try again." ],
				["A runtime error", false, "Please try again." ],
				["An optional array that will hold UIView objects, but right now the value of myArray is nil (which is fine for Optionals)", true, "Correct!" ],
				["An optional array that will hold UIView objects.  Right now myArray IS an Array it just has no elements.", false, "Please try again." ] ]
	},

    "<br><br><b>3.</b> How would you get the number of elements in an array?  <b>myArray._______</b><br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /^count$/i,
		correctAnswerOutput : "Correct!  myArray.count (no parentheses)",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: myArray.count"
	},

    "<br><br><b>4.</b> In addition to arrays what other collection types did we talk about?",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "Maps", "Trees", "Dictionaries", "NSArray", "Tuples", "Linked Lists" ],
					correctIndex : [2,4]
				}],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: We talked about Dictionaries and Tuples.",
	},

];
