import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const HorizontalNav = () => {
    return(
        <Nav vertical>
            <NavItem>
                <NavLink className="font-weight-bold text-secondary" href="/services/studioshoot">Studio Shoot</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="font-weight-bold text-secondary" href="/services/maternityshoot">Maternity Shoot</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="font-weight-bold text-secondary" href="/services/function">Functions</NavLink>
            </NavItem>
        </Nav>
    );
}

export default HorizontalNav;