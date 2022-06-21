import React from 'react';

import Bag from "~/components/icons/Bag";
import Account from "~/components/icons/Account";

import {StyledHeader, Nav, Logo, StyledLink, StyledBagLink, Counter} from './Header.styles';

type PropTypes = {
    bagCounter?: number;
};

const Header: React.FC<PropTypes> = (props) => {
    const { bagCounter } = props;

    return (
        <StyledHeader>
            <Logo to="/">Switch Store</Logo>
            <Nav>
                <StyledLink to="/shopping">Shopping</StyledLink>
            </Nav>
            <StyledLink to="/account">
                <Account />
            </StyledLink>
            <StyledBagLink to="/bag">
                <Bag /> {!!bagCounter && <Counter>{bagCounter >= 100 ? '+99' : bagCounter }</Counter>}
            </StyledBagLink>
        </StyledHeader>
    )
};

export default Header;
