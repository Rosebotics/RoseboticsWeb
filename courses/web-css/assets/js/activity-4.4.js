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


'<b>1.</b> Select the appropriate position property <b>value(s)</b>.<br>',

{
	questionType : 'multiple choice group',
	questionsList : [
			{
				questionHTML : '<b>a.</b> Which one causes the element to not scroll with the page?',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : 3
			},
			{
				questionHTML : '<b>b.</b> Which ones respect the left, right, top, and bottom property settings?',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : [1,2,3]
			},
			{
				questionHTML : '<b>c.</b> Which ones are <b>Out of the Flow</b>?',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : [2,3]
			}, {
				questionHTML : '<b>d.</b> Which ones take up space (i.e. other elements after them leave a spot for them to fit)?',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : [0,1]
			}, {
				questionHTML : '<b>e.</b> Out of those two that take up space, which one can be moved wrt that space such that it is not in the space that was reserved for it?',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : 1
			}, {
				questionHTML : '<b>f.</b> Which one requires a parent element to be positioned (have the relative or absolute value) so that it can be positioned relative to the parent element?',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : 2
			} ],
	allCorrectOutput : 'Well done!',
	someIncorrectOutput : 'Please try again. Hints: static takes up space and it is in that space (the default) ignores left, right, top, bottom. relative takes up space but it can move relative to the location via left, right, top, bottom.  absolute is Out of the Flow, takes up no space and can be a positioned via left, right, top, bottom relative to its nearest positioned ancestor. fixed is Out of the Flow, takes up no space and can be a positioned via left, right, top, bottom relative to the window.  Does NOT scroll with page.',
},


'<br><br><b>2.</b> Every element has some default setting for the position property.  What is the default position value for the elements below?<br>',

{
	questionType : 'multiple choice group',
	questionsList : [
			{
				questionHTML : '<b>a.</b> div',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : 0
			},
			{
				questionHTML : '<b>b.</b> span',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : 0
			},
			{
				questionHTML : '<b>c.</b> p',
				choices : [ 'static', 'relative', 'absolute', 'fixed' ],
				correctIndex : 0
			} ],
	allCorrectOutput : 'Well done!  Yeah, all elements are static by default.  Just making sure you were aware.',
	someIncorrectOutput : 'Please try again. Hints: All element start off as position = static.  Trick question. ;)',
},


];