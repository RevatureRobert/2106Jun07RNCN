import React from 'react';
import { HeroEditor } from './components/heroEditor/HeroEditor';
import { HerosTable } from './components/heros/herosTable';
import { HeroMenu } from './components/heroMenu/HeroMenu';
import { useSelector } from 'react-redux';
import { IAppState } from './redux/Store';

const App: React.FC<any> = (props:any) => {
  const currentHero = useSelector((state:IAppState) => state.editHeroState.currentHero)

  return (
    <div>
      <HeroMenu />
      <HerosTable />
      {currentHero > -1 && <HeroEditor />}
    </div>
  );
}

export default App;