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
    '<b>1.</b> Select the appropriate pins for an L293 (or 754410) H-Bridge chip',

    '<div style="text-align:center"><img src="assets/img/hbridgeChip.png"></div>',
    {questionType: 'multiple choice group',
	    questionsList: [ 
	      {questionHTML: '<b>a.</b> Always connected to <b>regulated</b> 5 volts',
	        choices: ['Pin 16 Vcc1', 'Pin 8 Vcc2'],
	        correctIndex: 0},
	      {questionHTML: '<b>b.</b> Connected to the motor\'s power supply rail (often unregulated 5 volts or sometimes higher)',
	        choices: ['Pin 16 Vcc1', 'Pin 8 Vcc2'],
	        correctIndex: 1},
	      {questionHTML: '<b>c.</b> Connected to the PIC to determine the right side motor direction (right side)',
	        choices: ['Pins 2 and 7', 'Pins 3 and 6', 'Pins 10 and 15', 'Pins 11 and 14'],
	        correctIndex: 2},
	      {questionHTML: '<b>d.</b> Connected to the motor on the left side',
		        choices: ['Pins 2 and 7', 'Pins 3 and 6', 'Pins 10 and 15', 'Pins 11 and 14'],
		        correctIndex: 1},
	      {questionHTML: '<b>e.</b> Connected via a resistor to regulated 5 volts to enable the right side motor',
		        choices: ['Pin 1', 'Pin 9'],
		        correctIndex: 1},
	      {questionHTML: '<b>f.</b> Connected to <b>ground</b> when only using a left side motor (select all that are correct)',
		        choices: ['Pin 1', 'Pins 4, 5, 12, and 13', 'Pin 8', 'Pin 9', 'Pins 3 and 6'],
		        correctIndex: [1, 3]}
	    ],
	    allCorrectOutput: 'Well done!',
	    someIncorrectOutput: 'Please try again. Hints: Check your sides.  The last question should have 2 checked.',
	  },


    '<br><br><b>2.</b> Approximately how much continuous current can you use with an L293 at 5 volts (with a heat sink)?<br>',
    
	  { questionType: 'multiple choice',
	    choices: [['200 mA', false, 'Please try again.'],
	              ['600 mA', true, 'Correct!  At 5 volts you can do around half an amp.  Even without a heat sink you can do nearly that much on the 754410.'],
	              ['2 A', false, 'Please try again.'],
	              ['10 A', false, 'Ummm... No.']]},


      '<br><br><b>3.</b> Approximately how much continuous current can you use with an L293 at 12 volts?<br>',
      
  	  { questionType: 'multiple choice',
  	    choices: [['200 mA', true, 'Correct!  At 12 volts they have trouble with even small currents.  If you have big motors don\'t use this chip.'],
  	              ['600 mA', false, 'Please try again.'],
  	              ['2 A', false, 'Please try again.'],
  	              ['10 A', false, 'Ummm... No.']]},


      '<br><br><b>4.</b> If you <b>don\'t</b> need bi-directional control and would like to use an amp of current, how whould you drive a motor?<br>',
    
	  { questionType: 'multiple choice',
	    choices: [['BJT', false, 'Please try again.  A TIP31 could do it sure, but then you need a large control current.'],
	              ['L293 H-Bridge', false, 'Please try again.'],
	              ['MOSFET', true, 'Correct!  MOSFET are awesome!  They only go in one direction though.'],
	              ['Darlington', false, 'Please try again.']]},
];
