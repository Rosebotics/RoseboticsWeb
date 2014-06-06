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

		'<b>1.</b> What are some features of the debugger?<br>  Label each as Debugger, Programmer, or Other<br><br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Allows you to set breakpoints',
						choices : [ 'Debugger', 'Programmer', 'Other' ],
						correctIndex : 0
					},
					{
						questionHTML : '<b>b.</b> Checks your code for syntax errors',
						choices : [ 'Debugger', 'Programmer', 'Other' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>c.</b> Allows you to see the values of variables when you pause',
						choices : [ 'Debugger', 'Programmer', 'Other' ],
						correctIndex : 0
					},
					{
						questionHTML : '<b>d.</b> Let\'s you run code even when disconnected from the PICkit3',
						choices : [ 'Debugger', 'Programmer', 'Other' ],
						correctIndex : 1
					},
					{
						questionHTML : '<b>e.</b> Allows you to single step through code one line at a time if needed',
						choices : [ 'Debugger', 'Programmer', 'Other' ],
						correctIndex : 0
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.  Hint, the debugger is not the tool that checks for syntax errors.',
		},

		'<br><br><b>2.</b> Which of these is the correct syntax when using a #define statement?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '#define DELAY_TIME = 50;', false, 'Please try again.'],
					[ '#define DELAY_TIME = 50', false, 'Please try again.'],
					[ '#define DELAY_TIME 50;', false, 'Please try again.'],
					[ '#define DELAY_TIME 50', true, 'Correct!  Anything that starts with # is not a C language statement.  Therefore no semicolon at the end.  #define is a simple string substitution mechanism.'] ]
		},
];
