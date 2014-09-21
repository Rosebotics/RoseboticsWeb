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

	'<b>1.</b> So how did you do with your SOLO attempt compared to the Solution video?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				[ 'I nailed it.  Didn\'t change a thing after watching the Solution video.', true, 'Great!  All answers are correct.  Just curious.' ],
				[ 'I mostly got it.  Had to fix up a small amount', true, 'Cool!  All answers are correct.  Just curious.' ],
				[ 'I did nothing useful with my SOLO effort, but now I\'m on it. :) ', true, 'Oh well. ;)  All answers are correct.  Just curious.' ]
				 ]
	},
		'<br><br>We could ask a lot of additional questions, but this is review of content already coverred when we made the client side Edit changes.  Hopefully the practice helped cement some of the concepts for you!<br><br>',
		'Let\'s go see if we can get the backend together and finish this web app (I can see the light at the end of the tunnel).'

];
