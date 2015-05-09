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
		'<b>1.</b> What is char x = 100 + 100;   printf("x = %d\n", x);<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '200', false, 'Please try again.' ],
					[ '-56', true, 'Correct!' ],
					[ '56', false, 'Please try again.' ],
					[ '44',  false, 'Please try again.'] ]
		},

		'<br><br><b>2.</b> What is <b>long x = 100 + 99 / 100 * 100;  printf("x = %d\n", x);</b><br>',

		{
			questionType : 'multiple choice',
			choices : [ [ '0', false, 'Please try again.' ],
					[ '99', false, 'Please try again.' ],
					[ '100', true, 'Correct!' ],
					[ '199', false, 'Please try again.' ] ]
		},

		'<br><br><b>3.</b> Could you fix the problem above (#2) by simply casting something to a long (no order changing)?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Yes.  Just cast the 99 to a long by using 99L', false, 'Please try again.' ],
					[ 'No.  Casting one value above would fix nothing.', true, 'Correct!' ] ]
		},

		'<br><br><b>4.</b> Could you fix the problem in #2 like this <b>long x = 100 + 99L * 100 / 100;</b>?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Yes.  Dividing last and casting to a long works.', true, 'Correct!' ],
					[ 'No.  99L * 100 is too big for a long.', false, 'Please try again.' ] ]
		},

		'<br><br><b>5.</b> Could you fix the problem in #2 like this <b>long x = 100 + (int) 99 * 100 / 100;</b>?<br>',

		{
			questionType : 'multiple choice',
			choices : [ [ 'Yes.  Casting to an int works since 9900 fits into a signed int.', true, 'Correct!' ],
					[ 'No.  9900 is too big for an int.  You need a long.', false, 'Please try again.' ] ]
		},
		

];
