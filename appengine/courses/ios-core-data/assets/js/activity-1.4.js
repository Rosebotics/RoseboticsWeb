var activity = [

    "<b>1.</b> In order to add the + button to the navigation bar's navigation item what type of object did we have to make?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["UIButton", false, "Please try again." ],
				["UIBarButtonItem", true, "Correct!" ],
				["UIDialogAction", false, "Please try again." ],
				["UIAlertAction", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> In order to add the buttons to the UIAlertController what type of objects did we have to make?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["UIButton", false, "Please try again." ],
				["UIBarButtonItem", false, "Please try again." ],
				["UIDialogAction", false, "Please try again." ],
				["UIAlertAction", true, "Correct!" ] ]
	},

    "<br><br><b>3.</b> When we added buttons to the alert controller we created an object and then added that object to the alert controller.  When we added text fields did it follow the same structure?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Pretty much yeah.", false, "Please try again." ],
				["Not really.  You don't create an object then add it, you just call the method addTextFieldWithConfigurationHandler", true, "Correct!" ],
				["Not really.  You create a UITextField and then link it to the alert controller", false, "Please try again." ]]
	},

    "<br><br><b>4.</b> In order to actually display the alert controller, what did you do?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Called a function on the alert controller called .show()", false, "Please try again." ],
				["Called a function on the view controller (self) called presentViewController:animated:completion:", true, "Correct!" ],
				["Passed the object into the view", false, "Please try again." ]]
	},

];
