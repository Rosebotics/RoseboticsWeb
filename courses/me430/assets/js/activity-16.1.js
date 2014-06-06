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

		'<b>1.</b> Mark the answers that relate to a PLC<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Related to PLC usage...',
						choices : [ 'Used to run most assembly lines in the world', 'Provides a PWM output', 'Inputs are 0 volts or 5 volts', 'Uses a relay for each high power output'],
						correctIndex : [0,3]
					},
					{
						questionHTML : '<b>b.</b> Related to PLC programming...',
						choices : [ 'Programmed using C', 'Programmed using Java', 'Uses a graphical programming language called Ladder Logic', 'The development environment is PicoSoft', 'The development environment is MPLABx'],
						correctIndex : [2,3]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: Two are correct in each set.',
		},

	    '<br><br><b>2.</b> Select the answer that best describes the <b>inputs</b> on the PLC we\'ll use?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['8 digital inputs that read high (DC 5 volts) or low (DC 0 volts).', false, 'Please try again.'],
					['33 inputs (DC 0-5 volts) of which 13 could be analog (exactly like the PIC)', false, 'Please try again.'],
					['8 digital inputs that are either connected to AC Hot (Made) or not connected to AC Hot, usually floating (Broken)', true, 'Correct!'],
					['8 analog inputs that read values from 0 to 24 volts (DC).', false, 'Please try again.'] ]
		},

	    '<br><br><b>3.</b> Select the answer that best describes the <b>outputs</b> on the PLC we\'ll use?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['33 outputs (DC 0-5 volts) of which 2 could be PWM outputs (exactly like the PIC).', false, 'Please try again.'],
					['4 outputs that provide 24 vols DC at up to 5 amps.', false, 'Please try again.'],
					['4 outputs that provide 110 volts AC with very high current capability.', true, 'Correct!'] ]
		},
		
];
