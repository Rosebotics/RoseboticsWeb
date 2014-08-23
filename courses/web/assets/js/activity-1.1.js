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

  '<b>1.</b> Match the Google Cloud tool to the description<br>',
  
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> Used to create JSON APIs to allow iOS and Android apps to communicate with an AppEngine backend',
					choices : [ 'App Engine', 'Compute Engine', 'Cloud Storage', 'Cloud Datastore', 'Cloud SQL', 'BigQuery', 'Cloud Endpoints'],
					correctIndex : 6
				},
				{
					questionHTML : '<b>b.</b> Primary tool we\'ll use for storing data in AppEngine',
					choices : [ 'App Engine', 'Compute Engine', 'Cloud Storage', 'Cloud Datastore', 'Cloud SQL', 'BigQuery', 'Cloud Endpoints'],
					correctIndex : 3
				},
				{
					questionHTML : '<b>c.</b> Tool that allows you to build and run backends on Google\'s infrastructure using Java, Python, Go, or PHP (we\'ll use Python)',
					choices : [ 'App Engine', 'Compute Engine', 'Cloud Storage', 'Cloud Datastore', 'Cloud SQL', 'BigQuery', 'Cloud Endpoints'],
					correctIndex : 0
				}, {
					questionHTML : '<b>d.</b> Tool you\'d use to save files, like images, in the cloud using Google\'s infrastructure',
					choices : [ 'App Engine', 'Compute Engine', 'Cloud Storage', 'Cloud Datastore', 'Cloud SQL', 'BigQuery', 'Cloud Endpoints'],
					correctIndex : 2
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: Don\'t use the answers Computer Engine, Cloud SQL, or BigQuery.',
	},
	

  '<br><br><b>2.</b> If you were to visit the website <a target="_blank" href="http://www.rosebotics.org/">http://www.rosebotics.org</a> does that site use AppEngine?<br>',

  { questionType: 'multiple choice',
    choices: [['Nope.  That URL does not end in .appspot.com so that site does not use AppEngine', false, 'Please try again'],
              ['There is no good way to know unless you happen to know the creators.  Given that Dr. Fisher made that site it probably does though.', true, 'Correct!  If you are curious www.rosebotics.org is setup as the Custom Domain, but the default AppEngine URL also works.']]},

  '<br><br><b>3.</b> If the AppEngine App ID for <a target="_blank" href="http://www.rosebotics.org/">http://www.rosebotics.org</a> was say... <b>roseboticsweb</b> (it is) what site would load the same content as <a target="_blank" href="http://www.rosebotics.org/">http://www.rosebotics.org</a>?<br><i>Hint: If you get stuck try clicking on that link.<i><br>',

  { questionType: 'multiple choice',
    choices: [['<a target="_blank" href="http://rosebotics.appspot.com/">http://rosebotics.appspot.com</a>', false, 'Try again.'],
              ['<a target="_blank" href="http://roseboticsweb.appspot.org/">http://roseboticsweb.appspot.org</a>', false, 'Try again.'],
              ['<a target="_blank" href="http://rosebotics.appspot.org/">http://rosebotics.appspot.org</a>', false, 'Try again.'],
              ['<a target="_blank" href="http://roseboticsweb.appspot.com/">http://roseboticsweb.appspot.com</a>', true, 'Correct!']]},

];

