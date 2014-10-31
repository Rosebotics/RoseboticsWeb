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
'<b>1.</b> Why did we add this line of code during the video?<br>',

'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">$("body").removeClass("no-cups");</code><br>',
{
	questionType : 'multiple choice',
	choices : [
			[
					'We had to set the intiail condition that we\'ll use later.', false, 'Please try again' ],
			[
					'We haven\'t written any of the update view code yet, and we needed a hacky way to see all the buttons.  With that class present the -1 and reset buttons were hidden, so it had to be temporarially removed.',
					true,
					'Correct.' ] ]
},


'<br><br><b>2.</b> In the video there were various simple syntax errors found in the console logs while making the video.  That happens because JavaScript (similar to Python) is an interpreted language (it is not compiled).  Mark the advantages of interpreted languages in the top area, and disadvantages in the bottom area.<br>',
{
  questionType : 'multiple choice group',
  questionsList : [
      {
        questionHTML : '<b>a.</b> What are some <b>advantages</b> of being an interpreted language?',
        choices : [ 'There is no compile time in the development cycle. Just save, reload, then presto your browser interprets as it runs.',
                    'You often end up finding syntax errors only when your code runs',
                    'You page must serve each character of the code to let the browser interpret it, instead of a compiled native binary file.',
                    'It\'s always harder to program.',
                    'It\'s always easier to program.',
                    'It is often easier to port a language to another platform.',
                    'You can just type single commands in a console and they can just run to quick testing.',
                    'You don\'t have a built-in compiler that can help find programming errors.'],
        correctIndex : [0,5,6]
      },

      {
        questionHTML : '<b>b.</b> What are some <b>disadvantages</b> of being an interpreted language?',
        choices : [ 'There is no compile delay in the development cycle. Just save, reload, then presto your browser interprets as it runs.',
                    'You often end up finding syntax errors only when your code runs',
                    'You page must serve each character of the code to let the browser interpret it, instead of a compiled native binary file.',
                    'It\'s always harder to program.',
                    'It\'s always easier to program.',
                    'It is often easier to port a language to another platform.',
                    'You can just type single commands in a console and they can just run to quick testing.',
                    'You don\'t have a built-in compiler that can help find programming errors.'],
        correctIndex : [1,2,7]
      }, ],
  allCorrectOutput : 'Well done!',
  someIncorrectOutput : 'Please try again. Hints: Neither is always easier or harder and each has three correct answers.',
},

];

