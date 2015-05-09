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
		'<b>1.</b> Convert <b>0x2B</b> to decimal<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '42', false, 'Please try again.' ],
					[ '43', true, 'Correct!' ],
					[ '44', false, 'Please try again.' ],
					[ '45', false, 'Please try again.' ] ]
		},

		'<br><br><b>2.</b> Convert <b>36</b> to hexadecimal.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '0x14',  false, 'Please try again.'],
					[ '0x24', true, 'Correct!' ],
					[ '0x34', false, 'Please try again.' ],
					[ '0x44', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> Convert <b>0xBEEF</b> to binary.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '0b1011 1110 1110 1111', true, 'Correct!' ],
					[ '0b1111 1010 1100 1110', false, 'Please try again.' ],
					[ '0b1100 1010 1111 1110', false, 'Please try again.' ],
					[ '0b1101 1110 1010 1101', false, 'Please try again.' ] ]
		},

		'<br><br><b>4.</b> Convert <b>0b1100 0000 1101 1110</b> to hex.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '0x0430', false, 'Please try again.' ],
					[ '0xCAFE', false, 'Please try again.' ],
					[ '0xF00D', false, 'Please try again.' ],
					[ '0xC0DE', true, 'Correct!' ] ]
		},

];
