export class Dinosaur {
  constructor(
    public name,
    public diet,
    public breed,
    public era,
    public weight,
    public habitat
  ) {}
  get nameAndEra(){
    return `The name is ${this.name} and the era is ${this.era}`;
  }
}
