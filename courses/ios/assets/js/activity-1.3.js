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
                '<b>1.</b> What does MOSFET stand for?',

                { questionType: 'freetext',
                  correctAnswerRegex: /metal oxide semiconductor field effect transistor/i,
                  correctAnswerOutput: 'Correct!  That\'s a mouthful! :).',
                  incorrectAnswerOutput: 'Looking for Metal Oxide Semiconductor Field Effect Transistor',
                  outputHeight: '40px'},

                '<br><br><b>2.</b> What are the names of the three legs on a MOSFET?',

                { questionType: 'freetext',
                  correctAnswerRegex: /(gate source drain)|(gate drain source)|(source gate drain)|(source drain gate)|(drain gate source)|(drain source gate)/i,
                  correctAnswerOutput: 'Correct!  Gate Drain Source.',
                  incorrectAnswerOutput: 'Looking for Gate Drain Source',
                  outputHeight: '40px'},

                  '<br><br><b>3.</b> Assume an N-channel MOSFET for these questions<br>',
                  
                  {questionType: 'multiple choice group',
                	    questionsList: [ 
                	      {questionHTML: '<b>a.</b> Always connected to ground',
                	        choices: ['Gate', 'Drain' , 'Source'],
                	        correctIndex: 2},
                	      {questionHTML: '<b>b.</b> Connected to the load (ie motor, LED, etc)',
                	        choices: ['Gate', 'Drain' , 'Source'],
                	        correctIndex: 1},
                	      {questionHTML: '<b>c.</b> Connected to the microcontroller',
                	        choices: ['Gate', 'Drain' , 'Source'],
                	        correctIndex: 0}
                	    ],
                	    allCorrectOutput: 'Well done!',
                	    someIncorrectOutput: 'Please try again.',
                	  },
                              
                '<br><br><b>4.</b> I like MOSFETs. :) They make my life easy because I just connect it straight to the PIC without sizing a resistor.<br>',
                  
                { questionType: 'multiple choice',
                  choices: [['True', true, 'Correct.  You can even use them in parallel if you need even MORE current.'],
                            ['False', false, 'Please try again']]},

];

