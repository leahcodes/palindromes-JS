describe('palindrome', function() {
  it("takes single letter and returns false", function() {
   expect(palindrome("a")).to.equal(false);
  });
});

// describe('palindrome', function() {
//   it("converts the word into an array of single letters", function() {
//    expect(palindrome("apple")).to.eql(["a", "p", "p", "l", "e"]);
//   });
// });

// describe('palindrome', function() {
//   it("creates a second array which is the reverse of the first array", function() {
//    expect(palindrome("apple")).to.eql(["e", "l", "p", "p", "a"]);
//   });
// });

describe('palindrome', function() {
  it("returns false if wordArray is not equal to wordReverse", function() {
   expect(palindrome("apple")).to.equal(false);
  });
});

describe('palindrome', function() {
  it("returns true if wordArray is equal to wordReverse", function() {
   expect(palindrome("civic")).to.equal(true);
  });
});
