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

  '<b>1.</b> jQuery uses $("<b>stuff</b>") to find elements on the page.  The <b>stuff</b> uses the exact same selector rules as CSS.<br>',

  {
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> What <b>stuff</b> would you add to find an element with the id = "toggle-edit?"',
					choices : [ '#toggle-edit', '.toggle-edit', '#edit-actions', '.edit-actions' ],
					correctIndex : 0
				},{
					questionHTML : '<b>b.</b> What <b>stuff</b> would you add to find all elements with the class = "edit-actions"?',
					choices : [ '#toggle-edit', '.toggle-edit', '#edit-actions', '.edit-actions' ],
					correctIndex : 3
				},{
					questionHTML : '<b>c.</b> Would the <b>stuff</b> from part b also find an element with the class = "hidden edit-actions btn btn-default"?',
					choices : [ 'Yes.  edit-actions is one of the classes in the class list, so it\'s a match.', 'No.  edit-actions would need to be the only class present to be a match' ],
					correctIndex : 0
				}],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: # is for an id and . is for a class.  .edit-actions would match any element with the edit-actions class (regardless of other classes present)',
	},

  '<br><br><b>2.</b>  We kinda went nuts with jQuery code this time. :)  We\'ll review jQuery more but let\'s see if you can answer a few questions.<br>',

  {
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> How would you toggle the presence of the class named "hidden" on all elements with the .edit-actions class?"',
					choices : [ '$(".edit-actions").addClass("hidden")', '$(".edit-actions").removeClass("hidden")', '$(".edit-actions").toggleClass("hidden")' ],
					correctIndex : 2
				},{
					questionHTML : '<b>b.</b> How "could" you add the class named "hidden" on all elements with the .edit-actions class if you knew for sure it is currently missing?',
					choices : [ '$(".edit-actions").addClass("hidden")', '$(".edit-actions").removeClass("hidden")', '$(".edit-actions").toggleClass("hidden")' ],
					correctIndex : [0, 2]
				}],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again.',
	},


  '<br><br><b>3.</b> If you wanted to print "Hi" to the Console log how would you do it?<br>',

	{
		questionType : 'freetext',
		correctAnswerRegex : /console.log\(\s*[\'\"]Hi[\'\"]\s*\);/i,
		correctAnswerOutput : 'Correct!',
		incorrectAnswerOutput : 'Please try again.',
		showAnswerOutput : 'Here is the answer:  console.log("Hi");'
	},
	
	'<br><br><b>4.</b> If you click the green edit button or red delete button right now do they do anything?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['Nope', true, 'Correct!  Let\'s go fix that! :)' ],
				['Edit works', false, 'Please try again.' ],
				['Delete works', false, 'Please try again.' ],
				['Edit and Delete both work', false, 'Please try again.' ] ]
	},
];

