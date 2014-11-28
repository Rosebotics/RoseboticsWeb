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

		'<b>1.</b> Modifications in this video were made to the main.Storyboard with what tool?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'Eclipse', false, 'Please try again' ],
					[ 'Swift in Xcode', false, 'Please try again' ],
					[ 'Objective-C in Xcode', false, 'Please try again' ],
					[ 'Interface Builder in Xcode', true, 'Correct!'] ]
		},

		'<br><br><b>2.</b> Which template did this demo start with?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Single View Application', false, 'Try again.' ],
					['Master-Detail Application', true, 'Correct!' ],
					['Page-Based Application', false, 'Try again.' ],
					['Tabbed Application', false, 'Try again.' ],
					['Game', false, 'Try again.' ] ]
		},

		'<br><br><b>3.</b> What are the three view controllers we\'re going to implement in this demo?<br>',

		{
			questionType : 'multiple choice',
			choices : [
						['Master-Detail Application, Tabbed Application, and Single View Application', false, 'Try again.' ],
						['A Swift Introduction, Table Based Navigation, and Google Cloud Endpoints', false, 'Try again.' ],
						['Buttons and Labels, Touches, and Tables', true, 'Correct!' ],
						['Core Data, Navigation controllers, and Dialogs', false, 'Try again.' ]]
		},

];
