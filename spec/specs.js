describe('palindrome', function() {
  it("takes single letter and returns false", function() {
   expect(palindrome("a")).to.equal(false);
  });
});

describe('palindrome', function() {
  it("converts the word into an array of single letters", function() {
   expect(palindrome("apple")).to.eql(["a", "p", "p", "l", "e"]);
  });
});
