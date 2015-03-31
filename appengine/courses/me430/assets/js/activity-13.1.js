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
		'<b>1.</b> If an IR LED has a max current of 50mA with a 1.5 volt forward voltage drop.  What REAL resistor size might you use? (Assume a 5 volt source)<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['140', false, 'Please try again. Your math is correct but 140 is not a real (ie common) resistor size' ],
					['150', true, 'Correct!' ],
					['220', false, 'Please try again.' ],
					['330', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>2.</b> When an IR detector circuit is being blocked, the IR detector is in darkness.  What is the signal to the PIC?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Some low value (hopefully near 0 volts)', false, 'Please try again.' ],
					['Some high value (hopefully near 5 volts)', true, 'Correct!' ] ]
		},		
		'<br><br><b>3.</b> When an IR detector circuit is NOT blocked, the IR detector is being hit by IR light from the IR emitter.  What is the signal to the PIC?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Some low value (hopefully near 0 volts)', true, 'Correct!' ],
					['Some high value (hopefully near 5 volts)', false, 'Please try again.' ] ]
		},
		
		'<br><br><b>4.</b> Name that leg (check all that apply)...<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> Leg on the IR Emitter',
						choices : [ 'Anode', 'Cathode',  'Base', 'Emitter', 'Collect' ],
						correctIndex : [0,1]
					},
					{
						questionHTML : '<b>b.</b> Physical leg plugged in on the IR Detector',
						choices : [ 'Anode', 'Cathode', 'Base', 'Emitter', 'Collect' ],
						correctIndex : [3,4]
					},
					{
						questionHTML : '<b>c.</b> Not connected by a physical wire, replaced by using light as an input',
						choices :  [ 'Anode', 'Cathode', 'Base', 'Emitter', 'Collect' ],
						correctIndex : 2
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: All answers are used once.  Check 2, check 2, then check 1.',
		},		
		
];
