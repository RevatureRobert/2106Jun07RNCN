import React from 'react';
import { HeroEditor } from './components/heroEditor/HeroEditor';
import { HerosTable } from './components/heros/herosTable';
import { HeroMenu } from './components/heroMenu/HeroMenu';
import { useSelector } from 'react-redux';
import { IAppState } from './redux/Store';
import { Comp1 } from './components/sample/Comp1';
import { Comp2 } from './components/sample/Comp2';

const App: React.FC<any> = (props:any) => {
  const currentHero = useSelector((state:IAppState) => state.editHeroState.currentHero)

  return (
    <div>
      <HeroMenu />
      <HerosTable />
      {currentHero > -1 && <HeroEditor />}
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  );
}

export default App;