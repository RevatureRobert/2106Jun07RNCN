export class Character {
    constructor(
        public name: string,
        public level: number,
        public rpgClass: string,
        public money: number
    ) {}
    exp: number = 0;
    inventory: string = "";
  }