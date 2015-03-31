var activity = [

    "<b>1.</b> We created our second UIAlertController and it went a lot faster this time! Again I let 'Cancel' print a log, but in genereal that printing code isn't necessary.  Instead what could we do for the Cancel button if you just wanted no action to be taken?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["let cancelAction = UIAlertAction(title: \"Cancel\", style: .Cancel) { nil }", false, "Please try again.  Syntax error." ],
				["let cancelAction = UIAlertAction(title: \"Cancel\", style: UIAlertActionStyle.Cancel, handler: nil)", true, "Correct! Both work!" ],
				["let cancelAction = UIAlertAction(title: \"Cancel\", style: .Cancel, handler: nil)", true, "Correct! Both work!" ],
				["let cancelAction = UIAlertAction()", false, "Please try again.  That would give you a button with no label (it would look terrible)" ] ]
	},

	"<br><br>So that's the end of CRUD, but we aren't using any persistent storage yet.  You'll save off a copy of your code at this point called MovieQuotesNoCoreDataYet.  Go ahead and do it now because I'll forget until the <b>middle</b> of the next video. :)  Then we'll get started with Core Data!  Make sure you DO save a separate copy of the project because in the Endpoints Unit we'll start from here, not the finished Core Data version.",
    "<br><br><b>2.</b> Are you ready to learn some Core Data fun?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Sure!", true, "Let's go!" ] ]
	},
	"<br>Easiest question ever. :)"

];
