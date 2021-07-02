import { Hero } from "../models/Hero";

export enum HeroAction {
  ADD_HERO = 'Add Hero',
  REMOVE_HERO = 'Remove Hero',
  EDIT_HERO = 'Edit Hero',
  DELETE_HERO = 'Delete Hero',
  SELECT_HERO = 'Select Hero'
}

export interface IHeroActions {
  type: HeroAction,
  payload: {hero:Hero}
}

export interface IAppActions extends IHeroActions{
  type: HeroAction
  payload: {
    hero: Hero,
    selection: number
  }
}