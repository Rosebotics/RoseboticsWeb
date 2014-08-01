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

		'<b>1.</b> Assume Input 1 is connected to a Counter 1 Count Pulse relay and Input 3 is connected to a Counter 1 Reset relay.<br>',

		'<img src="assets/img/plc_counter_quiz.png" alt="PLC Counter"><br>',
		'If the setpoint is 5 at what letter does the Counter become Made?<br>',
		
		{
			questionType : 'freetext',
			correctAnswerRegex : /^J$/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.'
		},
		
		'<br><br><b>2.</b> Again assuming a setpoint of 5, at what time does the Counter become Broken?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /^N$/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.'
		},
		
		
		'<br><br><b>3.</b> If the setpoint is changed to <b>7</b> at what letter does the Counter become Made?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /^P$/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.'
		},

		'<br><br><b>4.</b> In addition to the I1 to a C1 Count Pulse relay and I3 to a C1 Counter Reset relay, we\'ll add a I2 to C1 a Count Direction relay.<br>',

		'<img src="assets/img/plc_counter_direction_quiz.png" alt="PLC Counter"><br>',
		'If the setpoint is <b>1</b> at what letter<b>s</b> does the Counter become Made? (put letters in order with no spaces or commas, e.g. ABC)<br>',
		
		{
			questionType : 'freetext',
			correctAnswerRegex : /^ACJO$/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.  Hints: There are four.  Counters don\'t go negative: 0 minus 1 equals 0 in Counter math. ;)'
		},
		

		'<br><br><b>5.</b> With a setpoint of 1, at what letters does the Counter become Broken? (put letters in order with no spaces or commas, e.g. ABC)<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /^BDL$|^BDLP$/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.  Hints: There are three.  Although I guess you could add P (to make 4 total) to the end since it ends up as Made.'
		},
		
		'<br><br><b>6.</b> If the setpoint is changed to <b>2</b> at what letter does the Counter become Made?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /^P$/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.'
		},

];
