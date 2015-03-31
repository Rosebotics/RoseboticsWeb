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

		'<b>1.</b> We used binary to set PORTC because it\'s easier to understand here (1 bit for 1 LED).<br>  What prefix told the compiler that 00000011 was a binary number instead of just eleven?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /0b/i,
			correctAnswerOutput : 'Correct the "zero bee" 0b prefix tells the compiler it\'s binary.  We\'ll discuss number systems in depth soon. ;)',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'The prefix used on the number was 0b (zero bee).  That made it binary 0b00000011 (value three) vs 00000011 (value eleven).  We\'ll discuss number systems in depth soon. ;)'
		},

		'<br><br><b>2.</b> The Templates feature in MPLABx is really handy.  Where is it in the menu?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'Run > Templates', false, 'Please try again. ' ],
					[ 'Debug > Templates', false, 'Please try again. ' ],
					[ 'Tools > Templates', true, 'Correct!' ],
					[ 'Window > Templates', false, 'Please try again. ' ] ]
		},

		'<br><br><b>3.</b> I like templates.  They save me a TON of boilerplate typing.  <b>Totally</b> worth the one time cost of setting them up.<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['True', true, 'Correct!' ],
					['False', false, 'Please try again. ' ] ]
		},

];
