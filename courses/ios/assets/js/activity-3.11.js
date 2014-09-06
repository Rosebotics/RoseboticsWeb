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

                '<b>1.</b> My Weatherpics client app can perform the following tasks:<br>',

            {
              questionType : 'multiple choice group',
              questionsList : [
                  {
                    questionHTML : '',
                    choices : [ 'Works with the deployed app',
                                'Shows Loading Weatherpics with spinner before initial data load (might be VERY brief)',
                                'Displays a list of Weatherpic captions on load',
                                'Does a refresh of the Weatherpic captions on a table pull down (refresh control)',
                                'Displays a detail view of the Weatherpic to show the image',
                                'Works with localhost as well',
                                'Shows No Weatherpics if there are none (good test for localhost)',
                                'Can create a new Weatherpic by typing in an imageUrl',
                                'Can create a new Weatherpic by typing leaving the imageUrl blank to get a random image url',
                                'Can delete a Weatherpic',
                                'Can edit a caption of a Weatherpic',
                                'Displays the iOS Create, Delete, and Edit actions on the web app (localhost or deployed)' ],
                    correctIndex : [0,1,2,3,4,5,6,7,8,9,10,11]
                  }],
              allCorrectOutput : 'Nice work finishing this lab!  It was a big task!',
              someIncorrectOutput : 'Needs to be able to perform all of the requests.',
            }
];
