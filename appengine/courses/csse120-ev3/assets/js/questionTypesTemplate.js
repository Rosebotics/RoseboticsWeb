var activity = [
    "<br><br><b>.</b> <br>",
    {
      questionType : "multiple choice group",
      questionsList : [
          {
            questionHTML : "<b>a.</b> Question A",
            choices : [ "Option 1", "Option 2", "Option 3" ],
            correctIndex : 1
          },
          {
            questionHTML : "<b>b.</b> Question B",
            choices : [ "Option 1", "Option 2", "Option 3" ],
            correctIndex : 2
          },
          {
            questionHTML : "<b>c.</b> Question C",
            choices : [ "Brushed gearhead DC motor", "Stepper motor", "Servo motor" ],
            correctIndex : 0
          }, {
            questionHTML : "<b>d.</b> Question D",
            choices : [ "Option 1", "Option 2", "Option 3" ],
            correctIndex : [ 1, 2 ]
          } ],
      allCorrectOutput : "Well done!",
      someIncorrectOutput : "Please try again. Hints: ...",
    },

    "<br><br><b>.</b> <br>",
    {
      questionType : "multiple choice",
      choices : [
          ["", false, "Please try again." ],
          ["", false, "Please try again." ],
          ["", true, "Correct!" ],
          ["", false, "Please try again." ] ]
    },

    "<br><br><b>.</b> <br>",
    {
      questionType : "multiple choice",
      choices : [
          ["True", true, "Correct!" ],
          ["False", false, "Please try again." ] ]
    },

    "<br><br><b>.</b> <br>",
    {
      questionType : "freetext",
      correctAnswerRegex : /Delay10KTCYx\(\s*250\s*\);/i,
      correctAnswerOutput : "Correct!",
      incorrectAnswerOutput : "Please try again.",
      showAnswerOutput : "Here is the answer"
    },

    "<img src='assets/img/lcd_code.png' alt='LCD code'><br>",

    "<ul><li></li><li></li><li></li><li></li></ul>"
    <a target='_blank' href=''></a>
    <li style='margin-left: 30px;'><b></b> - </li>

    <pre>def main():<br>    blah()<br>    blah()<br>    blah()<br><br>def blah():<br>    print('one')<br>    print('two')<br><br>main()</pre>


    '<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (x == 7) {<br>&nbsp; &nbsp;printf("x is 7\\n");<br>}<br></code>',
];
