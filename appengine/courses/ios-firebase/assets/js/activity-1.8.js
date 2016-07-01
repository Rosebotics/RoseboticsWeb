var activity = [

    "<b>1.</b> Can a Key be at the bottom (a leaf) of the Firebase database JSON tree?<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "Sure.  Just delete the value below it and the Key will exist at the bottom of the tree", false, "Please try again." ],
          [ "No.  If you delete the value for a key, the key is cleaned up (deleted) by Firebase automatically", true, "Correct!" ] ]
    },

    "<br><br><b>2.</b> Can a Key point to multiple primative values in the tree?  i.e. can it point to two or more Strings?<br>",
    {
      questionType : "multiple choice",
      choices : [ [ "No. If a Key points to a primative value then it does nothing else.", true, "Correct!" ],
          [ "Sure. It's a tree that can have multiple branches.", false, "Please try again." ] ]
    },

  "<br><br><b>3.</b> Can a Key point to multiple Keys in the tree?  i.e. can it point to two or more Keys?<br>",
  {
      questionType : "multiple choice",
      choices : [ [ "No. If a Key points to a Key then it does nothing else.", false, "Please try again." ],
          [ "Sure. It's a tree that can have multiple branches (so long as those branches are other keys", true, "Correct!" ] ]
    },

    "<br><br><b>4.</b> One pattern that you see in Firebase databases is a very flat structure to the data developers design.  Why?<br>",
    {
        questionType : "multiple choice",
        choices : [ [ "No reason. Just the convention that a lot of developers use.", false, "Please try again." ],
            [ "Data snapshops give you the key and everything below it. So you try not to nest data to keep things efficient. It's easy to make a query to get more data only when that extra data is needed.", true, "Correct!" ] ]
      },

];
