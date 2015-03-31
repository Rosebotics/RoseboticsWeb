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
	"<b>1.</b> The instance <b>bob</b> has the same prototype object as the BankAccount class (i.e. the constructor function).  Additionally it has two instance variables.  What are they?",

  {
    questionType : 'multiple choice group',
    questionsList : [
        {
          questionHTML : '',
          choices : [ 'toString', 'name', 'account', 'balance' ],
          correctIndex : [1,3]
        },],
    allCorrectOutput : 'Well done!',
    someIncorrectOutput : 'Please try again. Hints: There are two.',
  },



  "<br><br><b>2.</b> When you make a constructor for a class is there anything special about that function (added keywords like <b>constructor</b>) or is it just a function that looks like any other function?<br>",

  {
    questionType : 'multiple choice',
    choices : [
        ['It\'s just a function.  Any function could be used as a constructor<br><i>(although it\'d end up working out badly if you weren\'t planning for it to be a constructor).</i>', true, 'Correct!' ],
        ['You have to add the special keyword to the function so that it can be used as a constructor',  false, 'Please try again.'] ]
  },

  "<br><br><b>3.</b> What is the special keyword you use when <b>making</b> an instance (where the real magic happens)?<br>",

  {
    questionType : 'freetext',
    correctAnswerRegex : /new/i,
    correctAnswerOutput : 'Correct!',
    incorrectAnswerOutput : 'Please try again.',
    showAnswerOutput : 'Here is the answer: new'
  },


];
