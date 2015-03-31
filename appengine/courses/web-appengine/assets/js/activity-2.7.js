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

  '<b>1.</b> Which three mechanisms <b>could</b> be used to deploy your app?',

  {
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'Google App Engine Launcher', 'The command line', 'Eclipse', 'Chrome' ],
					correctIndex : [0,1,2]
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again.',
	},

  '<br><br><b>2.</b> Match each developer tool to its purpose:<br><br>',
  
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : 'Tool used to see detailed information about all traffic (if your app is successfully serving users, errors occurring, pages visited, device used, etc)',
					choices : [ 'Overview pages that loads by default', 'Compute --> App Engine --> Logs',  'Storage --> Cloud Datastore --> Indexes',  'Storage --> Cloud Datastore --> Datastore Viewer'],
					correctIndex : 1
				},{
					questionHTML : 'Tool used to see a high level overview of usage',
					choices : [ 'Overview pages that loads by default', 'Compute --> App Engine --> Logs',  'Storage --> Cloud Datastore --> Indexes',  'Storage --> Cloud Datastore --> Datastore Viewer'],
					correctIndex : 0
				},{
					questionHTML : 'Tool used to see if the data in your Datastore is ready to serve (usually the last thing to complete before your app is truly live)',
					choices : [ 'Overview pages that loads by default', 'Compute --> App Engine --> Logs',  'Storage --> Cloud Datastore --> Indexes',  'Storage --> Cloud Datastore --> Datastore Viewer'],
					correctIndex : 2
				},{
					questionHTML : 'Tool used to see the entities saved in the Datastore',
					choices : [ 'Overview pages that loads by default', 'Compute --> App Engine --> Logs',  'Storage --> Cloud Datastore --> Indexes',  'Storage --> Cloud Datastore --> Datastore Viewer'],
					correctIndex : 3
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again.',
	}
];

