var activity = [

    "<b>1.</b> If you delete the last quote from Firebase what happens?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["The quotes path is completely removed (Firebase automatically cleans it up), but that's no biggy.  It'll get added back whenever a quote gets added.", true, "Correct!" ],
        ["The quotes path is completely removed, and that's a bit of a pain since you need to make sure to manually add it back before you can add any more quotes.", false, "Please try again." ],
        ["The quotes path is still present.  There are simply no quotes on the path.  No biggy", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> For delete we used the method indexOf to find the index of the movie quote in the array.  Why didn't we just use an old school for loop that uses an index?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Swift doesn't have a traditional for loop that uses an index.  You have to use an enhanced for loop (which has no index).", false, "Please try again." ],
        ["I'm lazy.  I copied the code from .ChildChanged which used an enhanced for loop style with no index, so that resulted in needing to use indexOf. Another approach would easily avoid the necessity of calling indexOf", true, "Correct!  If you wanted, could you refactor the code easily to avoid using indexOf? :)" ] ]
  }

];
