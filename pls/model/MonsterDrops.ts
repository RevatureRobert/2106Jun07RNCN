export interface IMonsterDrops{
    name: string,
    type: string,
    monsters: string[],
    dropRate:number,
    minWorldRank:number,
    rarity:string
}

class MonsterDrops implements IMonsterDrops {
    public name: string;
    public type: string;
    public monsters:string[];
    public dropRate:number;
    public minWorldRank: number;
    public rarity:string;

    constructor(name:string, type:string, monsters:string[], dropRate:number, minWorldRank:number, rarity:string) {
        this.name = name; 
        this.type = type;
        this.monsters = monsters;
        this.dropRate = dropRate;
        this.minWorldRank = minWorldRank; 
        this.rarity = rarity;
    }

}
export default MonsterDrops;