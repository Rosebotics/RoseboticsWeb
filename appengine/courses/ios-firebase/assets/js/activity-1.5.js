var activity = [

    "<b>1.</b> We saved off two Firebase references, one to our <b>color</b> path and another to our <b>number</b> path. These were specific paths to places in our Firebase database. These location already existed in our database and they already had values.  What do you think would've happen if they had <b>NOT</b> existed already (you can try it by deleting them via the Firebase console then run your app again if you like)?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Since the data path didn't exist the app would crash when it tried to write to that location.", false, "Please try again." ],
        ["Since the data path didn't exist the write to that location wouldn't have been allowed", false, "Please try again." ],
        ["It would've added that path and written the data just fine. It was actually entirely unnecessary to have added those paths and values manually in a previous video.", true, "Correct!" ],
        ["I have no idea and have to way to test it.", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> Pushing data to the cloud (via setValue) is fun, but pretty pointless in a real app without reading data.<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["True", true, "Correct!" ],
        ["False", false, "Please try again." ] ]
  },

];
