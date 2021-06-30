import React, { useState } from 'react';
import { HerosTable } from './components/heros/herosTable';
import { Hero } from './models/Hero';

const App: React.FC<any> = (props:any) => {

  const [heros, setHeros] = useState<Hero>({
    name: 'Superman',
    archNemesis: 'Lex Luthor',
    power: 'Like everything',
    secretIdentity: 'Clark Kent',
    weakness: 'kryptonite'
  })

  return (
    <div>
      <HerosTable bodyCount={9000} heros={heros} />
    </div>
  );
}

export default App;