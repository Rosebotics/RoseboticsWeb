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
    '<b>1.</b> When you hook up a brushed DC motor to an H-Bridge how many snubber diodes are needed?<br>',

    { questionType: 'multiple choice',
      choices: [['0', false, 'Please try again.'],
                ['1', false, 'Please try again.'],
                ['2', false, 'Please try again.'],
                ['4', true, 'Correct!  Admittedly this is review, but it was shown briefly in the diagrams. :)']]},

    '<br><br><b>2.</b> When you want a DC motor to go faster or slower what do you change? (select very best answer)<br>',

    { questionType: 'multiple choice',
      choices: [['The current going to the motor', false, 'Indeed the current changes when you change speed, but "current" is not the best answer. Please try again.'],
                ['The voltage provided to the motor', false, 'Correct!  But there is an even better answer.  We don\'t want the analog voltage level, instead we do what?  Please try again.'],
                ['The PWM duty cycle', true, 'Correct!  We us Pulse Width Modulation to change the "effective" voltage.  Low duty cycles like 10% go slow, while duty cycles closer to 100% go faster.'],
                ['The PWM frequency', false, 'The frequency of the Pulse Width Modulation signal has no impact.  Just keep it faster than say 10 Hz.  Please try again.']]},

    '<br><br><b>3.</b> Go visit <a href="http://www.goldmine-elec-products.com/" target="_blank">Electronic Goldmine</a>. How many Gear Head Motors do they have available for less than $15 today?<br><i>(just click that link, then find Motors->Gear Head Motors)</i><br>',

    { questionType: 'freetext',
        correctAnswerRegex: /\d/i,
        correctAnswerOutput: 'Sounds good to me.  I trust your counting skills. ie I have no way of knowing if you\'re right, the quantity changes daily.  :)',
        incorrectAnswerOutput: 'I was expecting a number. :)'},

    '<br><br><b>4.</b> The Electronic Goldmine is just one of MANY places to buy cheap motors.<br>',
    
    {questionType: 'multiple choice group',
	    questionsList: [ 
	      {questionHTML: '<b>a.</b> Other good places include (check all that apply)',
	        choices: ['All Electronics', 'The RobotShop', 'Even SparkFun, Jameco, or DigiKey', 'Wherever you like that you find a motor (ebay, Hobby Partz, etc)'],
	        correctIndex: [0, 1, 2, 3]},
	      {questionHTML: '<b>b.</b> Even though it wasn\'t in the video, you can also check the FREE parts area in C112 for a motor',
	        choices: ['True, there is a free area in C112', 'False, there is no such area'],
	        correctIndex: 0},
	      {questionHTML: '<b>c.</b> You can even get things from the EE Stockroom across the hall!',
	        choices: ['True.  The "EE" is here to serve the needs of this class!', 'False. That room is for EE "classes" only'],
	        correctIndex: 1}
	    ],
	    allCorrectOutput: 'Well done!',
	    someIncorrectOutput: 'Please try again. Hints: All those locations are fine and there is a free area.',
	  }
];
