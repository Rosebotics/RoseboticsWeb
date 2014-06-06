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
		'<b>1.</b> There are three ways to say that an input is connected to <b>AC Hot</b> and three ways to say "<b>not hot</b>".<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> When an input is connected to <b>AC Hot</b> that is called...',
						choices : [ 'Made', 'On', 'Open', 'Broken', 'Closed', 'Off'],
						correctIndex : [0,1,4]
					},
					{
						questionHTML : '<b>b.</b> When an input is <b>not</b> connected to AC Hot (floating) that is called...',
						choices : [ 'Made', 'On', 'Open', 'Broken', 'Closed', 'Off'],
						correctIndex : [2,3,5]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: 3 answers in each section, all answers are used.  Made = Circut is Closed = On. (Closed is the tricky one.)',
		},


		'<br><br><b>2.</b> Name that state...<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Which of the following result in a <b>Made</b> input?',
						choices : [ 'A Normally Open switch that is pressed',
								'A Normally Open switch that is unpressed',
								'A Normally Closed switch that is pressed',
								'A Normally Closed switch that is unpressed' ],
						correctIndex : [ 0, 3 ]
					},
					{
						questionHTML : '<b>a.</b> Which of the following result in a <b>Broken</b> input?',
						choices : [ 'A Normally Open switch that is pressed',
								'A Normally Open switch that is unpressed',
								'A Normally Closed switch that is pressed',
								'A Normally Closed switch that is unpressed' ],
						correctIndex : [ 1, 2]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Two for each are true.  All answers are used.',
		},

		'<br><br><b>3.</b> When you have the Simulation tab open in PicoSoft there are four types of buttons in the I/R function area.<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
								{
						questionHTML : '<b>a.</b> What does column 2 (my favorite column) represent?',
						choices : [ 'Momentary Normally Closed',
								'Momentary Normally Open',
								'Position Normally Closed',
								'Position Normally Open' ],
						correctIndex : 1
					},
					{
						questionHTML : '<b>a.</b> Which columns are position switches?',
						choices : [ 'Column 1',
								'Column 2',
								'Column 3',
								'Column 4' ],
						correctIndex : [ 2, 3]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Column 2 is a Momentary N.O. then there are 2 columns that are position switches.',
		},
		
		'<br><br><b>4.</b> The job for a Ladder Logic programmer would be easier if all switches were only Normal Open. ;)<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'True', true, 'Correct!' ],
					[ 'False',  false, 'If you say so. :)  However, if you want to get this problem correct, mark the other answer.'] ]
		},

];
