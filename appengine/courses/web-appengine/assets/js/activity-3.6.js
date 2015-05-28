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

  '<b>1.</b> We added two attributes to the form element.  What were they?<br>',


  {
    questionType : 'multiple choice',
    choices : [
        ['href="/addquote" method="POST"', false, 'Please try again.' ],
        ['href="/addquote" method="GET"', false, 'Please try again.' ],
        ['action="/addquote" method="POST"',  true, 'Correct!'],
        ['action="/addquote" method="GET"',  false, 'Please try again.'] ]
  },

  '<br><br><b>2.</b> A form can have any amount of html within it.  However only certain elements are important to the form that is sent to the backend.  What elements are important?<br>',

  {
    questionType : 'multiple choice',
    choices : [
        ['button elements', false, 'Please try again.' ],
        ['td and th elements', false, 'Please try again.' ],
        ['input elements, specifically their name and value attributes', true, 'Correct!' ],
        ['input elements, specifically their id and class attributes', false, 'Please try again.'] ]
  },

  '<br><br><b>3.</b> If you resize the page while your Modal is up (<b>with the form now inside the modal</b>) what happens (Try it first!).<br>',

  {
    questionType : 'multiple choice',
    choices : [
        [ 'It looks pretty bad because it extends off the page.', false, 'Please try again.' ],
        [ 'Bootstrap puts mobile first and tries for a responsive UI so it resizes very well and the labels even reflow.', true, 'Correct!' ],
        [ 'A resize dismisses the Modal.', false, 'Please try again.' ],
        [ 'You can\'t resize the window while the Modal is up.', false, 'Please try again.' ]]
  }

];
