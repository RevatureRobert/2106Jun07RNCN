import { describe } from "@jest/globals";
import { shallow, ShallowWrapper } from "enzyme";
import { Hero } from "../../models/Hero";
import { HeroRow } from "./HeroRow";

describe("renders the row inside the table", () => {
  let hero: Hero;
  let onClick: () => void;
  let rendered: ShallowWrapper;
  beforeEach(() => {
    hero = {
      archNemesis: "safk;og",
      name: "safiough",
      power: "sfdgh",
      secretIdentity: "skufgh",
      weakness: "siuafhg",
    };
    onClick = () => console.log("kjsdfhg");
    rendered = shallow(<HeroRow hero={hero} select={onClick} />);
  });

  it("should render the hero name", () => {
    // now we need to test the different properties of it.
    expect(rendered.find("#heroName").text()).toBe(hero.name);
  });

  it("should render the hero ArchNemesis", () => {
    expect(rendered.find("#heroArchNemesis").text()).toBe(hero.archNemesis);
  });
});

// What about events?
describe("The click event works", () => {
  let rendered: ShallowWrapper;
  let hero: Hero;
  let onClick: () => void;

  beforeEach(() => {
    hero = {
      archNemesis: "&amp;",
      name: "safiough",
      power: "sfdgh",
      secretIdentity: "skufgh",
      weakness: "siuafhg",
    };
    onClick = () => (hero.name = "properly worked");
    rendered = shallow(<HeroRow hero={hero} select={onClick} />);
  });

  it("should simulate a click event and change the heros name", () => {
    const row = rendered.find("tr");
    const beforeText = hero.name;
    row.simulate("click");
    console.log(rendered.find("#heroArchNemesis").text());
    expect(hero.name).not.toEqual(beforeText);
  });
});
