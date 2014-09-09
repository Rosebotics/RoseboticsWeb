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

		'<b>1.</b> When we printed out the urlsafe entity key it was a base 64 encoded string of digits, upper and lowercase letters, underscore and hyphen.  ',
		'However when we made an ndb.Key() and printed out the str representation it actual made some sense.  Assume it said:<br>',
		'<b>ndb.Key(\'Entity\', \'moviequote_root\', \'MovieQuote\', \'1234567890\')</b><br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> What Kind of entity does this key represent?',
						choices : [ 'An Entity', 'moviequote_root', 'A MovieQuote', '1234567890' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>b.</b> How many ancestors does this entity key have?',
						choices : [ '0 - This entity is a <b>root</b> entity with no parent', '1 - The parent of this entity is a root element',
						            '2 - The parent of this entity has a parent too', '3 - The parent of this entity has a parent too, which has a parent as well'],
						correctIndex : 1
					},
					{
						questionHTML : '<b>c.</b> What <b>Kind</b> of entity is the parent key?',
						choices : [ 'An Entity', 'moviequote_root', 'A MovieQuote', '1234567890' ],
						correctIndex : 0
					},
					{
						questionHTML : '<b>d.</b> The id of the MovieQuote is 1234567890.  What is the <b>id</b> of the parent (yes, an id can be a non-number if it is setup as a string_id)',
						choices : [ 'An Entity', 'moviequote_root', 'A MovieQuote', '1234567890' ],
						correctIndex : 1
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: The parent is Kind=Entity id=moviequote_root.  This entity is Kind=MovieQuote id=1234567890',
		},

		'<br><br><b>2.</b> What function did we call on the ndb.Key to retreive the actual MovieQuote entity from the Datastore?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /get/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: .get()'
		},

		'<br><br><b>3.</b> What function did we call on the MovieQuote entity to write the contents back into the Datastore (after we finished our updates)?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /put/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: .put()'
		}

];
