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
                
  '<b>1.</b> We had to modify the app.yaml file to serve the static files.  Why was that necessary?<br>',

	'<img src="assets/img/app_yaml_for_static.png" alt="app.yaml file changes to serve the static folder"><br>',

	{
		questionType : 'multiple choice',
		choices : [
				['That was NOT necessary, just good practice', false, 'Please try again.' ],
				['Any folder named "static" must have that annotation.  Naming the folder "static" is critical.', false, 'Please try again.' ],
				['That directive tells AppEngine to *serve* that folder with the app.  Without those lines the folder is NOT served and cannot be used with your app.',  true, 'Correct!'] ]
	},
	
  '<br><br><b>2.</b> In order to use the CSS file in HTML what did we do?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['We added a link to the html body pointing to that file with a rel(ationship) attribute set to stylesheet', false, 'Please try again.' ],
				['We added a link to the html head pointing to that file with a rel(ationship) attribute set to stylesheet', true, 'Correct!' ],
				['We added a link to the html body pointing to that file with a rel(ationship) attribute set to css', false, 'Please try again.' ] ]
	},

	'<br><br> In order to play with out CSS rules a bit we used the Chrome Dev Tools.  Here is some information about opening Chrome Dev Tools taken from <a target="_blank" href="https://developer.chrome.com/devtools">https://developer.chrome.com/devtools</a>',

	'<img src="assets/img/opening_chrome_dev_tools.png" alt="Chrome Dev tools info"><br>',
	
  '<br><br><b>3.</b>How did we choose to open the Chrome Dev Tools in this video?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['We clicked the Chrome menu icon in the upper right and selected Tools --> Developer Tools', false, 'Please try again.' ],
				['We right clicked on the page then selected "Inspect Element"', true, 'Correct!' ],
				['We used the shortcut key Ctrl Shift I', false, 'Please try again.' ] ]
	}	
	
];
