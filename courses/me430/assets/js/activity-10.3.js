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
                

        '<b>1.</b> When does a timer interrupt occur?<br>',
 
		{
			questionType : 'multiple choice',
			choices : [ [ 'When you set the timer value to 0 via WriteTimer0(0);', false, 'Please try again.' ],
			            [ 'Every 1 second.', false, 'Please try again.' ],
			            [ 'When the timer counts from the largest value (often 65535) to 0, called a timer rollover.', true, 'Correct!' ]]
		},

		'<br><br><b>2.</b> Would you ever call an interrupt service routine in the code you write? For example would you call <b>high_isr();</b>?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Yes, you need to call high_isr() in your code when you see the interrupt flag.', false, 'Please try again.' ],
			            [ 'No, hardware will call the high_isr function automagically when the specified event occurs.', true, 'Correct!' ]]
		},


		'<br><br><b>3.</b> When the hardware calls the <b>high_isr</b> function it sets a flag so your code can determine which event caused the function to be called.  Then within the ISR you need to check which flag is set, reset it, and perform some action.<br>What is the <b>Timer0</b> interrupt flag name?<br>Hint <b>SOMETHINGbits.SOMETHING</b> (consult your MPLABx code) <br>',
 
		{
			questionType : 'freetext',
			correctAnswerRegex : /INTCONbits\.TMR0IF/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for INTCONbits.TMR0IF (Interrupt configuration bit for Timer0\'s interrupt flag'
		},
		
		'<br><br><b>4.</b> Timer1 uses a different interrupt flag.  What is the Timer1 interrupt flag? (consult your MPLABx code)<br>',
		 
		{
			questionType : 'freetext',
			correctAnswerRegex : /PIR1bits\.TMR1IF/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for PIR1bits.TMR1IF  (Peripheral Interrupt Register 1 bit for Timer1\'s interrupt flag'
		},
		
		'<br><br><b>5.</b> If you wanted a Timer interrupt to occur in 10,000 timer ticks what value would you write to the timer (assume 16 bits)?<br>',
		{
			questionType : 'multiple choice',
			choices : [ [ 'WriteTimer0(10000);', false, 'Please try again.' ],
			            [ 'WriteTimer0(0);', false, 'Please try again.'  ],
			            [ 'WriteTimer0(55536);', true, 'Correct!' ]]
		},
		 
		
];
