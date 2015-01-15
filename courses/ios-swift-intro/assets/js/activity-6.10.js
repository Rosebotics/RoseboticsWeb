var activity = [

                "<b>1.</b> In making a real app we introduce whatever skills we need.  One new skill introduced in this video was the NS<b>Mutable</b>String.  What method did we use to modify the string to concatenate on another string?<br>",
            	{
            		questionType : "multiple choice",
            		choices : [
            				["mutableString + newString", false, "Please try again." ],
            				["mutableString.append(newString)", false, "Please try again." ],
            				["[mutableString appendNewString];", false, "Please try again." ],
            				["[mutableString appendString:newString];", true, "Correct!" ] ]
            	},

                "<br><br><b>2.</b> With Swift we made the rawvalue of the enum into a String to make the enum print better.  However in Objective-C the enum rawvalues are NSIntegers.  How did we work around that language difference?<br>",
            	{
            		questionType : "multiple choice",
            		choices : [
            				["We just made a function that had a switch statement for the enum then returned an NSString to represent the enum as a string.", true, "Correct!" ],
            				["We used a fancy Objective-C feature to create NSStrings as the raw values", false, "Please try again." ]]
            	},

            	"<br><br>Great.  Printing is done.  Go implement <b>pressedSquare</b> already!"

];
