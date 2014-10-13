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
'We will be adding CSS Selectors to make the image on the left look like the image on the right:<br>',
'<img src="assets/img/css_selectors_family_tree_output.png" alt="Output of HTML"><br>',
'Here is the HTML code that we\'ll use for these questions:<br>',
'<img src="assets/img/css_selectors_family_tree_html.png" alt="HTML code"><br>',
'You can also <a target="_blank" href="https://gist.github.com/fisherds/0facea24718d500836f7">open this code in a separate window</a> if you like.',
'<br><br><b>1.</b> If you wanted to add this font rule {font: 1em "Comic Sans MS", san-serif;} to all text on the page what selector would you use?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['head', false, 'Please try again' ],
			['.top-level', false, 'Please try again.  That selector would not change the text in the title' ],
			['all', false, 'Please try again.' ],
			['body', true, 'Correct!  Neat that all other elements will inherit that property' ] ]
},

'<br><br><b>2.</b> If you wanted to remove the bullets from the top-level list via {list-style-type: none;} what selector <i>should</i> you use? (there are two that work can you find both, then mark the best one.)<br>',
{
	questionType : 'multiple choice',
	choices : [
			['up', false, 'Please try again' ],
			['.top-level', true, 'Correct!' ],
			['h1+ul', true, 'Correct! But this option is not really the "best" choice as it is unnecessarially complex and susceptible to problems if the code changes..' ],
			['h1 ul', false, 'Please try again.' ] ]
},


'<br><br><b>3.</b> If you wanted to add a width rule and border {width: 200px; border: 1px solid blue;} to the fictional-list and non-fictional-list elements what selector would you use?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['.fictional-list, .non-fictional-list', false, 'Please try again' ],
			['#fictional-list, #non-fictional-list', true, 'Correct!' ],
			['.fictional-list .non-fictional-list', false, 'Please try again.' ],
			['#fictional-list #non-fictional-list', false, 'Please try again.'] ]
},


'<br><br><b>4.</b> If you wanted to add white space above the WORD Fictional and Non-fictional with a rule of {margin-top: 30px;} what selector would you use?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['li .top-level', false, 'Please try again' ],
			['.top-level > li', true, 'Correct!' ],
			['.top-level li', false, 'Please try again.  That would add white space above ALL the li elements' ],
			['#fictional-list, #non-fictional-list', false, 'Please try again.'] ]
},

'<br><br>Nice work!  With those rules added the image on the left will look like the image on the right.  Here is the <a target="_blank" href="https://gist.github.com/fisherds/13019089ca15d625f5ca">complete solution</a>.',


];