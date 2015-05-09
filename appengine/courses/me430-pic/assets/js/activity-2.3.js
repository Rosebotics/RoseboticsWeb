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
        		'<b>1.</b> What is the value of accumulator at the end of this code block?<br>',
        		'<img src="assets/img/for_accumulator.png"  alt="for accumulator statement"><br>',
        		
        		{
        			questionType : 'freetext',
        			correctAnswerRegex : /9/i,
        			correctAnswerOutput : 'Correct!',
        			incorrectAnswerOutput : 'Please try again.'
        		},

        		'<br><br><b>2.</b> Write a for statement that increments a variable named <b>x</b> from <b>4</b> to <b>10</b> by <b>2</b>.  Don\'t include 10, just 4, 6, and 8.<br> Assume x is already declared and don\'t worry about curly braces or the inside of the loop.<br>',
        		
//        		correctAnswerRegex : /for \(x = 2; x < 10; x = x \+ 2\)/i,
        		
        		{
        			questionType : 'freetext',
        			correctAnswerRegex : /for\s*\(\s*x\s*=\s*4;\s*x\s*\<\s*10;\s*x\s*=\s*x\s*\+\s*2\s*\)/i,
        			correctAnswerOutput : 'Correct!',
        			incorrectAnswerOutput : 'Please try again.',
        			showAnswerOutput : 'Looking for ... for (x = 4; x < 10; x = x + 2)'
        		},
        		
        		'<br><br><b>3.</b> How many times does <b>Squirrel!</b> print?<br>',
        		{
        			questionType : 'multiple choice group',
        			questionsList : [
        					{
        						questionHTML : '<hr><img src="assets/img/while_none.png"  alt="while statement"><br>',
        						choices : [ 'None', '1', '2', '3', 'Many many times (infinite loop error).' ],
        						correctIndex : 0
        					},
        					{
        						questionHTML : '<hr><img src="assets/img/while_statement.png"  alt="while statement"><br>',
        						choices : [ 'None', '1', '2', '3', 'Many many times (infinite loop error).' ],
        						correctIndex : 3
        					},
        					{
        						questionHTML : '<hr><img src="assets/img/while_infinite.png"  alt="while statement"><br>',
        						choices : [ 'None', '1', '2', '3', 'Many many times (infinite loop error).' ],
        						correctIndex : 4
        					} ],
        			allCorrectOutput : 'Well done!',
        			someIncorrectOutput : 'Please try again. Hints: one is infinite, one is none, the other is a value 1, 2, or 3.',
        		},

        		
        		

];
