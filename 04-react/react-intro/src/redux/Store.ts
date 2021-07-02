import { Hero } from "../models/Hero";

export interface IEditHeroState{
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
      name: 'Superman',
      archNemesis: 'Lex Luthor',
      power: 'Like everything',
      secretIdentity: 'Clark Kent',
      weakness: 'kryptonite'
    },
    {
      name: 'Batman',
      archNemesis: 'Superman',
      power: 'Money',
      secretIdentity: 'Bruce Wayne',
      weakness: 'bright colors'
    },
  ]
}