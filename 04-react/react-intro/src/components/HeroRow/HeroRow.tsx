import React from 'react';
import { Hero } from '../../models/Hero';

interface IProps {
    hero: Hero;
}
export const HeroRow: React.FC<IProps> = (props: IProps) => {
    return (
        <tr>
        <td>{props.hero.name}</td>
        <td>{props.hero.power}</td>
        <td>{props.hero.weakness}</td>
        <td>{props.hero.archNemesis}</td>
        <td>{props.hero.secretIdentity}</td>
    </tr>
    )
}