var activity = [

    "<b>1.</b> Name that Size Class!<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> iPhone 6 Plus in landscape (the weird one first)",
					choices : [ "wCompact hCompact", "wRegular hCompact", "wCompact hRegular", "wRegular hRegular" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> iPad in either landscape or portrait",
					choices : [ "wCompact hCompact", "wRegular hCompact", "wCompact hRegular", "wRegular hRegular" ],
					correctIndex : 3
				},
				{
					questionHTML : "<b>c.</b> iPhone in landscape (non plus versions)",
					choices : [ "wCompact hCompact", "wRegular hCompact", "wCompact hRegular", "wRegular hRegular" ],
					correctIndex : 0
				}, {
					questionHTML : "<b>d.</b> iPhone (all) in portrait",
					choices : [ "wCompact hCompact", "wRegular hCompact", "wCompact hRegular", "wRegular hRegular" ],
					correctIndex : 2
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Each answer is used once",
	},

    "<br><br><b>2.</b> A Storyboard file in an app is really like how many independent Storyboards (some are final values some are base values)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["1", false, "Please try again." ],
				["4", false, "Please try again." ],
				["6", false, "Please try again." ],
				["9", true, "Correct!" ] ]
	},

    "<br><br><b>3.</b> How many Final value Storyboards are there (i.e. Storyboards that represent actual devices not base values)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["1", false, "Please try again." ],
				["4", true, "Correct!" ],
				["6", false, "Please try again." ],
				["9", false, "Please try again." ] ]
	},

];
