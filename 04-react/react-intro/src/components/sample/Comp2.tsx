import axios from '../../axiosConfig';
import React, { useEffect, useState } from "react";

export const Comp2: React.FC<any> = (props:any) => {
  const[pokemon, setPokemon] = useState<any>(null)
  useEffect(() => {
    axios.get('/charizard').then( p => {
      setPokemon(p.data)
    });
  },[]);
  return (
    <div>
      <p id="pokeP2">{pokemon && pokemon.forms[0].name}</p>
    </div>
  )
}