var activity = [

    "<b>1.</b> If we just add our various UIControls and UILabels to the main View without using constraints, what happens?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The app won't run.  It'll crash upon launch.", false, "Please try again." ],
				["The system will convert your locations into contrains under the hood in ways you won't like, it'll basically use an Absolute Layout mechanism that won't scale at all for different devices sizes.", true, "Correct!" ],
				["The dimensions for the different iPhone sizes are close enough that the system will scale your app for you as needed.", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> Which constraints did we add to pin our views at the end of this video?<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> For the labels that are on the left side, (the Red, Green, Blue, Alpha labels), what constraints got added to each view?",
					choices : [ "Top", "Bottom", "Left (Leading space)", "Right (Trailing space)" ],
					correctIndex : [0,2]
				},
				{
					questionHTML : "<b>b.</b> For the labels that are on the right side (the 0.50 labels), what constraints got added to each view?",
					choices : [ "Top", "Bottom", "Left (Leading space)", "Right (Trailing space)" ],
					correctIndex : [0,3]
				},
				{
					questionHTML : "<b>c.</b> For the sliders what Constraints got added to each view?",
					choices : [ "Top", "Bottom", "Left (Leading space)", "Right (Trailing space)" ],
					correctIndex : [0, 2, 3]
				}],
		allCorrectOutput : "Well done!  Pretty tricky. ;)",
		someIncorrectOutput : "Please try again. Hints: We never added a bottom constraint, we always added top.  Left views pin to the left, Right views pin to the right, and sliders span the entire width.",
	},

    "<br><br><b>2.</b> The outline on the left is very useful when it shows you a little red circle or a little orange triangle.<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> What does the little red circle mean?",
					choices : [ "Error - Some of your views are missing required constrains", "Warning - Your views are fully defined, but the image you see in front of you does not have the frames in the right places", "It means nothing and can be ignored" ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>b.</b> What does the little orange triangle mean?",
					choices : [ "Error - Some of your views are missing required constrains", "Warning - Your views are fully defined, but the image you see in front of you does not have the frames in the right places", "It means nothing and can be ignored" ],
					correctIndex : 1
				}, ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again.",
	},
];
