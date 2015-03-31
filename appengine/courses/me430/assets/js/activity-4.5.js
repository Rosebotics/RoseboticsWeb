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

  '<b>1.</b> Do you have the program ready for checkoff? <br>',
  
  { questionType: 'multiple choice',
    choices: [['Yes, UpThenToggle is programmed', true, 'Great!  See you in class!.'],
              ['Not so much.  I\'m having technical trouble and need a hand tomorrow in class.  I did the work though', false, 'No worries.  We\'ll give you time to work out the issues in class.  Usually not your fault.  We\'ll try to help get it working with you.'],
              ['I watched the video, but didn\'t actually do the activity.', false, 'The goal is to get hands-on experience.  That\'s the best way to learn.  Try to find time before class to do the activity.']]},

];

