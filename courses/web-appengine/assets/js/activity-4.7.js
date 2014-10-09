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

  '<b>1.</b> Why did we do an insert handler for an Assignment and only an add handler for a Student.<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['We don\'t support edits to a student.', false, 'Please try again.' ],
				['Because we are using a key name with the Assignment', false, 'Please try again.' ],
				['Because we are using a randomly generated integer ID for the key identifier with an Assignment instead of a key name.', true, 'Correct!' ],
				['No idea', false, 'Please try again.' ] ]
	},

	'<br><br><b>2.</b> What fields are present on the form body when an insert Assignment call is made? (one field might be an empty string, but that still counts :) )',
	
  {
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'rose_username', 'student_key', 'assignment_name', 'assignment_entity_key', 'assignment_number' ],
					correctIndex : [2,3]
				}  ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again.',
	},

  '<br><br><b>3.</b> How do we know if the insert assignment is an add or an edit?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['If there is an entity key present it\'s an edit.  If there is no entity key then it\'s an add.',  true, 'Correct!' ],
				['If the entity already exist then it must be an edit.', false, 'Please try again.' ],
				['All inserts are adds.', false, 'Please try again.'],
				['Since the key name is unique for an assignment an insert will override the old value.', false, 'Please try again.' ] ]
	},

];

