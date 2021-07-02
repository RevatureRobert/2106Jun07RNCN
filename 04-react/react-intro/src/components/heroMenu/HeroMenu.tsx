import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Collapse, Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";
import { HeroAction } from "../../redux/Actions";
import './heroMenu.css';

export const HeroMenu: React.FC = () => {
  const dispatch = useDispatch();

  const addClick = () => {
    dispatch({
      type: HeroAction.ADD_HERO,
      payload: {}
    })
  };

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
              <NavLink onClick={addClick}>Add Hero</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};