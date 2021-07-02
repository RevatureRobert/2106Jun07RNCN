import React, { useEffect, useState } from 'react';

export const Comp1: React.FC<any> = (props:any) => {

    const [pokeman, setPokeman] = useState<any>(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(p => p.json()).then(p => {
            const res = p;
            console.log(res);
            setPokeman(res);
    })
    },[])
    return (
        <div>
            <p id="pokeP">{pokeman && pokeman.forms[0].name}</p>
        </div>
    )
}