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

		'<b>1.</b> Which UART interrupts will we use? <br>',


		{
			questionType : 'multiple choice',
			choices : [
					['None', false, 'Please try again.' ],
					['The UART Tx interrupt only', false, 'Please try again.' ],
					['The UART Rx interrupt only', true, 'Correct!' ],
					['The UART Tx & Rx interrupts', false, 'Please try again.' ] ]
		},

		'<br><br><b>2.</b> What would be received if you sent this command... <br>',
		'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">char byteToSend = 50;<br>printf("%c", byteToSend);<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Receive gets 1 byte, the value of that byte is 50 (ie 0x32), which is ASCII \'2\'', true, 'Correct!' ],
					['Receive gets 1 byte, the value of that byte is 2, which is not ASCII', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 53 which is ASCII \'5\', then the second value is 48 which is ASCII \'0\'', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 5 which is not ASCII, then the second value is 0 which is not ASCII', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> What would be received if you sent this command... <br>',
		'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">char byteToSend = 2;<br>printf("%c", byteToSend);<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Receive gets 1 byte, the value of that byte is 50 (ie 0x32), which is ASCII \'2\'', false, 'Please try again.' ],
					['Receive gets 1 byte, the value of that byte is 2, which is not ASCII', true, 'Correct!' ],
					['Receive gets 2 bytes, the first value is 53 which is ASCII \'5\', then the second value is 48 which is ASCII \'0\'', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 5 which is not ASCII, then the second value is 0 which is not ASCII', false, 'Please try again.' ] ]
		},

		'<br><br><b>4.</b> What would be received if you sent this command... <br>',
		'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">char byteToSend = \'2\';<br>printf("%c", byteToSend);<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Receive gets 1 byte, the value of that byte is 50 (ie 0x32), which is ASCII \'2\' (EXACT same as problem 2)', true, 'Correct!' ],
					['Receive gets 1 byte, the value of that byte is 2, which is not ASCII', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 53 which is ASCII \'5\', then the second value is 48 which is ASCII \'0\'', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 5 which is not ASCII, then the second value is 0 which is not ASCII', false, 'Please try again.' ] ]
		},

		'<br><br><b>5.</b> What would be received if you sent this command... <br>',
		'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">char byteToSend = 50;<br>printf("%d", byteToSend);<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Receive gets 1 byte, the value of that byte is 50 (ie 0x32), which is ASCII \'2\'', false, 'Please try again.' ],
					['Receive gets 1 byte, the value of that byte is 2, which is not ASCII', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 53 which is ASCII \'5\', then the second value is 48 which is ASCII \'0\'', true, 'Correct!' ],
					['Receive gets 2 bytes, the first value is 5 which is not ASCII, then the second value is 0 which is not ASCII', false, 'Please try again.' ] ]
		},

		'<br><br><b>6.</b> What would be received if you sent this command... <br>',
		'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">char byteToSend = 50;<br>printf("%c", byteToSend / 10);<br>printf("%c", byteToSend % 10);<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Receive gets 1 byte, the value of that byte is 50 (ie 0x32), which is ASCII \'2\'', false, 'Please try again.' ],
					['Receive gets 1 byte, the value of that byte is 2, which is not ASCII', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 53 which is ASCII \'5\', then the second value is 48 which is ASCII \'0\'', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 5 which is not ASCII, then the second value is 0 which is not ASCII', true, 'Correct!' ] ]
		},

		'<br><br><b>7.</b> What would be received if you sent this command... <br>',
		'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">char byteToSend = 50;<br>printf("%c", byteToSend / 10 + 48);<br>printf("%c", byteToSend % 10 + 48);<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Receive gets 1 byte, the value of that byte is 50 (ie 0x32), which is ASCII \'2\'', false, 'Please try again.' ],
					['Receive gets 1 byte, the value of that byte is 2, which is not ASCII', false, 'Please try again.' ],
					['Receive gets 2 bytes, the first value is 53 which is ASCII \'5\', then the second value is 48 which is ASCII \'0\' (Exactly the same as problem 5)', true, 'Correct!' ],
					['Receive gets 2 bytes, the first value is 5 which is not ASCII, then the second value is 0 which is not ASCII', false, 'Please try again.' ] ]
		},
		
];
