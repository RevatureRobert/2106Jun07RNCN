import React, { ChangeEvent, FormEvent, useState } from "react";
import { Form, Input, Label } from "reactstrap";
import { Hero } from "../../models/Hero";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../redux/Store";
import { HeroAction } from "../../redux/Actions";
interface IProps {
//   setHero: (hero: Hero) => void;
//   currentHero: Hero;
//   close: () => void;
}

// This component should edit a heros information
export const HeroEditor: React.FC<IProps> = (props: IProps) => {
  // const [hero, setCurrentHero] = useState(props.currentHero);

  let current_hero = useSelector((state: IAppState) => {
    const selected = state.editHeroState.currentHero;
    return state.heros[selected];
  });

  const dispatch = useDispatch();

  const setCurrentHero = (hero: Hero) => {
    dispatch({
        type: HeroAction.EDIT_HERO,
        payload: {
            hero,
        }
    })
  }

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setCurrentHero(current_hero);
  };

  const handler = (input: ChangeEvent<HTMLInputElement>) => {
    current_hero = { ...current_hero, [input.target.name]: input.target.value }
  };
  return (
    <div>
      <Form onSubmit={submit}>
        <Label htmlFor="name">Hero Name</Label>
        <Input onChange={handler} type="text" name="name" id="heroName" />
        <Label htmlFor="power">Hero Super Power</Label>
        <Input
          onChange={handler}
          type="text"
          name="power"
          id="heroSuperPower"
        />
        <Label htmlFor="archNemesis">Hero Arch Nemesis</Label>
        <Input
          onChange={handler}
          type="text"
          name="archNemesis"
          id="heroArchNemesis"
        />
        <Label htmlFor="weakness">Hero Weakness</Label>
        <Input
          onChange={handler}
          type="text"
          name="weakness"
          id="heroWeakness"
        />
        <Label htmlFor="secretIdentity">Hero Secret Identity</Label>
        <Input
          onChange={handler}
          type="text"
          name="secretIdentity"
          id="heroSecretIdentity"
        />
        <Input onChange={handler} type="submit" value="submit" />
      </Form>
    </div>
  );
};
