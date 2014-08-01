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

		'<b>1.</b> Array syntax<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Which of these are valid ways to declare a char array of size 5?',
						choices : [ 'char myArray[5];', 'char myArray[5] = {0,1,2,3,4};', 'char myArray[] = {0,1,2,3,4};', 'char myArray[] = "Dave";' ],
						correctIndex : [0,1,2,3]
					},
					{
						questionHTML : '<b>b.</b> How would you address the last char in the array above?',
						choices : [ 'myArray[0]', 'myArray[4]', 'myArray[5]' ],
						correctIndex : 1
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hint: All options in part A are valid.',
		},

		'<br><br><b>2.</b> One example above had <b>char myArray[] = "Dave";</b>.  What is the value of myArray[1]?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '\'D\'', false, 'Please try again.' ],
			            [ '\'a\'', true, 'Correct!' ],
						[ '\'\\0\' the null character', false, 'Please try again.' ],
					[ 'Array index out of bounds', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>3.</b> Again for <b>char myArray[] = "Dave";</b>.  What is the value of myArray[4]?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '\'e\'', false, 'Please try again.' ],
					[ '\'\\0\' the null character', true, 'Correct!' ],
					[ 'Array index out of bounds', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>4.</b> What is the value of x if <b>char x = \'X\';</b><br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '48', false, 'Please try again.'],
					[ '58', false, 'Please try again.' ],
					[ '88',  true, 'Correct!' ],
					[ '120', false, 'Please try again.' ] ]
		},


];
