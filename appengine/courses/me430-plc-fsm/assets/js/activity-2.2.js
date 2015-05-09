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
		'<b>1.</b> What type of Timer is shown here?<br>',

		'<img src="assets/img/plc_timing_quiz.png" alt="PLC Timing Chart"><br>',
		{
			questionType : 'multiple choice',
			choices : [
					['Off-Delay Timer with a 1.5 second setpoint', false, 'Please try again.' ],
					['On-Delay Timer with a 1.5 second setpoint',  true, 'Correct!' ] ]
		},
		
		'<br><br><b>2.</b> If Timer 1 shown in the chart above was changed to an Off-Delay Timer with the same setpoint.  At what times would the Timer go low?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['2.5, 5.5, and 7.5', false, 'Please try again.' ],
					['4.0, 6.5, and 9.0', false, 'Please try again.' ],
					['4.0 and 9.0',  true, 'Correct!']
					]
		},
		
		'<br><br><b>3.</b> Again pretending that Timer 1 was changed to an Off-Delay Timer with a 1.5 second setpoint.  At what times would the Timer go high?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['1.5', false, 'Please try again.' ],
					['0, 4.75, and 6.5', false, 'Please try again.  I tricked you. :)  It was already high at 6.5 remember.' ],
					['0 and 4.75', true, 'Correct!' ],
					['4.0 and 9.0', false, 'Please try again.' ]
					]
		},
		
		'<br><br><b>4.</b> There are clever ways to use Timers.  You could (with some effort) use either Timer type to solve any problem.  However there are times when one might be easier than the other.<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> If you just want something to stay on for longer (bonus time) and don\'t need any action at the end',
						choices : [ 'Use an Off-Delay Timer', 'Use an On-Delay Timer' ],
						correctIndex : 0
					},
					{
						questionHTML : '<b>b.</b> If you are in a state and want to take an action at the end of a time interval',
						choices : [ 'Use an Off-Delay Timer', 'Use an On-Delay Timer' ],
						correctIndex : 1
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hint: Each answer is used once.',
		},
];
