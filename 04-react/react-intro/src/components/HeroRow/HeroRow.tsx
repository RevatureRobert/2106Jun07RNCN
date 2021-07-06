import React from "react";
import { Hero } from "../../models/Hero";

interface IProps{
  hero: Hero;
  select: () => void;
}

export const HeroRow: React.FC<IProps> = (props:IProps) => {
  return(
    <tr onClick={props.select}>
      <td id="heroName">{props.hero.name}</td>
      <td id="heroPower">{props.hero.power}</td>
      <td id="heroWeakness">{props.hero.weakness}</td>
      <td id="heroArchNemesis">{props.hero.archNemesis}</td>
      <td id="heroSecretIdentity">{props.hero.secretIdentity}</td>
    </tr>
  );
}