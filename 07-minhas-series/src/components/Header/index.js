import React, {useState} from 'react'
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">Minhas Séries</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar >
          <NavItem>
            <NavLink tag={Link} to="/generos">Gêneros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/generos/novogenero">Novo Gênero</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/series">Series</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/series/novaserie">Nova Série</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </>
  );
}

export default Header