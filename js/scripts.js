var palindrome = function(input) {
  var inputNew = input.replace(/\W+/g, '').replace(/\s+/g, '');
  var inputReverse = inputNew.split("").slice().reverse().join("").toLowerCase();
  if ((inputNew.toLowerCase()) == inputReverse && inputNew.length > 1) {
    return "Yes!";
  } else {
    return "Nope!";
  }
};


$(document).ready(function()  {
  $("form#palindrome").submit(function(event) {
    var word = ($("input#word").val());
    var result = palindrome(word);

    $(".palindromized").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
