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
        '<b>1.</b> Will variables update in the Variables window while the program is running?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Sure.', false, 'Please try again.' ],
					[ 'No you must pause the code (or hit a breakpoint) to see the values for variables.', true, 'Correct!'  ] ]
		},

		'<br><br><b>2.</b> The debugger (Variables window, breakpoints, etc) works on <b>BOTH</b> the simulator <b>AND</b> a real device.</b><br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'True', true, 'Correct!' ],
					[ 'False, debugging is for the simulator only.', false, 'Please try again.' ],
					[ 'False, debugging is for a real device only', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> When my code doesn\'t work right, the debugger can be a <b>GREAT</b> way to figure out the problem.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'True.  Try debugging then ask for help if you are really stuck (a few minutes).', true, 'Correct!' ],
					[ 'False, you must immediately ask for help if anything goes wrong. :)', false, 'Please try again.' ] ]
		},
];
