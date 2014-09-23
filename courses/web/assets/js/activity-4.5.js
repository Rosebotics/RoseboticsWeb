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

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>1.</b> What are the four attributes for a Query object?',
						choices : [ 'kind', 'entity', 'ancestor', 'get', 'filters', 'pageToken', 'orders' ],
						correctIndex : [0,2,4,6]
					}, ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Review the notes or visit the Query reference pages.',
		},

		'<br><br><b>2.</b> How would you make a <b>query</b> for a Person with an ancestor of bob, filtering for nickname = "bobby", ordering by birthday?<br>Select any correct answer.<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'Person.query(Person.nickname="bobby", ancestor=bob).order(Person.birthday)', false, 'Please try again.  Note the = should be =='  ],
					[ 'Person.query(ancestor=bob).filter(Person.nickname == "bobby").order(Person.birthday)', true, 'Correct!  There are actually two valid answers here.' ],
					[ 'Person.query(Person.nickname=="bobby", ancestor=bob).order(Person.birthday)', true, 'Correct!  There are actually two valid answers here.' ],
					[ 'Person.query(ancestor=bob, Person.nickname == "bobby").order(Person.birthday)',  false, 'Please try again.  That order won\'t work' ],
					[ 'Person.query(Person.nickname == "bobby", ancestor=bob).order(Person.birthday).fetch()', false, 'Please try again.  That makes a LIST not a query.' ]]
		},


		'<br><br><b>3.</b> How would you make a list of all Dog objects where breed = "Malinois"?<br>',

		{
			questionType : 'multiple choice',
			choices : [
				[ 'Dog.query(Dog.breed == "Malinois", ancestor=bob).order(Dog.birthday)', false, 'Please try again.'  ],
				[ 'Dog.query(Dog.breed == "Malinois")', false, 'Please try again.'  ],
				[ 'Dog.query(Dog.breed == "Malinois").fetch()', true, 'Correct!' ],
				[ 'Dog.query(Dog.breed == "Malinois").get()', false, 'Please try again.'  ],
				]
		},
		
		'<br><br><b>3.</b> How would you get a single Dog object with breed = "Malinois" and name = "Kingley"? (you happen to know there is only 1 matching entity in the Datastore)<br>',

		{
			questionType : 'multiple choice',
			choices : [
						[ 'Dog.query(Dog.breed == "Malinois", ancestor=bob).order(Dog.birthday)', false, 'Please try again.'  ],
						[ 'Dog.query(Dog.breed == "Malinois", Dog.name == "Kingley")', false, 'Please try again.'  ],
						[ 'Dog.query(Dog.breed == "Malinois", Dog.name == "Kingley").fetch()', false, 'Please try again.  Fetch would work, but it gives you a list of ALL hits.  We want only 1 result, so you can use get (which we mentioned in the video, but didn\'t USE in GradeRecorder)' ],
						[ 'Dog.query(Dog.breed == "Malinois", Dog.name == "Kingley").get()', true, 'Correct!'  ],
						]
		}		
		
];
