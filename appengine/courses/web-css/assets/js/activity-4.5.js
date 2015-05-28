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


        '<button id="show-hide-cheatsheetbutton">Show / Hide Cheatsheet</button>',
        '<img width="90%" style="margin-left: 15px; display:none;" id="cheatsheet" src="assets/img/interactions_between_display_and_position.png" alt="LCD code"><br>',
        '<b>1.</b> What is the difference between relative+block vs relative+inline-block?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'Nothing. They are the same. The display property is ignored in this case.', false, 'Please try again.'  ],
          [ 'Nothing. They are the same. The position property is ignored in this case.', false, 'Please try again.'  ],
          [ 'One respects the location offset properties (left, right, top, bottom). The other does not.', false, 'Please try again.'],
          [ 'One gets the line to itself.  The other shares the line with other elements.', true, 'Correct!'],
          [ 'One respects the size properties (width, height). The other does not.', false, 'Please try again.'  ]]
    },


    '<br><br><b>2.</b> What is the difference between absolute+block vs absolute+inline?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'Nothing. They are the same. The display property is ignored in this case.', true, 'Correct!'  ],
          [ 'Nothing. They are the same. The position property is ignored in this case.', false, 'Please try again.'  ],
          [ 'One respects the location offset properties (left, right, top, bottom). The other does not.', false, 'Please try again.'],
          [ 'One gets the line to itself.  The other shares the line with other elements.', false, 'Please try again.'],
          [ 'One respects the size properties (width, height). The other does not.', false, 'Please try again.'  ]]
    },

    '<br><br><b>3.</b> What is the difference between static+inline-block vs relative+inline-block?<br>',
    {
      questionType : 'multiple choice',
      choices : [
          [ 'Nothing. They are the same. The display property is ignored in this case.', false, 'Please try again.'  ],
          [ 'Nothing. They are the same. The position property is ignored in this case.', false, 'Please try again.'  ],
          [ 'One respects the location offset properties (left, right, top, bottom). The other does not.', true, 'Correct!'],
          [ 'One gets the line to itself.  The other shares the line with other elements.', false, 'Please try again.'],
          [ 'One respects the size properties (width, height). The other does not.', false, 'Please try again.'  ]]
    },
    '<br><br><b>4.</b> What is the difference between fixed+none vs relative+none?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'Nothing. They are the same. The display property is ignored in this case.', false, 'Please try again.'  ],
          [ 'Nothing. They are the same. The position property is ignored in this case.', true, 'Correct!'  ],
          [ 'One respects the location offset properties (left, right, top, bottom). The other does not.', false, 'Please try again.'],
          [ 'One gets the line to itself.  The other shares the line with other elements.', false, 'Please try again.'],
          [ 'One respects the size properties (width, height). The other does not.', false, 'Please try again.'  ]]
    },


    '<br><br><b>5.</b> What is the difference between relative+inline-block vs relative+inline?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'Nothing. They are the same. The display property is ignored in this case.', false, 'Please try again.'  ],
          [ 'Nothing. They are the same. The position property is ignored in this case.', false, 'Please try again.'  ],
          [ 'One respects the location offset properties (left, right, top, bottom). The other does not.', false, 'Please try again.'],
          [ 'One gets the line to itself.  The other shares the line with other elements.', false, 'Please try again.'],
          [ 'One respects the size properties (width, height). The other does not.', true, 'Correct!'  ]]
    },

];

window.onload=function(){
  document.getElementById('show-hide-cheatsheetbutton').addEventListener('click', function() {
  if (this.classList.contains('closed')) {
    this.classList.remove('closed');
    document.getElementById('cheatsheet').style.display = "none";
    console.log("Hide img");
  } else {
    this.classList.add('closed');
    document.getElementById('cheatsheet').style.display = "block";
    console.log("Show img");
  }
  });
};
