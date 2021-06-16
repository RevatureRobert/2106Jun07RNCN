export class Dinosaur {
    constructor(name, diet, breed, era, weight, habitat){
        this.name = name;
        this.diet = diet;
        this.breed = breed;
        this.era = era;
        this.weight = weight;
        this.habitat = habitat;
    }
    name;
    diet;
    breed;
    era;
    weight;
    habitat;

    /* If these variables were private denoted by a #,
       we would need getters and setters
    get name(){
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
    */
}