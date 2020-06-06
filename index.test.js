const operator = require('./index')

test('adds 1 + 2 to equal 3', () => {
  expect(operator.sum(1, 2)).toBe(3);
})
test('sub 2 - 1 to equal 1', () => {
  expect(operator.sub(2, 1)).toBe(1);
})
test('adds 1 * 2 to equal 2', () => {
  expect(operator.mul(1, 2)).toBe(2);
})
test('adds 1 / 2 to equal 3', () => {
  expect(operator.div(2, 2)).toBe(1);
})



