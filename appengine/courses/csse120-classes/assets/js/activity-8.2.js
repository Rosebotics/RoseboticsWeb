var activity = [

  "<br><br><b>1.</b>Indicate which pattern is most suitable for a solution to this problem.",
  "<pre>What comes in:<br>  -- a sequence of numbers<br>What goes out: Returns the INDEX of the first negative number in the given sequence of numbers,<br> or None if the sequence contains no negative numbers.<br>Side effects: None.<br>Examples: If the argument is:<br>  -- [4, 30, -19, 8, -3, -50, 100], this function returns 2<br>    since the first negative number is -19, which is at index 2<br>  -- [-8, 44, 33], this function returns 0<br>    since the first negative number is -8, which is at index 0<br>  -- [1, 29, 22, 8], this function returns None<br>    since the list contains no negative numbers<br></pre>",
  {
    questionType: "multiple choice",
    choices: [
      ["The FIND pattern", true, "Correct!"],
      ["The 'Looking two places in the sequence at once' pattern", false, "Please try again."],
      ["The 'Looking at two sequences in parallel' pattern", false, "Please try again."],
      ["The MAX/MIN pattern", false, "Please try again."],
    ]
  },

  "<br><br><b>2.</b> Indicate which pattern is most suitable for a solution to this problem.",
  "<pre>What comes in:<br>  -- a non-empty sequence of strings<br>What goes out: Returns the shortest string in the given sequence<br>of strings.  If there is a tie for shortest string, returns the one<br>(among the ties) whose index is smallest.<br>Side effects: None.<br>Examples:<br>  If the argument is:<br>    ['all', 'we',  'are saying', 'is', 'give', 'peace', 'a chance']<br>  then this function returns  'we'<br><br>  If the argument is:<br>    ['all we',  'are saying', 'is give', 'peace', 'a chance']<br>  then this function returns  'peace'<br><br>  If the argument is:<br>    ['all we are saying', 'is give', 'peace a chance']<br>  then this function returns  'is give'<br><br>  If the argument is ['abc'], then this function returns  'abc'.<br></pre>",
  {
    questionType: "multiple choice",
    choices: [
      ["The FIND pattern", false, "Please try again."],
      ["The 'Looking two places in the sequence at once' pattern", false, "Please try again."],
      ["The 'Looking at two sequences in parallel' pattern", false, "Please try again."],
      ["The MAX/MIN pattern", true, "Correct!"],
    ]
  },
  "<br><br><b>3.</b> Indicate which pattern is most suitable for a solution to this problem.",
  "<pre>What comes in:<br>  -- a sequence of numbers<br>  -- a positive integer  n  that is less than or equal to<br>       the length of the given sequence<br>What goes out:  INDEX of the largest number in the first n numbers<br>  of the given sequence of numbers.  If there is a tie for largest<br>  number, returns the smallest of the indices of the tied numbers.<br>Side effects: None.<br>Examples:<br>  If the first argument is:<br>     [90, 0, 100, 200, -5, 100, -10, 200, 15]<br>  and the second argument  n  is 3,<br>  then this function returns  2  (because 100, at index 2,<br>  is the largest of the first 3 numbers in the list).<br><br>  Another example: for the same list as above, but with n = 2,<br>  this function returns  0  (because 90, at index 0,<br>  is the largest of the first 2 numbers in the list).<br><br>  Yet another example:  For the same list as above, but with n = 9,<br>  this function returns  3  (because 200, at indices 3 and 7,<br>  is the largest of the first 9 numbers in the list,<br>  and we break the tie in favor of the smaller index).<br></pre>",
  {
    questionType: "multiple choice",
    choices: [
      ["The FIND pattern", false, "Please try again."],
      ["The 'Looking two places in the sequence at once' pattern", false, "Please try again."],
      ["The 'Looking at two sequences in parallel' pattern", false, "Please try again."],
      ["The MAX/MIN pattern", true, "Correct!"],
    ]
  },
  "<br><br><b>4.</b> Indicate which pattern is <b>most</b> suitable for a solution to this problem.",
  "<pre>What comes in:<br>  -- a string s<br>What goes out: Returns the number of times a letter is repeated<br>  twice-in-a-row in the given string s.<br>Side effects: None.<br>Examples:<br>  -- number_of_stutters('xhhbrrs')  returns 2<br>  -- number_of_stutters('xxxx')     returns 3<br>  -- number_of_stutters('xaxaxa')   returns 0<br>  -- number_of_stutters('xxx yyy xxxx')  returns 7<br>  -- number_of_stutters('xxxyyyxxxx')    returns 7<br>  -- number_of_stutters('')  returns 0<br></pre>",
  {
    questionType: "multiple choice",
    choices: [
      ["The FIND pattern", false, "Please try again."],
      ["The 'Looking two places in the sequence at once' pattern", true, "Correct!"],
      ["The 'Looking at two sequences in parallel' pattern", false, "Please try again."],
      ["The MAX/MIN pattern", false, "Please try again."],
    ]
  },
  "<br><br><b>5.</b> Indicate which pattern is <b>most</b> suitable for a solution to this problem.",
  "<pre>What comes in:<br>  -- a string s that (in this simple version of the palindrome<br>       problem) contains only lower-case letters<br>       (no spaces, no punctuation, no upper-case characters)<br>What goes out: Returns  True  if the given string s is a palindrome,<br>  i.e., reads the same backwards as forwards.<br>  Returns  False  if the given string s is not a palindrome.<br>Side effects: None.<br>Examples:<br>   abba  reads backwards as   abba   so it IS a palindrome<br>but<br>   abbz  reads backwards as   zbba   so it is NOT a palindrome<br><br>Here are two more examples:  (Note: I have put spaces into the<br>strings for readability; the real problem is the string WITHOUT<br>the spaces.)<br>   a b c d e x x e d c b a  reads backwards as<br>   a b c d e x x e d c b a<br>     so it IS a palindrome<br> but<br>   a b c d e x y e d c b a  reads backwards as<br>   a b c d e y x e d c b a<br>     so it is NOT a palindrome<br></pre>",
  {
    questionType: "multiple choice",
    choices: [
      ["The FIND pattern", false, "Please try again. This answer is suitable, but it is not the MOST suitable answer."],
      ["The 'Looking two places in the sequence at once' pattern", true, "Correct!"],
      ["The 'Looking at two sequences in parallel' pattern", false, "Please try again."],
      ["The MAX/MIN pattern", false, "Please try again."],
    ]
  },
  "<br><br><b>6.</b> Indicate which pattern is most suitable for a solution to this problem.",
  "<pre>What comes in:<br>  -- two sequences that have the same length<br>What goes out: Returns  the number of indices at which the two<br>  given sequences have the same item at that index.<br>Side effects: None.<br>Examples:<br>  If the sequences are:<br>      (11, 33, 83, 18, 30, 55)<br>      (99, 33, 83, 19, 30, 44)<br>  then this function returns  3<br>  since the two sequences have the same item at:<br>    -- index 1 (both are 33)<br>    -- index 2 (both are 83)<br>    -- index 4 (both are 30)<br><br>  Another example:  if the sequences are:<br>      'how are you today?'<br>      'HOW? r ex u tiday?'<br>  then this function returns  8  since the sequences are the same<br>  at indices 5 (both are 'r'), 10 (both are 'u'), 11 (both are ' '),<br>  12 (both are 't'), 14 (both are 'd'), 15 (both are 'a'),<br>  16 (both are 'y') and 17 (both are '?') -- 8 indices.<br></pre>",
  {
    questionType: "multiple choice",
    choices: [
      ["The FIND pattern", false, "Please try again."],
      ["The 'Looking two places in the sequence at once' pattern", false, "Please try again."],
      ["The 'Looking at two sequences in parallel' pattern", true, "Correct!"],
      ["The MAX/MIN pattern", false, "Please try again."],
    ]
  }
];