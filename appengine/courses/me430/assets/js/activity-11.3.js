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
                

        '<b>1.</b> For all questions assume these declarations have been made. <br>',
		'<img src="assets/img/mainEventFlagDefines.png" alt="mainEventFlag declaration and constants">',
        '<br><br><b>1.</b> If mainEventFlags was 0, what does this command do? <b>mainEventFlags |= INT_1_FLAG;</b> <br>',
 
		{
			questionType : 'multiple choice',
			choices : [ [ 'Sets mainEventFlags to 00000000 00000000 00000000 00000001', false, 'Please try again.' ],
			            [ 'Sets mainEventFlags to 00000000 00000000 00000000 00000010', true, 'Correct!' ],
			            [ 'Sets mainEventFlags to 00000000 00000000 00000000 00000100', false, 'Please try again.' ]]
		},

		'<br><br><b>2.</b> If mainEventFlags was 00000000 00000000 00000000 00000111, what does this command do? <b>mainEventFlags &= ~INT_2_FLAG</b> <br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Sets mainEventFlags to 00000000 00000000 00000000 00000000', false, 'Please try again.' ],
			            [ 'Sets mainEventFlags to 00000000 00000000 00000000 00000011', true, 'Correct!' ],
			            [ 'Sets mainEventFlags to 00000000 00000000 00000000 00000101', false, 'Please try again.' ]]
		},

		'<br><br><b>3.</b> Since a flag needs only 1 bit, mainEventFlags is a long, and we\'ve used 3 flags so far, how many remaining flags could we create? <br>',
 
		{
			questionType : 'freetext',
			correctAnswerRegex : /29/i,
			correctAnswerOutput : 'Correct! So really mainEventFlags is just a collection of 32 totally independent flags. (more efficient than using a separate variable for each flag)',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for 29.  32 bits in a long - 3 flags used = 29 flags remaining.'
		},
		
		'<br><br><b>4.</b> When <b>Delay1KTCYx(DEBOUNCE_MS);</b> is in the ISR it\'s not the end of the world.  However, it\'s poor practice for elegant firmware programs.  While in an ISR all other ISRs are blocked.  How many instructions go by with all ISRs blocked? <br>',
		 
		{
			questionType : 'freetext',
			correctAnswerRegex : /30000/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Looking for 30000.  30 * 1000 instructions.'
		},
		
		'<br><br><b>5.</b> When you move <b>Delay1KTCYx(DEBOUNCE_MS);</b> into the main while loop, how many instructions go by with all ISRs blocked?<br>',
		{
			questionType : 'multiple choice',
			choices : [ [ '0', false, 'Please try again.' ],
			            [ 'Very few, just enough to set the flag and get out.  Then 0 instructions of blocked ISRs for the delay in main', true, 'Correct!'  ],
			            [ '30000', false, 'Please try again.' ]]
		},
		
		'<br><br><b>6.</b> If you really don\'t care if ISRs are blocked for 30 milliseconds, will code like this work just fine to do debounce and be a lot easier to remember? <br>',

		'<img src="assets/img/simpleDebounce.png" alt="Simple debounce"><br>',
		 
		{
			questionType : 'multiple choice',
			choices : [ [ 'You bet it works!  And it\'s simple!  Sometimes you don\'t really care at all about "elegant" :)', true, 'Correct!' ],
			            [ 'That will not work.  You MUST use the mainEventFlags technique', false, 'Please try again.' ]]
		},
			
];
