import { Hero } from "../models/Hero";


export interface IEditHeroState {
    currentHero: number;
    edit: boolean;
}

export interface IAppState {
    editHeroState: IEditHeroState;
    heros: Hero[];
}

export const initialState: IAppState = {
    editHeroState: {
        currentHero: -1,
        edit: false
    },
    heros: [
        {
          name: "superman",
          archNemesis: "Lex Luthor",
          power: "like everything",
          secretIdentity: "clark kent",
          weakness: "kryptonite, and sometimes donuts",
        },
        {
          name: "Deadpool",
          archNemesis: "Wolverine, but love Hughey",
          power: "unnecessary regeneration",
          secretIdentity: "Ryan reynolds aka wade wilson",
          weakness: "off switches, damsels in distress, and also donuts",
        },
      ]
}
