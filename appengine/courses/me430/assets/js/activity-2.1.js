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
    '<b>1.</b> Snubber diodes connect into the same locations where a motor connects.<br>',

    { questionType: 'multiple choice',
      choices: [['True', true, 'Correct!  Always the same spots as the motor.  Just need to figure out which direction it connects.'],
                ['False', false, 'Please try again.']]},

    '<br><br><b>2.</b> The gray bar on a real diode represents the "bar" as shown on a schematic diagram (which is the cathode).  That bar connects to motor\'s power supply.<br>',

    { questionType: 'multiple choice',
      choices: [['True', true, 'Correct!  The gray bar is the "bar".'],
                ['False', false, 'Please try again.']]},


    '<br><br><b>3.</b> For small currents you "could" use an LED as a snubber diode.<br>',

    { questionType: 'multiple choice',
      choices: [['True', true, 'Correct!  You "could".  An LED is a diode, but not really a recommended snubber diode.  If the inductive spike was too big it\'d blown the LED. :)'],
                ['False', false, 'Please try again.  It\'s possible.  I never ask if it was recommended.  I just ask if it was possible. :)']]},

    '<br><br><b>4.</b> Pin 9 on a Darlington (labelled COM) is a snubber diode.  If you have 7 LEDs on the Darlington chip (ULN2003) you need to connect COM to the LED\'s power supply rail.<br>',

    { questionType: 'multiple choice',
      choices: [['True', false, 'Please try again.  Admittedly it wouldn\'t hurt anything, but LEDs don\'t have inductive kick so you don\'t need to bother.  To be honest, I usually DO connect it even though I know it\'s unnecessary for LEDs.'],
                ['False', true, 'Correct! LEDs don\'t have inductive kick, so you don\'t need to bother with inductive kick protection.  To be honest, I usually DO connect it even though I know it\'s unnecessary for LEDs.']]},

];
