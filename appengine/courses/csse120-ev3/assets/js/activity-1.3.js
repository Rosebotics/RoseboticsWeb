var activity = [

  "<b>1.</b> What is the formula for circumfenence?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["C = Pi * r", false, "Please try again."],
      ["C = Pi * d", true, "Correct!  Two of these are correct."],
      ["C = 2 * Pi * r", true, "Correct!  Two of these are correct."],
      ["C = 2 * r", false, "Please try again."]
    ]
  },
  "<br><br><b>2.</b> If the diameter of the wheel is 1.3 inches, then roughly how many inches long is the circumference?<br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^4$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>3.</b> If the wheel speed is 540 degrees / second then approximately how fast is the robot going in inches / second?",
  {
    questionType: "freetext",
    correctAnswerRegex: /^6$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>4.</b> If you wanted the robot to travel 12 inches how many degrees would you need to go (use the 4 inches = 360 degrees approximation)?<br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^1080$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
];