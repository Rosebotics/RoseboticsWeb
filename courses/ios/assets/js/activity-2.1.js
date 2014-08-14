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

  '<b>1.</b> My GraderRecorder backend is up an running (has been since the previous unit).<br>',

  { questionType: 'multiple choice',
    choices: [['Yep!  Ready to go!', true, 'Great!  Go ahead and fire up your localhost as well.'],
              ['I actually never got it working', false, 'You need to get that working first.  You won\'t be able to do anything useful without it.']]},


  '<br><br><b>2.</b> I have a few grades on my deployed version and localhost version.  Plus I have at least 12+ students. <br>',

  { questionType: 'multiple choice',
    choices: [['Done.  I used the Roster Import feature and added our class', true, 'Great!  I love that feature. ;)'],
              ['Done. I manually added 15+ students using Add Student', true, 'That\'s fine too.  Ready to go.'],
              ['I don\'t have the grades or students prepared', false, 'Try again.  You CAN keep going without data ready, but it should be easy to add.']]},

  '<br><br><b>3.</b> In addition to the Service object what is the new object we\'ll be working with for iOS OAuth client code?<br>',

  { questionType: 'multiple choice',
    choices: [['Client IDs', false, 'Try again.  We will use Client IDs, but this is not the answer I\'m looking for.'],
              ['The Authorizer', true, 'Correct!  The Authorizer will add the OAuth token to all queries the service makes.'],
              ['The Terminator', false, 'Try again.'],
              ['OAuth', false, 'Try again.  OAuth is the name of the Open standard for Authentication.  It is not the name of the object used in iOS code.']]},

];

