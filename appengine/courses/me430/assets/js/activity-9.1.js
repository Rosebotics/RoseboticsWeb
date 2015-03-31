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

		'<b>1.</b> Assume you have a char array defined as <b>char myMessage[] = "Hello";</b>  How would you write <b>myMessage</b> to the LCD?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['XLCDPut(myMessage);', false, 'Please try again.' ],
					['XLCDPutRamString(myMessage);', true, 'Correct!' ],
					['XLCDPutRomString(myMessage);', false, 'Please try again.' ],
					['printf(myMessage);', false, 'Please try again.' ] ]
		},

		'<br><br><b>2.</b>  If you simply wanted to write the literal "Hello" to the LCD how would you do that?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['XLCDPut("Hello");', false, 'Please try again.' ],
					['XLCDPutRamString("Hello");', false, 'Please try again.' ],
					['XLCDPutRomString("Hello");', true, 'Correct!' ],
					['printf("Hello");', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b>  Is this syntax ok? <b>XLCDPut("A");</b><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Yes.  XLCDPut adds a single character and that string is one character long.', false, 'Please try again.' ],
					['No. XLCDPut adds a single <b>char</b>.  Use XLCDPut(\'A\');', true, 'Correct! Notice that there is no XLCDPutRamChar / XLCDPutRomChar.  Only one function is needed.  (I can explain why if you care to learn more about the number of bits used in a flash memory pointer vs a data memory pointer)' ] ]
		},
		
		
		
		'<br><br><b>4.</b>  What will this code print on the <b>first</b> line of the LCD ?<br>',
	    '<img src="assets/img/lcd_code.png" alt="LCD code">',
		
		{
			questionType : 'freetext',
			correctAnswerRegex : /I like ME430/i,
			correctAnswerOutput : 'Correct! And I\'m so glad to hear that. :)',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for...  I like ME430'
		},
		
];
