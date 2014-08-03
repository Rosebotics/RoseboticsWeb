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
  '<b>1.</b> In order to create the query object for adding a quote, we used a class method on GTLQueryMoviequotes.  What was the name of that method?<br>',

  {
    questionType : 'multiple choice',
    choices : [
        [ 'queryForMoviequoteList', false, 'Please try again.' ],
        [ 'queryForMoviequoteInsertWithObject:', true, 'Correct!  For the backend we made a list, insert, and delete API method.  This time we\'re using the *List* method.'],
        [ 'queryForMoviequoteDeleteWithEntityKey:', false, 'Please try again.' ],
        [ 'queryForMoviequoteSomethingElse', false, 'Please try again. ' ] ]
  },
  '<br><br><b>2.</b> Under the hood the moviequotes.moviequote.insert method uses what type of RESTful API method?  Here is an explaination of each:<br>',
  '<img width="90%" src="assets/img/restful_api_methods.png" alt="RESTful API Methods"><br>',
  '<i>Image from <a href="http://en.wikipedia.org/wiki/Representational_state_transfer">http://en.wikipedia.org/wiki/Representational_state_transfer</a></i><br>',
  { questionType: 'multiple choice',
    choices: [['GET', false, 'Please try again.'],
              ['PUT', false, 'Please try again.'],
              ['POST', true, 'Correct! POST request aren\'t quite as easy to manually make as GET request, but if you want to practice you can always use the API Explorer. '],
              ['DELETE', false, 'Please try again.']]},

  '<br><br><b>3.</b> We had to make a silly hack for localhost.  Why did we have to do that again?<br>',

  { questionType: 'multiple choice',
    choices: [['Because localhost uses http instead of https', false, 'Please try again. That is a true statement. You are right about it being true, but it is not the answer here.'],
            ['Because when you use Endpoints the POST body is actually sent in a zipped format instead of plain text that only the deployed version unzips automatically.', true, 'Correct!  Seems like they could just implement that same behavior for localhost right?  Oh well.'],
            ['Because localhost is talking to your computer and not actually sendinging data out to the web', false, 'Please try again. That is a true statement. You are right about it being true, but it is not the answer here.']]},

  '<br><br>Two videos ago when we did queryForQuotes, the moviequotes.moviequote.list response was converted to a GTLMoviequotesMovieQuoteCollection<br>',
  '<b>4.</b> In this video, the moviequotes.moviequote.insert response was converted to a ...<br>',
  { questionType: 'multiple choice',
    choices: [['GTLMoviequotesMovieQuoteCollection', false, 'Please try again.'],
              ['GTLQueryMoviequotes', false, 'Please try again.'],
              ['GTLMoviequotesMovieQuote', true, 'Correct! The response is a single GTLMoviequotesMovieQuote (the one that was just added)'],
              ['GTLServiceMoviequotes', false, 'Please try again.']]},


];
