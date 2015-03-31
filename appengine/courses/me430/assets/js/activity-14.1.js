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
		'<b>1.</b> Which line of code would set the RC1 PWM output to a 75% duty cycle? (Hint in the lecture we used 102 which was a 10% duty cycle)<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['SetDCPWM1(75);', false, 'Please try again. Your math is correct but 140 is not a real (ie common) resistor size' ],
					['SetDCPWM2(75);',  false, 'Please try again.'],
					['SetDCPWM1(767);', false, 'Please try again.  Correct value but this one sets RC2' ],
					['SetDCPWM2(767);', true, 'Correct!' ],
					['SetDCPWM1(850);', false, 'Please try again.' ],
					['SetDCPWM2(850);', false, 'Please try again.' ]]
		},
		
		'<br><br><b>2.</b> What is the approximate duty cycle of this square wave?<br>',
		'<img src="assets/img/squarewave.gif" alt="square wave"><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['25%', false, 'Please try again.' ],
					['33%', true, 'Correct!' ],
					['50%', false, 'Please try again.' ],
					['66%', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> A PWM frequency of 5kHz would have how much time between rising edges?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['0.000100 seconds', false, 'Please try again.' ],
					['0.000200 seconds', true, 'Correct!' ],
					['0.000500 seconds', false, 'Please try again.' ],
					['0.200000 seconds', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>4.</b> What is the line of code used to stop the piezo buzzer (ie set the duty cycle to 0)?<br>',


		{
			questionType : 'freetext',
			correctAnswerRegex : /SetDCPWM1\(0\);/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for: SetDCPWM1(0);'
		},
		
];
