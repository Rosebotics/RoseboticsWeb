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
	"<b>1.</b> About how many functions does jQuery provide on the jQuery object?  Visit <a target='_blank' href='http://api.jquery.com/'>http://api.jquery.com/</a> to help you make a guess.<br>",

  {
    questionType : 'multiple choice',
    choices : [
        ['Only about 10.  We mentioned them all.', false, 'Please try again.' ],
        ['Only about 20.  We mentioned them all.', false, 'Please try again.' ],
        ['Like 200 we don\'t plan to cover them all in detail.', true, 'Correct!' ],
        ['Like 1000 we don\'t plan to cover them all in detail.', false, 'Please try again.' ] ]
  },


  "<br><br><b>2.</b> Which resource will provide the most depth in learning as much as possible about jQuery?<br>",

  {
    questionType : 'multiple choice',
    choices : [
        ['Videos made by Dr. Fisher in this course', false, 'Please try again.' ],
        ['Other great resources on the web', true, 'Correct!  We\'ll cover a fair amount but no where need the depth of coverage provided by other resources.' ] ]
  },

];
