import * as func from "./sum";

test('adds 1 + 2 to equal 3', () => {
  expect(func.sum(1, 2)).toBe(3);
});

test('subracts 2 - 1 to equal 1', () => {
  expect(func.subtract(2,1)).toBe(1);
})