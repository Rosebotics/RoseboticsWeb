var activity = [

    "<b>1.</b> We introduced two new concepts here: Protocols and Computed properties.  Usually a protocol is just a list of <b>methods</b> that you must implement.  To be honest the fact that this protocol has no methods and only a computed property is a little weird.  What was the name of the property that MUST exist if you claim to implment the Printable protocol?<br>",

	{
		questionType : "freetext",
		correctAnswerRegex : /description/i,
		correctAnswerOutput : "Correct!",
		incorrectAnswerOutput : "Please try again.",
		showAnswerOutput : "Here is the answer: description"
	},

    "<br><br><b>2.</b> As an added annoyance the Printable protocol didn't really work right in a Playground (sorry).  Any chance that issue is any better yet?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Nope. I still had to call .description just like the video", true, "Correct!  Either answer is fine, just curious if this issue is any better or not for you. ;)" ],
				["It's fixed!  I saw the game just fine on the right without adding the extra line to call .description", true, "Correct!  Either answer is fine, just curious if this issue is any better or not for you. ;)" ] ]
	},

	"<br><br>Note, in the next unit the Printable protocol will work just fine (once we start using this class in a regular app instead of a Playground)",
];
