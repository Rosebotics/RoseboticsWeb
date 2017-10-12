var activity = [

    "<b>1.</b> Which scenario best fits an <strong><em>indefinite</em></strong> loop pattern? <br>",
    {
        questionType: "multiple choice",
        choices: [
            ["The robot needs to go forward until it bumps into a wall.", true, "Correct!"],
            ["The robot needs to move in a square pattern.", false, "Please try again."],
            ["The robot needs to use a sensor.", false, "Please try again."],
            ["The robot falls off a table.", false, "Please try again."],
        ]
    },
    "<br><br><b>2.</b> Which scenario best fits a <strong><em>definite</em></strong> loop pattern? <br>",
    {
        questionType: "multiple choice",
        choices: [
            ["The robot needs to go forward until it bumps into a wall.", false, "Please try again."],
            ["The robot needs to move in a square pattern.", true, "Correct!"],
            ["The robot needs to use a sensor.", false, "Please try again."],
            ["The robot falls off a table.", false, "Please try again."],
        ]
    },
    "<br><br>Consider the following code snippet:",
    "<pre>while True:<br>    speed_deg_per_second = int(input('Speed (0 to 900 dps): '))<br>    if speed_deg_per_second == 0:<br>        ___________ # what statement goes here</pre>",
    "<b>3.</b> Assuming the goal is to exit the indefinite loop when a 0 value is enterred, what statement should go into the blank? <br>",

    {
        questionType: "freetext",
        correctAnswerRegex: /break/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },

];