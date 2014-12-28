var activity = [

    "<b>1.</b> In addition to our Forced Unwrapping skill, we added Optional Binding and Optional Chaining for working with Optionals.<br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> Check all that make use of <b>Optional Binding</b>",
					choices : [ "if let roomCount = john.residence?.numberOfRooms { ... }", "b.titleLable!.text!", "b.titleLabel?.text", "if let value = dave.toInt() { ... }" ],
					correctIndex : [0, 3]
				},
				{
					questionHTML : "<b>b.</b> Check all that make use of <b>Optional Chaining</b>",
					choices : [ "if let roomCount = john.residence?.numberOfRooms { ... }", "b.titleLable!.text!", "b.titleLabel?.text", "if let value = dave.toInt() { ... }" ],
					correctIndex : [0, 2]
				},
				{
					questionHTML : "<b>c.</b> Check the one that makes use of <b>Forced Unwrapping</b>",
					choices : [ "if let roomCount = john.residence?.numberOfRooms { ... }", "b.titleLable!.text!", "b.titleLabel?.text", "if let value = dave.toInt() { ... }" ],
					correctIndex : 1
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: One answer uses both Optional Binding and Optional Chaining.  Each answer is used.  The a has 2, b has 2, and c has 1.",
	},

    "<br><br><b>2.</b> Check the technique described.<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> Useful when an optional property has properies.  You want the lower level property assuming the higher level optional exist.  Makes it easy to silently do nothing if the earlier optional property is nil. (compiler helps you write these)",
					choices : [ "Optional Binding", "Optional Chaining", "Forced Unwrapping", "Implicitly Unwrapped Optionals" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> Useful if you want to take an action only if the Optional is non-nil.  If the Optional <b>is</b> non-nil you will have a reference to it to use within your statement.",
					choices : [ "Optional Binding", "Optional Chaining", "Forced Unwrapping", "Implicitly Unwrapped Optionals" ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>c.</b> Useful when you know for sure that an optional has a value is non-nil.",
					choices : [ "Optional Binding", "Optional Chaining", "Forced Unwrapping", "Implicitly Unwrapped Optionals" ],
					correctIndex : 2
				}, {
					questionHTML : "<b>d.</b> Something we did NOT talk about in this lecture. :)  BTW what it does is make an optional that is ALWAYS force unwrapped.  You simply put an ! on the declaration of the optional variable instead of a ? then you don't need to put an ! every time you use the variable to get forced unwrapping (it's automatically there already).  This is useful for IBOutlets, but not something you'll use a lot. If you like you can <a target='_blank' href='https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/Swift_Programming_Language/TheBasics.html#//apple_ref/doc/uid/TP40014097-CH5-ID334'>read more</a> about it.",
					choices : [ "Optional Binding", "Optional Chaining", "Forced Unwrapping", "Implicitly Unwrapped Optionals" ],
					correctIndex : 3
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Each answer is used once.  Implicitly Unwrapped Optionals is the d.  c is Forced Unwrapping.",
	},

];
