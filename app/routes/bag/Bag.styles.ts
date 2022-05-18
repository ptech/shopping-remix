import styled from "@emotion/styled";

import Button from "~/components/button/Button";

import {black, lightestGrey, white} from "~/theme/colors";
import {Link} from "@remix-run/react";

export const Main = styled.main`
    padding: 0 3rem
`;

export const Wrapper = styled.section`
    display: flex;
    align-items: flex-start;
`

export const Summary = styled.div`
    width: 35%;
    padding: 0 2rem 2rem;
    background-color: ${lightestGrey};

    h2 {
        margin-bottom: 3rem;
        text-align: center;
    }

    p {
        font-size: 1.5rem;
    }
`;

export const Ul = styled.ul`
    flex: 1;
    margin-top: 5rem;
`;

export const Li = styled.li`
    margin-bottom: 4rem;
`

export const StyledButton = styled(Button)`
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
`;

export const ProceedCheckout = styled(Link)`
    display: inline-block;
    width: 100%;
    padding: 1.5rem;
    margin-top: 2rem;
    color: ${white};
    background-color: ${black};
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: ${white};
        color: ${black};
    }
`;

