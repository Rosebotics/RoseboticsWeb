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

		'<b>1.</b> How is a Special Function Register like a normal char variable?<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Check all that apply',
						choices : [ 'Both are 8 bits', 'You need to declare both in your code before using them.', 'You read and write to them in the same way.', 'The hardware uses both to control pins and peripherals.' ],
						correctIndex : [0,2]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.  Two should be checked.',
		},


	    '<br><br><b>2.</b> The OpenADC function used in the template is a function defined by what include?  Fill in this blank #include <________.h><br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /adc/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'adc is the answer.  #include <adc.h>'
		},

	    '<br><br><b>3.</b> If we simply want to make all pins <b>digital</b> and not use any <b>analog</b> inputs, we don\'t nee the OpenADC function at all.  Instead we can just write what one line of code?<br>',

		{
			questionType : 'freetext',
			correctAnswerRegex : /ADCON1\s*=\s*0x0F;/i,
			correctAnswerOutput : 'Correct!',
			incorrectAnswerOutput : 'Please try again.',
			showAnswerOutput : 'Here is the answer: ADCON1 = 0x0F;'
		},
];
