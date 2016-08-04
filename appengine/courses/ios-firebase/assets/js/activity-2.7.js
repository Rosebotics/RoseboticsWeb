var activity = [

    "<b>1.</b> When a user types their Rose-Hulman password into your app does your code know what they typed?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yes, their secret password is part of the token that Rosefire gives you, making it easy for developers to steal user passwords", false, "Please try again." ],
				["No, an important feature of OAuth is that developers don't know their user's passwords (unlike email/password).", true, "Correct!" ] ]
	},

    "<br><br><b>2.</b> Is Rosefire a good system for making sure a user is a Rose-Hulman person?  Is it safe to give authorizations (rights) to them and feel confident they are really Rose-Hulman students/faculty/staff?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yes, if they signed in via Rosefire then you are sure they used a Rose-Hulman uid + password.", true, "Correct!" ],
				["No. Never assume it's a Rose-Hulman person if they used Rosefire for login", false, "Please try again." ] ]
	},

];
