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
		'<b>1.</b> For all Bootstrap buttons you should add the class <b>btn</b>.<br>',

		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> If you want a <b>red</b> button what additional class should you add?',
						choices : [ 'btn-default', 'btn-primary', 'btn-success', 'btn-danger', 'btn-lg', 'btn-xs', 'hidden' ],
						correctIndex : 3
					},
					{
						questionHTML : '<b>b.</b> If you want the button to be an extra small button what class do you add?',
						choices : [ 'btn-default', 'btn-primary', 'btn-success', 'btn-danger', 'btn-lg', 'btn-xs', 'hidden' ],
						correctIndex : 5
					},
					{
						questionHTML : '<b>c.</b> If you want a <b>green</b> button what additional class should you add?',
						choices : [ 'btn-default', 'btn-primary', 'btn-success', 'btn-danger', 'btn-lg', 'btn-xs', 'hidden' ],
						correctIndex : 2
					}, {
						questionHTML : '<b>d.</b> If you want a <b>large blue</b> button what additional classes should you add?',
						choices : [ 'btn-default', 'btn-primary', 'btn-success', 'btn-danger', 'btn-lg', 'btn-xs', 'hidden' ],
						correctIndex : [ 1, 4 ]
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: The last one is btn-primary and btn-lg for more help visit http://getbootstrap.com/css/#buttons',
		},

		'<br><br><b>2.</b> <b>Approximately</b> (i.e. don\'t actually count them) how many icons does Bootstrap provide according to their <a href="http://getbootstrap.com/components/#glyphicons-glyphs" target="_blank">Glyphicons-glyphs page</a>?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['10', false, 'Please try again.' ],
					['40', false, 'Please try again.' ],
					['200', true, 'Correct!' ],
					['Many thousands', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> What symbol would this code produce?<br>',
		'&lt;span class="glyphicon glyphicon-search">&lt;/span><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Google search goggles', false, 'Please try again.' ],
					['Magnifying glass', true, 'Correct!' ],
					['Binoculars', false, 'Please try again.'],
					['Nothing because that is not valid', false, 'Please try again.' ] ]
		},

];
