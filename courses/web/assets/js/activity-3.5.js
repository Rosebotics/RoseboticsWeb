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

		'<b>1.</b> The Modal does an animation to appear on the page.  That all happens with JavaScript, but we didn\'t write any code.  How does it work?<br>',
	
		{
			questionType : 'multiple choice',
			choices : [
					[ 'No idea!', false, 'Please try again.' ],
					[ 'One word... jQuery', false, 'Please try again.' ],
					[ 'The Bootstrap .js file we added looks for the Data attributes.  In this case: <b>data-toggle="modal" data-target="#add-quote-modal"</b>', true, 'Correct!' ]
					 ]
		},

		'<br><br><b>2.</b> Where to you add the html code for the Modal?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'The code to display the Modal is <b>always</b> on the page, it\'s just not visible to the user initially.  You could put the code pretty much anywhere in the body, but we put it at the bottom (just before the JavaScript) for organization. ', true, 'Correct!' ],
					[ 'A separate file.',  false, 'Please try again.' ],
					[ 'It must be the first html after the Navbar', false, 'Please try again.' ]]
		},

		'<br><br><b>3.</b> If you resize the page while your Modal is up what happens (Try it first!).<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'It looks pretty bad because it extends off the page.', false, 'Please try again.' ],
					[ 'Bootstrap puts mobile first and tries for a responsive UI so it resizes very well.', true, 'Correct!' ],
					[ 'A resize dismisses the Modal.', false, 'Please try again.' ],
					[ 'You can\'t resize the window while the Modal is up.', false, 'Please try again.' ]]
		}		
		
];
