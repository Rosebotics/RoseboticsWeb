var activity = [
  "<b>1.</b> Consider the function call   <pre>round(3.14159, 2)</pre> which rounds 3.14159 to 2 decimal places.  Use that code to answer the following questions<br>",

  {
    questionType: "multiple choice group",
    questionsList: [{
        questionHTML: "<b>a.</b> What are the <b>arguments</b> in that function call?",
        choices: ["3.14159", "3.14", "2", "round"],
        correctIndex: [0, 2]
      },
      {
        questionHTML: "<b>b.</b> What is the <b>returned value</b> from that function call?",
        choices: ["3.14159", "3.14", "2", "round"],
        correctIndex: [1]
      },
      {
        questionHTML: "<b>c.</b> What is the <b>name</b> of the function being called?",
        choices: ["3.14159", "3.14", "2", "round"],
        correctIndex: [3]
      }

    ],
    allCorrectOutput: "Well done!",
    someIncorrectOutput: "Please try again.",
  },

  "<br><br><b>2.</b> Does the following <b><em>define</em></b> or <b><em>call</em></b> the function <code>blah</code>?<br>",
  {
    questionType: "multiple choice group",
    questionsList: [{
        questionHTML: "<pre>blah(x, 34, foo(100)) </pre>",
        choices: ["define", "call"],
        correctIndex: 1
      },
      {
        questionHTML: "<pre>def blah(a, b, c):</br>    print(10 * a, b + 4, c) </pre>",
        choices: ["define", "call"],
        correctIndex: [0]
      }
    ],
    allCorrectOutput: "Well done!",
    someIncorrectOutput: "Please try again.",
  },


  "<br><br><b>3.</b> As a user of a function (that is, as someone who will call the function), you don't need to know how the function is implemented; you just need to know the specification of the function.<br>",
  {
    questionType: "multiple choice",
    choices: [
      ["True", true, "Correct!"],
      ["False", false, "Please try again."]
    ]
  },

  "<br><br>For the next several questions, consider the <b><code>cube_volume</code></b> function defined as follows: <pre>def cube_volume(side_length):<br>    volume = side_length ** 3<br>    return volume<br></pre>",
  "<br><b>4.</b>  What is the value of <b><code>cube_volume(3)</code></b>? <br>",
  {
    questionType: "multiple choice",
    choices: [
      ["9", false, "Please try again."],
      ["27", true, "Correct!"],
      ["81", false, "Please try again."],
      ["256", false, "Please try again."],
      ["512", false, "Please try again."],
    ]
  },
  "<br><br><b>5.</b> What is the value of <b><code>cube_volume(2)</code></b>? <br>",
  {
    questionType: "multiple choice",
    choices: [
      ["4", false, "Please try again."],
      ["8", true, "Correct!"],
      ["9", false, "Please try again."],
      ["16", false, "Please try again."],
      ["27", false, "Please try again."],
    ]
  },
  "<br><br><b>6.</b> What is the value of <b><code>cube_volume(cube_volume(2))</code></b>? <br>",
  {
    questionType: "multiple choice",
    choices: [
      ["4", false, "Please try again."],
      ["27", false, "Please try again."],
      ["81", false, "Please try again."],
      ["256", false, "Please try again."],
      ["512", true, "Correct!"],
      ["729", false, "Please try again."],
    ]
  },
  "<br><br>For the next several questions, consider the <b><code>mystery</code></b> function defined as follows: <pre>def mystery(x, y):<br>    result = (x + y) / (y - x)<br>    return result<br></pre>",
  "<b>7.</b> What is the value of <b><code>mystery(2, 3)</code></b>? <br>",
    {
      questionType : "freetext",
      correctAnswerRegex : /^5$/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },
    "<br><br><b>8.</b> What is the value of <b><code>mystery(3, 2)</code></b>? <br>",
    {
      questionType : "freetext",
      correctAnswerRegex : /^-5$/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },
    "<br><br><b>9.</b> What is the value of <b><code>mystery(-1, 3)</code></b>? <br>",
    {
      questionType : "freetext",
      correctAnswerRegex : /.5$/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again."
    },
];
