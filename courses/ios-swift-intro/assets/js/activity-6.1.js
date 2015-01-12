var activity = [

    "<b>1.</b> The function in the header file <b>+ (void) run;</b> is a class method.  How do you know it's a <b>class</b> method?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Because it returns void it must be a class method", false, "Please try again." ],
				["run is always a class method (never an instance method)", false, "Please try again." ],
				["+ means class method (- means instance method)", true, "Correct!" ],
				["That IS an instance method, not a class method", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> Describe what this code does  <b>@[@75, @52, @93, @87, @41, @83];</b>?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Wow!  That's crazy.  No idea.  Syntax error?", false, "Please try again." ],
				["The @ symbols makes it into an NSString", false, "Please try again." ],
				["The @ symbol is Objective-C shorthand to make something an obect.  Here it's an NSArray with NSNumbers in the array.", true, "Correct!" ],
				["Convert the string into JSON", false, "Please try again." ] ]
	},

];
