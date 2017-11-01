var activity = [

    '<b>1.</b> Here is the FSM for this problem:<br>',

    '<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',

    'In this problem you will be given the <b>outputs</b> and you will need to figure out the <i>inputs</i>.<br>Here is the timing chart for the outputs:<br>',

    '<img src="assets/img/quiz18_1_outputs.png" alt="FSM Outputs"><br>',
    'Which inputs would generate those outputs (for your convenience the FSM and outputs are repeated in each timing chart, but they don\'t change.<br>',
    '<br>I recommend you put your finger on the screen to track which state you are in.<br><b style="text-decoration:underline;">Option A</b><br>',
    '<img style="margin-left: 15px" src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
    '<br><img style="margin-left: 15px" src="assets/img/quiz18_1_a.png" alt="FSM Option A"><br>',
    '<b style="text-decoration:underline;">Option B</b><br>',
    '<img style="margin-left: 15px" src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
    '<br><img style="margin-left: 15px" src="assets/img/quiz18_1_b.png" alt="FSM Option B"><br>',
    '<b style="text-decoration:underline;">Option C</b><br>',
    '<img style="margin-left: 15px" src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
    '<br><img style="margin-left: 15px" src="assets/img/quiz18_1_c.png" alt="FSM Option C"><br>',
    '<b style="text-decoration:underline;">Option D</b><br>',
    '<img style="margin-left: 15px" src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
    '<br><img style="margin-left: 15px" src="assets/img/quiz18_1_d.png" alt="FSM Option D"><br>',

    {
      questionType : 'multiple choice',
      choices : [
          ['Option A', false, 'Please try again.' ],
          ['Option B', false, 'Please try again.' ],
          ['Option C', true, 'Correct!' ],
          ['Option D', false, 'Please try again.' ] ]
    },

      '<br><br><b>2.</b>For this problem you will use the same FSM, but new inputs.<br>',
    '<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
    'This time the <b>inputs</b> are given.  Here they are...<br>',
    '<img src="assets/img/quiz18_1_inputs_1.png" alt="FSM Inputs"><br>',
    'At what time does \'Victory Music\' first go high the first time?  (put in the number or put 28 if it never goes high)',

    {
      questionType : 'freetext',
      correctAnswerRegex : /^17$/i,
      correctAnswerOutput : 'Correct!',
      incorrectAnswerOutput : 'Please try again.',
      showAnswerOutput : 'Should happen first at time = 17.'
    },

      '<br><br><b>3.</b> At what time does \'Victory Music\' go high the first time with these inputs?  (put in the number or put 28 if it never goes high)<br>',
    '<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
    '<img src="assets/img/quiz18_1_inputs_2.png" alt="FSM Inputs 2"><br><br>',

    {
      questionType : 'freetext',
      correctAnswerRegex : /^2$/i,
      correctAnswerOutput : 'Correct!',
      incorrectAnswerOutput : 'Please try again.',
      showAnswerOutput : 'Should happen first at time = 2.'
    },
];

