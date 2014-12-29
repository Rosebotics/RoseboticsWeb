var activity = [

    "<b>1.</b> Where did we put each item?<br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> Toolbar",
					choices : [ "iPhone storyboard (wC hR)", "iPad storyboard (wR hR)", "Implemented on both" ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>b.</b> Navigation Bar",
					choices : [ "iPhone storyboard (wC hR)", "iPad storyboard (wR hR)", "Implemented on both" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>c.</b> Bar button item for a New Game",
					choices : [ "iPhone storyboard (wC hR)", "iPad storyboard (wR hR)", "Implemented on both" ],
					correctIndex : 2
				},
				{
					questionHTML : "<b>d.</b> Constraints to keep the bar at the top (also has left, right, and height constraints)",
					choices : [ "iPhone storyboard (wC hR)", "iPad storyboard (wR hR)", "Implemented on both" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>e.</b> Constraints to keep the bar at the bottom (also has left and right constraints)",
					choices : [ "iPhone storyboard (wC hR)", "iPad storyboard (wR hR)", "Implemented on both" ],
					correctIndex : 0
				}, ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: Only the New Game button was implemented on both.  iPad Nav bar on top, iPhone Toolbar on bottom",
	},

    "<br><br><b>2.</b> If we had forgotten to restrict iPhone to only Protrait mode (which I nearly DID forget, but saved at the very end) and a user had rotated their iPhone into landscape what would they have seen?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["An empty screen as we only added views to the regular height storyboards", true, "Correct!" ],
				["A Toolbar", false, "Please try again." ],
				["A Nav Bar", false, "Please try again." ] ]
	},

];
