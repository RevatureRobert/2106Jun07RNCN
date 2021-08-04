"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dinosaur_1 = require("./Dinosaur");
test('A new Dinosaur can be created with the new keyword', () => {
    const dino = new Dinosaur_1.Dinosaur('dinosawr', 'herbivore', 'stegosaurs', 'paleo', 6000.0002, 'forest');
    expect(dino).toBeTruthy();
});
