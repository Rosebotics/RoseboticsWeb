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
                
'<b>1.</b> What was the path we decided to send our GET to? (we will need to implement this in the next video)<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['localhost:8080', false, 'Please try again.' ],
      ['/ajax', false, 'Please try again.' ],
      ['/servertime', true, 'Correct!  We\'ll implement that shortly.' ],
      ['/jquery', false, 'Please try again.' ] ]
},

'<br><br><b>2.</b> When reading the fields off the JSON object, once it has been received, what key name did we use on the JSON object to get the server time message?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['It was <b>message</b> because it always has to be <b>message</b>.', false, 'Please try again.' ],
      ['It was <b>message</b>, because that\'s what we plan to call that key when we get to the backend code.  We could\'ve picked anything', true, 'Correct!' ],
      ['It was <b>servertime</b>', false, 'Please try again.' ],
      ['It was <b>stringify</b>', false, 'Please try again.' ] ]
},

                
'<br><br><b>3.</b> Did you get the the getJSON call added to server_time.js?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['Yep.  Ready to go!', true, 'Great!  Click next.' ],
			['Not so much.', false, 'Please try again.' ] ]
},

];