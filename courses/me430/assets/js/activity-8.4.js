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
        'Helpful reference from the <a href="http://www.rose-hulman.edu/ME430/courseware.html">courseware page</a><br><img width= 90% src="http://www.rose-hulman.edu/class/me/HTML/ME430_Material_2_0/Public/Courseware/OSCCON.png" alt="OSCCON table"><br>',
		'<b>1.</b> What speed does this code set the <b>clock</b> frequency to?<br>',
	    '<code style="font-weight: bold; margin: 10px 10px 10px 20px; padding: 5px;	background: rgb(234, 248, 248);	display: inline-block;">OSCCONbits.IRCF2 = 1;<br>OSCCONbits.IRCF1 = 0;<br>OSCCONbits.IRCF0 = 1;<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '8 MHz', false, 'Please try again.' ],
					[ '4 MHz', false, 'Please try again.' ],
					[ '2 MHz', true, 'Correct!'  ],
					[ '1 MHz',  false, 'Please try again.'] ]
		},

		'<br><br><b>2.</b> If you wanted an <b>instruction</b> cycle frequency of 250 kHz, how would you set the 3 OSCCON bits?</b><br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '111', false, 'Please try again.' ],
					[ '100', true, 'Correct!' ],
					[ '010', false, 'Please try again.' ],
					[ '000', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> If you deleted all three OSCCONbits lines and let the default clock frequency run, what would be the <b>instruction</b> cycle frequency?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '4 MHz', false, 'Please try again.' ],
					[ '1 MHz',  false, 'Please try again.'],
					[ '250 kHz', true, 'Correct!' ],
					[ '31 kHz', false, 'Please try again.' ] ]
		},


		'<br><br><b>4.</b> What is the maximum number of instructions per second that you can get with the internal oscillator?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '8 million instructions per second', false, 'Please try again.' ],
					[ '4 million instructions per second',  false, 'Please try again.'],
					[ '2 million instructions per second', true, 'Correct!' ],
					[ '1 million instructions per second', false, 'Please try again.' ] ]
		},
];
