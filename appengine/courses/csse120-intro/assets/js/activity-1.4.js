var activity = [

    "<b>1.</b> True or False: You should do the modules in the order in which they are numbered (so m1, then m2, then m3, etc).<br>",
    {
        questionType: "multiple choice",
        choices: [
            ["True", true, "Correct!"],
            ["False", false, "Please try again."]
        ]
    },


    "<br><br><b>2.</b> If you were to encounter a module named <em>m4e_robots</em>, you should<br>", {
        questionType: "multiple choice group",
        questionsList: [{
            questionHTML: "<b>a.</b> (check all that apply):",
            choices: ["Run the module.", "Read the code in the module at least briefly.", "Add code to the module."],
            correctIndex: [0, 1]
        }],
        allCorrectOutput: "Correct!  Always read the code in example modules at least briefly, so that you are ready for the exercises that follow it.",
        someIncorrectOutput: "Please try again. Hint: The 'e' in 'm4e' means that this is an EXAMPLE module.",
    },

    "<br><br><b>3.</b> Consider the following statement: <blockquote><code>print('2 * 2', 2 * 2)</code></blockquote><br>When it runs, what will it print?<br>",
    {
        questionType: "multiple choice",
        choices: [
            ["<code>print('2 * 2', 2 * 2)</code>", false, "Please try again."],
            ["<code>'2 * 2', 2 * 2</code>", false, "Please try again."],
            ["<code>2 * 2, 4</code>", false, "Please try again."],
            ["<code>2 * 2 4</code>", true, "Correct!"]
        ],
    }

];