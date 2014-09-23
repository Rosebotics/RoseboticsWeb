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
                
  '<b>1.</b> If I did an Edit on my student first_name=David, last_name=Fisher, rose_username=fisherds, team=None and made the team=Team2 instead.  What data would be in the Datastore<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['1 Student with the new team name', true, 'Correct!'],
				['2 Students both with the same rose_username', false, 'Please try again.' ],
				['2 Students each with their own rose_username', false, 'Please try again.' ]]
	},
    
	  '<br><br><b>2.</b> If I did an Edit on my student first_name=David, last_name=Fisher, rose_username=fisherds, team=None and made the rose_username=fisher instead.  What data would be in the Datastore<br>',


		{
			questionType : 'multiple choice',
			choices : [
					['1 Student (all edits modify the existing student due to our key name trick)', false, 'Please try again.'],
					['2 Students both with the same rose_username', false, 'Please try again.' ],
					['2 Students each with their own rose_username', true, 'Correct!' ]]
		},

	'<br><br><b>3.</b> We could probably slim down this Datastore model by removing the rose_username propery.  With the model object as it is, what are the two ways we could access that value?',

	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'Use the rose_username property for the Student entity', 'The key name of the Student Entity (which is also the rose_username)', 'The parent key' ],
					correctIndex : [0,1]
				},
				{
					questionHTML : 'Assuming you had a Student instance called bob.  How would you get bob\'s rose_username via the property?',
					choices : [ 'bob.rose_username', 'bob_rose_username' ],
					correctIndex : 0
				},
				{
					questionHTML : 'How would you get bob\'s rose_username via the key?',
					choices : [ 'bob.key.id() or bob.key.string_id()', 'bob.id()', 'bob.id' ],
					correctIndex : 0
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: The answer to the first coding question is bob.rose_username, then bob.key.id() or bob.key.string_id() for the second coding question.',
	},
	
];
