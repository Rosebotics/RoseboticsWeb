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
		'<b>1.</b> If you wanted 7 analog inputs what portconfig value would you pass into OpenADC? (note, that value will set <a href="http://www.rose-hulman.edu/class/me/HTML/ME430_Material_2_0/Public/Courseware/ADCON1.png" target="_blank">ADCON1</a>)<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['0x08 (same as 0b1000)', true, 'Correct!' ],
					['0x0B (same as 0b1011)', false, 'Please try again.' ],
					['0x0D (same as 0b1101)', false, 'Please try again.' ],
					['0x0E (same as 0b1110)', false, 'Please try again.' ] ]
		},
		
	    '<br><br><b>3.</b> When you set 7 pins as analog, exactly which 7 pins did you set as analog?<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Check only the 7 analog inputs',
						choices : [ 'RA0', 'RA1', 'RA2', 'RA3', 'RA4', 'RA5', 'RB0', 'RB1', 'RB2', 'RB3', 'RB4', 'RB5', 'RE0', 'RE1', 'RE2',  ],
						correctIndex : [0,1,2,3,5,12,13]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: RA0-RA3, RA5, and two from PORTE.',
		},
		
	    '<br><br><b>3.</b> If RB1 needs to be set as an analog input, what is the minimum number of analog inputs you can use?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /11/i,
			correctAnswerOutput : 'Correct! RB1 is analog channel 10, so that is 11 total analog inputs.',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: 11.  Since RB1 is analog channel 10, you must set channels 0-10 as analog, so that is 11 total analog inputs.'
		},

		
		
		'<br><br><b>4.</b> The code below uses a very poor variable name to save the ReadADC value (since ADC_CH4 is not RD2).  What would have been a better variable name?<br><br>',
		'<img src="assets/img/adc_channel_4.png" alt="ADC channel 4 code"><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['RA0value', false, 'Please try again.' ],
					['RA1value', false, 'Please try again.' ],
					['RA4value', false, 'Please try again.' ],
					['RA5value', true, 'Correct!' ] ]
		},
		
];
