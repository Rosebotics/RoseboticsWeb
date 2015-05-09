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
    '<b>1.</b> Servo motors are very easy to wire.  Give them unregulated power (5 volts typically), a connection to ground, and...<br>',

	  { questionType: 'multiple choice',
	    choices: [['A signal line connected to the mircocontroller', true, 'Correct!  They sure are easy to use (if you can figure out the software to make that signal line).'],
	              ['A MOSFET', false, 'Please try again.'],
	              ['An H-Bridge', false, 'Please try again.  The H-Bridge is internal to the servo.'],
	              ['A snubber diode', false, 'Please try again.  Snubber diode is internal to the servo.']]},

    '<br><br><b>2.</b> The servo\'s signal line is a square wave with a rising edge every 20mS.  How long does the signal line stay high?<br>',

	  { questionType: 'multiple choice',
	    choices: [['1 millisecond', false, 'Please try again.'],
	              ['50% of the time', false, 'Please try again.'],
	              ['Between 5 milliseconds and 10 milliseconds depending on the desired angle (some variation)', false, 'Please try again.'],
	              ['Between 1 millisecond and 2 milliseconds depending on the desired angle (some variation)', true, 'Correct!  Although sometimes you need like 0.5 mS up to maybe 3 mS to get the full range.  Testing is useful. :)']]},


     '<br><br><b>3.</b> If the signal high time was 1.75 milliseconds what is the theoretical angle you\'d expect the servo motor to be at?<br>',

	  { questionType: 'multiple choice',
	    choices: [['0 degrees', false, 'Please try again.'],
	              ['90 degrees', false, 'Please try again.'],
	              ['135 degrees', true, 'Correct!  Although sometimes you need more or less high time for exactly 135.  Testing is useful. :)'],
	              ['180 degrees', false, 'Please try again.']]},

    '<br><br><b>4.</b> Select the correct motor type.<br>',

    {questionType: 'multiple choice group',
	    questionsList: [ 
	      {questionHTML: '<b>a.</b> Excellent at moving a known relative amount, but doesn\'t know absolute position.',
	        choices: ['Brushed gearhead DC motor', 'Stepper motor', 'Servo motor'],
	        correctIndex: 1},
	      {questionHTML: '<b>b.</b> Has an H-Bridge internally so you don\'t need to do any extra wiring',
	        choices: ['Brushed gearhead DC motor', 'Stepper motor', 'Servo motor'],
	        correctIndex: 2},
	      {questionHTML: '<b>c.</b> Has hands down the best torque for the dollar',
	        choices: ['Brushed gearhead DC motor', 'Stepper motor', 'Servo motor'],
	        correctIndex: 0},
	      {questionHTML: '<b>d.</b> Requires you to learn a bit more about software control to provide the correct signal(s)',
	        	choices: ['Brushed gearhead DC motor', 'Stepper motor', 'Servo motor'],
		        correctIndex: [1,2]}
	    ],
	    allCorrectOutput: 'Well done!',
	    someIncorrectOutput: 'Please try again. Hints: The last question should have 2 checked.',
	  }
];
