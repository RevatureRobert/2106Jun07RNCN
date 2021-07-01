import React from 'react';
import { Table } from 'reactstrap';
import { Hero } from '../../models/Hero';
import { HeroRow } from '../HeroRow/HeroRow';
import './HerosTable.css';

interface IProps {
    bodyCount: number;
    heros: Hero[];
    setCurrentHero: (num:number) => void;
}

// This component should show all the heros in table form
export const HerosTable: React.FC<IProps> = (props: IProps) => {
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
                {props.heros.map((hero, index) => (<HeroRow select={() => props.setCurrentHero(index)} hero = {hero} key = {index}/>))}
            </tbody>
        </Table>
    )
}