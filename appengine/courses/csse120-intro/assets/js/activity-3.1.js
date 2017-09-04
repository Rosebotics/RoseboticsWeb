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
        questionHTML: "<pre>blah(x, 34, foo(100))",
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
  }

];
