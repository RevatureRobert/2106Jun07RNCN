import { stringify } from "querystring";

export interface ICharacter {
    id: number;
    bame: string;
    level: number;
    faction: string;
    rpgClass: string;
    money: number;
    player: number;
    location: string;
}

export class Character {
    constructor(
        public id: number,
        public name: string,
        public level: number,
        public faction: string,
        public rpgClass: string,
        public money: number,
        public player: string,
        public location: string,
        public exp: number = 0,
        public inventory: string = ""
    ) {
    }
    public normalize(t : Character) {
        t.level = !t.level || t.level < 0 ? 1 : t.level;
        t.exp = !t.exp ? 0 : t.exp;
        t.inventory = !t.inventory ? "" : t.inventory;
        t.faction = !t.faction ? "Unaligned" : t.faction;
        t.player = !t.player ? "NPC" : t.player;
        t.location = !t.location? "Unknown" : t.location;
        t.money = !t.money ? 0 : t.money;
        t.inventory = !t.inventory ? "" : t.inventory;
        t.exp = !t.exp ? 0 : t.exp;
        //This section makes sure the exp stays between 0 and 99
        //level up if exp above 99
        while (t.exp >= 100){
            t.exp -= 100;
            t.level += 1;
        }
        //level down if exp is below 0
        while (t.exp < 0){
            t.exp += 100;
            t.level -= 1;
        }
        //you cannot be level 0 or below, if you are, set to level 1
        t.level = t.level < 1 ? 1 : t.level;
        return t;
    }

  }