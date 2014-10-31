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

'<b>1.</b> What method did we use in the video to do a page reload?<br>',

{
  questionType : 'freetext',
  correctAnswerRegex : /window.location.reload\(\)/i,
  correctAnswerOutput : 'Correct!',
  incorrectAnswerOutput : 'Please try again.',
  showAnswerOutput : 'Here is the answer: window.location.reload();'
},

'<br><br><b>2.</b> Eventually we\'ll be creating a <b>new DiceGameController</b> in main, but for now we\'ll make a <b>new DiceRoundController</b>.  After we implement the DiceRoundController we\'ll move onto the DiceGameController.',
'  Which parts of the screen shown below do you think are managed by the Dice<b>Round</b>Controller?<br>',
'<img src="assets/img/dwf_sections.png" alt="DWF Sections"><br>',


{
  questionType : 'multiple choice group',
  questionsList : [
      {
        questionHTML : '',
        choices : [ 'A', 'B', 'C', 'D', 'E' ],
        correctIndex : [2,3,4]
      }],
  allCorrectOutput : 'Well done!',
  someIncorrectOutput : 'Please try again. Hints: None of the stuff on top.',
},

'<br><br><b>3.</b> Which part of the screen is managed by the dwf_play_main.js file?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['A', true, 'Correct!' ],
      ['B', false, 'Please try again.' ],
      ['C', false, 'Please try again.' ],
      ['D', false, 'Please try again.' ],
      ['E', false, 'Please try again.' ] ]
},


'<br><br><b>4.</b> So which part of the screen does that leave for the DiceGameController to manage (later)?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['A', false, 'Please try again.' ],
      ['B', true, 'Correct!' ],
      ['C', false, 'Please try again.' ],
      ['D', false, 'Please try again.' ],
      ['E', false, 'Please try again.' ] ]
},

];
