import React from 'react';
import { Table } from 'reactstrap';
import { Hero } from '../../models/Hero';
import { HeroRow } from '../HeroRow/HeroRow';
import './HerosTable.css';
import {useSelector, useDispatch} from 'react-redux'
import { IAppState } from '../../redux/Store';
import { HeroAction } from '../../redux/Actions';
interface IProps {
    // heros: Hero[];
    // setCurrentHero: (num:number) => void;
}

// This component should show all the heros in table form
export const HerosTable: React.FC<IProps> = (props: IProps) => {

    // Will use a callback function to return a portion of the state to your variable
    const heros = useSelector((state:IAppState) => state.heros);
    // Dispatch will send whatever action you define to the store's registered reducers
    const selection = useDispatch();

    // Here we create a function to use the dispatcher
    const dispatchSelection = (num: number) => {
        selection({
            type: HeroAction.SELECT_HERO,
            payload: {
                selection: num
            }
        })
    }
    return (
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
                {/* React needs a key to keep track of any 
                duplicated information such as in lists 
                or tables */}
                {heros.map((hero, index) => (<HeroRow select={() => dispatchSelection(index)} hero = {hero} key = {index}/>))}
            </tbody>
        </Table>
    )
}