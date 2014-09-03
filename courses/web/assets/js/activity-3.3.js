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
                
  '<b>1.</b> What does it mean to "load the Bootstrap and jQuery frameworks"?<br>',


	{
		questionType : 'multiple choice',
		choices : [
				['Install them on your computer', false, 'Please try again.' ],
				['Download their SDK\'s for use with JavaScript code', false, 'Please try again.' ],
				['Simply adding <b>link</b> and <b>script</b> tags on your page so the Bootstrap and jQuery code loads in Chrome at the same time your page loads.', true, 'Correct!' ] ]
	},
	
  '<br><br><b>2.</b> If you knew you were going to do <b>localhost</b> development in the future in a location where you wouldn\'t have internet access, what should you change about your Bootstrap and jQuery links before you go offline?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['While you still have internet access, you should download a copy the 2 Bootstrap .css files, the 1 Bootstrap .js file, and the 1 jQuery .js file and put them into your /static folder, then change the links in the HTML to point to the /static folder copies.  That will work just like the CDN links (even offline for localhost).', true, 'Correct!  The CDN links are just present to make your life easier, but you could serve the .css and .js files from your static folder, just like any other static file.' ],
				['You could try to do all the stuff mentioned above but it won\'t actually work offline.  You must use the CDN links.', false, 'Please try again.' ],
				['These CDN links are the only ones you can use.  jQuery must come from the Google CDN server for example.', false, 'Please try again.' ] ]
	},

  '<br><br><b>3.</b> Compared to installing SDKs for AppEngine, installing Eclipse, PyDev, Python 2.7, etc.  It\'s actually pretty easy to get a page ready to use Bootstrap and jQuery?<br>',
  
	{
		questionType : 'multiple choice',
		choices : [
				['Yeah, that was easy and it\'s neat (but wierd) that you can just type JavaScript commands into the Console area in Dev Tools to test the links.', true, 'Great!  Keep rockin!' ],
				['I was unable to get the test command <b>$("body").html("Hello, World!").addClass("bg-success");</b> to work (or didn\'t try)', false, 'Please try again.  You need to make sure your links are ready to go!' ]]
	}
];
