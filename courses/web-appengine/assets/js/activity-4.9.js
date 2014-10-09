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
'<b>1.</b> If you wanted a property that was a List of floating point values, which property would you use?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['ndb.ListProperty()', false, 'Please try again.' ],
			['ndb.ListProperty(Float)', false, 'Please try again.' ],
			['ndb.FloatProperty(repeated)', false, 'Please try again.' ],
			['ndb.FloatProperty(repeated=True)', true, 'Correct!  All other answers would just be syntax errors.' ] ]
},

'<br><br><b>2.</b> If you wanted to simply organize your data model some (say it\'s has 20+ properties that naturally group together into 4 groups of 5 each), what property might you use to do some organizational grouping?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['ndb.StringProperty()', false, 'Please try again.' ],
			['ndb.BlobProperty()', false, 'Please try again.' ],
			['ndb.StructuredProperty()', true, 'Correct!  That is one common use of StructuredProperty' ],
			['ndb.JsonProperty()', false, 'Please try again.' ] ]
},

'<br><br><b>3.</b> If you wanted to do a query for a Dog that had a breed of Malinois or German Shepherd, how would you do it?<br>',

{
	questionType : 'multiple choice',
	choices : [
			['Dog.query(Dog.breed=="Malinois", Dog.breed="German Shepherd")', false, 'Please try again.' ],
			['Dog.query().filter(Dog.breed=="Malinois").filter(Dog.breed="German Shepherd")', false, 'Please try again.' ],
			['Dog.query(Dog.breed=="Malinois" or Dog.breed="German Shepherd")', false, 'Please try again.' ],
			['Dog.query(ndb.OR(Dog.breed=="Malinois", Dog.breed="German Shepherd"))', true, 'Correct!' ] ]
},

];

