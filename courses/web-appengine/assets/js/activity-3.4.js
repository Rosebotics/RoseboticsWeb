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

		'<b>1.</b> There are two Navbars shown below (just images of navbars).  Both nav elements have the class <b>navbar</b> present.<br>',

		'<img src="assets/img/navbars.png" alt="Navbars"><br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a.</b> What <b>class</b> does the second navbar have that makes it show up in black?',
						choices : [ 'navbar', 'navbar-default',
								'navbar-inverted', 'navbar-inverse' ],
						correctIndex : 3
					},
					{
						questionHTML : '<b>b.</b> What <b>class</b> does the first navbar have letting it be gray text on an off white background?',
						choices : [ 'navbar', 'navbar-default',
								'navbar-inverted', 'navbar-inverse' ],
						correctIndex : 1
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hints: navbar-inverted is NOT the class name.',
		},

		'<br><br><b>2.</b> Where do our <b>Add Quote</b> and <b>Edit</b> links go?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[
							'To the <b>Add Quote</b> and <b>Edit</b> pages (respectively)',
							false, 'Please try again.' ],
					[
							'Nowhere.  We\'re kinda cheating and making the href="#" and we\'ll later use JavaScript (or data attributes) to make them behave like buttons',
							true,
							'Correct!  Technically # isn\'t best practice.  javascript:void(0) is preferred (but both work) See: http://stackoverflow.com/questions/134845/href-attribute-for-javascript-links-or-javascriptvoid0' ],
					[ 'Both go home.', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> Did you try your Navbar on a narrow screen or emulate a smartphone from Chrome Dev Tools?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Yep.  Pretty slick!', true, 'Great!  Keep rockin' ],
					['Nope.  Didn\'t try it.', false, 'Please try again.' ]]
		}

];
