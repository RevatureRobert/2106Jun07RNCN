import {Character} from "./character";

test('A new Dinosaur can be created with the new keyword', () => {
    const guy = new Character('guy', 5, 'guy');
    expect(guy).toBeTruthy;
})