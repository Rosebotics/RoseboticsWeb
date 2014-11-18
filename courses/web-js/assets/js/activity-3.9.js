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

'<b>1.</b> If you serve a static file to a custom URL path, <b>/quiz.html</b> instead of <b>/static/moviequotes_quiz.html</b> in this case.  What should you be careful about that might surprise you?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['Spelling things correctly is important.', false, 'Please try again.  Spelling is important, but that shouldn\'t surprise you.' ],
      ['The paths inside the .html file to load resources such as .css and .js should be absolute paths instead of relative paths since the folder it is being served from changed.', true, 'Correct!' ],
      ["You should be careful to add the custom handler to app.yaml BEFORE the static handler", false, "Please try again.  That turns out not to matter in this case."]]
},


'<br><br><b>2.</b> There is a main.js file then three JavaScript objects in this project.  1 is the boss and 2 are helpers to the boss.  Who\'s the boss?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['main.js', false, 'Please try again.' ],
      ['MovieQuotesQuizController', true, 'Correct!' ],
      ["QuizStatsController", false, "Please try again."],
      ["QuizQuestionController", false, "Please try again."]]
},


'<br><br><b>3.</b> There is a small <b>Average: xxx%</b> displayed in the nav bar.  Which JavaScript class would be responsible for maintaining an average of the rights vs total questions answered?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['main.js', false, 'Please try again.' ],
      ['MovieQuotesQuizController', false, "Please try again." ],
      ["QuizStatsController", true, 'Correct!'],
      ["QuizQuestionController", false, "Please try again."]]
},
    
];