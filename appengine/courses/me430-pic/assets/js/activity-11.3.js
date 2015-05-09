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

	'<b>1.</b> It works out slick that the ADC and PWM duty cycle are both 10 bits (0 - 1023 values).  When we used the vertical joystick to set the PWM duty cycle, what duty cycle would a 3 volt signal result in?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['A 10% duty cycle', false, 'Please try again.' ],
				['A 50% duty cycle', false, 'Please try again.' ],
				['A 60% duty cycle', true, 'Correct!' ],
				['A 80% duty cycle', false, 'Please try again.' ] ]
	},

    '<br><br><b>2.</b> When would you expect a piezo buzzer to make noise?<br>',
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : 'Duty cycle...',
					choices : [ '0%', '10%', '50%', '70%', '100%' ],
					correctIndex : [1,2,3]
				}, ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: The piezo makes no noise when always flexed (100%) or always relaxed (0%).',
	},

    '<br><br><b>3.</b> The primary reason most developers use PWM is to control a DC motor\'s ... ?<br>',
    
	{
		questionType : 'multiple choice',
		choices : [['Power', false, 'Please try again.' ],
				['Torque', false, 'Please try again.' ],
				['Direction', false, 'Please try again.' ],
				['Speed', true, 'Correct!' ] ]
	},

    '<br><br><b>4.</b> The PWM peripheral should, in theory, be useful for all the applications below.  However due to some bugs in the C18 PWM library which application <b>won\'t</b> work well in practice?<br>',
    
	{
		questionType : 'multiple choice',
		choices : [['Piezo buzzer', false, 'Please try again.' ],
				['LED intensity', false, 'Please try again.' ],
				['DC motor', false, 'Please try again.' ],
				['Servo motor', true, 'Correct!' ] ]
	},
    

		
];
