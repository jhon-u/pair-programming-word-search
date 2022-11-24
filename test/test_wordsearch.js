const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {

  it("should return 'This Array is Empty!'", function() {
    const result = wordSearch([], 'EMPTY');
    assert.strictEqual(result, 'This Array is Empty!');
  });

  it("should return 'Enter a word to search.'", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'J', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'H', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'O', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'U', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '');
    assert.strictEqual(result, 'Enter a word to search.');
  });

  it("should return true if the word is vertical", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'J', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'H', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'O', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'U', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JHONU');

    assert.isTrue(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is horizontal", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
});
