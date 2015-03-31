var activity = [

    "<b>1.</b> If you make an error when creating a connection (or your program is crashing) where is the place you need to look to fix it?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["In the Swift code", false, "Please try again." ],
				["In the Storyboard file, right panel, far right icon called the Connections Inspector", true, "Correct!" ] ]
	},


"<br>Go open your <b>Connections Inspector</b> now and click on the View Controller in the Outline to see ALL the connections to the veiw controller.  It should look like this:<br> ",
	"<img style='height: 400px; margin-left: 20%;' src='assets/img/connections_inspector.png' alt='Connections Inspector'><br>",

    "<br><b>2.</b> If you wanted to remove a Storyboard connection where would you click?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["I'd click on the x next to the thing I wanted to remove.", true, "Correct!" ],
				["No idea", false, "Please try again." ] ]
	},


    "<br><br><b>3.</b> Based on the image above how many IBActions are connection to the <b>sliderChanged</b> function?<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /4/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: 4"
	},

];
