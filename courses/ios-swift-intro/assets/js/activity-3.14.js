var activity = [

    "<b>1.</b> We made three different initializers in the subclass.  What keywords did we use?",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "init", "super init", "override init", "subinit", "convenience init" ],
					correctIndex : [0, 2, 4]
				}],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Just look back at the code. :)",
	},

    "<br><br><b>2.</b> Which constructor is being described in each case?<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> A constructor which receives the exact same parameters as a constructor that already exist in the superclass.",
					choices : [ "init", "override init", "convenience init" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> A new constructor in the subclass that is a designated initializer",
					choices : [ "init", "override init", "convenience init" ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>c.</b> A new constructor in the subclass that is a helper initializer (which must call a designated initializer in the class)",
					choices : [ "init", "override init", "convenience init" ],
					correctIndex : 2
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again.",
	},

    "<br><br><b>3.</b> If you did not have a subclass could you still have a convenience init constructor?<br>",

	{
		questionType : "multiple choice",
		choices : [
				["Sure.  You can make a convenience init constructor anytime you need one (so long as it calls a designated initializer).", true, "Correct!" ],
				["No.  That is only a feature that you can use in a subclass.", false, "Please try again." ] ]
	},

    "<br><br><b>4.</b> In general how many different designated initializers should you <b>try</b> to make in your code for best practice?<br>",

	{
		questionType : "multiple choice",
		choices : [
				["1.  Typically having a funnel point simplifies the inheritence process for class initialization.  Only add more if circumstances warrant it.", true, "Correct!" ],
				["There is no reason to <b>try</b> for one.", false, "Please try again." ] ]
	},
];
