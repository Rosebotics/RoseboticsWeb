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

  '<b>1.</b> Before you can visit localhost:8080 to see your app you need to start running localhost. ',
  
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : 'Which programs <b>could</b> you use to start localhost?',
					choices : [ 'The App Engine SDK', 'The command line', 'Google App Engine Launcher', 'Chrome', 'Eclipse'],
					correctIndex : [1,2,4]
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Two Hints: There are 3 correct answers.  The App Engine SDK is not a program, it\'s a collection of code used by other programs.',
	},

  '<br><br><b>2.</b> Before you can visit <b>yourusername</b>-movie-quotes.appspot.com to see your app you need to deploy. ',
  
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : 'Which programs <b>could</b> you use to deploy your app?',
					choices : [ 'The App Engine SDK', 'The command line', 'Google App Engine Launcher', 'Chrome', 'Eclipse'],
					correctIndex : [1,2,4]
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: There are 3 correct answers.  The App Engine SDK is not a program, it\'s a collection of code used by other programs.',
	},


  '<br><br><b>3.</b> When it is working correctly which tool do I typically use to perform each task?<br>',

  {
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> Create the starting code using a simple template',
					choices : [ 'Google App Engine Launcher', 'The command line', 'Eclipse' ],
					correctIndex : 0
				},
				{
					questionHTML : '<b>b.</b> Edit the code in my app',
					choices : [ 'Google App Engine Launcher', 'The command line', 'Eclipse' ],
					correctIndex : 2
				},
				{
					questionHTML : '<b>c.</b> Start localhost',
					choices : [ 'Google App Engine Launcher', 'The command line', 'Eclipse' ],
					correctIndex : 2
				}, {
					questionHTML : '<b>d.</b> Deploy my app (which one would I "typically" use)',
					choices : [ 'Google App Engine Launcher', 'The command line', 'Eclipse' ],
					correctIndex : 2
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: I don\'t use the command line at all and I dislike the templates that Eclips provides, otherwise I typically use Eclipse for everything.',
	}

];

