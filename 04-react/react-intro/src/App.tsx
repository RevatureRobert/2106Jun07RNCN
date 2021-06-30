import React, { useState } from "react";
import { Hero } from "./models/Hero";
import { HeroEditor } from "./components/heroEditor/HeroEditor";
import { HerosTable } from "./components/herosTable/HerosTable";
import { HeroMenu } from "./components/heroMenu/HeroMenu";

const App: React.FC<any> = (props: any) => {
  /* 
  const [appArr, setAppArr] = useState([]);
  const [pagination, setPagination] = useState(20);
  const [pageNum, setPageNum] = useState(0);
  const [itemNum, setItemNum] = useState(0);
  return (
    <someTable 
      items = {appArr.splice(itemNum,pagination + itemNum) 
      pageNumber = {pageNum}} 
      nextPage={(n) => setPageNum(pageNum+n)}
      prevPage={(n) => setPageNum(pageNum-n)} 
      />
  )


 */

  const [currentHero, setCurrentHero] = useState<number>(-1);

  const [edit, setEdit] = useState(false);

  const [heros, setHeros] = useState<Hero[]>([
    {
      name: "superman",
      archNemesis: "Lex Luthor",
      power: "like everything",
      secretIdentity: "clark kent",
      weakness: "kryptonite, and sometimes donuts",
    },
    {
      name: "superman",
      archNemesis: "Lex Luthor",
      power: "like everything",
      secretIdentity: "clark kent",
      weakness: "kryptonite, and sometimes donuts",
    },
  ]);

  const populateHeros = (her: Hero) => {
  setHeros([
    ...heros.slice(0, currentHero),
    her,
    ...heros.slice(currentHero + 1, heros.length),
  ]);
}

const addHero = (her:Hero) => heros.push(her);



  return (
    <div>
      <HeroMenu
        editor={() => setEdit(!edit)}
        buttonText={"Add Hero"}
        addClick = {() => setCurrentHero(heros.length)}
      />
      <HerosTable
        setCurrentHero={setCurrentHero}
        bodyCount={9000}
        heros={heros}
      />
      {/* <button onClick={() => setEdit(!edit)}>{edit? 'close' : 'open'} editor</button> */}
      {currentHero>-1 && (
        <HeroEditor
          close = {() => setCurrentHero(-1)}
          currentHero={heros[currentHero]}
          setHero={currentHero === heros.length ? addHero : populateHeros}
        />
      )}
    </div>
  );
}; 

export default App;
