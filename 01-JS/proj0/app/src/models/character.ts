export class Character {
    constructor(
        public name: string,
        public level: number,
        public rpgClass: string
    ) {}
    helmet: string;
    chestplate: string;
    boots: string;
    gloves: string;
    weapon: string;
    get equipment(){
        let equips = Object.keys(this);
        equips.filter(e => e.match(/^Equipment_/) != null);      
        return equips.map(x => this[x]); 
    }

  }