var activity = [

    "<b>1.</b> What is the keyword that Swift uses to declare a function?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["func", true, "Correct!" ],
				["function", false, "Please try again." ],
				["f", false, "Please try again." ],
				["private", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> Mark each function signature below as valid or invalid.<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "Double getHours(employee : Employee, week : String) { ... }",
					choices : [ "Valid.  Assuming you've made a class called Employee somewhere", "Invalid.  That's not the correct syntax." ],
					correctIndex : 1
				},
				{
					questionHTML : "func getHours(employee : Employee, week : String) -> Double { ... }",
					choices : [ "Valid.  Assuming you've made a class called Employee somewhere", "Invalid.  That's not the correct syntax." ],
					correctIndex : 0
				},
				{
					questionHTML : "func setCurrentWeek(employee : Employee, week : String) { ... }",
					choices : [ "Valid.  Assuming you've made a class called Employee somewhere and you need no return value", "Invalid.  That's not the correct syntax." ],
					correctIndex : 0
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: 2 of them are Valid.",
	},

];
