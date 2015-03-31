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
    'The real goal of this <b>rapid paced</b> demo was to show how iOS uses connections between a graphical tool (Interface Builder in Xcode) to code (Swift in this case).  So let\'s <b>only</b> ask questions about connections.',
    '<br><br><b>1.</b> How did we connect the <b>View Controller classes</b> in code to the Storyboard view controllers?<br>',

    { questionType: 'multiple choice',
      choices: [['We told each Storyboard view controller which custom class it used by setting the name in the Identity Inspector', true, 'Correct!'],
                ['We created an Interface Builder Outlet (@IBOutlet)', false, 'Please try again.'],
                ['We created an Interface Builder Action (@IBAction)', false, 'Please try again.'],
                ['None of the above', false, 'Please try again.']]
    },
    '<br><br><b>2.</b> How did we connect the <b>Label</b> in the Storyboard to code?<br>',

    { questionType: 'multiple choice',
        choices: [['We told each Storyboard view controller which custom class it used by setting the name in the Identity Inspector', false, 'Please try again.'],
                  ['We created an Interface Builder Outlet (@IBOutlet)', true, 'Correct!'],
                  ['We created an Interface Builder Action (@IBAction)', false, 'Please try again.'],
                  ['None of the above', false, 'Please try again.']]
    },
    '<br><br><b>3.</b> How did we connect the <b>button</b> handlers in the Storyboard to code?<br>',

    { questionType: 'multiple choice',
        choices: [['We told each Storyboard view controller which custom class it used by setting the name in the Identity Inspector', false, 'Please try again.'],
                  ['We created an Interface Builder Outlet (@IBOutlet)', false, 'Please try again.'],
                  ['We created an Interface Builder Action (@IBAction)', true, 'Correct!'],
                  ['None of the above', false, 'Please try again.']]
    },
];
