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

  '<b>1.</b> What are the three properties on an NDB key used to unique identify an Entity?',

	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'KeyProperty', 'Entity', 'Kind', 'identifier (either an integer ID or string key name)', 'ancestor path (which is None for a root key)' ],
					correctIndex : [2,3,4]
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: Review the notes',
	},

	'<br><br><b>2.</b> Did you complete your plan for the GradeRecorder Datastore Model?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['You bet!  Might even work.', true, 'Great!' ],
				['Not yet.',  false, 'Pause and give it a shot before moving on.' ]]
	},

	'<br><br><b>3.</b> How many Entities do you think we\'ll use (i.e. how many <b>ndb.Model</b> subclasses will we make)?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['6 - User, Student, Team, Assignment, GradeEntry, CsvFile',  false, 'Please try again.' ],
				['4 - User, Student, Assignment, GradeEntry',  false, 'Please try again.' ],
				['4 - Student, Team, Assignment, GradeEntry',  false, 'Please try again.  To be honest, I seriously considered that model, but we won\'t use a Team Entity in our solution.' ],
				['3 - Student, Assignment, GradeEntry', true, 'Correct!  Those are the three we\'ll use!' ],
				['2 - Student, Assignment (where the assignment contains a list of grades)',  false, 'Please try again.' ]]
	},

	'<br><br><b>4.</b> Let\'s talk about the Assignment ndb.Model?<br>',

	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> What type of information does an Assignment need to either contain or reference?',
					choices : [ 'It needs to know who is logged in, i.e. the user that owns the assignment', 'The name of the assignment', 'Grades for students on this assignment', 'All of the above' ],
					correctIndex : 3
				},
				{
					questionHTML : '<b>b.</b> An entity can reference information by having a parent key, being a parent key, or by having a propery.  How many <b>properties</b> do you think we\'ll use for an Assignment',
					choices : [ '3 - User, name, and a list of grades', '2 - User, name',  '2 - name and a list of grades (the user relationship will be maintained by a parent key relationship)', '1 - name (all other relationship will be handled by being a parent key or having a parent key)', '1 - A list of grades (the name will be kept as the key name)' ],
					correctIndex : 3
				} ],
		allCorrectOutput : 'Well done!  Kinda neat that an assignment has only 1 property.  Their will be a key that is the parent to know the user logged in and the grade entries will point to the assignment (the assignment will not point to the grades)',
		someIncorrectOutput : 'Please try again. Hints: All three pieces of information are important, but only 1 is a property',
	},

];

