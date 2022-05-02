import React from "react";
import styled from "@emotion/styled";
import {mediumGrey} from "~/theme/colors";

const StyledFooter = styled.footer`
  padding: 2rem 1.5rem;
`;

const Copyright = styled.span`
    color: ${mediumGrey};
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Copyright>Powered by João Girão</Copyright>
        </StyledFooter>
    );
};

export default Footer;
