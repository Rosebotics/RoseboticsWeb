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

		'<b>1.</b>If 3 pins are set as analog inputs then channel 0 (AN0), channel 1 (AN1), and channel 2 (AN2) are analog.<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Which pins are AN0, AN1, and AN2?',
						choices : [ 'RE0', 'RE1', 'RE2', 'RA0', 'RA1', 'RA2', 'RA3', 'RB0', 'RB1', 'RB2', 'RB3'],
						correctIndex : [3, 4, 5]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.  Start with PORTA.',
		},

	    '<br><br><b>2.</b> The ADC (Analog-to-Digital Conversion) library functions are defined by what include?  Fill in this blank #include <________.h><br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /adc/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'adc is the answer.  #include <adc.h>'
		},
		
	    '<br><br><b>3.</b> If an analog reading gives the value 307, what is the actual voltage reading on that pin? (ie What would you read with a digital multimeter on that pin?)<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['0.5 volts', false, 'Please try again.' ],
					['1.0 volts', false, 'Please try again.' ],
					['1.5 volts', true, 'Correct! Linear interpolation 307 / 1023 = x / 5, rearrange 307/1023 * 5 volts = 1.5 volts' ],
					['2.0 volts', false, 'Please try again.' ] ]
		},

		'<br><br><b>4.</b> If a digital multimeter measures 3.91 volts on an analog input what would you expect the adc reading to be?<br>',
 
		{
			questionType : 'freetext',
			correctAnswerRegex : /800/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for 800. Linear interpolation of 3.91/5 * 1023 = 800'
		},
				
];
