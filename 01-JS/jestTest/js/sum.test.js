const sum = require('./sum');

test('Properly adds two numbers (1+2)', () => {
  expect(sum(1,2)).toBe(3)
});