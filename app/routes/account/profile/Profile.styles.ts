import styled from "@emotion/styled";
import {Form, Link} from "@remix-run/react";

export const H1 = styled.h1`
    margin-bottom: 0;
`;

export const Section = styled.section`
    margin-top: 5rem;
`;

export const ProfileForm = styled(Form)`
    margin-top: 5rem;
    width: 100%;
    max-width: 40rem;
`;

export const CancelLink = styled(Link)`
    margin-right: 3rem;
`;
