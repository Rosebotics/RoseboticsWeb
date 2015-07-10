var activity = [

    "<b>1.</b> Why was the simulator crashing all the time?  Why did Resetting it (or removing the app) fix the issue?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["Just a random bug that happens sometimes.", false, "Please try again." ],
        ["When you change an Entity in the Core Data model it updates the version of the underlying SQLite table.  When version 2 tries to open a table made with version 1 the default behavior (which can be changed by adding migration code btw) is to crash.  A reset clears old data an fixes the issue if you are just doing development though.", true, "Correct" ],
        ["No idea.  My computer crashes all the time.", false, "Please try again." ] ]
  },

    "<br><br><b>2.</b> When using the Simulator what is the shortcut key to click what the device's Home button?<br>",
  {
    questionType : "multiple choice",
    choices : [
        ["There is no shortcut key, you must find it in the menu.", false, "Please try again." ],
        ["Ctrl + Shift + H", false, "Please try again." ],
        ["Cmd + Shift + H", true, "Correct!" ],
        ["Ctrl + H", false, "Please try again." ] ]
  },

];
