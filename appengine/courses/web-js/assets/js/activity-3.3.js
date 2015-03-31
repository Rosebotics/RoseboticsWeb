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
'<b>1.</b> Fill in the blank: We specifically stated in the respone header that this reply was Content-Type of application/_____?<br>',

{
  questionType : 'freetext',
  correctAnswerRegex : /json/i,
  correctAnswerOutput : 'Correct!',
  incorrectAnswerOutput : 'Please try again.',
  showAnswerOutput : 'Here is the answer: json'
},


"<br>Optional sidenote you can see other MIME type options for the Content-Type value <a target='_blank' href='http://en.wikipedia.org/wiki/Internet_media_type#Type_application'>here</a>",

'<br><br><b>2.</b> State if following should be a GET or a POST (assume each is being done as an AJAX request)<br>',
{
  questionType : 'multiple choice group',
  questionsList : [
      {
        questionHTML : '<b>a.</b> Sending a GPS coordinate to the backend to learn what business is there?',
        choices : [ 'GET', 'POST'],
        correctIndex : 0
      }, {
        questionHTML : '<b>b.</b> Adding a reply to a forum / blog?',
        choices : [ 'GET', 'POST'],
        correctIndex : 1
      }, {
        questionHTML : '<b>c.</b> Sending an email.',
        choices : [ 'GET', 'POST'],
        correctIndex : 1
      }, {
        questionHTML : '<b>d.</b> Adding an event to your calendar',
        choices : [ 'GET', 'POST'],
        correctIndex : 1
      }, {
        questionHTML : '<b>e.</b> Sending a word to the backend to get the definition',
        choices : [ 'GET', 'POST'],
        correctIndex : 0
      }, ],
  allCorrectOutput : 'Well done!',
  someIncorrectOutput : 'Please try again. Hints: There are 2 GET requests and the rest are POST',
},

'<br><br><b>3.</b> Does your backend respond to the GET request with the JSON server time message?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['Yep.  Works great!  I like this AJAX thing.', true, 'Great!  Click next.' ],
      ['Not so much.', false, 'Please try again.' ] ]
},

];

