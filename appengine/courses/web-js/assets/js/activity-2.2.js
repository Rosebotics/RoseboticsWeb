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
'<b>1.</b> Did you successfully implement the <b>interestRate</b> instance variable and the <b>accumulateInterest</b> method?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['Yep (I think so).  Ready to go!', true, 'Great!  Click next.' ],
			['Tried but need help.', true, 'Ok.  Click next.' ],
      ['Not so much.', false, 'Please try again.' ] ]
},


'<br><br><b>2.</b> Fill in the blank rh.objectbasics.BankAccount._________.deposit = function(amount) {...};<br>',

{
  questionType : 'freetext',
  correctAnswerRegex : /prototype/i,
  correctAnswerOutput : 'Correct!',
  incorrectAnswerOutput : 'Please try again.',
  showAnswerOutput : 'Here is the answer: prototype'
},


'<br><br><b>3.</b> Before the video began we used the toString method on the instance <b>bob</b> and it did something (printed [object Object]).  That shows that the method toString existed.  How did it do that?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['The object bob hasOwnProperty of toString and it used it.', false, 'Please try again.' ],
      ['The object bob did not have the toString function, so Chrome checked bob\'s prototype, rh.objectbasics.BankAccount, which DOES have a toString method, so it used that function.', false, 'Please try again.' ],
      ['The object bob did not have the toString function, bob\'s prototype rh.objectbasics.BankAccount did not have it either, however rh.objectbasics.BankAccount\'s prototype of Object DOES have a toString method, so it used that function.', true, 'Correct!' ] ]
},

'<br><br><b>4.</b> During the video our toString started to return values like: "Name: Bob   Balance: $100.00".  How did it do that?<br>',

{
  questionType : 'multiple choice',
  choices : [
      ['The object bob hasOwnProperty of toString and it used it.', false, 'Please try again.' ],
      ['The object bob did not have the toString function, so Chrome checked bob\'s prototype, rh.objectbasics.BankAccount, which DOES have a toString method, so it used that function.', true, 'Correct!' ],
      ['The object bob did not have the toString function, bob\'s prototype rh.objectbasics.BankAccount did not have it either, however rh.objectbasics.BankAccount\'s prototype of Object DOES have a toString method, so it used that function.', false, 'Please try again.' ] ]
},

];