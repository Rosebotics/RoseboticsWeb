var activity = [

    "<b>1.</b> What types of apps can be used on what types of devices and how will they display?<br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> Univeral apps",
					choices : [ "iPhone / iPod Touch", "iPad (normal display, with no black borders/zoom)", "iPad with black borders and a 2x zoom" ],
					correctIndex : [0, 1]
				},
				{
					questionHTML : "<b>b.</b> iPhone apps",
					choices : [ "iPhone / iPod Touch", "iPad (normal display, with no black borders/zoom)", "iPad with black borders and a 2x zoom" ],
					correctIndex : [0, 2]
				},
				{
					questionHTML : "<b>c.</b> iPad apps",
					choices : [ "iPhone / iPod Touch", "iPad (normal display, with no black borders/zoom)", "iPad with black borders and a 2x zoom" ],
					correctIndex : 1
				} ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again.",
	},

	"<br><br><b>2.</b> Below are two pictures of an iPad running an app.  What <b>type</b> of app is each one?<br>",
	"<img src='assets/img/iphone_app_on_ipad.png' alt='iphone_app_on_ipad'><br>",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "<b>a.</b> The image on the left is what type of app?",
					choices : [ "iPhone", "iPad", "Universal", "Either iPad or Universal, no way to know from just this image." ],
					correctIndex : 0
				},
				{
					questionHTML : "<b>b.</b> The image on the right is what type of app?",
					choices : [ "iPhone", "iPad", "Universal", "Either iPad or Universal, no way to know from just this image." ],
					correctIndex : 3
				}, ],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please try again.",
	},
];
