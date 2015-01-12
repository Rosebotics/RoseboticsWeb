var activity = [

    "<b>1.</b> If we had a class method that receives a double and an NSNumber that returns an NSInteger what is a valid signature line?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["- (NSInteger) myFunctionUses:(double) myDouble andNumber:(NSNumber*) myNumber;", false, "Please try again." ],
				["+ (NSInteger) myFunctionUses:(double) myDouble andNumber:(NSNumber*) myNumber;", true, "Correct!" ],
				["- (NSInteger*) myFunctionUses:(double) myDouble andNumber:(NSNumber) myNumber;", false, "Please try again." ],
				["+ (NSInteger*) myFunctionUses:(double) myDouble andNumber:(NSNumber) myNumber;", false, "Please try again." ] ]
	},

    "<br><br><b>2.</b> If you wanted to <b>call</b> the method above how would you do it?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["NSInteger x = [f myFunctionUses:42 andNumber:@42];", false, "Please try again." ],
				["NSInteger x = [Functions myFunctionUses:42 andNumber:@42];", true, "Correct!" ],
				["NSInteger* x = [f myFunctionUses:42 andNumber:42];", false, "Please try again." ],
				["NSInteger* x = [Functions myFunctionUses:42 andNumber:42];", false, "Please try again." ] ]
	},

    "<br><br><b>3.</b> If a method is NOT used externally do you need to declare the prototype in the @interface area?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["No.  Actually this example technically only called the functions from Functions.m so we could've removed all the prototypes. :) (just wanted to practice making prototypes even though they weren't required.)", true, "Correct!" ],
				["You MUST declare it in the @interface Category that is within the .m file", false, "Please try again." ],
				["You MUST declare ANY function in the .h @interface", false, "Please try again." ] ]
	},

];
