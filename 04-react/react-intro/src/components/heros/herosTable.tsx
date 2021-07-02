import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { HeroAction } from '../../redux/Actions';
import { IAppState } from '../../redux/Store';
import { HeroRow } from '../HeroRow/HeroRow';
import './HerosTable.css';

// This component should show all the heros in table form
export const HerosTable: React.FC = () => {

  // Will use a callback function to return a portion of the state to your variable
  const heros = useSelector((state: IAppState) => state.heros);
  // Dispatch will send whatever action you define to the store's registered reducers
  const sel = useDispatch();
  
  // Here we create a function to use the dispatcher
  const dispatchSelection = (num:number) => {
    sel({
      type : HeroAction.SELECT_HERO,
      payload: {
        selection: num
      }
    })
  };

  return(
    <Table>
      <thead>
        <tr>
          <th>name</th>
          <th>power</th>
          <th>weakness</th>
          <th>archNemesis</th>
          <th>secretIdentity</th>
        </tr>
      </thead>
      <tbody>
        {/* React needs a key to keep track of any duplicated information
        such as in lists or tables. */}
        {heros.map((hero, index) => (<HeroRow
          select={() => dispatchSelection(index)}
          hero = {hero}
          key = {index}/>))}
      </tbody>
    </Table>
  );
}