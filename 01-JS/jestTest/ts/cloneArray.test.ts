import cloneArray from "./cloneArray"

test('Properly Clones Array [1,2,3]: ', () => {
  const array : number[] = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});