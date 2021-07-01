import React from "react";
import { HeroEditor } from "./components/heroEditor/HeroEditor";
import { HeroMenu } from "./components/heroMenu/HeroMenu";
import { HerosTable } from "./components/herosTable/HerosTable";
import { IAppState } from "./redux/Store";
import { useSelector } from "react-redux";

const App: React.FC<any> = (props: any) => {

  const currentHero = useSelector((state: IAppState) => state.editHeroState.currentHero)
  return (
    <div>
      <HeroMenu/>
      <HerosTable />
      {currentHero > -1 && <HeroEditor />}
    </div>
  );
};

export default App;
