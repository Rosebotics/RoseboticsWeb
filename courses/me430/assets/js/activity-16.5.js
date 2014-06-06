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

		'<b>1.</b> AND gates and OR gates are actually pretty easy to visualize and build with Ladder Logic.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'True', true, 'Correct!' ],
					[ 'False', false, 'Please try again.  Basic AND then OR is pretty easy if you think about the water flowing in a pipe analogy. :)' ] ]
		},
		
		'<br><br><b>2.</b> Break gates allow current to flow through the rung when the input switch is... <br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Made', false, 'Please try again.' ],
					[ 'Broken', true, 'Correct!' ] ]
		},
		
		'<br><br><b>3.</b> <b>Switch Type + Stimulus State = Switch State (Made or Broken)</b><br>then . . . <b>Switch State + Gate Type (Make or Break) = Current flowing to the output column (or not)</b><br><br>',
		
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Which situations allow current to flow through the gate on a rung to the output column?',
						choices : [ 'A Normally Open switch that is pressed, when the gate is a Make.',
								'A Normally Open switch that is unpressed, when the gate is a Make.',
								'A Normally Closed switch that is pressed, when the gate is a Make.',
								'A Normally Closed switch that is unpressed, when the gate is a Make.',
								'A Normally Open switch that is pressed, when the gate is a Break.',
								'A Normally Open switch that is unpressed, when the gate is a Break.',
								'A Normally Closed switch that is pressed, when the gate is a Break.',
								'A Normally Closed switch that is unpressed, when the gate is a Break.' ],
						correctIndex : [ 0, 3, 5, 6 ]
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: There are four correct answers.  First figure out if the switch is Made or Broken (Made, Broken, Broken, Made,...), then figure out each one based on the gate type.',
		},

		'<br><br><b>4.</b> The easiest combo to figure out is a <b>Make</b> gate controlled by a <b>N.O.</b> switch, most other combos require you to think (or make a clear inputs table).<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'True', true, 'Correct!' ],
					[ 'False',  false, 'If you say so. :)  However if you want to get the question marked correctly mark it as True. :)'] ]
		},
];

