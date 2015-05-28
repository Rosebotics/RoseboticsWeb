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

'<b>1.</b> If you have a rule for the font property on a <b>ul</b> element would the <b>li</b> elements in the list inherit that property?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['Yes', true, 'Correct!' ],
      ['No', false, 'Please try again.' ] ]
},

'<br><br><b>2.</b> If you have a rule for the height property on a <b>ul</b> element would the <b>li</b> elements in the list inherit that property?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['Yes', false, 'Please try again.' ],
      ['No', true, 'Correct!' ] ]
},


'<br><br><b>3.</b> What color would the "Hello World!" text be?<br>',
'<img src="assets/img/h1_color_question.png" alt="H1 color question"><br>',
{
  questionType : 'multiple choice',
  choices : [
      ['red', false, 'Please try again.  Nope there is a syntax error in this rule before the color property.  \/\/ is NOT a comment in CSS, just a syntax error that causes the rest of the rules in the block to silently fail.' ],
      ['blue', false, 'Please try again.  Nope there is a syntax error in this rule before the color property.  \/\/ is NOT a comment in CSS, just a syntax error that causes the rest of the rules in the block to silently fail.' ],
      ['black', true, 'Correct!  Both rules above have syntax errors, so the User Agent default color wins (uncontested), which is black on every browser.' ],
      ['white', false, 'Please try again.'] ]
},


];
