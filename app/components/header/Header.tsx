import React from 'react';
import styled from "@emotion/styled";

import {black, mediumGrey, white} from "~/theme/colors";
import {Link} from "@remix-run/react";

const StyledHeader = styled.header`
  width: 100%;
  padding: 0 1.5rem;
  height: 5rem;
  color: ${white};
  background-color: ${black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledLink to="/">Fashion Store</StyledLink>
        </StyledHeader>
    )
};

export default Header;
