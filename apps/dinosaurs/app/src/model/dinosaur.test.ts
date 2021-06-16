import { Dinosaur } from "./Dinosaur";

test('A new Dinosaur can be created with the new keyword', () => {
  const dino = new Dinosaur('dinosawr', 'herbivore', 'stegosaurs', 'paleo', 234, 'forest');
  expect(dino).toBeTruthy();
});