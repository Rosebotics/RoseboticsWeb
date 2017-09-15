var activity = [
  "For the next several questions, consider the following snippet of code: <pre>  for k in range(500): <br>      print(k) </pre>",
  "<b>1.</b> What is the <em>first</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^0$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>2.</b>  What is the <em>last</em> number that the above loop prints?<br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^499$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>3.</b> How many numbers does the above loop print? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^500$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br>For the next several questions, consider the following snippet of code: <pre>  for k in range(300, 700): <br>      print(k) </pre>",
  "<br><b>4.</b> What is the <em>first</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^300$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>5.</b> What is the <em>last</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^699$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>6.</b> How many numbers does the above loop print? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^400$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br>For the next several questions, consider the following snippet of code: <pre>  for k in range(300, 320, 5): <br>      print(k) </pre>",
  "<br><b>7.</b> What is the <em>first</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^300$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>8.</b> What is the <em>last</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^315$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>9.</b> How many numbers does the above loop print? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^4$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },

  "<br><br>For the next several questions, consider the following snippet of code: <pre>  for k in range(300, 321, 5): <br>      print(k) </pre>",
  "<br><b>10.</b> What is the <em>first</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^300$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>11.</b> What is the <em>last</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^320$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><b>12.</b> How many numbers does the above loop print? <br>",

  {
    questionType: "freetext",
    correctAnswerRegex: /^5$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br>For the next several questions, consider the following snippet of code: <pre>  for k in range(321, 300, -5): <br>      print(k) </pre>",
  "<br><br><b>12.</b> What is the <em>first</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^321$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>13.</b> What is the <em>last</em> number that the above loop prints? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^301$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>14.</b> How many numbers does the above loop print? <br>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^5$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>15.</b> How many numbers does the following code snippet print? <pre>  for k in range(1, 10, -1): <br>      print(k) </pre>",
  {
    questionType: "freetext",
    correctAnswerRegex: /^0$/i,
    correctAnswerOutput: "Correct!",
    incorrectAnswerOutput: "Please try again."
  },
  "<br><br><b>16.</b> True or false:  The code snippet <pre>total = 0 <br>for k in range(m, n): <br>    total = total + k <br>print(total) </pre> and <pre>total = 0 <br>for j in range(n - m): <br>    total = total + j + m <br>print(total) </pre> both print the same thing. <br>",
  {
    questionType: "multiple choice",
    choices: [
      ["True", true, "Correct!"],
      ["False", false, "Please try again."],
    ]
  },
];
