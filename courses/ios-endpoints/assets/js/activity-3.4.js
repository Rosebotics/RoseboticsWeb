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

  '<b>1.</b>Put the five steps below in the appropriate order.<br>',

  {
    questionType : 'multiple choice group',
    questionsList : [
        {
          questionHTML : '<b>a.</b> Select the first step out of these five:',
          choices : [ 'Type the command: /somepath/ServiceGenerator ./moviequotes-v1.discovery --outputDir ./API',
                      'Type the command: endpointscfg.py get_discovery_doc -f rpc movie_quotes_api.MovieQuotesApi',
                      'Open a Terminal window and navigate to your MovieQuotes backend folder.',
                      'Now that you have the discovery document, build the ServiceGenerator executable (only necessary once)',
                      'Copy the MovieQuotesApi files from the API folder into your X-Code project (all but GTLMoviequotes_Sources.m file)'],
          correctIndex : 2
        },
        {
          questionHTML : '<b>b.</b> Second step:',
          choices : [ 'Type the command: /somepath/ServiceGenerator ./moviequotes-v1.discovery --outputDir ./API',
                      'Type the command: endpointscfg.py get_discovery_doc -f rpc movie_quotes_api.MovieQuotesApi',
                      'Open a Terminal window and navigate to your MovieQuotes backend folder.',
                      'Now that you have the discovery document, build the ServiceGenerator executable (only necessary once)',
                      'Copy the MovieQuotesApi files from the API folder into your X-Code project (all but GTLMoviequotes_Sources.m file)'],
          correctIndex : 1
        },
        {
          questionHTML : '<b>c.</b> Third step:',
          choices : [ 'Type the command: /somepath/ServiceGenerator ./moviequotes-v1.discovery --outputDir ./API',
                      'Type the command: endpointscfg.py get_discovery_doc -f rpc movie_quotes_api.MovieQuotesApi',
                      'Open a Terminal window and navigate to your MovieQuotes backend folder.',
                      'Now that you have the discovery document, build the ServiceGenerator executable (only necessary once)',
                      'Copy the MovieQuotesApi files from the API folder into your X-Code project (all but GTLMoviequotes_Sources.m file)'],
          correctIndex : 3
        }, {
          questionHTML : '<b>d.</b> Fourth step:',
          choices : [ 'Type the command: /somepath/ServiceGenerator ./moviequotes-v1.discovery --outputDir ./API',
                      'Type the command: endpointscfg.py get_discovery_doc -f rpc movie_quotes_api.MovieQuotesApi',
                      'Open a Terminal window and navigate to your MovieQuotes backend folder.',
                      'Now that you have the discovery document, build the ServiceGenerator executable (only necessary once)',
                      'Copy the MovieQuotesApi files from the API folder into your X-Code project (all but GTLMoviequotes_Sources.m file)'],
          correctIndex : 0
        } , {
            questionHTML : '<b>d.</b> Final step:',
            choices : [ 'Type the command: /somepath/ServiceGenerator ./moviequotes-v1.discovery --outputDir ./API',
                        'Type the command: endpointscfg.py get_discovery_doc -f rpc movie_quotes_api.MovieQuotesApi',
                        'Open a Terminal window and navigate to your MovieQuotes backend folder.',
                        'Now that you have the discovery document, build the ServiceGenerator executable (only necessary once)',
                        'Copy the MovieQuotesApi files from the API folder into your X-Code project (all but GTLMoviequotes_Sources.m file)'],
            correctIndex : 4
          } ],
    allCorrectOutput : 'Well done!',
    someIncorrectOutput : 'Please try again. Hints: ...',
  },



  '<br><br><b>2.</b> If you make an API change to your backend you need to delete the old generated code, rerun the Terminal commands (get_discovery_doc and ServiceGenerator steps), then copy in the new files.<br>',

  {
    questionType : 'multiple choice group',
    questionsList : [
        {
            questionHTML : 'What are 2 great tricks in Terminal to make it easier to type the magic commands again using Terminal\'s built in memory of what you\'ve typed before.',
            choices : [ 'Tab',
                        'Up arrow',
                        'Crtl R',
                        'Spacebar',
                        'Right arrow'],
            correctIndex : [1, 2]
          } ],
    allCorrectOutput : 'Well done! If you just typed them recently Up Arrow is your best choice.  If it\'s been days, months, or years then your best bet is Ctrl R and type anything from the command that you can remember. :) I remember get_d and ServiceG, then I use right arrow to edit the command or hit enter to run it.',
    someIncorrectOutput : 'Please try again. Hints: Select only 2.  Tab is a useful Terminal trick (it does autocomplete), but their are two tricks BETTER than Tab.',
  },

  '<br>Note, these tricks will be VERY handy for you in the lab as well.  The next time you type these commands always use Terminal\'s memory for what you typed last time, and then edit only the arguments to the commands for the next backend (which will be the Weatherpics lab).<br>',

];
