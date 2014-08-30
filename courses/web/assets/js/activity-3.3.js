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
                
  '<b>1.</b> Here is one valid way of serving html from AppEngine:<br>',

	'<img src="assets/img/appengine_not_using_jinja.png" alt="AppEngine not using Jinja.png"><br>',

	'<br>Would that system quickly become very painful when your website gets bigger?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['Yes.  In fact, it\'s kinda painful to look at even 3 lines.  I\'d hate to write hundreds of lines like that.', true, 'Correct!' ],
				['No.  I see no problems with that approach scaling well', false, 'Please try again.' ] ]
	},
	
  '<br><br><b>2.</b> Writing html code within Python modules is obviously the wrong way to do things, but why would you use a Jinja template instead of just serving a regular HTML file?<br>',

	{
		questionType : 'multiple choice',
		choices : [
				['There is no real difference between a Jinja template and a noraml static HTML file', false, 'Please try again.' ],
				['Jinja templates give you the ability to put values from the Datastore into your html page (even though we aren\'t using that critical feature yet)', true, 'Correct!' ],
				['You are required to use Jinja and can\'t use static HTML files with AppEngine', false, 'Please try again.' ] ]
	},

  '<br><br><b>3.</b> What steps are required to use Jinja templates',
  
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'Adding Jinja2 to the libraries section of the app.yaml file so AppEngine knows we need to use Jinja2', 'Creating an instance variable of the Jinja Environment', 'Creating an HTML file to use as the Jinja template', 'Rendering a template from the get handler. Such as self.response.out.write(template.render({}))'],
					correctIndex : [0,1,2,3]
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hint: They are all required.',
	}
	
	
	
	
];
