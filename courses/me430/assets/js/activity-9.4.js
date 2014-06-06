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

  '<b>1.</b> Is this an acceptable function prototype?  <b>float getArea(int, int);</b><br>',
	{
		questionType : 'multiple choice',
		choices : [ [ 'Yep.  For a prototype that\'s fine.', true, 'Correct!' ],
					[ 'No.  You need to have names for the input parameters.', false, 'Please try again.' ],
					[ 'No.  You have too many input parameters.  Only 1 is allowed.', false, 'Please try again.' ] ]
	},

	'<br><br><b>2.</b>  Is this an acceptable function prototype?  <b>int randomValue(void);</b><br>',
	{
		questionType : 'multiple choice',
		choices : [ [ 'Yep.  For a prototype that\'s fine.', true, 'Correct!' ],
					[ 'No.  If you pass in nothing, you can\'t return something.', false, 'Please try again.' ],
					[ 'No.  You need an input parameter.', false, 'Please try again.' ] ]
	},
	
	'<br><br><b>3.</b> Is this an acceptable way to call the function from problem #1?  <b>int b = getArea(15, 3);</b><br>',
	
	{
		questionType : 'multiple choice',
		choices : [ [ 'Looks fine to me.', false, 'Please try again.' ],
					[ 'No.  The input parameters are done wrong.', false, 'Please try again.' ],
					[ 'No.  The return type is wrong.', true, 'Correct!' ] ]
	},

	'<br><br><b>4.</b> Is this an acceptable way to call the function from problem #2?  <b>int b = randomValue(void);</b><br>',
	
	{
		questionType : 'multiple choice',
		choices : [ [ 'Looks fine to me.', false, 'Please try again.' ],
					[ 'No.', true, 'Correct!  You don\'t say the word void, just leave it blank when calling the function.' ] ]
	},

	'<br><br><b>5.</b> Is this an acceptable way to write (implement) the function from problem #1?<br>',
    '<img src="assets/img/get_area_function_no_return.png" alt="getArea function"><br>',
	
	{
		questionType : 'multiple choice',
		choices : [ [ 'Looks fine to me.', false, 'Please try again.' ],
					[ 'No.', true, 'Correct!  Need to add the line...  return area;' ] ]
	},

	'<br><br><b>6.</b> Is this an acceptable way to write (implement) the function from problem #2?<br>',
    '<img src="assets/img/not_that_random.png" alt="getArea function"><br>',
	
	{
		questionType : 'multiple choice',
		choices : [ [ 'Looks fine to me, although not that random of a value :).', true, 'Correct!' ],
					[ 'No. You are missing the word void.', false, 'Please try again.' ],
					[ 'No. The return type is wrong.', false, 'Please try again.' ] ]
	},

];

