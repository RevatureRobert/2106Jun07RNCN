import React, { useEffect, useState } from 'react';
import axios from '../../axiosConfig'
export const Comp2: React.FC<any> = (props: any) => {
    const [pokeman, setPokeman] = useState<any>(null)

    useEffect(() => {
        // fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(p => p.json()).then(p => {
        axios.get('/charizard').then(p => {
            const res = p.data;
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