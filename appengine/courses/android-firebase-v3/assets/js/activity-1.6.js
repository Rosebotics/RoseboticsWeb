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
	"<b>1.</b> Can a Key be at the bottom (a leaf) of the Firebase database JSON tree?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Sure. Just delete the value below it and the Key will exist at the bottom of the tree", false, "Try again. " ],
				["No.  If you delete the value for a key, the key is cleaned up (deleted) by Firebase automatically", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> Can a Key point to multiple primitive values in the tree?  i.e. can it point to two or more Strings?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["No. If a Key points to a primitive value then it does nothing else.", true, "Correct. " ],
				["Sure. It's a tree that can have multiple branches.", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>3.</b> Can a Key point to multiple Keys in the tree?  i.e. can it point to two or more Keys?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["No. If a Key points to a Key then it does nothing else.", false, "Try again. " ],
				["Sure. It's a tree that can have multiple branches (so long as those branches are other keys)", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>4.</b> One pattern that you see in Firebase databases is a very flat structure to the data that developers design.  Why?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["No reason. Just the convention that a lot of developers use.", false, "Try again. " ],
				["Data snapshots give you the key and everything below it. So you try not to nest data to keep things efficient. It's easy to make a query to get more data only when that extra data is needed.", true, "Correct. " ],
		]
	},
];
