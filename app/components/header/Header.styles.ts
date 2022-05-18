import styled from "@emotion/styled";
import {black, white} from "~/theme/colors";
import {Link} from "@remix-run/react";
import {weight} from "~/theme/typography";


export const StyledHeader = styled.header`
  width: 100%;
  padding: 0 1.5rem;
  height: 5rem;
  color: ${white};
  background-color: ${black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
    flex: 1;
    padding-left: 3rem;
`;

export const Logo = styled(Link)`
    font-size: 2rem;
    font-weight: ${weight.bold};
    text-decoration: none;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    line-height: 0;

    svg {
        width: 4rem;
        height: 4rem;
    }
`;

export const StyledBagLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    svg {
        width: 4rem;
        height: 4rem;
    }
`;

export const Counter = styled.span`
    position: absolute;
    padding-top: 0.5rem;
    font-size: 1rem;
`;
