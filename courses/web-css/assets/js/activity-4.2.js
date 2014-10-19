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

'<br><br><b>1.</b> What is the formula for calculating the visual box size?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['Visual box = Content size', false, 'Please try again' ],
			['Visual box = Content size + Padding', false, 'Please try again.' ],
			['Visual box = Content size + Padding + Border', true, 'Correct!' ],
			['Visual box = Content size + Padding + Border + Margin', false, 'Please try again.' ] ]
},

'<br><br><b>2.</b> If two boxes both had a margin of 20px and one was on top of the other how far away would the visual boxes be?<br>',
{
	questionType : 'multiple choice',
	choices : [
			['0', false, 'Please try again' ],
			['20px', true, 'Correct!' ],
			['40px', false, 'Please try again.' ] ]
},


'<br><br><b>3.</b> If two boxes both had a margin of 20px and one was to the left of the other how far away would the visual boxes be?<br>',
{
	questionType : 'multiple choice',
	choices : [
			['0', false, 'Please try again' ],
			['20px', false, 'Please try again.' ],
			['40px', true, 'Correct!' ] ]
},
];