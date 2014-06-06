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

	'<b>1.</b> If you were using an OpenPWM1(141); command but then changed it to OpwnPWM1(70); would that make the frequency higher or lower? (try to think it out conceptually instead of solving the problem with the formula)<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['OpenPWM1(70) has a lower frequency.', false, 'Please try again. A shorter period would be a higher frequency (frequency = 1/period)' ],
				['OpenPWM1(70) has a higher frequency.', true, 'Correct!  Shorter periods = Higher frequencies (frequency = 1/period)' ]]
	},

    '<br><br><b>2.</b> What is the problem with this formula.  600 / 1000 * 100 + 10?<br>',

	{
		questionType : 'multiple choice',
		choices : [['Nothing.  It\'s fine and will result in 70', false, 'Please try again.' ],
				['Integer division issue, making it result in 0', false, 'Please try again.' ],
				['Integer division issue, making it result in 10', true, 'Correct!' ],
				['Interger overflow issue making the result NOT what was expected.', false, 'Please try again.' ] ]
	},

    '<br><br><b>3.</b> What is the problem with this formula.  600 * 100 / 1000 + 10?<br>',

	{
		questionType : 'multiple choice',
		choices : [['Nothing.  It\'s fine and will result in 70', false, 'Please try again.' ],
				['Integer division issue, making it result in 0', false, 'Please try again.' ],
				['Integer division issue, making it result in 10', false, 'Please try again.' ],
				['Interger overflow issue making the result NOT what was expected.', true, 'Correct!' ] ]
	},
	
    '<br><br><b>4.</b> What is the problem with this formula.  600 * 10 / 100 + 10?<br>',

	{
		questionType : 'multiple choice',
		choices : [['Nothing.  It\'s fine and will result in 70', true, 'Correct!' ],
				['Integer division issue, making it result in 0', false, 'Please try again.' ],
				['Integer division issue, making it result in 10', false, 'Please try again.' ],
				['Interger overflow issue making the result NOT what was expected.', false, 'Please try again.' ] ]
	},
	
    '<br><br><b>5.</b> What is the problem with this formula.  600L * 100 / 1000 + 10?<br>',

	{
		questionType : 'multiple choice',
		choices : [['Nothing.  It\'s fine and will result in 70',  true, 'Correct!' ],
				['Integer division issue, making it result in 0', false, 'Please try again.' ],
				['Integer division issue, making it result in 10', false, 'Please try again.' ],
				['Interger overflow issue making the result NOT what was expected.', false, 'Please try again.' ] ]
	},

    '<br><br><b>6.</b> In this example our functions were effective, but not actually necessary.  In general what are some advantages of functions?<br>',
    
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : 'Why functions?',
					choices : [ 'Great place to put code that will be called from different places', 'Great way to organize a chunk of related code.', 'Always makes it easier to write code', 'Logical organization of code into functions can help make your code more readable which might help others find bugs.' ],
					correctIndex : [0,1,3]
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: All but 1 are true.',
	},
];
