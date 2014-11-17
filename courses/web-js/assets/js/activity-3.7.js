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
	"<b>1.</b> What is the magic function we used to make Task Queues easy?  Fill in this blank ______________(add_movie_quotes)<br>",

  {
    questionType : "freetext",
    correctAnswerRegex : /deferred.defer/i,
    correctAnswerOutput : "Correct!",
    incorrectAnswerOutput : "Please try again.",
    showAnswerOutput : "Here is the answer deferred.defer"
  },

  
  "<br><br><b>2.</b> In order to use that magic function call we had to say...<br>",
  '<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">builtins:<br>- deferred: on<br></code><br>',
  "What file did we add those lines to?<br>",
  {
    questionType : 'multiple choice',
    choices : [
        ['MovieQuotesController.js',  false, 'Please try again.' ],
        ['main.py',  false, 'Please try again.'] ,
        ['import_data.py',  false, 'Please try again.'] ,
        ['app.yaml', true, 'Correct!'] ]
  },


  "<br><br><b>3.</b> We also restricted the /importdata path to only admin users (owners of the app in the console.developers.google.com permissions).  How did we limit that path to only admins?<br>",

  {
    questionType : 'multiple choice',
    choices : [
        ["We checked within the ImportDataAction if <b>users.is_current_user_admin():</b> (<a target='_blank' href='https://cloud.google.com/appengine/docs/python/users/adminusers'>sample code</a>)", false, 'Please try again.  We TOTALLY could\'ve done that, but we did it a different way.' ],
        ["We modified app.yaml to only allow admins to visit that path (<a target='_blank' href='https://cloud.google.com/appengine/docs/python/config/appconfig#Python_app_yaml_Requiring_login_or_administrator_status'>sample code</a>)", true, "Correct.  The other option would've worked too, but that's not the way we did it." ] ]
  },

  "<br><br><b>4.</b> It is important that a task like adding quotes is idempotent.  What does <b>idempotent</b> mean?<br>",
  
  {
    questionType : 'multiple choice',
    choices : [
        ["It means the job has no effect on the Datastore (i.e. no effect on the state of the world)", false, 'Please try again.' ],
        ["It means the job can be run multiple times without changing the result beyond the initial application (i.e. the effect of running it once is the same as running it 100 times)", true, 'Correct.' ],
        ["It means the job will add 100+ quotes each time it is run.", false, 'Please try again.' ]]
  },

];
