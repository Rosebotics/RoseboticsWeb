var activity = [
  "<b>1.</b> True or False: To solve a problem by writing computer code for it, you must <em>understand</em> the problem that you are solving. <br>",
  {
    questionType: "multiple choice",
    choices: [
      ["True ", true, "Correct!"],
      ["False", false, "Please try again."],
    ]
  },
  "<br><br><b>2.</b> True or False: One excellent way to figure out how to <em>code</em> the problem that you are solving is to <em>first solve a concrete example by hand.</em>. <br>",
  {
    questionType: "multiple choice",
    choices: [
      ["True ", true, "Correct!"],
      ["False", false, "Please try again."],
    ]
  },
  "<br><br><b>3.</b> In choosing a concrete example to solve by hand, you should (check all that apply):",
  {
    questionType: "multiple choice group",
    questionsList: [{
      questionHTML: "",
      choices: [
        "Choose numbers that make the calculations easy.",
        "Choose spicy foods.",
        "Avoid symmetry. ",
        "Avoid anything that may lead to a special case.",
        "Avoid carbonated drinks.",
      ],
      correctIndex: [0, 2, 3]
    }],
    allCorrectOutput: "Well done!",
    someIncorrectOutput: "Please try again. Hints: 3 answers are correct",
  },

  "<br><br><b>4.</b> As you solve the problem by hand, using the concrete example that you have chosen, you should (check all that apply):",
  {
    questionType: "multiple choice group",
    questionsList: [{
      questionHTML: "",
      choices: [
        "Listen to music by Beethovan.",
        "Give <em>names</em> to the relevant items.",
        "Write the relevant code.",
        "Keep track of <em>how</em> you calculated each item, or at least be able to figure out afterwards how you calculated it.",
        "Twist and shout &ldquo;Roll over, Beethovan.&rdquo;",
      ],
      correctIndex: [1, 3]
    }],
    allCorrectOutput: "Well done!",
    someIncorrectOutput: "Please try again. Hints: 2 answers are correct",
  },
];
