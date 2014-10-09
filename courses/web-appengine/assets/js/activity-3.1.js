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

  '<b>1.</b> In one sentence (in your own words), what is Bootstrap?<br>',

	{
		questionType : 'freetext',
		correctAnswerRegex : /CSS/i,
		correctAnswerOutput : 'Correct!  More formally: Bootstrap is a free collection of tools for creating websites and web applications. It contains HTML and CSS-based design templates... as well as optional JavaScript extensions.',
		incorrectAnswerOutput : 'Please try again.  Make sure you use the word CSS in your answer this time. ;)',
		showAnswerOutput : 'Here is one answer: Bootstrap is a free collection of tools for creating websites and web applications. It contains HTML and CSS-based design templates... as well as optional JavaScript extensions.'
	},

  '<br><br><b>2.</b>  In one sentence (in your own words), what is jQuery?<br>',

	{
		questionType : 'freetext',
		correctAnswerRegex : /JavaScript/i,
		correctAnswerOutput : 'Correct!  More formally: jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.',
		incorrectAnswerOutput : 'Please try again.  Make sure you use the word JavaScript in your answer this time. ;)',
		showAnswerOutput : 'Here is one answer: jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.'
	},

  '<br><br><b>3.</b> Visit the Bootstrap site <a target="_blank" href="http://getbootstrap.com">http://getbootstrap.com</a>.  I think of their site as including a <b>Getting started</b> page, the three primary content pages, and a <b>Customize</b> page.<br>',

  {
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> What are the three primary content pages titles? (check all three)',
					choices : [ 'HTML', 'CSS', 'Components', 'Widgets', 'JavaScript' ],
					correctIndex : [1,2,4]
				},{
					questionHTML : '<b>b.</b> If I wanted to make an existing table, button, or form look prettier using styles which page would have that info?',
					choices : [ 'HTML', 'CSS', 'Components', 'Widgets', 'JavaScript' ],
					correctIndex : 1
				},{
					questionHTML : '<b>c.</b> If I wanted to learn to make interactive actions, like tooltips or image carousels, to bring Bootstrap components to life which page would I visit?',
					choices : [ 'HTML', 'CSS', 'Components', 'Widgets', 'JavaScript' ],
					correctIndex : 4
				},{
					questionHTML : '<b>d.</b> If I wanted to make an HTML widget such as a Dropdown, Navbar, Panels, etc where would I go to find Bootstrap reusable widgets?',
					choices : [ 'HTML', 'CSS', 'Components', 'Widgets', 'JavaScript' ],
					correctIndex : 2
				},],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: Visit the page to find the section titles: CSS, Components, and JavaScript.  CSS makes existing things look prettier, JavaScript brings things to life with interactions, and Components is the name Bootstrap uses for their reuseable elements.',
	},

	'<br><br><b>4.</b> You can visit the jQuery site <a target="_blank" href="http://jquery.com">http://jquery.com</a> to answer this question if you like (or just use common sense).  Does jQuery work across different browsers?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['Nope.  Only Chrome.', false, 'Please try again.' ],
				['Nope.  Only IE (Internet Explorer)', false, 'Please try again.' ],
				['Nope.  Only Firefox, Opera, and Safari', false, 'Please try again.' ],
				['Of course it works across different browsers. In fact, in the "old" days (pre IE10), that used to be a HUGE HUGE issue which is why jQuery exploded in popularity years ago.', true, 'Correct!' ]]
	},
];

