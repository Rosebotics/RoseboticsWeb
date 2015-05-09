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
		'<b>1.</b> Mark each block of code as "Looks good" or "Has an issue". <br>',
		'Assume you have the varibles <b>int x;</b>  and <b>int y;</b> already declared.<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<hr><code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (x == 7) {<br>&nbsp; &nbsp;printf("x is 7\\n");<br>}<br></code><br>',
						choices : [ 'Looks good', 'Has an issue'],
						correctIndex : 0
					},
					{
						questionHTML : '<hr><code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (x = 7) {<br>&nbsp; &nbsp;printf("x is 7 and y is 13\\n");<br>}<br></code><br>',
						choices : [ 'Looks good', 'Has an issue'],
						correctIndex : 1
					},
					{
						questionHTML : '<hr><code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (x == 7 && y == 13)<br>&nbsp; &nbsp;printf("x is 7 and y is 13\\n");<br></code><br>',
						choices : [ 'Looks acceptable, but dangerous', 'Has an issue'],
						correctIndex : 0
					}, {
						questionHTML : '<hr><code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (x == 7 && y == 13)<br>&nbsp; &nbsp;printf("x is 7\\n");<br>&nbsp; &nbsp;printf("y is 13\\n");<br></code><br>',
						choices : [ 'Looks good', 'Has an issue'],
						correctIndex : 1
					}, {
						questionHTML : '<hr><code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (2 < x < y)<br>&nbsp; &nbsp;printf("x is greater than 2, but less than y\\n");</code><br>',
						choices : [ 'Looks good', 'Has an issue'],
						correctIndex : 1
					}, {
						questionHTML : '<hr><code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (y == 13);<br>&nbsp; &nbsp;printf("y is 13\\n");<br></code><br>',
						choices : [ 'Looks good', 'Has an issue'],
						correctIndex : 1
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: 2 look good, 4 have issues',
		},

		'<br><br><b>2.</b> What is missing in the blank below?<br>',
		'<img src="assets/img/else_if_blank.png"  alt="Missing else if"><br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /else if/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.'
		},
		

		'<br><br><b>3.</b> Does this else if block always print the same output as this switch block (for any value of x)?<br>',
		'<img src="assets/img/else_if_statement.png"  alt="else if statement"><br>',
		'<img src="assets/img/switch_statement.png"  alt="switch statement"><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Yes.  They are effectively the same code using different syntax.', true, 'Correct!' ],
					['No.  For some values of x they print different results', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>4.</b> Which would be easy to modify to check for x < 4?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['else if', true, 'Correct!' ],
					['switch', false, 'Please try again.' ] ]
		},
];
