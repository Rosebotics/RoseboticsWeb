var activity = [

	"<b>1.</b> The .proximity uses the amount of reflected IR light to determine distance. If you were 42 cm away from the wall, what would you expect for the .proximity value of the InfraredSensor?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["42", false, "Please try again."],
			["Something around 42 that fluctuates (is noisy)", false, "Please try again."],
			["60", false, "Please try again."],
			["Technically around 60 (but more like 40-70) that fluctuates somewhere near that range", true, "Correct!"]
		]
	},

	"<br><br><b>2.</b> Is the .proximity sensor amazingly accurate?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Not really.  It works fine for simple things though.", true, "Correct!"],
			["Yeah, it's pretty good!", false, "Please try again."]
		]
	},


	"<br><br><b>3.</b> Which button do you press to put the remote control into beacon mode?<br>",

	"<img src='assets/img/remote_buttons.jpg' alt='Remote Control buttons'><br>",
	{
		questionType: "multiple choice",
		choices: [
			["1", false, "Please try again."],
			["2", false, "Please try again."],
			["3", false, "Please try again."],
			["4", false, "Please try again."],
			["5", true, "Correct! BTW you know it's on by looking for the green LED"]
		]
	},

	"<br><br><b>4.</b> If you put the remote control above into beacon mode, which line of code below would you use for the beacon sensor?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["<code>beacon_seeker = ev3.BeaconSeeker(channel=1)</code>", false, "Please try again."],
			["<code>beacon_seeker = ev3.BeaconSeeker(channel=2)</code>", false, "Please try again."],
			["<code>beacon_seeker = ev3.BeaconSeeker(channel=3)</code>", false, "Please try again."],
			["<code>beacon_seeker = ev3.BeaconSeeker(channel=4)</code>", true, "Correct!"]
		]
	},

	"<br><br><b>5.</b> Why do the beacon mode values for <b>distance</b> and <b>heading</b> work so much better than the <b>proximity</b> value?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["They both work fine", false, "Please try again."],
			["They both work poorly in my opinion", false, "Please try again."],
			["Proximity uses reflected light which is a weak signal and hard to read perfectly.  The beacon is an active signal which is brighter (IR brighter) and easier to detect accurately.", true, "Correct!"],
			["It just gets lucky", false, "Please try again."]
		]
	},

	"<br><br><b>6.</b> Does your beacon pick-up module have to work 100% of the time?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["Yep, if you want to get it checked off, better be perfect.", false, "Please try again."],
			["Doesn't have to be perfect, just needs to work for at least 1 demo.", true, "Correct!"]
		]
	},

	"<br><br><b>7.</b> What surface is better for the beacon pickup program?<br>",
	{
		questionType: "multiple choice",
		choices: [
			["On the table top", false, "Please try again. It would be a great surface, but too easy to drive off the edge"],
			["On the carpet", false, "Please try again."],
			["On a slick surface on the ground to allow the beacon (remote control) to slide", true, "Correct! This is not required, carpet is ok (usually).  Just trying to help."]
		]
	},

];