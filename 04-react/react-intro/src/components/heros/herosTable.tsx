import React from 'react';
import {Hero} from '../../models/Hero'

interface IProps extends Hero {
  bodyCount: number;
  heros: Hero[]
}

// This component should show all the heros in table form
export const HerosTable: React.FC<IProps> = (props:IProps) => {
  return(
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
        {/* React needs a key to keep track of any duplicated information
        such as in lists or tables. */}
        {props.heros.map((hero, index) => (
          <tr key={""+index}>
            <td>{hero.name}</td>
            <td>{hero.power}</td>
            <td>{hero.weakness}</td>
            <td>{hero.archNemesis}</td>
            <td>{hero.secretIdentity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}