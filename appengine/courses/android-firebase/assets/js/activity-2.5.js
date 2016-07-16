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
	"<b>1.</b> If mAuth is initialized to FirebaseAuth.getInstance(), how can you check if the user is already authenticated from a prior run of the app?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Check mAuth == null", false, "Try again. Close." ],
				["Check mAuth.getCurrentUser() == null", true, "Correct. " ],
				["Check mAuth.signin() == null", false, "Try again. That's used on logout." ],
				["Check firebasePath.auth() == null, where firebasePath is a path to the data we are restricting access to", false, "Try again. It actually dosn't matter which path we used to authenticate." ],
		]
	},
	"<br><br>",
	"<b>2.</b> Why did we use an OnCompleteListener when calling signInWithEmailAndPassword()?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["To go somewhere once the user is logged in", false, "Try again. If it is successful, the listener isn't needed - the AuthStateChanged listener takes care of it." ],
				["To detect a failed login attempt", true, "Correct. " ],
				["The listener's callback contains a variable that has the logged-in user's info like displayName, uid, etc.", false, "Try again. The AuthStateChangedListener has the user info." ],
		]
	},
];
