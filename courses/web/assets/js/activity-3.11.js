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

                '<b>1.</b> Do you think other website\'s use hidden inputs in forms?  Isn\'t that a sneaky trick that should be avoided?<br>',

              	{
              		questionType : 'multiple choice',
              		choices : [
              				[
              						'Happens all the time.  If used for a valid reason it\'s fine, but I\'m sure there is someone out there using hidden inputs for evil.  In general they are totally fine though.', true, 'Correct!' ],
              				[
              						'You should never do that!  It is very deceitful!', false, 'Please try again.' ] ]
              	},

              	'<br><br><b>2.</b> When we set the html on the Modal title and submit button we used the jQuery command <b>.html()</b>, for example .html("stuff").  What jQuery command did we use to set the value inside an <b>input</b> element?<br>',

              	{
              		questionType : 'freetext',
              		correctAnswerRegex : /val/i,
              		correctAnswerOutput : 'Correct!',
              		incorrectAnswerOutput : 'Please try again.',
              		showAnswerOutput : 'Here is the answer: .val() for more info about the command visit -->  http://api.jquery.com/val/'
              	},
              	

              	'<br><br><b>3.</b> There are three inputs in the form.  What are the <b>name</b> attributes of our three inputs?',

              	{
              		questionType : 'multiple choice group',
              		questionsList : [
              				{
              					questionHTML : '',
              					choices : [ 'name', 'submit', 'quote', 'movie', 'title', 'entity_key', 'entityKey' ],
              					correctIndex : [2,3,5]
              				}],
              		allCorrectOutput : 'Well done!',
              		someIncorrectOutput : 'Please try again. Try: quote, movie, entity_key',
              	},
              	

              	'<br><br><b>4.</b> The very last thing we did was switch the <b>action</b> attribute on the form to <b>/insertquote</b>.  So in the next video what action do you think we\'ll do first?<br>',

              	{
              		questionType : 'multiple choice',
              		choices : [
              				['Go into app.yaml and change the /addquote path to /insertquote', false, 'Please try again.' ],
              				['Go to the bottom of main.py and change the path-->handler entry that was <b>/addquote-->AddQuoteAction</b> to <b>/insertquote-->InsertQuoteAction</b> (then modify that handler to do Add and Edit based on the presence of the entity_key field)', true, 'Correct!  Let\'s go do that then!' ]]
              	},
];
