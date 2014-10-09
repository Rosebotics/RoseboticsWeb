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

  '<b>1.</b> Assuming you are doing localhost development, when the form is submitted where does the data go?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['To http://localhost:8080 as a GET request', false, 'Please try again.' ],
				['To http://localhost:8080/addquote as a GET request', false, 'Please try again.' ],
				['To http://localhost:8080 as a POST request with body ="quote=someQuote&movie=someMovie"', false, 'Please try again.' ],
				['To http://localhost:8080/addquote as a POST request with body ="quote=someQuote&movie=someMovie"', true, 'Correct!' ] ]
	},

  '<br><br><b>2.</b> A link element, &lta href="http://someUrl"\>&lt/a>, uses an <b>href</b> attritubute to tell the browser where to do the GET request.  What is the attribute name on a <b>form</b> that tells the browser where to do the POST request?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['href', false, 'Please try again.' ],
				['action', true, 'Correct!' ],
				['method', false, 'Please try again.' ],
				['post', false, 'Please try again.' ] ]
	},

  '<br><br><b>3.</b> When our AppEngine app gets a request on the path /addquote how does it know to use an instance of the AddQuoteAction handler?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['I have NO idea!', false, 'Please try again.' ],
				['The app.yaml file has a handler for /addquote that serves that handler for that path',  false, 'Please try again.'],
				['The app.yaml file sends all requests (for any path) to the main.app instance.  The app variable within main.py is setup to use different handlers for different paths', true, 'Correct!' ],
				['The MovieQuotesPage has no POST handler so the AddQuoteAction must handle all POST requests', false, 'Please try again.  Indeed the MovieQuotesPage has no POST handler and the AddQuoteAction handler DOES have a post handler, but there is a better answer above.' ] ]
	},
	
  '<br><br><b>4.</b> If you open a new tab and typed in <a href="http://localhost:8080/addquote" target="_blank">http://localhost:8080/addquote</a>. What would happen?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['You would get a new MovieQuote with quote and movie being empty strings, then it would redirect to http://localhos:8080', false, 'Please try again.' ],
				['Your browser would redirect you to localhost:8080 since the AddQuoteAction handler has no get method',  false, 'Please try again.'],
				['Nothing good. Your browswer would do a GET request on the /addquote path, which goes to the AddQuoteAction handler, which has no GET method.  So your server logs would have a 404 and no page would not load for the user', true, 'Correct!' ],
				['A browser does a GET request and /addquote needs a POST request so it would lock up your computer.', false, 'Please try again.  The first part is true, but it wouldn\'t lock up your computer. :)' ] ]
	}

];

