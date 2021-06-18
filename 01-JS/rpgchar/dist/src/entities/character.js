"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, level, rpgClass, money) {
        this.name = name;
        this.level = level;
        this.rpgClass = rpgClass;
        this.money = money;
        this.exp = 0;
        this.inventory = "";
    }
}
exports.Character = Character;
