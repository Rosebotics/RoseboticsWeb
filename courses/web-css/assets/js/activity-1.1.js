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
	"<b>1.</b> If you had a folder called <b>/static/CssSelectors/primary_selectors</b> that has 3 exercises (exercise0.html, exercise1.html, and exercise2.html).  What append statement would you make to add it to the CSS track?<br>",
	{
		questionType : "multiple choice",
		choices : [
				['css_track.append(("CSS Selectors - Primary Selectors", True, "/static/CssSelectors/primary_selectors", 10))', false, "Try again." ],
				['css_track.append(("CSS Selectors - Primary Selectors", True, "/static/CssSelectors/primary_selectors", 3))', true, "Correct!" ],
				['css_track.append(("CSS Selectors - Primary Selectors", False, "/static/CssSelectors/primary_selectors", 3))', false, "Try again." ],
				['css_track.append(("CSS Selectors - Primary Selectors", False, "http://" + USERNAME + "-primary-selectors.appspot.com"))', false, "Try again." ]
		]
	},
	"<br><br>",
	"<b>2.</b> Did you get your Static File Server deployed and get the URL <b>submitted for grading</b>?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yep!  It's live at http://yourusername-webdev.appspot.com and I submitted the link (if taking this class for a grade)", true, "Correct. "],
				["Not so much.",  false, "You need to get that deployed then." ],
		]
	},
];
