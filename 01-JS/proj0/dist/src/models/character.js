export class Character {
    constructor(name, level, rpgClass) {
        this.name = name;
        this.level = level;
        this.rpgClass = rpgClass;
    }
    get equipment() {
        let equips = Object.keys(this);
        equips.filter(e => e.match(/^Equipment_/) != null);
        return equips.map(x => this[x]);
    }
}
