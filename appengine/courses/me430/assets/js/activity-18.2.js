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

		'On a sheet a paper draw the FSM for this ladder logic code. Then we\'ll ask you some questions about it.<br>',

		'<img src="assets/img/quiz18_2_ladder_logic.png" alt="Very simple Ladder Logic"><br>',

		'<br><b>1.</b> How many states are there?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '1 state', false, 'Please try again.' ],
					[ '2 states', false, 'Please try again.' ],
					[ '3 states', true, 'Correct!' ],
					[ '4 states', false, 'Please try again.' ]]
		},
		
		'<br><br><b>2.</b> Into which state did you draw your Reset transition (arrow)?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'M1 Red', true, 'Correct!' ],
					[ 'M2 Yellow', false, 'Please try again.' ],
					[ 'M3 Green', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>3.</b> Assuming the inputs are all N.O. Momentary and someone pressed I1 then I3 then I2, what state would you be in?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'M1 Red', true, 'Correct!  Red -> Yellow -> Back to Red then I2 does nothing in the red state' ],
					[ 'M2 Yellow', false, 'Please try again.' ],
					[ 'M3 Green', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>4.</b> Assuming the inputs are all N.O. Momentary and someone pressed I1 then I2 then I1 then I3 then I1 then I2 then I1, which Q output is on at the end?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'Q1 the Red Light', false, 'Please try again.' ],
					[ 'Q2 the Yellow Light', false, 'Please try again.' ],
					[ 'Q3 the Green Light', true, 'Correct!  Red -> Yellow -> Green (then I1 does nothing) -> Red -> Yellow -> Green (then I1 does nothing)' ] ]
		},		
		
		
		'<br><br><b>5.</b> How many total arrows are there on your FSM? (Reset counts as 1 transition as well)<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '3 transitions', false, 'Please try again.' ],
					[ '4 transitions', false, 'Please try again.' ],
					[ '5 transitions', true, 'Correct! Reset, M1-(I1)->M2, M2-(I3)->M1, M2-(I2)->M3, M3-(I3)->M1' ],
					[ '6 transitions', false, 'Please try again.' ],
					[ '7 transitions', false, 'Please try again.' ],
					[ '8 transitions', false, 'Please try again.' ],
					[ '9 transitions', false, 'Please try again.' ]]
		},
];
