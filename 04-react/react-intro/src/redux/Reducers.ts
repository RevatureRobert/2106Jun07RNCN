import { HeroAction, IAppActions } from "./Actions";
import { IAppState, initialState } from "./Store";


export const reducers = (state: IAppState = initialState, action: IAppActions): IAppState => {
    const newState = {...state};
    switch(action.type){
        case HeroAction.ADD_HERO:
            newState.heros.push({archNemesis:'',power:'',name:'',secretIdentity:'',weakness:''});
            newState.editHeroState.currentHero= newState.heros.length-1;
            newState.editHeroState.edit=true;
            return newState;
        case HeroAction.SELECT_HERO:
            newState.editHeroState.currentHero = action.payload.selection;
            newState.editHeroState.edit=true;
            return newState;
        case HeroAction.EDIT_HERO:
            newState.heros = [
                ...newState.heros.slice(0, newState.editHeroState.currentHero),
                action.payload.hero,
                ...newState.heros.slice(newState.editHeroState.currentHero + 1, newState.heros.length),
              ];
              newState.editHeroState.currentHero=-1;
              newState.editHeroState.edit=false;
              return newState;
        default:
            return newState;
    }

}