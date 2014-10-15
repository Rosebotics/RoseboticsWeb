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
                
  '<b>1.</b> Did you complete the Advanced CSS Selector exercises (and submit your link if you are taking the class for a grade)?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['Yep!  Visit anytime.', true, 'Great!'],
				['Not so much', false, 'Need to get that done!' ]]
	},
	
    
  '<br><br><b>2.</b> Match the special character used to the selector category.<br>',

	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> Uses the : character',
					choices : [ 'Attribute selector', 'Pseudo-class selector', 'Pseudo-element selector' ],
					correctIndex : 1
				},
				{
					questionHTML : '<b>b.</b> Uses the :: character (in the CSS3 implementation)',
					choices : [ 'Attribute selector', 'Pseudo-class selector', 'Pseudo-element selector' ],
					correctIndex : 2
				},
				{
					questionHTML : '<b>c.</b> Uses [] characters',
					choices : [ 'Attribute selector', 'Pseudo-class selector', 'Pseudo-element selector' ],
					correctIndex : 0
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again.',
	},
    
	  '<br><br><b>3.</b> Match the specific selector to it\'s selector category.<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> hover active nth-child first-child',
						choices : [ 'Attribute selector', 'Pseudo-class selector', 'Pseudo-element selector' ],
						correctIndex : 1
					},
					{
						questionHTML : '<b>b.</b> before after first-line first-letter',
						choices : [ 'Attribute selector', 'Pseudo-class selector', 'Pseudo-element selector' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>c.</b> name=movie_quote type=button scr=blah checked',
						choices : [ 'Attribute selector', 'Pseudo-class selector', 'Pseudo-element selector' ],
						correctIndex : 0
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.',
		},
	
		
    
];
