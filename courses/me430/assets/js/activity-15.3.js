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

	'<b>1.</b> What value is sent in this timing chart?<br>',
	'<img width=80% src="assets/img/uartTimingChart.png" alt="UART timing chart"><br>',
	
	{
		questionType : 'multiple choice',
		choices : [
				['0b001010000 (which is 80)', false, 'Please try again.' ],
				['0b0010100001 (which is 81)', false, 'Please try again.' ],
				['0b01010000 (which is 80)', false, 'Please try again.' ],
				['0b00001010 (which is 10)', true, 'Correct!' ] ]
	},

	'<br><br><b>2.</b> Assume you wanted to send an ASCII value of \'A\'.  What would be the value of the 12 question marks below?<br>(Hint: idle - start - data - stop - idle)?<br>',
	'<img width=80% src="assets/img/uartTimingChartBlank.png" alt="UART timing chart"><br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['1 0 0100 0001 1 1  (idle=1 start=0 data=0100 0001 stop=1 idle=1)', false, 'Please try again.' ],
				['1 1 0100 0001 0 1  (idle=1 start=1 data=0100 0001 stop=0 idle=1)', false, 'Please try again.' ],
				['1 0 1000 0010 1 1  (idle=1 start=0 data=1000 0010 stop=1 idle=1)', true, 'Correct!' ],
				['0 0 1000 0010 1 1  (idle=0 start=0 data=1000 0010 stop=1 idle=1)', false, 'Please try again.' ] ]
	},

	'<br><br><b>3.</b> If the value of delta is <b>8.68 microseconds</b> then what is the baud rate?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['9600 bits/second', false, 'Please try again.' ],
				['19200 bits/second', false, 'Please try again.' ],
				['57600 bits/second', false, 'Please try again.' ],
				['115200 bits/second', true, 'Correct!' ] ]
	},
    
    '<br><br><b>4.</b> Assume the clock is set to <b>8 MHz</b>.  What value of spbrg you would use to get this baudrate? (assume high baudrate formula)<br>',
    
	{
		questionType : 'multiple choice',
		choices : [['1', false, 'Please try again.' ],
				['2', false, 'Please try again.' ],
				['3', true, 'Correct!' ],
				['12', false, 'Please try again.' ] ]
	},

    '<br><br><b>5.</b> If you setup the UART with this code what would the EXACT baudrate be that is sent by the PIC?<br>',
	'<img src="assets/img/uartSetupCode.png" alt="UART configuration code"><br>',
	
	{
		questionType : 'multiple choice',
		choices : [['115000 bits/second', false, 'Please try again.' ],
				['115200 bits/second', false, 'Please try again.' ],
				['125000 bits/second',true, 'Correct!' ],
				['135000 bits/second', false, 'Please try again.' ] ]
	},

    '<br><br><b>6.</b> By what percent does that miss the target of 115200?  Would 115200 be a recommended speed for this oscillator?<br>',
	
	{
		questionType : 'multiple choice',
		choices : [['Timing error of 0.17% which is totally fine.', false, 'Please try again.' ],
				['Timing error of 0.85% which is totally fine.', false, 'Please try again.' ],
				['Timing error of 8.5% which is totally fine.', false, 'Please try again.' ],
				['Timing error of 8.5% which is NOT recommended and might cause communication errors with later bits.', true, 'Correct!' ] ]
	},
    

		
];
