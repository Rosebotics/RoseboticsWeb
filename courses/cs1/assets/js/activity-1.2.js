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
		'<b>1.</b> What does BJT stand for?',

		{
			questionType : 'freetext',
			correctAnswerRegex : /bipolar junction transistor/i,
			correctAnswerOutput : 'Correct!  Bipolar Junction Transistor.',
			incorrectAnswerOutput : 'Looking for Bipolar Junction Transistor',
			outputHeight : '40px'
		},

		'<br><br><b>2.</b> What are the names of the three legs on a BJT?',

		{
			questionType : 'freetext',
			correctAnswerRegex : /(base collector emitter)|(base emitter collector)|(collector base emitter)|(collector emitter base)|(emitter base collector)|(emitter collector base)/i,
			correctAnswerOutput : 'Correct!  Base Collector Emitter.',
			incorrectAnswerOutput : 'Looking for Base Collector Emitter',
			outputHeight : '40px'
		},

		'<br><br><b>3.</b> Assume an NPN BJT for these questions<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Always connected to ground',
						choices : [ 'Base', 'Collector', 'Emitter' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>b.</b> Connected to the load (ie motor, LED, etc)',
						choices : [ 'Base', 'Collector', 'Emitter' ],
						correctIndex : 1
					},
					{
						questionHTML : '<b>c.</b> Connected by a resistor to the microcontroller',
						choices : [ 'Base', 'Collector', 'Emitter' ],
						correctIndex : 0
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.',
		},

		'<br><br><b>4.</b> If a load need 120 milliamps how much current needs to flow into the <b>base</b> to turn <b>ON</b> the load?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '0 mA', false, 'Please try again.' ],
					[ '12 mA', true,
							'Correct!  One tenth the collector-emitter current is needed.' ],
					[ '50 mA', false, 'Please try again.' ],
					[ '120 mA', false, 'Please try again. ' ] ]
		},

		'<br><br><b>5.</b> If a load need 120 milliamps how much current needs to flow into the <b>base</b> to turn <b>OFF</b> the load?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '0 mA', true,
							'Correct! Always no current flow to turn off.' ],
					[ '12 mA', false, 'Please try again.' ],
					[ '50 mA', false, 'Please try again.' ],
					[ '120 mA', false, 'Please try again. ' ] ]
		},

];
