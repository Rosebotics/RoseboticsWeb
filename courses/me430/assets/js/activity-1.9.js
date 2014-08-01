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

  '<b>1.</b> Assuming you use a 4 MHz clock, what single line of code can cause a 2.5 second delay?<br>',
	{
		questionType : 'freetext',
		correctAnswerRegex : /Delay10KTCYx\(\s*250\s*\);/i,
		correctAnswerOutput : 'Correct!',
		incorrectAnswerOutput : 'Please try again.  Be careful with capitalization.',
		showAnswerOutput : 'Here is the answer: Delay10KTCYx(250);'
	},
	
  '<br><br><b>2.</b> Assuming you use a 4 MHz clock, which code snippet below would cause a 3 second delay?<br>',

	{
		questionType : 'multiple choice',
		choices : [ [ 'Delay10KTCYx(300);',  false, 'Please try again.'],
				[ 'Delay10KTCYx(150);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delay10KTCYx(150);', true, 'Correct!' ] ]
	},
	
	'<br><br><b>4.</b> How many lines of code are needed to delay for 45,012 instructions?<br>',

	
	{
		questionType : 'multiple choice',
		choices : [ [ '2', false, 'Please try again.' ],
				[ '3', false, 'Please try again.' ],
				[ '4', true, 'Correct! Delay1KTCYx(45); Delay10TCYx(1); Delay1TCY(); Delay1TCY();' ],
				[ '5', false, 'Please try again. You can do it in one line less.' ] ]
	},
	
	'<br><br><b>5.</b> Put a check by all the valid ways to delay by 12,340 instructions.<br>',

	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ '<code style="font-weight: bold; margin: 5px 10px 5px 20px; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">Delay1KTCYx(12);<br>Delay10TCYx(34);</code>',
					            '<code style="font-weight: bold; margin: 5px 10px 5px 20px; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">Delay100TCYx(123);<br>Delay10TCYx(4);</code>',
					            '<code style="font-weight: bold; margin: 5px 10px 5px 20px; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">Delay10KTCYx(1);<br>Delay1KTCYx(2);<br>Delay100TCYx(3);<br>Delay10TCYx(4);</code>',
					            '<code style="font-weight: bold; margin: 5px 10px 5px 20px; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">Delay10TCYx(1234);</code>',
					            '<code style="font-weight: bold; margin: 5px 10px 5px 20px; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">Delay10KTCYx(1);<br>Delay10TCYx(234);</code>'],
					correctIndex : [0,1,2,4]
				}],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hint: All valid except for one.',
	},

];

