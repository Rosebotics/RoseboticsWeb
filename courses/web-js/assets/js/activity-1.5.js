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
        '<b>1.</b> What color are the letters in the <b>Hello World!</b> text below?<br>',

		'<img src="assets/img/specificity_question_with_p_colors.png" alt="P colors"><br>',

		'You can also <a target="_blank" href="https://gist.github.com/fisherds/26c306f88e8bd26eadcc">open this code in a separate window</a> if you like.<br>',
		{
			questionType : 'multiple choice',
			choices : [
					[ 'PaleGoldenRod', false, 'Please try again.'  ],
					[ 'PapayaWhip', false, 'Please try again.'  ],
					[ 'PeachPuff', true, 'Correct!'  ],
					[ 'Peru', false, 'Please try again.'  ],
					[ 'Pink', false, 'Please try again.'  ],
					[ 'Plum', false, 'Please try again.'  ],
					[ 'PowderBlue', false, 'Please try again.'  ],
					[ 'Purple', false, 'Please try again.' ]]
		},


		'<br><br><b>2.</b> Which rule had no impact at all on the color because the CSS selector didn\'t match anything?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'body', false, 'Please try again.'  ],
					[ 'h1', false, 'Please try again.'  ],
					[ '#mytitle.hola', false, 'Please try again.'   ],
					[ '#mytitle', false, 'Please try again.'  ],
					[ 'h1.hola', false, 'Please try again.'  ],
					[ 'h1 #mytitle .hola', true, 'Correct!'  ]]
		},


		'<br><br><b>3.</b>',
		 
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : 'Which rules had no impact on the <b>text</b> color because they were for a different property?',
						choices : [ 'body', 'h1 (the first h1 rule)', '#mytitle.hola', '#mytitle', 'h1.hola', 'h1 #mytitle .hola', 'h1 (the second h1 rule)', '(elements style attr)' ],
						correctIndex : [6, 7]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: The highest scoring rules were 110, 100, 11 (#mytitle.hola, #mytitle, h1.hola).  The h1 (again) and (elements sytle attr) were for background color. And h1 #mytitle .hola is not a match.',
		},


		'<br><br><b>4.</b>The winner was #mytitle.hola, if that rule was removed who would win (i.e. who got second)?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ 'body', false, 'Please try again.'  ],
					[ 'h1', false, 'Please try again.'  ],
					[ '#mytitle', true, 'Correct!' ],
					[ 'h1.hola', false, 'Please try again.'  ],
					[ 'h1 #mytitle .hola', false, 'Please try again.'  ]]
		},

		'<br><br><b>5.</b>The winner was #mytitle.hola, second is #mytitle, and third place would be ____.  If you scored those three what would their specificity scores be?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '110, 100, 11', true, 'Correct!'  ],
					[ '110, 100, 10', false, 'Please try again.'  ],
					[ '110, 100, 1', false, 'Please try again.'],
					[ '110, 100, (elements style attr)', false, 'Please try again.'  ]]
		},
		
];
