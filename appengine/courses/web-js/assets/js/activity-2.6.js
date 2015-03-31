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

'<b>1.</b> What is the value of <b>this</b> in a jQuery callback function for a <b>click</b>?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['window', false, 'Please try again.' ],
      ['document', false, 'Please try again.' ],
      ['The HTML element that was clicked', true, 'Correct' ],
      ['The instance variable for whatever class you are in', false, 'Please try again.' ] ]
},

'<br><br><b>2.</b> Stated more generally, what is the value of <b>this</b> within a function?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['window', false, 'Please try again.' ],
      ['document', false, 'Please try again.' ],
      ['Whatever object fired the event / caused the function to be called (most of the time)', true, 'Correct' ],
      ['The instance variable for whatever class you are in', false, 'Please try again.' ] ]
},    


"<br><br><b>3.</b> We fixed the <b>this</b> is not <b>this</b> anymore problem, but using a closure (making another variable be <b>this</b>).  Are there other solutions to the problem? For example with <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call'>.call</a>, <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind'>.bind</a>, or the <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply'>.apply</a> function.<br>",

{
  questionType : 'multiple choice',
  choices : [
      ['Yep.  There are other solutions out there that work in most situations.  Feel free to explore!', true, 'Correct!' ],
      ['No.  The way we did it is the only way to fix the problem.',  false, 'Please try again.'] ]
},

'<br><br><b>4.</b> Do your Roll Again and Stop buttons work now?  (well stop at least resets the round)<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['Yep.  Ready to keep moving!  Let\'s keep a total score already.', true, 'Great!' ],
      ['Not so much', false, 'Well... darn!  See if you can fix that. If it\'s just not working out you are still allowed to watch the next video. :)' ] ]
},    

];

