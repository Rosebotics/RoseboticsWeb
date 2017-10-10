var activity = [

    "<b>1.</b> Code in the libs/robot_controller.py will written by everyone on the team.<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["False.  Only 1 person writes the code in there.", false, "Please try again." ],
        ["True.  Everyone will write code for the libs/robot_controller, but be careful that only 1 person works in there at a time.  After they commit and others update, then a new person can add code in there next time.  This gets everyone involved, but avoid git conflicts.", true, "Correct!" ]
    ]
  },

    "<br><br><b>2.</b> True or False. Code in your individual m folder should only be modified by you.<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["True", true, "Correct!" ],
        ["False", false, "Please try again." ] ]
  },
  "<br><br><b>3.</b> If your program crashes while the wheels are running...<br>",

  {
    questionType : "multiple choice group",
    questionsList : [
        {
          questionHTML : "What do the motors do?",
          choices : [ "The motors will stop if the program crashes", "The motors keep doing whatever they are doing when the crash happen." ],
          correctIndex : 1
        },
        {
          questionHTML : "When this happens what should you do?",
          choices : [ "Stop the robot as quickly as possible!", "Pick up the robot, temporarially unplug A and B, then put them back in", "Pick up the robot, temporarially unplug B and C, then put them back in"],
          correctIndex : 2
        }],
    allCorrectOutput : "Well done!",
    someIncorrectOutput : "Please try again.",
  },
  "<br><br><b>4.</b> In the video for drive polygon what were the units for the distance of each side?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["mm", false, "Please try again." ],
        ["cm", false, "Please try again." ],
        ["ft", false, "Please try again." ],
        ["in", true, "Correct!" ]
    ]
  },
  "<br><br<b>5.</b> In the video for drive polygon what were the units for the speed?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["inches / minute of the robot", false, "Please try again." ],
        ["inches / second of the robot", false, "Please try again." ],
        ["feet / second of the robot", false, "Please try again." ],
        ["degrees / second of the wheel", true, "Correct! We'll talk about this more in the next video too. It's a pain, but really no big deal." ]
    ]
  },

];
