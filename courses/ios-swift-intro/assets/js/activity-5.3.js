var activity = [

    "<b>1.</b> What is eash code snippet below doing?<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> [self.view endEditing:YES];",
					choices : [ "Calling a method on an NSString instance to return an int from the string (will return 0 if the NSString doesn't start with a number)",
					            "Calling a method to dismiss the keyboard on the UIView instance that is being managed by this ViewController.",
					            "Calling a class method on the NSString class to create a new NSString instance",
					            "Calling a method on the super class (the UIViewController class in this case) when the view is loaded in case the super class needs to do any Life Cycle work on view load (turns out this time the superclass is actually doing nothing, but still good practice)."],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> [super viewDidLoad];",
					choices : [ "Calling a method on an NSString instance to return an int from the string (will return 0 if the NSString doesn't start with a number)",
					            "Calling a method to dismiss the keyboard on the UIView instance that is being managed by this ViewController.",
					            "Calling a class method on the NSString class to create a new NSString instance",
					            "Calling a method on the super class (the UIViewController class in this case) when the view is loaded in case the super class needs to do any Life Cycle work on view load (turns out this time the superclass is actually doing nothing, but still good practice)."],
					correctIndex : 3
				},
				{
					questionHTML : "<b>c.</b> [NSString stringWithFormat: ... ];",
					choices : [ "Calling a method on an NSString instance to return an int from the string (will return 0 if the NSString doesn't start with a number)",
					            "Calling a method to dismiss the keyboard on the UIView instance that is being managed by this ViewController.",
					            "Calling a class method on the NSString class to create a new NSString instance",
					            "Calling a method on the super class (the UIViewController class in this case) when the view is loaded in case the super class needs to do any Life Cycle work on view load (turns out this time the superclass is actually doing nothing, but still good practice)."],
					correctIndex : 2
				}, {
					questionHTML : "<b>d.</b> [textInTextField intValue];",
					choices : [ "Calling a method on an NSString instance to return an int from the string (will return 0 if the NSString doesn't start with a number)",
					            "Calling a method to dismiss the keyboard on the UIView instance that is being managed by this ViewController.",
					            "Calling a class method on the NSString class to create a new NSString instance",
					            "Calling a method on the super class (the UIViewController class in this case) when the view is loaded in case the super class needs to do any Life Cycle work on view load (turns out this time the superclass is actually doing nothing, but still good practice)."],
					correctIndex : 0
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Each answer is used once.",
	},

    "<br><br><b>2.</b> When we setup the IBAction on the button it makes the function:  <b>- (IBAction) pressedButton:(id) sender;</b>  So it is passing you the parameter <b>sender</b> which is the button that got clicked.  Can you guess what <b>id</b> means?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The tag of the button", false, "Please try again." ],
				["id means UIButton", false, "Please try again." ],
				["id is a pointer to any object type (exactly like Swift's AnyObject reference type)", true, "Correct!" ],
				["id is the Identifier for the sender", false, "Please try again." ] ]
	},

];
