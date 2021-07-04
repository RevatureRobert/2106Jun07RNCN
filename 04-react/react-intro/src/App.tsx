import React from "react";
import { HeroEditor } from "./components/heroEditor/HeroEditor";
import { HeroMenu } from "./components/heroMenu/HeroMenu";
import { HerosTable } from "./components/herosTable/HerosTable";
import { IAppState } from "./redux/Store";
import { useSelector } from "react-redux";
import {Comp1} from './components/sample/Comp1'
import {Comp2} from './components/sample/Comp2'

const App: React.FC<any> = (props: any) => {

  const currentHero = useSelector((state: IAppState) => state.editHeroState.currentHero)
  return (
    <div>
      <HeroMenu/>
      <HerosTable />
      {currentHero > -1 && <HeroEditor />}
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  );
};

export default App;
