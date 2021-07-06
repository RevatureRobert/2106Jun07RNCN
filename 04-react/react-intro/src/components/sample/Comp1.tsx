import React, { useEffect, useState } from "react";

export const Comp1: React.FC<any> = (props:any) => {
  const[pokemon, setPokemon] = useState<any>(null)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(p => p.json())
    .then(p => setPokemon(p));
  },[]);
  return (
    <div>
      <p id="pokeP">{pokemon && pokemon.forms[0].name}</p>
    </div>
  )
}