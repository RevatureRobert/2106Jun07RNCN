import subtract from "./subtract";

test('Properly subtracts two numbers (1+2)', () => {
  expect(subtract(1,2)).toBe(-1)
});