import React, { useState } from "react";
import { Hero } from "./models/Hero";
import { HerosTable } from "./components/herosTable/herosTable";

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
    }
  ]);

  return (
    <div>
      <HerosTable bodyCount={9000} heros={heros} />
    </div>
  );
};

export default App;
