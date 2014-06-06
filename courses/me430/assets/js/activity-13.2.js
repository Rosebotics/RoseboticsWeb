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

        '<b>1.</b> Assume you decided to use a 4.7k resistor for the IR detector circuit.  If you had a dark collector current of 0.8 mA, what voltage reading would be present on the signal line to the PIC in darkness? <br>',
 
		{
			questionType : 'multiple choice',
			choices : [ [ '0.96 volts', false, 'Please try again.' ],
			            [ '1.24 volts', true, 'Correct! (BTW this is TERRIBLE! You wanted something near 5 volts when in darkness.  This is a problem.)' ],
			            [ '2.16 volts', false, 'Please try again.' ],
			            [ '3.76 volts', false, 'Please try again. 5 - 3.76 (3.76 is the voltage drop across the resistor)' ],
			            [ '4.96 volts', false, 'Please try again.' ]]
		},

		'<br><br><b>2.</b> Assume you decided to use a 4.7k resistor for the IR detector circuit.  If you had an ON current that would allow up to 4.0 mA, what voltage reading would be present on the signal line in IR light? <br>',
 
		{
			questionType : 'multiple choice',
			choices : [ [ '-18.8 volts', false, 'Please try again.  The signal will never go below zero.' ],
			            [ '-13.8 volts', false, 'Please try again.  The signal will never go below zero.' ],
			            [ '0 volts', true, 'Correct!' ],
			            [ '1.24 volts', false, 'Please try again.' ],
			            [ '4.96 volts', false, 'Please try again.' ]]
		},

		'<br><br><b>3.</b> In the example above the ON state was great!  However, as question #1 showed the dark state was NOT near 5 volts (way too low)!  How would you fix this issue? <br>',
 
		{
			questionType : 'multiple choice',
			choices : [ [ 'Make the 4.7k resistor smaller (like 10 times smaller) ', false, 'Please try again.' ],
			            [ 'Make the 4.7k resistor smaller (like 4 times smaller)',  true, 'Correct!' ],
			            [ 'Make the 4.7k resistor bigger  (like 4 times bigger)', false, 'Please try again.' ],
			            [ 'Make the 4.7k resistor bigger  (like 10 times bigger)', false, 'Please try again.' ]]
		},
		
		'<br><br><b>4.</b> In a completely different setup you have voltage readings that are always high (in light or dark).  What adjustment do you make then? <br>',
		 
		{
			questionType : 'multiple choice',
			choices : [ [ 'Make the resistor smaller', false, 'Please try again.'  ],
			            [ 'Make the resistor bigger', true, 'Correct!' ]]
		},
	
		'<br><br><b>5.</b> Pick a detector resistor size to start with if the datasheet claims a dark current of 10 nA and an ON current of 1 mA.<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '470 ohms', false, 'Please try again.' ],
			            [ '1k', false, 'Please try again.' ],
			            [ '4.7k', true, 'Correct!'  ],
			            [ '470k', false, 'Please try again.' ]]
		},
		
			
];
