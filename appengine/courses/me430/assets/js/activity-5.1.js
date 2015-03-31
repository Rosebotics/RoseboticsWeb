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
		'<b>1.</b> Is this a legal comment block?<br> ',

	    '<img src="assets/img/comment_blocks.png"  alt="Illegal comment block."><br>',
		{
			questionType : 'multiple choice',
			choices : [
					['Yes.  Starts with /* and ends with */', false, 'Please try again.' ],
					['No.  There is are multiple */ in the middle.  Below the first */ is <b>illegal</b> C code <b>(NOT a comment)</b>', true, 'Correct!' ] ]
		},
	    '<br><br><b>2.</b> Does this block of code use legal syntax?<br>',
//	    '<img src="assets/img/local_variable.png" alt="Legal code."><br>',
	    
	    '<code style="font-weight: bold; margin: 10px 10px 10px 20px; padding: 5px;	background: rgb(234, 248, 248);	display: inline-block;">void main() {<br> &nbsp; &nbsp; // Main function <br> &nbsp; &nbsp; int x;<br> &nbsp; &nbsp; x = 7;<br>}<br></code><br>',

		{
			questionType : 'multiple choice',
			choices : [
					['Yes.  All legal.', true, 'Correct!'],
					['No. The int x; must be the FIRST thing in the function.', false, 'Please try again.  Comments don\'t count.  int x; is first in the function.'],
					['No. You must use /* and */ for comments.', false, 'Please try again.  That\'s a fine way to do single line comments.'],
					['No. There is some other issue.', false, 'Please try again.  There are no intentional issues. :) Admittedly there is no while(1) loop, but that is no syntax error.'] ]
		},

	    '<br><br><b>3.</b> Since the variable <b>int x;</b> above is in the <b>main</b> function is it a global variable??<br>',

		{
			questionType : 'multiple choice',
			choices : [
					['No.  It\'s a local variable.', true, 'Correct!  It is only visible within the main function.  Therefore local to main.'],
					['Yes, being in main makes it a global variable.', false, 'Please try again.  Comments don\'t count.  int x; is first in the function.'],
					['Maybe.  It\'s kinda between a local and global variable.', false, 'Please try again.  Sadly the statement you just selected is total nonsense. :)'] ]
		},
];
