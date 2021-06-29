import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Input } from 'reactstrap';
import { Hero } from '../../models/Hero';

interface IProps {
    hero: Hero;
    setHero: (hero: Hero) => void;
}

// This component should edit a heros information
export const HeroEditor: React.FC<IProps> = (props: IProps) => {

    const [currentHero, setCurrentHero] = useState<Hero>(props.hero)

    const submit = (event: FormEvent) => {
        event.preventDefault();
        // const hero = props.hero;
        // console.log(event.target);

        props.setHero(currentHero)
    }

    const handler = (input:ChangeEvent<HTMLInputElement>) =>{
        setCurrentHero({...currentHero, [input.target.name]: input.target.value})
        console.log(currentHero);
    }
    return (
        <div>
            <Form onSubmit={submit}>
                <Input onChange={handler} type="text" name="name" id="heroName" />
                <Input onChange={handler} type="text" name="power" id="heroSuperPower" />
                <Input onChange={handler} type="text" name="archNemesis" id="heroArchNemesis" />
                <Input onChange={handler} type="text" name="weakness" id="heroWeakness" />
                <Input onChange={handler} type="text" name="secretIdentity" id="heroSecretIdentity" />
                <Input onChange={handler} type="submit" value="submit" />
            </Form>
        </div>
    )
}