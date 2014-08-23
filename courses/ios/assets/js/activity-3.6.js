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
    '<b>1.</b> One of the topics in this lesson was passing in a callback block to call once all queries finished.  What is the correct syntax on a function that receives a callback block?  Select any correct answer:<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'Adding like 7 sets of parenthesis', false, 'Please try again.' ],
          [ '(returnValue (^)(inputValuesCommaSeparated)) functionName', true, 'Correct.  This shows the generic form.' ],
          [ '(void (^)()) callback', true, 'Correct.  This is one valid example.' ],
          [ '(void (^)(NSError* error)) callback', true, 'Correct.  This is one valid example.' ],
          [ '(int (^)(int a, int b)) addTwoNumbers', true, 'Correct.  This is one valid example.' ],
          [ 'I can never remember, just copy/paste for somewhere else that used a block', true, 'Correct.  Yeah, I\'m in this camp.' ] ]
    },

  '<br>If you don\'t feel comfortable with blocks, you can read more about <a href="https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html" target="_blank">Blocks from Apple</a> and see if that helps (I did not help me, but maybe it is valuable to others).',

  '<br><br><b>2.</b> If you have a query.limit of 5 but there are more than 5 results available, what is the best way to get them all?<br>',

  { questionType: 'multiple choice',
    choices: [['Raise the query.limit to 50', false, 'Please try again.  That will only work if you know for sure there are 50 or less available.'],
              ['Pass the .nextPageToken from the collection response into the next query call and use it as the .pageToken on the next query', true, 'Correct!'],
              ['Pass the .pageToken from the collection response into the next query call and use it as the .nextPageToken on the next query', false, 'Please try again.'],
              ['Set the .nextPageToken to nil', false, 'Please try again.']]},

   '<br><br><b>3.</b> Fire up your API Explorer <a href="fisherds-grade-recorder.appspot.com/_ah/api/explorer" target="_blank">yourusername-grade-recorder.appspot.com/_ah/api/explorer</a> and make a graderecorder.student.list with a low limit (say 2) such that there are more results available.<br>',

   {
            questionType : 'multiple choice group',
            questionsList : [
                {
                  questionHTML : 'Since this is the deployed version, what four field are available at the <b>top</b> level on the response?',
                  choices : [ 'pageToken', 'nextPageToken', 'items (which is an array of GradeEntries)', 'array', 'kind', 'etag' ],
                  correctIndex : [1,2,4,5]
                },
                {
                  questionHTML : 'If you run the same query on the localhost API Explorer what two fiels are available at the <b>top</b> level of the respose?',
                  choices : [ 'pageToken', 'nextPageToken', 'items (which is an array of GradeEntries)', 'array', 'kind', 'etag' ],
                  correctIndex : [1,2]
                }  ],
            allCorrectOutput : 'Well done!  It is interesting that etag and kind are only present on the deployed version.  I don\'t really care about that factoid, I just wanted you to get more practice with the API Explorer.',
            someIncorrectOutput : 'Please try again. Hints: nextPageToken and items will always be present, kind and etag are only available on the deployed version.',
          }

];
