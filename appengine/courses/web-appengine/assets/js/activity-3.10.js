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

  '<b>1.</b> We added the id of "add-quote" for the menu item, but for the edit buttons we did not use an id.  We added the class edit-movie-quote.  Why didn\'t we use an id for both?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				[
						'We could\'ve used an id for both.  We only did it different to show different mechanisms.',
						false, 'Please try again.' ],
				[
						'You are required to use an id on menu items, but for the other buttons you can do whatever you like.',
						false, 'Please try again.' ],
				[
						'The is only 1 Add Quote menu item so it used an id.  However there are MANY edit buttons and an id should be unique on the page.  So we used a class on the edit buttons since it\'s fine to repeat a class',
						true, 'Correct!' ],
				[ 'Buttons don\'t have ids', false, 'Please try again.' ] ]
	},

	'<br><br><b>2.</b> Could we have used a class on the Add Quote menu item of say... "add-quote" then done a jQuery search for $(".add-quote")?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				[
						'Sure.  That\'d work.  Although you\'d typically use an id if it is a unique name.  Both work though.',
						true, 'Correct!' ],
				[
						'That wouldn\'t work.  A class must be repeated on multiple elements.',
						false, 'Please try again.' ],
				[
						'That wouldn\'t work.  Menu items can\'t have a class.',
						false, 'Please try again.' ] ]
	},
	

	'<br><br>Yet again we cheated and taught you a whole bunch of jQuery within the "AppEngine Track".  You don\'t need to understand all of the jQuery, but let\'s see what you picked up.<br>',
	'<b>3.</b> When we wanted to change the text on the submit button to say "Edit Quote", what code did we add to find the submit button within the form and change the html contents?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				[
						'$("#insert-quote-modal button[type=submit]").html("Edit Quote");',
						true, 'Correct!' ],
				[
						'$("#insert-quote-modal button[name=submit]").html("Edit Quote");',
						false, 'Please try again.' ],
				[
						'$("#insert-quote-modal button[type=submit]").set("Edit Quote");',
						false, 'Please try again.' ],
				[
					'$("#insert-quote-modal button[name=submit]").set("Edit Quote");',
					false, 'Please try again.' ] ]
	},
	
				


];

