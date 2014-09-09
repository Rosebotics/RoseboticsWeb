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

		'<b>1.</b> In order to Delete an entity from the Datastore did you call .delete() on the key or on the entity itself?<br>',
	
		{
			questionType : 'multiple choice',
			choices : [
					[ '.delete() was called on the ndb.Key for the entity', true, 'Correct!  That\'s a feature for the KEY.' ],
					[ '.delete() was called on the MovieQuote entity itself', false, 'Please try again.' ]
					 ]
		},

		'<br><br><b>2.</b> Once you deployed there was already data present in your public Datastore.  Why?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'All the data from the old app must have been copied into the new app engine code',  false, 'Please try again.' ],
					[ 'The Datastore is independent of the web app.  The new app simply used the existing data (which was unchanged).',  true, 'Correct!  If you HAD lost all your data that would make updating an app VERY problematic. :)'  ]]
		},

		'<br><br><b>3.</b> If you are taking this class for credit did you <a target="_blank" href="https://docs.google.com/forms/d/1o9fmeOOYcm-P5qex2xNI9WJki9a9ew8HeNuSRu2aws8/viewform">submit your URL for grading</a> (if you are taking this class for a grade)?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'Yes!  Submitted using the link at the end of the doc.', true, 'Great! (multiple answers are fine)' ],
					[ 'I\'m not taking this class for credit so no need. :)', true, 'Great! (multiple answers are fine)' ],
					[ 'Ooops. Forgot (or didn\'t finish)', false, 'Need to submit your URL for grading points.'  ]]
		}		
		
];
