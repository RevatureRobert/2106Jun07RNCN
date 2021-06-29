import React, { useState } from 'react';
import {Hero} from '../../models/Hero'
import { HeroRow } from '../HeroRow/HeroRow';

interface IProps {
    bodyCount: number;
    heros: Hero[]
}

// This component should show all the heros in table form
export const HerosTable: React.FC<IProps> = (props: IProps) => {
    return (
        <table>
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
                {props.heros.map((hero, index) => (<HeroRow hero = {hero} key = {index}/>))}
            </tbody>
        </table>
    )
}