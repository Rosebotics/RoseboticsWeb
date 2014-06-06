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
		'<b>1.</b> A CdS cell (also called a photocell) is similar to a potentiometer.  Both are just resistors that change value. However, instead of a human turning a knob to change resistance, a CdS cell uses light to vary the resistance value (high resistance values in the dark, low resistance values in the light).<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['True', true, 'Correct!' ],
					['False. A CdS cell is more like a BJT.', false, 'Please try again.' ],
					['False. A CdS cell is more like a pushbutton.', false, 'Please try again.' ] ]
		},
		
	    '<br><br><b>2.</b> In darkness a CdS cell might have a resistance of 1M.  If you used a 22k resistor for R1 in the circuit, what would the signal to the PIC be in darkness?<br>',
		{
			questionType : 'multiple choice',
			choices : [
					['0.87 volts', false, 'Please try again.' ],
					['1.56 volts', false, 'Please try again.' ],
					['2.37 volts', false, 'Please try again.' ],
					['4.89 volts', true, 'Correct!' ] ]
		},
		
	    '<br><br><b>3.</b> In light a CdS cell might have a resistance of 10k.  If you used a 22k resistor for R1 in the circuit, what would the signal to the PIC be in light?<br>',
		
		{
			questionType : 'multiple choice',
			choices : [
					['0.87 volts', false, 'Please try again.' ],
					['1.56 volts', true, 'Correct!' ],
					['2.37 volts', false, 'Please try again.' ],
					['4.89 volts', false, 'Please try again.' ] ]
		},		
		'<br><br><b>4.</b> If you measured the resistance of a CdS cell to be 500k in darkness and 50k in the light (not a great swing amount, oh well), which resistor size would you choose for R1 to get the largest voltage delta between the light and dark readings?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['10k', false, 'Please try again.  A 10k resistor would give a 4.902 volt signal in the dark, minus a 4.166 volt signal in the light which equals a 0.736 volt swing (there is a better option)' ],
					['22k', false, 'Please try again.  A 22k resistor would give a 4.789 volt signal in the dark, minus a 3.472 volt signal in the light which equals a 1.317 volt swing (there is a better option)' ],
					['68k', true, 'Correct! A 68k resistor would give a  4.401 volt signal in the dark, minus a 2.118 volt signal in the light which equals a 2.282 volt swing (the biggest swing of these options)' ],
					['470k', false, 'Please try again.  A 470k resistor would give a  2.577 volt signal in the  dark, minus a 0.4808 volt signal in the  light which equals a 2.0962 volt swing (there is a better option)' ] ]
		},
		
		'<br><br><b>5.</b> When a laser pointer hits a CdS cell that makes the CdS resistance go very low.  When this happens the signal to the PIC is...<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['A high voltage level', false, 'Please try again.' ],
					['A low voltage level', true, 'Correct!' ]]
		},
];
