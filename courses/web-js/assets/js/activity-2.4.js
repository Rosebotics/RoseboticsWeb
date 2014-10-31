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

'<b>1.</b> Let\'s review the purpose of each JavaScript file.<br>',

{
  questionType : 'multiple choice group',
  questionsList : [
      {
        questionHTML : '<b>a.</b> Which two files are 100% all about model objects.',
        choices : [ 'dwf_play_main.js', 'Die.js', 'DiceRound.js', 'DiceRoundController.js', 'DiceGameController.js' ],
        correctIndex : [1,2]
      },
      {
        questionHTML : '<b>b.</b> Which one is a cheater class that is mainly a controller, but actually contains two variables that are clearly models.',
        choices : [ 'dwf_play_main.js', 'Die.js', 'DiceRound.js', 'DiceRoundController.js', 'DiceGameController.js' ],
        correctIndex : 4
      },
      {
        questionHTML : '<b>c.</b> Which file serves as the main function to create an instance that starts the ball rolling.',
        choices : [ 'dwf_play_main.js', 'Die.js', 'DiceRound.js', 'DiceRoundController.js', 'DiceGameController.js' ],
        correctIndex : 0
      }, {
        questionHTML : '<b>d.</b> Which file is 100% all about a controller object.',
        choices : [ 'dwf_play_main.js', 'Die.js', 'DiceRound.js', 'DiceRoundController.js', 'DiceGameController.js' ],
        correctIndex : 3
      } ],
  allCorrectOutput : 'Well done!',
  someIncorrectOutput : 'Please try again. Hints: Every file is used once.',
},

'<br><br><b>2.</b> We\'ll pick some portions of this project to write together so that we can observe a few details of using classes.<br>',


{
  questionType : 'multiple choice group',
  questionsList : [
      {
        questionHTML : '<b>a.</b> Which files will we modify? (Hint, everything except for the two model objects)',
        choices : [ 'play.html', 'dwf_play_main.js', 'Die.js', 'DiceRound.js', 'DiceRoundController.js', 'DiceGameController.js' ],
        correctIndex : [0,1,4,5]
      }, {
        questionHTML : '<b>b.</b> In fact one file we\'ll write completely from scratch.  What file is that?  (Hint, <b>Controller</b> that keeps the total score and round) ',
        choices : [ 'play.html', 'dwf_play_main.js', 'Die.js', 'DiceRound.js', 'DiceRoundController.js', 'DiceGameController.js' ],
        correctIndex : 5
      }, ],
  allCorrectOutput : 'Well done!',
  someIncorrectOutput : 'Please try again. Hints: We\'ll modify every file except for Die.js and DiceRound.js, then we\'ll write DiceGameController.js from scratch.',
},


];