var activity = [

    "<b>1.</b> As of 2015 how much iOS code has been written in Objective-C vs Swift?  How many companies use Objective-C compared to Swift?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Objective-C first appeared in 1983 (<a target='_blank' href='http://en.wikipedia.org/wiki/Objective-C'>link</a>).  Swift was released in 2014.  So almost all companies doing iOS development have Objective-C code (even if they plan to move in part) and almost all apps you use are made in Objective-C", true, "Correct!  Swift is clearly better, but the transition will take time." ],
				["I don't know they are probably both pretty even in usage???", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> In order to teach Objective-C we don't want to remake ALL the Storyboard stuff.  So our approach is what?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Copy the Storyboard file from a Swift project into an Objective-C project.", false, "Please try again." ],
				["Remake the app from scratch in Objective-C", false, "Please try again." ],
				["Make a copy of the Swift project. Break the Swift Storyboard connections and remake all the code and connections to Objective-C.", true, "Correct!" ],
				["Too soon to tell.", false, "Please try again." ] ]
	},


    "<br><br><b>3.</b> Mark the code snippets below as Swift, Objective-C, or Neither?<br>",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> @property (weak, nonatomic) IBOutlet UISlider* redSlider;",
					choices : [ "Swift", "Objective-C", "Neither" ],
					correctIndex : 1
				},
				{
					questionHTML : "<b>b.</b> @IBOutlet weak var redSlider: UISlider!",
					choices : [ "Swift", "Objective-C", "Neither" ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>c.</b> @IBAction func sliderChanged(sender: AnyObject) { ... }",
					choices : [ "Swift", "Objective-C", "Neither" ],
					correctIndex : 0
				}, {
					questionHTML : "<b>d.</b> - (IBAction) sliderChanged:(id) sender;",
					choices : [ "Swift", "Objective-C", "Neither" ],
					correctIndex : 1
				} ],
		allCorrectOutput : "Well done!  Neat to think about the language differences",
		someIncorrectOutput : "Please try again. Hints: 2 are Swift and 2 are Objective-C (non are Neither)",
	},

    "<br><br><b>4.</b> What are some things you've observed about Objective-C already?",

	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "Unlike Java, Python, or Swift, it uses a * to show some something is an Object reference (like C did). Hint UISlider* redSlider",
					            "Functions have a return value on the left (like every non-Swift language). Hint IBAction as the return values is the same as void",
					            "Functions use the keyword func (just like Swift)",
					            "Tools like Interface Builder or the Cocoa Touch framework are used VERY differently than in Swift.",
					            "Objective-C uses two files a .h and a .m to separate the public interface from the implementation (like other C based languages)"],
					correctIndex : [0, 1, 4]
				} ],
		allCorrectOutput : "Well done!  Neat to think about the language differences",
		someIncorrectOutput : "Please try again. Hints: 3 answers are correct.  Objective-C doesn't use func and the tools work pretty much the same.",
	},
];
