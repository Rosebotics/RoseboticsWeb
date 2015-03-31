var activity = [
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Question A',
						choices : [ 'Option 1', 'Option 2', 'Option 3' ],
						correctIndex : 1
					},
					{
						questionHTML : '<b>b.</b> Question B',
						choices : [ 'Option 1', 'Option 2', 'Option 3' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>c.</b> Question C',
						choices : [ 'Brushed gearhead DC motor',
								'Stepper motor', 'Servo motor' ],
						correctIndex : 0
					}, {
						questionHTML : '<b>d.</b> Question D',
						choices : [ 'Option 1', 'Option 2', 'Option 3' ],
						correctIndex : [ 1, 2 ]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: ...',
		},

		{
			questionType : 'multiple choice',
			choices : [
					['Option A', false, 'Please try again.' ],
					['Option B', false, 'Please try again.' ],
					['Option C', true, 'Correct!' ],
					['Option D', false, 'Please try again.' ] ]
		},

		{
			questionType : 'freetext',
			correctAnswerRegex : /Delay10KTCYx\(\s*250\s*\);/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer'
		},

		'<img src="assets/img/lcd_code.png" alt="LCD code"><br>',
		
		'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (x == 7) {<br>&nbsp; &nbsp;printf("x is 7\\n");<br>}<br></code>',
];
