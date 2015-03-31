var activity = [

    "<b>1.</b> Mark the property attribute(s) you would use to get the @property behavior listed.<br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> I <b>WANT</b> thread safety.  My app is complex and I'm using many threads that use this property.",
					choices : [ "nonatomic", "Just don't say nonatomic", "copy", "strong", "weak", "no keyword for ARC behavior since it is NA" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> An attribute we will ALWAYS use since we won't be doing thread based programming.",
					choices : [ "nonatomic", "Just don't say nonatomic", "copy", "strong", "weak", "no keyword for ARC behavior since it is NA" ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>c.</b> Check two boxes for what we'll do with Properties that are Primitives",
					choices : [ "nonatomic", "Just don't say nonatomic", "copy", "strong", "weak", "no keyword for ARC behavior since it is NA" ],
					correctIndex : [0, 5]
				}, {
					questionHTML : "<b>d.</b> Check two boxes for what we'll typically do with Properties that are Objects (that we own, that aren't NSStrings)",
					choices : [ "nonatomic", "Just don't say nonatomic", "copy", "strong", "weak", "no keyword for ARC behavior since it is NA" ],
					correctIndex : [0, 3]
				} ],
		allCorrectOutput : "Well done!  Indeed we will always use nonatomic then add either strong (Objects) or nothing (Primitives)",
		someIncorrectOutput : "Please try again. Hints: nonatomic is checked in all but the first question, when we added either strong (Objects) or nothing (Primitives)",
	},

    "<br><br><b>2.</b> If we put an @interface in the .m file as well (which is really a Category) what advantage does that give us?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["It makes methods and properties added there internal only", true, "Correct!" ],
				["No real difference it just lets us keep everything in the same file", false, "Please try again." ],
				["Methods that are publically available MUST have their function prototypes in the .m @interface area", false, "Please try again." ],
				["Properties that are publically available MUST have their @property declaration in the .m @interface area", false, "Please try again." ] ]
	},

];
