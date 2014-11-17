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
	"<b>1. </b>Describe what this block of code does...<br>",
	'<img src="assets/img/getJSON_skeleton.png" alt="getJSON skeleton code"><br>',
	
	"<b>Line 1</b><br>",
  {
    questionType : 'multiple choice',
    choices : [
        ['Uses a <b>jQuery class method</b> to do a GET request which expects a JSON reply to the URL "/servertime" with no extra GET parameters.', true, 'Correct!' ],
        ['Creates a <b>jQuery object</b>, like we have done many times, to do a GET request which expects a JSON reply to the URL "/servertime" with no extra GET parameters.', false, 'Please try again.' ],
        ['Uses a <b>jQuery class method</b> to do a POST request which expects a JSON reply to the URL "/servertime" with no extra GET parameters.', false, 'Please try again.' ],
        ['Uses a <b>jQuery class method</b> to do a GET request which expects a JSON reply to the main URL with the parameter "/servertime".', false, 'Please try again.' ] ]
  },


  "<br><br><b>Line 2</b><br>",
  {
    questionType : 'multiple choice',
    choices : [
        ['Prints the string representation of the json reply object to the console using using the JavaScript built-in method JSON.stringify.', true, 'Correct!' ],
        ['Prints the json object to the console', false, 'Please try again.' ],
        ['Prints the string representation of the json reply object to the console using using the jQuery method JSON.stringify.', false, 'Please try again.' ]]
  },


  "<br><br><b>Lines 4-6</b><br>",
  {
    questionType : 'multiple choice',
    choices : [
        ['If there is some error with the AJAX request this will print info to the console.  In a real app you could inform the user of the error', true, 'Correct!' ],
        ['This is a required function that must be used to prevent errors', false, 'Please try again.' ]]
  },

  "<br><br><b>2.</b> .done()'s function is called if the request finished with a success. .fail()'s function is called if there is an error.  What is the name of the method you could optionally add as well that receives a function that is called REGARDLESS of success or failure (called once the request completes regarless)?<br>",

  {
    questionType : 'freetext',
    correctAnswerRegex : /always/i,
    correctAnswerOutput : 'Correct!',
    incorrectAnswerOutput : 'Please try again.',
    showAnswerOutput : 'Here is the answer: .always()'
  },

];
