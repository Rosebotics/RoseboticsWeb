var activity = [

    "<b>1.</b> If you change your data model (i.e. you add an attribute or something even more), what are some things you need to do?<br>",
    {
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "Check all that apply",
					choices : [ "Delete your old NSManagedObject subclass for that Entity", "Generate a new NSManagedObject subclass", "Reset your simulator if you have data objects stored there from the OLD data model version." ],
					correctIndex : [0,1,2]
				}],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again. Hint: Mark 'em all!",
	},

    "<br><br> One thing I goofed on in the video was that I left off that chevron called the Disclosure Indicator on the MovieQuotesCell prototype (to show users that a click will drill down).  I think I'll fix that like two videos from now, but I mention it again here because now that goof is in 2 projects for me. :)  So I'll fix the MovieQuotesCoreData project soon, but off camera I still had to add it to my MovieQuotesNoCoreDataYet version.  Here is the step I missed that I'm talking about...<br>",

	"<div style='text-align: center;'><img src='assets/img/disclosure_indicator.png' alt='Disclosure Indicator UI hint'></div>",

	"<br><b>2.</b> What is the status of <b>your</b> MovieQuotesCoreData and MovieQuotesNoCoreDataYet projects?<br>",

    {
		questionType : "multiple choice",
		choices : [
				["Mine is on there (both versions).  I did it back when I was supposed to and I'm all set.", true, "Correct!" ],
				["I'll fix it at the same time you fix it. ;) (then go back and fix it in MovieQuotesNoCoreDataYet too.", true, "Sounds good.  Just make sure you get it fixed before you turn it in. :)" ],
				["I have no plans to fix that issue!", false, "Please try again." ]]
	},

];
