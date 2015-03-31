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
		'<b>1.</b> Which of these options prepresents a valid sequence for Full Step drive?<br>',

		{
			questionType : 'multiple choice',			
			choices : [
					[
							'1100, 0110, 0011, 1001, ...',
							false,
							'Please try again.  Assume the first two pins are a pair and the second two pins are a pair. (pairs must be different)' ],
					[
							'1001, 0101, 0110, 1010, ...',
							true,
							'Correct!  This pattern is slightly different than the one in the video, but totally valid.  Two valid patterns, one for CW and one for CCW. Start at any point in the loop. Full Step Rules: The two signals in a pair are always different.  One pair changes while the other stays the same.' ],
					[
							'0101, 0110, 1001, 0101, ...',
							false,
							'Please try again.  From step 2 to step 3 both pairs changed, so this one is no good.' ],
					[ '0101, 1010, 0101, 1010, ...', false,
							'Please try again.  Both pairs are changing at the same time here (no good).' ] ],
		},

		'<br><br><b>2.</b> Assume you wanted to use <b>Unipolar</b> drive mode for this problem (<b>NOT</b> what we\'ll do in lab)<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> How many wires must a stepper motor provide access to for Unipolar wiring? (check all that apply)',
						choices : [ '4', '5', '6', '8' ],
						correctIndex : [ 1, 2, 3 ]
					},
					{
						questionHTML : '<b>b.</b> How many transistors would you need for Unipolar wiring?',
						choices : [ 'Four MOSFETs',
								'Two H-Bridge circuit (ie 1 L293 / 754410)' ],
						correctIndex : 0
					},
					{
						questionHTML : '<b>c.</b> If you wanted to drive the Unipolar motor wiring with a Full Step drive strategy, the pattern would be exactly the same as a stepper with Bipolar wiring.',
						choices : [ 'True', 'False' ],
						correctIndex : 0
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Unipolar uses MOSFETs, but the drive strategy is unchanged.  More than 4 wires need to be made availalbe.',
		},

		'<br><br><b>3.</b> Assume you wanted to use <b>Bipolar</b> drive mode for this problem (This <b>IS</b> what we\'ll do in lab)<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> How many wires could be available to use Bipolar wiring? (check all that apply)',
						choices : [ '4', '5', '6', '8' ],
						correctIndex : [ 0, 1, 2, 3 ]
					},
					{
						questionHTML : '<b>b.</b> How many transistors would you need for Bipolar wiring?',
						choices : [ 'Four MOSFETs',
								'Two H-Bridge circuit (ie 1 L293 / 754410)' ],
						correctIndex : 1
					},
					{
						questionHTML : '<b>c.</b> You will connect only 4 of the stepper motor wires to the H-Bridge.  Other wires will NOT be connected to power (power comes from the H-Bridge).',
						choices : [ 'True', 'False' ],
						correctIndex : 0
					}, ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Bipolar uses an H-Bridge and needs only 4 wires.',
		},

		'<br><br><b>4.</b> You could expect Unipolar wiring to get double the torque as Bipolar wiring.<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'True', false, 'Please try again.' ],
					[
							'False',
							true,
							'Correct!  Bipolar wiring uses the full coil and has more torque.  Unipolar uses half the coil to create the electromagnet, which provides less torque.' ] ]
		},

		'<br><br><b>5.</b> You could expect Wave Step to get double the torque as Full Step.<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'True', true, 'Please try again.' ],
					[
							'False',
							false,
							'Correct!  Full Step (also called Dual Phase Excitation) uses both phases to move the spinning magnet, which gives more torque.  Wave Step (also called Single Phase Excitation) uses only 1 phase at a time, which give less torque.  Half step, btw, mixes the two for improved positioning resolution. We\'ll use Full Step only in lab.' ] ]
		},

		'<br><br><b>6.</b> In lab we\'ll use Bipolar wiring with a Full Step driving strategy to get the most torque.  However if you buy a high torque (ie low resistance) stepper motor for you project what issue might you have?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[
							'Your high torque stepper would need to put too much current through the L293 / 754410 and you\'ll destroy the chip.',
							true,
							'Correct.  The H-Bridge we use is limited.  If you get a low resistance stepper consider using a Unipolar wiring with MOSFETs or find a better H-Bridge like an L298 or find something even better online.' ],
					[
							'You won\'t be able to find a power supply above 5 volts',
							false, 'Please try again.' ],
					[
							'The microcontroller can\'t control higher torque stepper motors',
							false, 'Please try again.' ],
					[
							'All steppers are low torque, even if you pay over $100.',
							false,
							'Please try again. You can buy steppers with a LOT of torque if you have the funds and a way to drive them.' ] ]
		},

		'<br><br><b>7.</b> If the Enable line is high, a stepper pulls just as much current while stopped.<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[
							'True',
							true,
							'Correct.  If you want to reduce the current bring the enable line to 0.  Otherwise, spinning or not, a stepper pulls max current all the time.' ],
					[ 'False', false, 'Please try again.' ] ]
		},

];
