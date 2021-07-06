import {describe} from '@jest/globals'; 
import { shallow, ShallowWrapper } from 'enzyme';
import { Hero } from '../../models/Hero';
import { HeroRow } from './HeroRow';

describe('renders the row instide the table', () => {
  let hero:Hero;
  let onClick:() => void;
  let rendered: ShallowWrapper;
  beforeEach(() => {
    hero = {
      archNemesis: 'humanity',
      name: 'aswoigj',
      power: 'nanana',
      secretIdentity: 'nope',
      weakness: 'everything'
    }
    onClick = () => console.log('click');
    rendered = shallow(<HeroRow hero={hero} select={onClick} />);
  });

  // Now we need to test the different properties of it
  it('should render the hero name', () => {
    expect(rendered.find('#heroName').text()).toBe(hero.name);
  });
  it('should render the hero ArchNemesis', () => {
    expect(rendered.find('#heroArchNemesis').text()).toBe(hero.archNemesis);
  });
  it('should render the hero power', () => {
    expect(rendered.find('#heroPower').text()).toBe(hero.power);
  });
  it('should render the hero secretIdentity', () => {
    expect(rendered.find('#heroSecretIdentity').text()).toBe(hero.secretIdentity);
  });
  it('should render the hero weakness', () => {
    expect(rendered.find('#heroWeakness').text()).toBe(hero.weakness);
  });
});

// What about events?
describe('The click event works', () => {
  let rendered: ShallowWrapper;
  let hero: Hero;
  let onClick: () => void;

  beforeEach(() => {
    hero = {
      archNemesis: 'humanity',
      name: 'aswoigj',
      power: 'nanana',
      secretIdentity: 'nope',
      weakness: 'everything'
    }
    onClick = () => hero.name='properly worked';
    rendered = shallow(<HeroRow hero={hero} select={onClick} />);
  });

  it('should simulate a click event and change the heros name', () => {
    const row = rendered.find('tr')
    const beforeText = hero.name;
    row.simulate("click");
    expect(hero.name).not.toEqual(beforeText);
  });
});