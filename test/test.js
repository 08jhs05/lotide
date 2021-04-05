const assert = require('chai').assert;
const _ = require('../index');

describe("#Test all lotide functions", () => {
  it("head test: returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });

  it("tail test: returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2,3]);
  });

  it("middle test: returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("eqArrays test: returns true for [1,2,3] and [1,2,3]", () => {
    assert.strictEqual(_.eqArrays([1,2,3], [1,2,3]), true);
  });
});