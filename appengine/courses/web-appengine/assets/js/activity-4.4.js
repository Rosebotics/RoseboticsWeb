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

		'<b>1.</b> The new property we added to this Datastore model was the KeyProperty.  In the GradeEntry model we had a KeyProperty called assignment_key.  What will it point to?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['The user that created the assignment', false, 'Please try again.' ],
					['The assignment entity that this grade is for', false, 'Please try again.' ],
					['The key of the assignment that this grade is for', true, 'Correct!' ]]
		},


		'<br><br><b>2.</b> We mentioned in the video lecture that we could probably slim down this Datastore model.  Potential savings include the rose_username propery on a Student entity.  What are the two ways we could access that value?',

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

		'<br><br><b>3.</b> The other item we could potentially slim down is the assignment key in a GradeEntry.  What are the two ways we could access that value?',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '',
						choices : [ 'Use the assignemnt_key property for the GradeEntry entity', 'The key name of the GradeEntry', 'The parent key of the GradeEntry' ],
						correctIndex : [0,2]
					},
					{
						questionHTML : 'Assuming you had a GradeEntry instance called my_grade.  How would you get my_grade\'s assignment key via the property?',
						choices : [ 'my_grade.assignment_key', 'my_grade.key.assignment' ],
						correctIndex : 0
					},
					{
						questionHTML : 'How would you get my_grade\'s assignment key via the parent key?',
						choices : [ 'my_grade.key.parent()', 'my_grade.parent()'],
						correctIndex : 0
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: The answer to the first coding question is my_grade.assignment_key, then my_grade.key.parent() for the second coding question.',
		},

		'<br><br><b>4.</b> Can a Datastore model work just fine even if it\'s not as slim as possible?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Sure.  Cause we\'re about to.  Sometimes convenience properties are nice and make models easier to use.', true, 'Correct.  I\'m not too worried about it. :)' ],
					['You should always make sure your data models are as slim as possible for efficiency', false, 'Please try again.' ] ]
		},
		
];
