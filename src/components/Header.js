import React, { useState } from 'react';
import { Container,
    Collapse, 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import GoogleAuth from './GoogleAuth';
import './Header.css';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
       <Container fluid className="headercontainer">
            <Navbar light expand="sm" className="headernav fixed-top">
                <NavbarBrand href="/"><img src="/img/photologo.png" alt="Logo" height="20" className="mr-auto"/></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="link" href="/">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link" href="/about">ABOUT</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>SERVICES</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/services/studioshoot">Studio Shoot</DropdownItem>
                                <DropdownItem href="/services/maternityshoot">Maternity Shoot</DropdownItem>
                                <DropdownItem href="/services/function">Functions</DropdownItem>
                                <DropdownItem href="/tshirt/Dashboard">T-Shirt Print</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown >
                        <NavItem>
                            <NavLink className="link" href="/contact">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                    <div>
                        <GoogleAuth />
                    </div>
                </Collapse>        
            </Navbar>
       </Container>
    );
};

export default Header;