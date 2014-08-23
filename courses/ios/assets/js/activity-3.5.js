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

  '<b>1.</b> What does the service object do again?<br>',

  { questionType: 'multiple choice',
    choices: [['Saves GradeRecorder grades to Core Data', false, 'Please try again.'],
              ['Helps create the sign-in web view for OAuth', false, 'Please try again.'],
              ['Handles the low level JSON communication with your backend', true, 'Correct!'],
              ['Makes coffee', false, 'Please try again.']]},

  '<br><br><b>2.</b> Which steps did we complete during this lesson?',

  {
    questionType : 'multiple choice group',
    questionsList : [
        {
          questionHTML : '',
          choices : [ 'We got the Authorizer via the sign-in web view', 'We set the Authoizer on the service (within _setAuthorizer)', 'We created the Service', 'We saved the users password', 'We took care of using a saved Authorizer if available, so a users wouldn\'t need to sign in again.' ],
          correctIndex : [1,2,4]
        }],
    allCorrectOutput : 'Well done!',
    someIncorrectOutput : 'Please try again. Hints: We never have access to the user\'s password (that is the whole point of OAuth) and we got the Authorizer last time',
  },

    '<br><br><b>3.</b> In preparation for the second time a user launches the app, what function did we call to know if we have a user is signed in already?  Fill in this blank if ([RHOAuthUtils ___]) {...perform segue...}?<br>',

  {
    questionType : 'freetext',
    correctAnswerRegex : /hasAuthorizer/i,
    correctAnswerOutput : 'Correct!',
    incorrectAnswerOutput : 'Please try again.  We were looking for hasAuthorizer',
    showAnswerOutput : 'Here is the answer: hasAuthorizer'
  },
];

