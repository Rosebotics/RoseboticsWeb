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

  '<b>1.</b> Assume you have a int variable named C.  What is the shortest way to increment C by 1?<br>',
	{
		questionType : 'freetext',
		correctAnswerRegex : /C\+\+/i,
		correctAnswerOutput : 'Correct! C++; is shorthand for C = C + 1;',
		incorrectAnswerOutput : 'Please try again.  It\'s the next version C and uses the ++ operator.'
	},
	
  '<br><br><b>2.</b> If you had an int called <b>x</b> and you wanted to save the <b>ones</b> digit to a char named y, fill in the blank "char y = ________;" <br>',

	{
		questionType : 'freetext',
		correctAnswerRegex : /x\s*%\s*10/i,
		correctAnswerOutput : 'Correct!',
		incorrectAnswerOutput : 'Please try again.  We\'re looking for the modulus operator x % 10.'
	},

	'<br><br><b>3.</b> What is <b>int x = 0b00001001 << 4;</b><br>',

	{
		questionType : 'multiple choice',
		choices : [ [ '0b10010000', true, 'Correct!' ],
				[ '0b00100100', false, 'Please try again.' ],
				[ '0b10011111', false, 'Please try again.' ] ]
	},
	
	'<br><br><b>4.</b> What is <b>int x = 0b1011 && 0b0111;</b><br>',

	{
		questionType : 'multiple choice',
		choices : [ [ '0b0001', true, 'Correct!' ],
				[ '0b0011', false, 'Please try again.' ],
				[ '0b1111', false, 'Please try again.' ] ]
	},
	
	'<br><br><b>5.</b> What is <b>int x = 0b1011 & 0b0111;</b><br>',

	{
		questionType : 'multiple choice',
		choices : [ [ '0b0001',  false, 'Please try again.'],
				[ '0b0011', true, 'Correct!' ],
				[ '0b1111', false, 'Please try again.' ] ]
	},
	
	'<br><br><b>6.</b> Assuming you wanted to toggle a value between the states 0 and 1.  What command can be handy?<br>',

	{
		questionType : 'multiple choice',
		choices : [ [ 'x ^= 1;', true, 'Correct!'],
		            [ 'x &= 0b0001', false, 'Please try again.' ],
		            [ 'x &= 0b1110', false, 'Please try again.' ],
					[ 'x |= 0b0001', false, 'Please try again.' ] ]
	},
	
	'<br><br><b>7.</b> What value is stored in x if you type <b>char x = ~0xFA;</b>?<br>',

	{
		questionType : 'multiple choice',
		choices : [ [ '0', false, 'Please try again.'],
		            [ '1', false, 'Please try again.' ],
		            [ '5', true, 'Correct!' ],
					[ '-6', false, 'Please try again.' ] ]
	},	
	
	'<br><br><b>8.</b> What value is stored in x if you type <b>char x = !0xFA;</b>?<br>',

	{
		questionType : 'multiple choice',
		choices : [ [ '0', true, 'Correct!'],
		            [ '1', false, 'Please try again.' ],
		            [ '5', false, 'Please try again.' ],
					[ '-6', false, 'Please try again.' ] ]
	},	
	
	'<br><br><b>9.</b> Given this code.  What prints?<br>',
	'<code style="font-weight: bold; margin: 10px 10px 10px 20px; padding: 5px;	background: rgb(234, 248, 248);	display: inline-block;">char x = 7;<br>if (x ^ 0x0F && (!(3 >= x)) {<br>&nbsp;&nbsp;printf("That crazy thing is true.\\n");<br>} else {<br>&nbsp;&nbsp;printf("That crazy thing is false.\\n");<br>}</code><br>',	
	
	{
		questionType : 'multiple choice',
		choices : [ [ 'That crazy thing is true.', true, 'Correct!'],
		            [ 'That crazy thing is false.', false, 'Please try again.' ] ]
	},	
	

	'<br><br><b>10.</b> What is the proper name of this operator   <b>=</b><br>',
	
	{
		questionType : 'multiple choice',
		choices : [ [ 'Assignment operator', true, 'Correct!'],
		            [ 'Equals', false, 'Please try again.' ] ]
	}	
];

