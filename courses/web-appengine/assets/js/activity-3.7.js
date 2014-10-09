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

  '<b>1.</b> There are a lot of CSS classes that you can add to a table.  You always need to add the class <b>table</b>. ',

  {
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : ' What additional CSS class did we use in this example?',
					choices : [ 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-condensed', 'success' ],
					correctIndex : 1
				},{
					questionHTML : 'What additional CSS classes would you add if you wanted to shrink your table and give it an outline? (Visit <a target="_blank" href="http://getbootstrap.com/css/#tables">http://getbootstrap.com/css/#tables</a> for help)',
					choices : [ 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-condensed', 'success' ],
					correctIndex : [2,4]
				}  ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again.  Hint: There are two classes for the second question.  table-striped is NOT one of the answers in the second question.',
	},

  '<br><br><b>2.</b> In addition to tables we also snuck in info about containers.  Bootstrap requires a container element to wrap site content.  So we wrapped our table in a div that had the class <b>container</b>.  That limited the width to a responsive fixed width.  If instead you wanted to use the full width what container class would you use?  (link that might help <a target="_blank" href="http://getbootstrap.com/css/#overview-container">http://getbootstrap.com/css/#overview-container</a>)<br>',

	{
		questionType : 'freetext',
		correctAnswerRegex : /container-fluid/i,
		correctAnswerOutput : 'Correct!',
		incorrectAnswerOutput : 'Please try again.',
		showAnswerOutput : 'Here is the answer: container-fluid'
	}
];

