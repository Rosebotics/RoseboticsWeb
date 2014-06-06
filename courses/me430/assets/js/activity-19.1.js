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

		'The real <b>meat</b> of this video was focused around these #defines and the <b>state</b> variable.<br>',

		'<img src="assets/img/quiz19_1_correct_defines.png" alt="Correct state defines"><br>',

		'<br><b>1.</b> Would the program work just as well if we make the #defines look like this?<br>',

		'<img src="assets/img/quiz19_1_incorrect_defines.png" alt="Incorrect state defines"><br>',
		
		{
			questionType : 'multiple choice',
			choices : [
					['Yep, that would still work fine.  Each state is defined.', false, 'Please try again.' ],
					['Using those #define values would be a complete disaster.', true, 'Correct!  The #defines must be unique values (they can be any legal int value, but they must be unique).' ] ]
		},

		'<br><br><b>2.</b>  There are many ways to write if statements for the state transitions.  Three of the arrows we implemented in our Two Player Game FSM were these three arrows...<br>',
		'<img width=50% src="assets/img/Two_Player_Game_FSM_PIC_Quiz_Arrows.png" alt="Two Player Game FSM"><br>',
		
		'We implemented these three arrows with the following code:<br>',
		'<img src="assets/img/if_statements_19_1_original.png" alt="Original if statements"><br><br>',
		
		'We mentioned in the video that these if statements could be combined and shortened.  Which of these alternative versions produce exactly the results?<br>',
		'<br><b style="color:blue; text-decoration:underline;">Option A</b><br>',
		'<img src="assets/img/if_statements_19_1_a.png" alt="Option A"><br>',
		'<br><b style="color:blue; text-decoration:underline;">Option B</b><br>',
		'<img src="assets/img/if_statements_19_1_b.png" alt="Option B"><br>',
		'<br><b style="color:blue; text-decoration:underline;">Option C</b><br>',
		'<img width=90% src="assets/img/if_statements_19_1_c.png" alt="Option C"><br>',
		'<br><b style="color:blue; text-decoration:underline;">Option D</b><br>',
		'<img src="assets/img/if_statements_19_1_d.png" alt="Option D"><br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>-</b> Check all the options that are equivalent to the original.',
						choices : [ 'Option A', 'Option B', 'Option C', 'Option D' ],
						correctIndex : [0,2,3]
					} ],
			allCorrectOutput : 'Well done!  BTW I like Option A the best and find it the easiest to read.',
			someIncorrectOutput : 'Please try again. Hints: Three are correct.  One is wrong.  The one that is wrong lets you go to the PLAYER 1 state with an RB1 press from the GAME_OVER state (which is bad).',
		},
		
		
		'<br><br><b>3.</b> In a PLC a transition arrow becomes a rung.  In a PIC an arrow becomes an if statement.<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['True', true, 'Correct!' ],
					['False', false, 'Please try again.' ] ]
		},
		
];
