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
		'<b>1.</b> How many interrupt service routines are used in <b>Compatibility</b> mode?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Only 1 ISR is used, the high_isr', true, 'Correct!' ],
					['2 ISRs are used, high_isr and low_isr', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>2.</b> How many interrupt service routines are used in <b>Priority</b> mode?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Only 1 ISR is used, the high_isr', false, 'Please try again.' ],
					['2 ISRs are used, high_isr and low_isr', true, 'Correct!' ] ]
		},
		
		'<br><br><b>3.</b> Write the line of code needed to enable the <b>Priority</b> interrupt mode? (consult your MPLABx code)<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /RCONbits\.IPEN\s*=\s*1;/i,
			correctAnswerOutput : 'Correct! Set IPEN to 1 if want Priority mode.  If you want Compatibility mode just set IPEN to 0.',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: RCONbits.IPEN = 1;'
		},

		'<br><br><b>4.</b> Write the line of code needed to enable <b>low</b> priority interrupts? (consult your MPLABx code)<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /INTCONbits\.GIEL\s*=\s*1;/i,
			correctAnswerOutput : 'Correct! Make sure you\'ve also set INTCONbits.GIEH = 1; (which is required)',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: INTCONbits.GIEL = 1;'
		},

		'<br><br><b>5.</b> Write the line of code needed to make the RB2 interrupt a <b>low</b> priority interrupt? (consult your MPLABx code)<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /INTCON3bits\.INT2IP\s*=\s*0;/i,
			correctAnswerOutput : 'Correct! ',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: INTCON3bits.INT2IP = 0;'
		},
		
		'<br><br><b>6.</b> Whenever you use Priority mode you should always set the specific interrupt as either <b>high</b> or <b>low</b> priority.  Except for one interrupt.  Which one?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['RB1 (also called Interrupt 1)', false, 'Please try again.' ],
					['Timer0', false, 'Please try again.' ],
					['Communication UART Rx interrupt', false, 'Please try again.' ],
					['RB0 (also called Interrupt 0)', true, 'Correct!' ] ]
		},
				
		
		
];
