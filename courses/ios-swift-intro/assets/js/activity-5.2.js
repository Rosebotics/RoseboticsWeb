var activity = [

                "<b>Swift code</b> snippet from the OLD app<br>",


        		"<img style='width: 100%;' src='assets/img/swift_color_sliders_code.png' alt='Swift Color sliders code'><br>",

                "<br><br><b>Objective-C code</b> snippet from the NEW app<br>",


        		"<img style='width: 90%;' src='assets/img/objc_color_sliders_code.png' alt='Objective-C Color sliders code'><br>",
    "<br><br><b>1.</b> Based on what you know about Swift, Objective-C, and looking at the code above answer the questions below?<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> Makes you type the keyword <b>self</b> a lot more often",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> Uses the keyword <b>self</b> in a class to reference the instance variable that the method was called on",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 2
				},
				{
					questionHTML : "<b>c.</b> <b>Requires</b> you to use ; to end a line of code",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 1
				}, {
					questionHTML : "<b>d.</b> Uses a dot notation with parentheses at the end to call a function, similar to most other languages (although self. can be omitted in the call like above)",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 0
				}, {
					questionHTML : "<b>e.</b> Puts the return value to the left in a function signature line, similar to most other languages (void if no return value exist)",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 1
				}, {
					questionHTML : "<b>f.</b> Uses [ ] to create objects and call functions",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 1
				}, {
					questionHTML : "<b>g.</b> Has a concept for External parameter names (green, blue, alpha)",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 2
				}, {
					questionHTML : "<b>h.</b> Requires you to ALWAYS use words like green:, blue:, alpha: when calling a function with multiple parameters passed in",
					choices : [ "Swift", "Objective-C", "Both", "Neither" ],
					correctIndex : 1
				} ],
		allCorrectOutput : "Well done!  Neat to think about the language differences",
		someIncorrectOutput : "Please try again. Hints: 1 Swift, 5 Objective-C, 2 Both, 0 Neither.",
	},

    "<br><br><b>2.</b> Did you complete the Objecive-C version of Color Sliders (and submit it on Moodle if taking this course for credit)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep.  All set!", true, "Great!" ],
				["No so much.", false, "Well ya kinda need to get that done.  Take a break and work on it tomorrow." ] ]
	},
];
