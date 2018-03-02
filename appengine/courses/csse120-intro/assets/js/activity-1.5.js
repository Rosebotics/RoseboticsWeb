var activity = [

    "<b>1.</b> Which one of the following <em>constructs</em> a SimpleTurtle, as defined in the <em>rg</em> (short for rosegraphics) module?<br>",
    {
        questionType: "multiple choice",
        choices: [
            ["<code>thing2 = rg.SimpleTurtle()</code>", true, "Correct! Be sure to always include those parentheses - they are critical!"],
            ["<code>turtle = rg.SimpleTurtle</code>.", false, "You need the parentheses to construct an instance of a class, even when there is nothing to put inside the parentheses. Please try again."],
            ["<code>thing2.turtle</code>.", false, "This is the notation for accessing an <em>instance variable</em> of an object. Please try again."],
            ["<code>thing2.create()</code>.", false, "This is the notation for calling an <em>method</em> on an object. Please try again."],
        ]
    },

    "<br><br><b>2.</b> Which of the following would make a SimpleTurtle object go forward?<br>",
    {
        questionType: "multiple choice",
        choices: [
            ["<code>thing1 = rg.SimpleTurtle()<br>SimpleTurtle.forward(450)</code>", false, "This would attempt to make the SimpleTurtle <em>class</em> go forward.  You want a single, particular SimpleTurtle to go forward.  Try again."],
            ["<code>turtle = rg.SimpleTurtle()<br>turtle.foward</code>.", false, "You need the parentheses to call a method (i.e. make it run), regardless of whether any information needs to be in the parentheses. Please try again."],
            ["<code>turtle = rg.SimpleTurtle()<br>turtle.foward(450)</code>.", true, "Correct!"]
        ],
    },

];