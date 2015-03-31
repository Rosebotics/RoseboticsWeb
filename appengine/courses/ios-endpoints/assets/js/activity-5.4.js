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

  '<b>1.</b>The last thing we did in this video was to call a method to set the Authorizer on the service object.  Will that method do anything?<br>',

  {
    questionType : 'multiple choice',
    choices : [
        ['It will, but right now _setAuthorizer is empty and we don\'t have a service object yet anyway', true, 'Correct!' ],
        ['We don\'t have the Authorizer yet.', false, 'Please try again.' ],
        ['Not only do we have the Authorizer, but we are already using the Authorizer!', false, 'Please try again.' ]]
  },


  '<br><br><b>2.</b> Why did we put the Google\'s sign-in web view inside a Navigation Controller?<br>',

  {
    questionType : 'multiple choice',
    choices : [
        ['It\'s required.  You don\'t get a choice.', false, 'Please try again.' ],
        ['We wanted to have a Cancel button.', true, 'Correct!' ],
        ['Because we needed the forward and back browser buttons', false, 'Please try again.' ],
        ['So that we could get an Authorizer', false, 'Please try again.' ] ]
  },

  '<br><br>Nice work.  Let\'s go make the Service object and set the Authorizer on it so we can start making queries!',

];
