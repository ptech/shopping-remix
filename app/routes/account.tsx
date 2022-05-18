import {NavLink, Outlet} from "@remix-run/react";
import styled from "@emotion/styled";

const Main = styled.main`
    display: flex;
`;

const Nav = styled.nav`
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 5rem 0 0;

    h1 {
        margin-top: 0;
        padding-left: 5rem;
    }
`;

const Container = styled.div`
    flex: 1;
    margin-top: 2rem;
    padding-left: 10%;
    padding-right: 2rem;
`;

const StyledNavLink = styled(NavLink)`
    padding: 3rem 5rem 2rem;
    text-decoration: none;
`;

const Account = () => (
    <Main>
        <Nav>
            <StyledNavLink to={'profile'}>Profile</StyledNavLink>
            <StyledNavLink to={'addresses'}>Addresses</StyledNavLink>
        </Nav>
        <Container>
            <Outlet />
        </Container>
    </Main>
);

export default Account;
