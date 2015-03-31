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

  '<b>1.</b> Right now you can add a quote using two very different methods: the web app OR the Endpoints API (which you can access already via the Endpoints Explorer).  Which mechanism uses JSON?<br>',

  { questionType: 'multiple choice',
    choices: [['The pretty blue web app', false, 'Nope, the web app uses form data to add a quote.  JSON is not used by the web app.'],
              ['The Endpoints API', true, 'Correct!  Under the hood the Endpoints POST coming in to insert a quote is JSON and all replies from the API are JSON.'],
              ['Both', false, 'Nope, the web app uses form data to add a quote.  JSON is not used by the web app.']]},


  '<br><br><b>2.</b> The web app is useless to the iOS client code.  Only the Endpoints API will be used by the iOS Client code.<br>',

  { questionType: 'multiple choice',
    choices: [['True', true, 'Correct!  The iOS client code will use JSON messages with the Endpoints API.  The pretty blue web app does not even need to exist to create an iOS app.'],
              ['False', false, 'Try again.  Might I suggest True']]},

  '<br><br><b>3.</b> My MovieQuotes Endpoints backend is up and running both deployed and on localhost.<br>',

  { questionType: 'multiple choice',
    choices: [['Yes', true, 'Great!  You are ready to move on!'],
              ['No', false, 'You need to get the backend working first. :)  See the prior unit.']]},

];

