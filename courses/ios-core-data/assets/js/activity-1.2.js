var activity = [

    "<b>1.</b> There are two delegates for a UITableView.  A delegate is just a way to connect many callbacks at once.  What are the two delegates called for a UITableView?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["delegate1, delegate2", false, "Please try again." ],
				["delegate, dataSource", true, "Correct!" ],
				["tableview, tableviewcell", false, "Please try again." ],
				["Prototype, TableView", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> The dataSource is required because it provides information to the table for what do display.  What were the names of the two methods we wrote from the UITableViewDataSource protocol?",


	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "canEditRowAtIndexPath", "cellForRowAtIndexPath", "didSelectRowAtIndexPath", "numberOfRowsInSection", "numberOfSectionsInTableView" ],
					correctIndex : [1, 3]
				}],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hints: We said how many rows there were in the section and setup a cell (row)",
	},

    "<br><br><b>3.</b> Were you surprised when we deleted everything at the end of the video? :)<br>",

    {
		questionType : "multiple choice",
		choices : [
				["It was called 'Temp' for a reason.  I saw it coming and got an intro to UITableViews along the way.", true, "Correct!" ],
				["What the heck!!!", false, "Sorry that is the wrong answer." ],
				["I did NOT delete my work.  No way.  No how.", false, "Sorry that is the wrong answer." ] ]
	},

];
