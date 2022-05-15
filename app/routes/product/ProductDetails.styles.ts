import styled from "@emotion/styled";
import {mediumGrey} from "~/theme/colors";

export const Main = styled.main`
    display: flex;
    align-items: flex-start;
    padding: 5rem 6rem 0;
`;

export const ImageWrapper = styled.div`
    flex: 1;
    padding-right: 3rem;

    & img {
        width: 100%;
        max-width: 100%;
    }
`;

export const ProductInformation = styled.div`
    flex: 1;
    padding-left: 3rem;
`;

export const Category = styled.p`
    margin-bottom: 1rem;
    color: ${mediumGrey};
    text-transform: capitalize;
`;

export const Price = styled.p`
    font-size: 1.4rem;
`;

export const Description = styled.div`
    margin-bottom: 3rem;
`;
