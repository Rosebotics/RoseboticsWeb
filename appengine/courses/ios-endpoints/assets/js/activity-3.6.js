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

  '<b>1.</b> What does the service object do?<br>',

  { questionType: 'multiple choice',
    choices: [['Saves MovieQuotes to Core Data', false, 'Please try again.'],
              ['Helps with the View (UI) creation', false, 'Please try again.'],
              ['Handles the low level JSON communication with your backend', true, 'Correct!'],
              ['Makes coffee', false, 'Please try again.']]},

  '<br><br><b>2.</b> If you are developing an iOS Endpoints app in the middle of the desert and have no internet connection at all, what service RPC URL would be most useful?<br>',

  { questionType: 'multiple choice',
    choices: [['https://yourusername-movie-quotes.appspot.com', false, 'Please try again. That\s the web app\'s URL, not an RPC URL.'],
              ['https://yourusername-movie-quotes.appspot.com/_ah/api/rpc?prettyPrint=false', false, 'Please try again.  You\'d need the internet to use the deployed version.'],
              ['http://localhost:8080', false, 'Please try again. That is not the *RPC URL* for localhost.  That\'s the localhost web app url.'],
              ['http://localhost:8080/_ah/api/rpc?prettyPrint=false', true, 'Correct!  That\'s the format for the RPC URL and it\'ll work in the desert because localhost is simply talking to your computer.'],
              ['http://localhost:8080/_ah/api/explorer', false, 'Please try again. That one was the built-in explorer that you used for testing the API before using a client app.']]}
];

