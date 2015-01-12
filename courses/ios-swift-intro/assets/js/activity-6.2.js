var activity = [

    "<b>1.</b> Identify each variable type below as an Object or NOT an object.<br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> double",
					choices : [ "Object", "Primitive"],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> NSInteger",
					choices : [ "Object", "Primitive"],
					correctIndex : 1
				},
				{
					questionHTML : "<b>c.</b> NSNumber",
					choices : [ "Object", "Primitive"],
					correctIndex : 0
				}, {
					questionHTML : "<b>d.</b> BOOL",
					choices : [ "Object", "Primitive"],
					correctIndex : 1
				}, {
					questionHTML : "<b>d.</b> NSArray",
					choices : [ "Object", "Primitive"],
					correctIndex : 0
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Three are primitives.  (NSInteger starts with NS but it is NOT an object)",
	},

    "<br><br><b>2.</b> Within an NSLog statement, if you want to print an object, what symbol do you use?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["%d", false, "Please try again." ],
				["%@", true, "Correct!"  ],
				["%f", false, "Please try again."],
				["\\n", false, "Please try again." ] ]
	},

    "<br><br><b>3.</b> Is this syntax correct?<br>",

	'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">#define defaultX = 7;<br>int x = defaultX;<br></code><br>',
	{
		questionType : "multiple choice",
		choices : [
				["Sure that makes a constant.", false, "Please try again." ],
				["Nope.  There should be no = in the #define line.", false, "Please try again."  ],
				["Nope.  There should be no ; in the #define line.", false, "Please try again."],
				["Nope.  There should be no = and no ; in the #define line. #define is a preprocessor string replacement so think about the substitution.  Even if it did work with the space issue (which it wouldn't) it'd be like saying <b>int x = = 7;;</b>", true, "Correct!" ] ]
	},

    "<br><br><b>4.</b> Is this syntax correct?<br>",

	'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">#define defaultHi @"Hi"<br>NSString* str = defaultHi;<br></code><br>',
	{
		questionType : "multiple choice",
		choices : [
				["Sure that makes a constant.  It's like saying NSString* str = @\"Hi\";",  true, "Correct!" ],
				["Nope.  There should be a = in the #define line.", false, "Please try again."  ],
				["Nope.  There should be a ; in the #define line.", false, "Please try again."],
				["Nope.  There should be a = and a ; in the #define line.", false, "Please try again."  ] ]
	},

];
