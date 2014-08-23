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
    '<b>1.</b> An iOS Cliend ID consist of a Client ID and a Client Secret.<br>',
    {
      questionType : 'multiple choice group',
      questionsList : [
                       {
                           questionHTML : 'Where is the <b>iOS Client ID</b> used:',
                           choices : [ 'Your backend', 'Your iOS App', 'Your computer', 'Google\'s Cloud Services for OAuth' ],
                           correctIndex : [0, 1, 3]
                         },
                         {
                             questionHTML : 'Where is the <b>iOS Client Secret</b> used',
                             choices : [ 'Your backend', 'Your iOS App', 'Your computer', 'Google\'s Cloud Services for OAuth' ],
                             correctIndex : [1, 3]
                           }],
      allCorrectOutput : 'Well done!',
      someIncorrectOutput : 'Please try again.  Hint: Your computer is not involved at all in OAuth.  The first question has 3 answers, the second question has 2 answers.',
    },

    '<br><br><b>2.</b> You must have a Web Client ID to make/use an iOS Client ID<br>',

    { questionType: 'multiple choice',
      choices: [['True.  We must have both.', false, 'Try again.  You only need a Web Client ID for JavaScript Ajax request and Android apps'],
                ['False. You can make an iOS Client ID without making a Web Client ID', true, 'Correct.  iOS does not require a Web Client ID.']]
    },

];
