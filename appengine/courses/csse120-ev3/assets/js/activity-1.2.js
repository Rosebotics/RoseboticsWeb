var activity = [

  "<b>1.</b> What keyword arguments (kwargs) could you pass into the ev3.Motor methods?<br>",

  {
    questionType: "multiple choice group",
    questionsList: [{
      questionHTML: "(check all that apply)",
      choices: ["time", "distance", "stop_action", "encoder ticks", "position_sp", "speed_sp", "LargeMotor", "time_sp"],
      correctIndex: [2, 4, 5, 7]
    }],
    allCorrectOutput: "Well done!",
    someIncorrectOutput: "Please try again. Hints: Four are correct and 3 of the 4 end in _sp",
  },

  "<br><br><b>2.</b> What are the regularly used instance variables that are passed as kwargs to each method?<br>",
  {
    questionType: "multiple choice group",
    questionsList: [{
        questionHTML: "<b>a.</b> run_forever()",
        choices: ["position_sp", "speed_sp", "stop_action", "time_sp"],
        correctIndex: 1
      },
      {
        questionHTML: "<b>b.</b> run_to_rel_pos()",
        choices: ["position_sp", "speed_sp", "stop_action", "time_sp"],
        correctIndex: [0, 1]
      },
      {
        questionHTML: "<b>c.</b> run_timed()",
        choices: ["position_sp", "speed_sp", "stop_action", "time_sp"],
        correctIndex: [1, 3]
      }
    ],
    allCorrectOutput: "Well done!",
    someIncorrectOutput: "Please try again. Hints: speed_sp is always regularly used, 5 items selected total",
  },


  "<br><br><b>3.</b> Let's review what units these methods / instance variables use.<br>",
  {
    questionType: "multiple choice group",
    questionsList: [{
        questionHTML: "<b>a.</b> time.sleep() function call",
        choices: ["seconds", "milliseconds"],
        correctIndex: 0
      },
      {
        questionHTML: "<b>b.</b> time_sp when using the run_timed() method",
        choices: ["seconds", "milliseconds"],
        correctIndex: 1
      },
      {
        questionHTML: "<b>c.</b> position_sp",
        choices: ["degrees / second", "degrees", "inches", "cm"],
        correctIndex: 1
      },
      {
        questionHTML: "<b>d.</b> speed_sp",
        choices: ["degrees / second", "degrees", "inches", "cm"],
        correctIndex: 0
      }
    ],
    allCorrectOutput: "Well done!",
    someIncorrectOutput: "Please try again.",
  },
  "<br><br>Consider the following peice of code:",
  "<pre>    left_motor = ev3.LargeMotor(ev3.OUTPUT_B);<br>    left_motor.run_to_rel_pos(position_sp=720, speed_sp=360);<br>    time.sleep(4.0);<br>    ev3.Sound.beep().wait();</pre>",
  "<b>4.</b>Does the beep happen while the motors are moving?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["Yes, the motors are moving since there is no wait_while command", false, "Please try again."],
      ["No, in this case the motors have stopped before the beep happens even without the wait_while command", true, "Correct!"]
    ]
  },
  "<br><br><b>5.</b> If the time.sleep command was changed to 1.5 seconds, would the beep happen while the motors are moving?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["Yes, the motors would be moving.", true, "Correct!"],
      ["No, in this case the motors have stopped before the beep happens even without the wait_while command", false, "Please try again."]
    ]
  },
  "<br><br>Consider the following peice of code:",
  "<pre>    left_motor = ev3.LargeMotor(ev3.OUTPUT_B);<br>    left_motor.run_to_rel_pos(position_sp=720, speed_sp=360, stop_action=__________);<br>    left_motor.wait_while(___________);<br>    ev3.Sound.beep().wait();</pre>",

  "<b>6.</b> What line of code completes the first blank if you don't really care about how exactly the motor stops at 720 degrees?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["ev3.Motor.STOP_ACTION_BRAKE", false, "Please try again."],
      ["ev3.Motor.STOP_ACTION_COAST", true, "Correct!"],
      ["ev3.Motor.STOP_ACTION_HOLD", false, "Please try again."]
    ]
  },

  "<br><br><b>7.</b> What if you really needed to make the stop as close to 720 degrees as possible.  How would you complete the first blank?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["ev3.Motor.STOP_ACTION_BRAKE", true, "Correct!"],
      ["ev3.Motor.STOP_ACTION_COAST", false, "Please try again."],
      ["ev3.Motor.STOP_ACTION_HOLD", false, "Please try again. Nope, hold is to forever hold this position. No value to HOLD it."]
    ]
  },
  "<br><br><b>8.</b> How would you complete the second blank to make the beep happen just after the motor stops?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["ev3.Motor.STATE_HOLDING", false, "Please try again."],
      ["ev3.Motor.STATE_OVERLOADED", false, "Please try again."],
      ["ev3.Motor.STATE_RAMPING", false, "Please try again."],
      ["ev3.Motor.STATE_RUNNING", true, "Correct!"],
      ["ev3.Motor.STATE_STALLED", false, "Please try again."]
    ]
  },
  "<br><br>Consider the following peice of code:",
  "<pre>    left_motor = ev3.LargeMotor(ev3.OUTPUT_B);<br>    left_motor.run_timed(speed_sp=360, time_sp=3000);<br>    left_motor.stop();</pre>",
  "<b>9.</b> For how many seconds will the motor run?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["0 seconds", true, "Correct!"],
      ["1 seconds", false, "Please try again."],
      ["3 seconds", false, "Please try again."],
      ["3000 seconds", false, "Please try again."],
    ]
  },
  "<br><br>What about now:",
  "<pre>    left_motor = ev3.LargeMotor(ev3.OUTPUT_B);<br>    left_motor.run_timed(speed_sp=360, time_sp=3000);<br>    left_motor.wait_while(ev3.Motor.STATE_RUNNING);<br>    left_motor.stop();</pre>",
  "<b>10.</b> For how many seconds will the motor run?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["0 seconds", false, "Please try again."],
      ["1 seconds", false, "Please try again."],
      ["3 seconds", true, "Correct!"],
      ["3000 seconds", false, "Please try again."],
    ]
  },
  "<br><br><b>11.</b> Was the .stop() method call above important?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["Yes, it stops the motor", false, "Please try again."],
      ["No, the stop had already happen by then", true, "Correct!"]
    ]
  },
  
];