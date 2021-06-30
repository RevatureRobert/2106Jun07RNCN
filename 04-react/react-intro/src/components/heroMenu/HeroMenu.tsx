import React, { useState } from "react";
import {
    Collapse, Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";
import './heroMenu.css';


interface IProps {
  editor: () => void;
  buttonText: string;
  addClick: () => void;
}

export const HeroMenu: React.FC<IProps> = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Hero</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Table</NavLink>
            </NavItem>
            <NavItem navbar className="mr-auto">
              <NavLink href="/#">Additions</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ms-auto">
            <NavItem navbar id="editNavButton" className="ms-auto">
              <NavLink onClick={props.addClick}>{props.buttonText}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
