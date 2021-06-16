export class Dinosaur {
    constructor(name, diet, breed, era, weight, habitat) {
        this.name = name;
        this.diet = diet;
        this.breed = breed;
        this.era = era;
        this.weight = weight;
        this.habitat = habitat;
    }
    get nameAndEra() {
        return `The name is ${this.name} and the era is ${this.era}`;
    }
}
