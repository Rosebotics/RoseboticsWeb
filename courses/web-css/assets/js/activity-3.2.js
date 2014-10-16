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
'<b>1.</b> Did you complete exercises 0 and 1 in the Font Exercises?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['Yep!  All set (Note you don\'t have to deploy or submit it yet)', true, 'Great!' ],
			['Not so much', false, 'Need to get that done.' ]]
},

'<br><br><b>2.</b> Which font property can be a LIST of values to serve as a fallback mechanism?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['font-family', true, 'Correct!' ],
			['font-size', false, 'Please try again' ],
			['font-style', false, 'Please try again.' ],
			['font-variant', false, 'Please try again' ],
			['font-weight', false, 'Please try again' ] ]
},

'<br><br><b>3.</b> If you use the font shorthand property what is the order and which values are require (* marks required)?<br>',
'Helpful link to <a target="_blank" href="http://www.w3schools.com/cssref/pr_font_font.asp">w3schools font shorthand property</a><br>',
{
	questionType : 'multiple choice',
	choices : [
			['font-style font-weight* font-size/line-height font-family', false, 'Please try again' ],
			['font-style font-variant font-weight* font-size*/line-height font-family', true, 'Correct!' ],
			['font-style font-variant font-weight font-size*/line-height font-family*', true, 'Correct! But this option is not really the "best" choice as it is unnecessarially complex and susceptible to problems if the code changes..' ],
			['font-size*/line-height font-weight font-style font-variant font-family*', false, 'Please try again.' ] ]
},


'<br><br><b>4.</b> Can you use the Chrome dev tools to determine this font-family value? (type in only the first in the list)<br>',
'<div style="font: bold 18px Tangerine, cursive;">What font am I?</div>',


{
	questionType : 'freetext',
	correctAnswerRegex : /Tangerine/i,
	correctAnswerOutput : 'Correct!',
	incorrectAnswerOutput : 'Please try again.',
	showAnswerOutput : 'Here is the answer: Tangerine'
},



];