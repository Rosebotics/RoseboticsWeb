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

		'<b>1.</b> For each query what order would the MovieQuotes be in?<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a. </b> MovieQuote.query().order(MovieQuote.movie)',
						choices : [ 'Alphabetical order by movie title',
								'Reverse alphabetical order by movie title',
								'Reverse alphabetical order by quote',
								'Seemingly random order' ],
						correctIndex : 0
					},
					{
						questionHTML : '<b>b. </b> MovieQuote.query().order(-MovieQuote.quote)',
						choices : [ 'Alphabetical order by movie title',
								'Reverse alphabetical order by movie title',
								'Reverse alphabetical order by quote',
								'Seemingly random order' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>c. </b> MovieQuote.query()',
						choices : [ 'Alphabetical order by movie title',
								'Reverse alphabetical order by movie title',
								'Reverse alphabetical order by quote',
								'Seemingly random order' ],
						correctIndex : 3
					} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.',
		},

		'<br><br><b>2.</b> What are the 3 mechanisms mentioned that we\'ll use to execute queries to pull entities from the Datastore?',

		{
			questionType : 'multiple choice group',
			questionsList : [ {
				questionHTML : '',
				choices : [
						'query.execute()',
						'query.fetch(sometimesWithALimit)',
						'using for loop in Python (which btw implicitly uses a function called iter() if you care) to loop over a query',
						'passing the query into a Jinja template and doing the for loop there (which is VERY similar to a Python for loop)',
						'Using the query directly' ],
				correctIndex : [ 1, 2, 3 ]
			} ],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again. Hint: .execute() is not a real function and the words "Using the query directly" don\'t mean anything at all.  You are now dumber for having read them.  Sorry about that.',
		},

		'<br><br><b>3.</b> In order to loop over the query with Jinja there were some crazy delimiters around the code.  What delimiters (symbols) went around Jinja <b>code</b> that needed to execute (i.e. the for loop)?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '(( code to execute ))', false, 'Please try again.' ],
					[ '{{ code to execute }}', false, 'Please try again.' ],
					[ '{% code to execute %}', true, 'Correct!' ],
					[ '<< code to execute >>', false, 'Please try again.' ] ]
		},

		'<br><br><b>4.</b> Within the for loop some values needed to be printed.  In Python you say print variableBlah, but in Jinja you use different delimiters (symbols).  What symbols print the result of an expression to the template?<br>',

		{
			questionType : 'multiple choice',
			choices : [
					[ '(( expression to print ))', false, 'Please try again.' ],
					[ '{{ expression to print }}', true, 'Correct!' ],
					[ '{% expression to print %}', false, 'Please try again.' ],
					[ '<< expression to print >>', false, 'Please try again.' ] ]
		},

		'<br><br>Note, those are the only two types of Jinja delimiters.  You have now learned them all. :)  One for execute and one for print.',

		'<br><br><b>5.</b> The hardest (most unexpected) part of this video was fixing the Eventual vs Strong Consistency issue.<br>',
		{
			questionType : 'multiple choice group',
			questionsList : [
					{
						questionHTML : '<b>a. </b> Describe the problem',
						choices : [ 'MovieQuotes just enterred were not getting saved',
								'MovieQuotes were not in the correct order',
								'When a Datastore entity is "put" into the Datastore really what happens is an event is created to do the "put" eventually, but flow is returned for speed reasons immediately (the real "put" is slow and done later on another thread).  Then the page was reloading <b>before</b> the "put" actually finished and new quotes weren\'t displayed.',
								'It was too slow to load the page.' ],
						correctIndex : 2
					},
					{
						questionHTML : '<b>b. </b> Describe the solution we used',
						choices : [ 'Hardcode a 0.25 second delay to allow time for the put to finish.',
								'Click Refresh on the page to see the new quote',
								'Add JavaScript to automatically refresh the page until the new data was present',
								'We added a parent key to all MovieQuote entities, then did an Ancesotr Query for entities that had that parent key.  Ancestor Queries will look for unfinished events within the entity group and wait for them to complete before running the query.' ],
						correctIndex : 3
					},
					{
						questionHTML : '<b>c. </b> What is the potential problem with this solution',
						choices : [ 'None.',
								'If you had a million users you wouldn\'t want to lock down the entire Datastore using a single shared parent for all users.  If you were worried about scaling to milllions of people there needs to be a more clever mechanism in place where there are MANY entity groups using different parent keys if Strong Consistency is required.',
								'It works too well and that is never good.' ],
						correctIndex : 1
					}],
			allCorrectOutput : 'Well done!',
			someIncorrectOutput : 'Please try again.  Hint: The long answer is the correct one in each case.',
		},
		
		'<br><br>Note, if you really want to learn more about the Datastore you could visit this link <a href="https://developers.google.com/appengine/docs/python/ndb/" target="_blank">https://developers.google.com/appengine/docs/python/ndb/</a> and read the NDB sections highlighted in the image below (using the real left panel on that page for navigation).  It is difficult reading but there is a lot of good information there, if you want all the facts.  (totally optional exercise)<br>',
		

		'<img src="assets/img/ndb_reading.png" alt="NDB Reading"><br>',
		
		
		
];
