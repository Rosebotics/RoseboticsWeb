var activity = [


    "<br><br>For the next several questions, you will probably want to use post-it cards (as in the video) and/or some written notes to help you solve them, and perhaps a calculator.",
    "<br><br><b>1.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 4<br>    answer = mystery(a + 1)<br>    print(answer)<br><br>def mystery(x):<br>    y = x * x<br>    return y<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^25$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },

    "<br><br><b>2.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 4<br>    print(mystery(a + 1))<br>   <br>def mystery(x):<br>    return x * x<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^25$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },
    "<br><br><b>3.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 4<br>    print(mystery(a + 1))<br>   <br>def mystery(x):<br>    a = 9<br>    return x * x<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^25$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },
    "<br><br><b>4.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 4<br>    mystery(a + 1)<br>    print(a)<br>   <br>def mystery(x):<br>    a = 9<br>    return x * x<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^4$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },
    "<br><br><b>5.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 4<br>    b = mystery(a + 1)<br>    print(a + b)<br>   <br>def mystery(x):<br>    a = 9<br>    return x * x<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^29$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },
    "<br><br><b>6.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 4<br>    b = mystery(a + 1)<br>    print(a + b)<br>   <br>def mystery(x):<br>    a = 9<br>    return a * x<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^49$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },
    "<br><br><b>7.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 4<br>    print(mystery(a + 1) + mystery(a + 1))<br>   <br>def mystery(x):<br>    a = 9<br>    return x * x<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^50$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },
    "<br><br><b>8.</b> What gets printed when <b><code>main</code></b> is called in the program shown below?<pre>def main():<br>    a = 2<br>    print(mystery(mystery(a + 1)))<br>   <br>def mystery(x):<br>    return x * x<br></pre>",
    {
        questionType: "freetext",
        correctAnswerRegex: /^81$/i,
        correctAnswerOutput: "Correct!",
        incorrectAnswerOutput: "Please try again."
    },
    "<br><br>For each of the following code snippets: <ul><li>If the code is correct, state what gets printed when <b><code>main</code></b> runs.</li><li>If the code is wrong, explain why.</li></ul> For this and all subsequent problems, assume that <b>no global variables have been defined</b>. (If, as is likely, you don't know what a <em>global variable</em> is, no problem!)",
    "<br><br><b>9.</b> <pre>def main():<br>    x = foo()<br>    print(x)<br><br>def foo(m):<br>    return m ** 3<br></pre>",
    {
        questionType: "multiple choice",
        choices: [
            ["Correct, prints the value of <b><code> x**3 </code></b>", false, "Please try again."],
            ["Correct, prints the value of <b><code> m**3 </code></b>", false, "Please try again."],
            ["Incorrect because the call to <b><code> foo </code></b> is missing a parameter", true, "Correct!"],
            ["Incorrect because <b><code> m </code></b> in <b><code> foo </code></b> is undefined", false, "Please try again."],
            ["Incorrect because <b><code> x </code></b> is undefined", false, "Please try again."],
            ["Incorrect because the value of <b><code> m </code></b> can't be cubed", false, "Please try again."],
        ]
    },
    "<br><br><b>10.</b> <pre>def main():<br>    x = foo(m)<br>    print(x)<br><br>def foo(m):<br>    return m ** 3<br></pre>",
    {
        questionType: "multiple choice",
        choices: [
            ["Correct, prints the value of <b><code> x**3 </code></b>", false, "Please try again."],
            ["Correct, prints the value of <b><code> m**3 </code></b>", false, "Please try again."],
            ["Incorrect because the call to <b><code> foo </code></b> is missing an argument", false, "Please try again."],
            ["Incorrect because <b><code> m </code></b> in <b><code> foo </code></b> is undefined", false, "Please try again."],
            ["Incorrect because <b><code> m </code></b> in <b><code> main </code></b> is undefined", true, "Correct!"],
            ["Incorrect because <b><code> x </code></b> is undefined", false, "Please try again."],
            ["Incorrect because the value of <b><code> m </code></b> can't be cubed", false, "Please try again."],
        ]
    },
    "<br><br><b>11.</b> <pre>def main():<br>    x = foo('help')<br>    print(x)<br><br>def foo(m):<br>    return m ** 3<br></pre>",
    {
        questionType: "multiple choice",
        choices: [
            ["Correct, prints <b><code> helphelphelp </code></b>", false, "Please try again."],
            ["Correct, prints <b><code> m**3  </code></b>", false, "Please try again."],
            ["Incorrect because the call to <b><code> foo </code></b> is missing an argument", false, "Please try again."],
            ["Incorrect because <b><code> m </code></b> in <b><code> foo </code></b> is undefined", false, "Please try again."],
            ["Incorrect because <b><code> x </code></b> is undefined", false, "Please try again."],
            ["Incorrect because the value of <b><code> m </code></b> can't be cubed", true, "Correct!"],
        ]
    },
    "<br><br><b>12.</b> The code in the box below has syntax errors:  Check all lines that would have error message(s) beside them. <pre>def main():<br>    foo()<br>    print(n)<br>    print(m)<br><br>def foo():<br>    n = 3<br>    m = 1<br>    return m</pre>",
    {
        questionType: "multiple choice group",
        questionsList: [{
            questionHTML: "",
            choices: ["<code>def main(): </code>",
                "<code>&nbsp;&nbsp;&nbsp;&nbsp; foo() </code>",
                "<code>&nbsp;&nbsp;&nbsp;&nbsp; print(n) </code>",
                "<code>&nbsp;&nbsp;&nbsp;&nbsp; print(m) </code>",
                "",
                "<code>def foo(): </code>",
                "<code>&nbsp;&nbsp;&nbsp;&nbsp; n = 3 </code>",
                "<code>&nbsp;&nbsp;&nbsp;&nbsp;  m = 1 </code>",
                "<code>&nbsp;&nbsp;&nbsp;&nbsp; return m </code>"
            ],
            correctIndex: [2, 3]
        }],
        allCorrectOutput: "Well done!",
        someIncorrectOutput: "Please try again. Hints: There are 2 lines that cause issues.",
    },

];