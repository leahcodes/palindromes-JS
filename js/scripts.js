var palindrome = function(word) {
  var wordReverse = word.split("").slice().reverse().join("");
  if (word == wordReverse && word.length > 1) {
    return true;
  } else {
    return false;
  }
};
