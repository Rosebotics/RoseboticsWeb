var activity = [

  "Watch the first 2 minutes of this <a target='_blank' href='https://www.youtube.com/watch?v=7znEmgYZXL0'>official Pixy 'How to train Pixy' video</a>?<br>",
  "<b>1.</b>How does he train the Pixy first?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["He uses the button on the top trick with PixyMon running", false, "Please try again."],
      ["He uses the button on the top trick without needing a connection to the computer", true, "Correct!"],
      ["He sets color signature 1 using PixyMon", false, "Please try again."]
    ]
  },
  "<br><br><b>2.</b> Fill in the blank below to set color signature 1?<br>",
  "   1. Hold the top Pixy button until you see the LED turn _____ then release the button<br>",
  "   2. Put the color you want to track in the middle of the camera view<br>",
  "   3. Click the button to select that color<br>",
  "   4. Watch for LED flashes as the confirmation that the SIG1 color was set<br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /red/i,
    correctAnswerOutput: "Correct! BTW the other colors can be used to set other color signatures (we only want SIG1 in the modules)",
    incorrectAnswerOutput: "Please try again."
  },

  "<br><br><b>3.</b> If you train the Pixy for a blue box in one room, then you change to another location and it stops working what is probably wrong?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["The Pixy probably turned off and forgot the color signature", false, "Please try again."],
      ["The background images in the new room are different", false, "Please try again."],
      ["The lighting in the new room must be slightly different making the shade of blue appear different to the Pixy", true, "Correct! Lighting is critical with Pixy.  Only work in bright rooms."],
      ["The lens cap is probably on the Pixy camera", false, "Please try again."]
    ]
  },
  "<br><br><b>4.</b> If an object was right in the middle of the camera view what value would X be? (Hint: look at your one page summary sheet)<br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /160/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again.  Hint the camera view is 320 pixels wide (round to a pretty number)"
  },
  "<br><br><b>5.</b> If an object was right in the middle of the camera view what value would Y be? (Hint: look at your one page summary sheet)<br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /100/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again.  Hint the camera view is 200 pixels tall (round to a pretty number)"
  },
  "<br><br><b>6.</b> Where is the x = 0, y = 0 position?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["x = 0 would be all the way to the left, y = 0 would be all the way at the bottom", false, "Please try again."],
      ["x = 0 would be all the way to the left, y = 0 would be all the way at the top", true, "Correct!"],
      ["x = 0 would be all the way to the right, y = 0 would be all the way at the bottom", false, "Please try again."],
      ["x = 0 would be all the way to the right, y = 0 would be all the way at the top", false, "Please try again."],
    ]
  },
  "<br><br><b>7.</b> If you accidentally set color signatures 2-7 and you want to erase those trained colors, you could Reset the Pixy.  What should you be careful about if you do that?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["Be careful that the Pixy did not reset to communicating using the Arduino SPI interface (Settings Gear --> Interface --> Lego I2C, not Arduino SPI)", true, "Correct! Two correct answers! BTW if you don't have an interface tab in your settings that means you don't need to worry about it."],
      ["Accidentally setting color signatures 2-7 won't have any negative effect so there is no need to erase them", true, "Correct! Also a perfectly acceptable plan."],
      ["Be careful not to delete your Pixy firmware", false, "Please try again."],
      ["Be careful not to lose the lens cap", false, "Please try again. Good advice but not the answer here."]
    ]
  },
  "<br><br><b>8.</b> Does the Pixy camera work with your Lego EV3 while it is streaming video to PixyMon?<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["Yes.  You can stream video to your computer and use the Pixy with EV3 at the same time.", false, "Please try again."],
      ["No.  You need to unplug from your computer to stop the video stream before you can use Pixy with EV3.", true, "Correct! Although techincally you CAN use the PixyMon HOME mode (just the boxes no video) at the same time as EV3"]
    ]
  },

];
