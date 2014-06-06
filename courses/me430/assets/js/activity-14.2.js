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

		'<b>1.</b> What is the <b>frequency</b> of the PWM for this code? <br>',

		'<img src="assets/img/pwm_frequency_calculation.png" alt="PWM code"><br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /1250/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: 1250 Hz   1/frequency = (99+1) * 4 * (1/2000000) * 4'
		},

		'<br><br><b>2.</b> If you want a frequency of 200 Hz how would you setup the clock, Timer 2 prescaler, and OpenPWM function?<br>Select the very best option. (the exact frequency will be 200.32 Hz) <br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Clock frequency',
						choices : [ '8 MHz','4 MHz','2 MHz','1 MHz','500 kHz','250 kHz','125 kHz','31 kHz'],
						correctIndex : 2
					},
					{
						questionHTML : '<b>b.</b> Timer 2 prescaler',
						choices : [ '1', '4', '16' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>c.</b> OpenPWM function',
						choices : [ 'OpenPWM1(38);', 'OpenPWM1(77);', 'OpenPWM1(155);', 'OpenPWM1(312);' ],
						correctIndex : 2
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: A MHz clock that is not 4 MHz, the slowest prescaler, the biggest legal OpenPWM1 value',
		},
];
