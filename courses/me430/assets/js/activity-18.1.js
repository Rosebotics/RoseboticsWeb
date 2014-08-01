// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var activity = [

		'<b>1.</b> Here is the FSM for this problem:<br>',

		'<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
		
		'In this problem you will be given the <b>outputs</b> and you will need to figure out the <i>inputs</i>.<br>Here is the timing chart for the outputs:<br>',

		'<img src="assets/img/quiz18_1_outputs.png" alt="FSM Outputs"><br>',
		'Which inputs would generate those outputs (for your convenience the FSM and outputs are repeated in each timing chart, but they don\'t change.<br>',
		'<br>I recommend you put your finger on the screen to track which state you are in.<br><b style="color:blue; text-decoration:underline;">Option A</b><br>',
		'<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
		'<img src="assets/img/quiz18_1_a.png" alt="FSM Option A"><br>',
		'<b style="color:blue; text-decoration:underline;">Option B</b><br>',
		'<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
		'<img src="assets/img/quiz18_1_b.png" alt="FSM Option B"><br>',
		'<b style="color:blue; text-decoration:underline;">Option C</b><br>',
		'<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
		'<img src="assets/img/quiz18_1_c.png" alt="FSM Option C"><br>',
		'<b style="color:blue; text-decoration:underline;">Option D</b><br>',
		'<img src="assets/img/quiz18_1_fsm.png" alt="FSM"><br>',
		'<img src="assets/img/quiz18_1_d.png" alt="FSM Option D"><br>',
		
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
		'This time the <b>inputs</b> are given.  Here they are...',
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
		'<img src="assets/img/quiz18_1_inputs_2.png" alt="FSM Inputs 2"><br>',
		'',

		{
			questionType : 'freetext',
			correctAnswerRegex : /^2$/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Should happen first at time = 2.'
		},
];
s