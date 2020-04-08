const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
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
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
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
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    // column 6, rows 1-7;
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'P', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'R', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'O', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'G', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'R', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'M', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PROGRAM')

    assert.isTrue(result);
  });

  it ("should return false for empty array", () => {
    const input = wordSearch([], 'PROGRAM');
    assert.isFalse(input);
  })
  it ("should return false if empty string provided as word param", () => {
    const input = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'P', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'R', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'O', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'G', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'R', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'M', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '');
    assert.isFalse(input);
  });

  it ("should return false if no word param provided", () => {
    const input = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'P', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'R', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'O', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'G', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'R', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'M', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ]);
    assert.isFalse(input);
  });

  it ("should return true even if array input lowercase", () => {
    const input = wordSearch([
      ['a', 'w', 'c', 'f', 'q', 'u', 'a', 'l'],
      ['s', 'e', 'i', 'n', 'f', 'e', 'p', 'd'],
      ['y', 'f', 'c', 'f', 'q', 'u', 'r', 'l'],
      ['h', 'm', 'j', 't', 'e', 'v', 'o', 'g'],
      ['w', 'h', 'c', 's', 'y', 'e', 'g', 'l'],
      ['b', 'f', 'r', 'e', 'n', 'e', 'r', 'b'],
      ['u', 'b', 't', 'w', 'a', 'p', 'a', 'i'],
      ['o', 'd', 'c', 'a', 'k', 'u', 'm', 's'],
      ['e', 'z', 'k', 'f', 'q', 'u', 'a', 'l'],
    ], 'PROGRAM')
    assert.isTrue(input);
  });
  
  it("should return true if array input is lowercase and search word is uppercase", () =>{
    const input = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'P', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'R', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'O', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'G', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'R', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'M', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'program');

    assert.isTrue(input);
  });
});