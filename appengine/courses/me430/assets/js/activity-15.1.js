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
		'<b>1.</b> What are the three most common communication protocols used by general purpose microcontrollers?<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '',
						choices : [ 'WiFi', 'USB', 'SPI', 'Bluetooth', 'RS232', 'UART', 'I2C', 'RF' ],
						correctIndex : [ 2, 5, 6 ]
					} ],
			allCorrectOutput : 'Well done!  Serial Peripheral Interface, Inter-Integrated Circuit, and Universal Asynchronous Receiver/Transmitter',
			someIncorrectOutput : 'Please try again. Hints: Serial Peripheral Interface, Inter-Integrated Circuit, and Universal Asynchronous Receiver/Transmitter (note, RS232 is a version of UART that uses -12 volt / +12 volt signals that is not used much anymore on today\'s computers)'
		},
		
		'<br><br><b>2.</b> Why to we use UART communication in this class?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Because it is the fastest!', false, 'Please try again.'  ],
					['Because you can connect a bus of many devices that can all communicate together', false, 'Please try again.' ],
					['Because computers know how to do UART communication via a Virtual COM port.', true, 'Correct!' ] ]
		},

		'<br><br><b>3.</b> UART pins<br>',
		
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Which pin is the UART Rx line (data in)',
						choices : [ 'RC0', 'RC1', 'RC2', 'RC3', 'RC4', 'RC5', 'RC6', 'RC7'],
						correctIndex : 7
					},
					{
						questionHTML : '<b>b.</b> Which pin is the UART Tx line (data out)',
						choices : [ 'RC0', 'RC1', 'RC2', 'RC3', 'RC4', 'RC5', 'RC6', 'RC7'],
						correctIndex : 6
					},
					{
						questionHTML : '<b>c.</b> How did we set TRISC to make Rx an input and the others outputs?',
						choices : [ 'TRISC = 0x00;', 'TRISC = 0x10;', 'TRISC = 0x80;', 'TRISC = 0x7F;' ],
						correctIndex : 2
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Rx is on RC7 (an input), Tx is on RC6 (an output)',
		},
		
		'<br><br><b>4.</b> Assume you have the UART openned correctly already and you\'d like to transmit a char called <b>myByte</b> (which already has a value).  What is the line of code you\'d type to send this single byte using the UART?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /printf\("%c",\s*myByte\);/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: printf("%c", myByte);'
		},

		
		
];
