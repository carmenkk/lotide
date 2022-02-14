
const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () =>{
  it("return [2] for [1, 2, 3]",() => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("return [] for [1, 2]",() => {
    assert.deepEqual(middle([1,2]), []);
  });
  it("return [] for [1]",() => {
    assert.deepEqual(middle([1]), []);
  });
  it("return [2, 3] for [1, 2, 3, 4]",() => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

