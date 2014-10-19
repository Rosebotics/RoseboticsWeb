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
'<b>1.</b> Select the appropriate display property <b>value(s)</b>.<br>',

{
	questionType : 'multiple choice group',
	questionsList : [
			{
				questionHTML : '<b>a.</b> Which one causes the element to get the entire line to itself?',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : 0
			},
			{
				questionHTML : '<b>b.</b> Which ones respect the width and height property settings?',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : [0,2]
			},
			{
				questionHTML : '<b>c.</b> Which ones share the line with other elements?',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : [1,2]
			}, {
				questionHTML : '<b>d.</b> Which one snaps the space reserved to <b>only</b> the content box (regardless of the width/height settings)?',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : 1
			}, {
				questionHTML : '<b>e.</b> Which one makes the box completely gone?',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : 3
			} ],
	allCorrectOutput : 'Well done!',
	someIncorrectOutput : 'Please try again. Hints: block gets a line and respects w/h, inline snaps to content box on a line, inline-block respects w/h on a line, none is just GONE!',
},


'<br><br><b>2.</b> Every element has some default setting for the display property.  What is the default display value for the elements below?<br>',

{
	questionType : 'multiple choice group',
	questionsList : [
			{
				questionHTML : '<b>a.</b> div',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : 0
			},
			{
				questionHTML : '<b>b.</b> span',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : 1
			},
			{
				questionHTML : '<b>c.</b> p',
				choices : [ 'block', 'inline', 'inline-block', 'none' ],
				correctIndex : 0
			} ],
	allCorrectOutput : 'Well done!',
	someIncorrectOutput : 'Please try again. Hints: 2 are block and 1 is inline',
},


];

