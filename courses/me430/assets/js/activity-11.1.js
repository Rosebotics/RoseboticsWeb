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

		'<b>1.</b>Push button interrupts are available on which pins?<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Check all pins that you can use with interrupts',
						choices : [ 'RA0', 'RA1', 'RA2', 'RA3', 'RB0', 'RB1', 'RB2', 'RB3'],
						correctIndex : [4,5,6]
					} ],
			allCorrectOutput : 'Well done!  There is also an RB4:RB7 interrupt on change, but we won\'t use it because RB6 and RB7 are shared with the programmer.',
			someIncorrectOutput : 'Please try again.  Three push button interrupts available.',
		},

	    '<br><br><b>2.</b> The push button interrupt library functions are defined by what include?  Fill in this blank #include <________.h><br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /portb/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'portb is the answer.  #include <portb.h>'
		},
		
	    '<br><br><b>3.</b> What does this function do?   <b>OpenRB1INT(PORTB_CHANGE_INT_ON & FALLING_EDGE_INT & PORTB_PULLUPS_OFF);</b><br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Check all that are true',
						choices : [ 'Turns RB1 interrupts on', 'Fires an interrupt event as soon as a push button is released', 'Turns off the internal resistor that could\'ve been used in the basic switch circuit'],
						correctIndex : [0,2]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.  Only 2 are true (think about what FALLING_EDGE means).',
		},


		'<br><br><b>4.</b> What is the <b>RB1</b> interrupt flag name?<br>Hint <b>SOMETHINGbits.SOMETHING</b> (consult your MPLABx code) <br>',
 
		{
			questionType : 'freetext',
			correctAnswerRegex : /INTCON3bits\.INT1IF/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for INTCON3bits.INT1IF (Interrupt configuration SFR #3, bit for Interrupt 1\'s interrupt flag'
		},
		
	    '<br><br><b>5.</b> Could you set the SFR bits directly and avoid the portb library functions?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Yes.  And in this case you might.', true, 'Correct!  The library function only sets 2 bits.  You could write those 2 lines of SFR code.' ],
					['No.  You MUST use the library functions', false, 'Please try again.  You can use the SFRs directly' ] ]
		},
				
				
];
