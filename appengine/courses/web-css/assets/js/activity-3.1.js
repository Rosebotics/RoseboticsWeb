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

    '<div style="background-color: rgb(255, 0, 0); border-radius: 5px; border: 2px solid #555; width: 150px; padding: 6px; margin: auto; color: white; text-align: center; font: 24px Rokkitt, Arial, sans-serif;">Red</div>',
  {
    questionType : 'multiple choice group',
    questionsList : [
        {
          questionHTML : '<b>1.</b> Which of these colors are fully red?',
          choices : [ '#FFF', '#FF0000', 'blue', '#F00', 'red', 'rgb(100, 0, 0)', 'hsl(0, 100%, 50%)', 'rgba(255, 0, 0, 1.0)' ],
          correctIndex : [1,3,4,6,7]
        } ],
    allCorrectOutput : 'Well done!',
    someIncorrectOutput : 'Please try again. Hints: There are 5 correct answers.  1 name, 2 hex, 1 rgba, 1 hsl (the hsl one is tricky, but it is correct)',
  },
  '<br><br><b>2.</b> Use Chrome dev tool to inspect the red element above.  Which version of red did I use to set the background-color?<br>',

  {
    questionType : 'freetext',
    correctAnswerRegex : /rgb\(\s*255,\s*0,\s*0\s*\)/i,
    correctAnswerOutput : 'Correct!',
    incorrectAnswerOutput : 'Please try again.',
    showAnswerOutput : 'Here is the answer: rgb(255, 0, 0);'
  },

];
