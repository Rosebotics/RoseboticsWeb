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

		'<b>1.</b>Timer library functions.<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Check all the timer library functions available for the 18F4520',
						choices : [ 'OpenTimer0', 'OpenTimer1', 'OpenTimer2', 'OpenTimer3', 'OpenTimer4', 'ReadTimer0', 'ReadTimer1', 'WriteTimer0', 'More read and write functions for timers 1, 2, and 3'],
						correctIndex : [0,1,2,3,5,6,7,8]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.  All but one should be checked.',
		},

	    '<br><br><b>2.</b> The timer functions are defined by what include?  Fill in this blank #include <________.h><br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /timers/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'timers is the answer.  #include <timers.h>'
		},

	    '<br><br><b>3.</b> What is your favorite MPLABx keyboard shortcut?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['alt shift f to automatically format (indent)', true, 'Yeah, they are both handy.  Use both' ],
					['ctrl space to autocomplete the variable/function/SFR you are typing', true, 'Yeah, they are both handy.  Use both' ] ]
		},
		
	    '<br><br><b>4.</b> What does this function do?   <b>OpenTimer0(TIMER_INT_OFF & T0_16BIT & T0_SOURCE_INT & T0_PS_1_256);</b><br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Check all that are true',
						choices : [ 'Turns Timer0 interrupts off', 'Uses 8 bits for the timer letting it go from 0 to 255', 'Uses 16 bits for the timer letting it go from 0 to 65535', 'Uses an external input as the clock source for the timer', 'Uses the internal instruction cycle frequency as the timer clock source', 'Applies a 256 prescaler so that Timer0 is 1/256th the speed of the instruction cycle frequency.'],
						correctIndex : [0,2,4,5]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.  Not 8 bits. Not external.  Others are true.',
		},


	    '<br><br><b>3.</b> Could use set the SFRs directly and avoid the library functions all together?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Yes you could but why?', true, 'Correct!  You won\'t ever choose to though. :) Library functions are handy.' ],
					['No.  You MUST use the library functions', false, 'You can use the SFRs directly' ] ]
		},
				
				
];
