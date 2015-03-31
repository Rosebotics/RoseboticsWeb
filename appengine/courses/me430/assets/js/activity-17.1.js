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

		'<b>1.</b> There are four types of Markers.  What are they? (Outputs btw have the same types.)<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Check all the Marker types',
						choices : [ 'Make', 'Break', 'Set', 'Reset', 'On-Delay', 'Off-Delay', 'Contactor', 'Impulse Relay' ],
						correctIndex : [2,3,6,7]
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hint: There are four (peek at the next question for more help).',
		},


	    '<br><br><b>2.</b> Name that marker!<br>',
	    
		{
			questionType : 'multiple choice group',
			questionsList : [
								{
									questionHTML : 'Toggles the marker (or output) at the moment a rung becomes active (triggered by the edge)',
									choices : [ 'Set', 'Reset', 'Contactor', 'Impulse Relay' ],
									correctIndex : 3
								},
								{
									questionHTML : 'Continually sets a marker (or output) as on or off.  Marker state immediately matches the rung state.',
									choices : [ 'Set', 'Reset', 'Contactor', 'Impulse Relay' ],
									correctIndex : 2
								},
								{
									questionHTML : 'Makes a marker (or output) transition into the Made state (on) when the rung is active',
									choices : [ 'Set', 'Reset', 'Contactor', 'Impulse Relay' ],
									correctIndex : 0
								},
								{
									questionHTML : 'Makes a marker (or output) transition into the Broken state (off) when the rung is active',
									choices : [ 'Set', 'Reset', 'Contactor', 'Impulse Relay' ],
									correctIndex : 1
								}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hint: Each answer is used once.',
		},


	    '<br><br><b>3.</b> Since you are a master of PIC programming and PLC markers, match each rung to it\'s equivalent C code (an interesting way to think about rungs).<br>',
		'<img src="assets/img/rungs_of_marker_types_and_code.png" alt="LCD code"><br>',
		
		{
			questionType : 'multiple choice group',
			questionsList : [
								{
									questionHTML : 'Rung 1 is equivalent to ...',
									choices : [ 'Code snippet A', 'Code snippet B', 'Code snippet C', 'Code snippet D' ],
									correctIndex : 3
								},
								{
									questionHTML : 'Rung 2 is equivalent to ...',
									choices : [ 'Code snippet A', 'Code snippet B', 'Code snippet C', 'Code snippet D' ],
									correctIndex : 0
								},
								{
									questionHTML : 'Rung 3 is equivalent to ...',
									choices : [ 'Code snippet A', 'Code snippet B', 'Code snippet C', 'Code snippet D' ],
									correctIndex : 1
								},
								{
									questionHTML : 'Rung 4 is equivalent to ...',
									choices : [ 'Code snippet A', 'Code snippet B', 'Code snippet C', 'Code snippet D' ],
									correctIndex : 2
								}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hint: Each answer is used once.',
		},

		

	    '<br><br><b>4.</b> If you have a Contactor controlling Marker 3 on the first rung, then it\'s fine to have a Set controlling Marker 3 on the next rung because that rung will only turn the marker on occasionally (i.e. they rarely conflict).<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['True. Should be fine.', false, 'Please try again.' ],
					['False.  Contactors set the value ALL the time.  This creates a conflict where two rungs battle over Marker 3\'s state.', true, 'Correct!' ] ]
		},
];
