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
  '<b>1.</b> Which MovieQuotes API method does update use?<br>',
  '<img src="assets/img/moviequotes_api.png" alt="Moviequotes API methods"><br>',

  { questionType: 'multiple choice',
    choices: [['moviequotes.moviequote.delete', false, 'Please try again'],
              ['moviequotes.moviequote.insert', true, 'Correct.  Same method we used when adding a quote.'],
              ['moviequotes.moviequote.list', false, 'Please try again']]
  },

  '<br><br><b>2.</b> To play with adding and updating quotes I did these three queries to http://fisherds-movie-quotes.appspot.com/_ah/api/explorer What will the end result be?<br>',
  '<br><h2>Insert #1</h2>',
  '<img src="assets/img/explorer_adding_a_quote.png" alt="Moviequotes API explorer"><br>',
  'That response gave me an entityKey that I used in Query #2 (assume I copy pasted it correctly)<br>',
  '<br><h2>Insert #2</h2>',
  '<img src="assets/img/explorer_updating_a_quote.png" alt="Moviequotes API explorer"><br>',
  '<br><h2>Insert #3</h2>',
  '<img src="assets/img/explorer_updating_a_quote_missing_field.png" alt="Moviequotes API explorer"><br>',

    { questionType: 'multiple choice',
      choices: [['You\'d now have 3 quotes.', false, 'Please try again'],
                ['You\'d now have 2 quotes', false, 'Please try again'],
                ['You\'d now have 1 quote with quote = "My name is Inigo Montoya. You killed my father. Prepare to die." and movie = "Princess Bride"', false, 'Please try again'],
                ['You\'d now have 1 quote with quote = "My name is Inigo Montoya. You killed my father. Prepare to die." and movie = "The Princess Bride"', false, 'Please try again'],
                ['You\'d now have 1 quote with quote = "Hello. My name is Inigo Montoya. You killed my father. Prepare to die." and have no movie title', false, 'Please try again. When you leave out a field it remains unchanged.'],
                ['You\'d now have 1 quote with quote = "Hello. My name is Inigo Montoya. You killed my father. Prepare to die." and movie = "The Princess Bride"', true, 'Correct! When you leave out a field it remains unchanged.']]},

   '<br>Note, if the image showed the response from the server you\'d know the answer right away. :)'

];

