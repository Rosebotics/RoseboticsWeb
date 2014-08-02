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
    '<b>1.</b> In order to create the query object used in this video, we used a class method on GTLQueryMoviequotes.  What was the name of that method?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'queryForMoviequoteList', true, 'Correct!  For the backend we made a list, insert, and delete API method.  This time we\'re using the *List* method.' ],
          [ 'queryForMoviequoteInsertWithObject', false, 'Please try again.' ],
          [ 'queryForMoviequoteDeleteWithEntityKey', false, 'Please try again.' ],
          [ 'queryForMoviequoteSomethingElse', false, 'Please try again. ' ] ]
    },


    '<br><br><b>2.</b> We set the limit to give us 30 quotes.  If there were more than 30 quotes on the server and we wanted more than just the most recent 30 quotes how would we get them?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'We can\'t get them.  30 is the max', false, 'Please try again.' ],
          [ 'Make a second query for Moviequotes setting the pageToken on that query object to the nextPageToken from this response.', true, 'Correct! A fair amount of code needed to make that happen smoothly and append the results so we did not do it here (keeping it simple).' ],
          [ '50 quotes is the most we could ever get', false, 'Please try again.' ],
          [ 'There can never be more than 30 quotes saved on the server.  So a non-issue', false, 'Please try again. ' ] ]
    },

    '<br><br><b>3.</b> If we had not set the limit to 30 would default limit size would we have gotten?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ '0 (you must set a limit)', false, 'Please try again.' ],
          [ '10', true, 'Correct!  I think they picked 10 as the default just to make the point that you should make small fast queries, then come back for more if needed.' ],
          [ '50', false, 'Please try again.' ],
          [ 'We would have gotten ALL quotes', false, 'Please try again. ' ] ]
    },

    '<br><br><b>4.</b> We couldn\'t assign the response.items array (an NSArray) to the self.quotes array (an NSMutableArray).  So what function did we call to fix that issue which created an NSMutableArray from the response.items data?<br>',

    {
      questionType : 'freetext',
      correctAnswerRegex : /mutableCopy/i,
      correctAnswerOutput : 'Correct!  mutableCopy.',
      incorrectAnswerOutput : 'Looking for mutableCopy',
      outputHeight : '40px'
    },

    '<br><br><b>5.</b> We set the query.order = "-last_touch_date_time";  If we had never run that particular query when doing localhost testing what would\'ve happen when trying to run that query on the deployed version?<br>',

    {
      questionType : 'multiple choice',
      choices : [
          [ 'Ah.... nothing different.  I don\'t even understand why you would ask that.', false, 'Please try again.' ],
          [ 'If we never ran the -last_touch_date_time query in localhost then that index would not get built when you deploy, making that query impossible to execute for the deployed app.', true, 'Correct!  Crazy I know.  You can open the index.yaml file in the backend folder to see which indexes will be built.' ] ]
    }

];
