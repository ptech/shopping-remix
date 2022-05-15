import React from 'react';
import styled from "@emotion/styled";

import {black, white} from "~/theme/colors";
import {Link} from "@remix-run/react";
import Bag from "~/components/icons/Bag";

import {StyledHeader, Nav, Logo, StyledLink, StyledBagLink, Counter} from './Header.styles';

type PropTypes = {
    bagCounter: number;
};

const Header: React.FC<PropTypes> = (props) => {
    const { bagCounter } = props;

    return (
        <StyledHeader>
            <Logo to="/">Random Store</Logo>
            <Nav>
                <StyledLink to="/shopping">Shopping</StyledLink>
            </Nav>
            <StyledBagLink to="/bag">
                <Bag /> {!!bagCounter && <Counter>{bagCounter >= 100 ? '+99' : bagCounter }</Counter>}
            </StyledBagLink>
        </StyledHeader>
    )
};

export default Header;
