import styled from "@emotion/styled";
import {mediumGrey, white} from "~/theme/colors";
import {css} from "@emotion/react";

const optionsContainer = css`
    position: absolute;
    top: calc(100% + 1px);
    background-color: ${white};
    padding: 1rem;
    z-index: 300;

    & li {
        padding: 0.5rem;
        text-transform: capitalize;
    }
`;

export const ProductWrapper = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: auto;
    grid-gap: 2rem;
`;


export const FilterBar = styled.div`
    position: relative;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    border-top: 0.1rem solid ${mediumGrey};
    border-bottom: 0.1rem solid ${mediumGrey};
`;

export const SelectedCategory = styled.span`
    font-size: 1rem;
    color: ${mediumGrey};
    text-transform: capitalize;
`;

export const Span = styled.span`
    display: inline-block;
    background-color: white;
    padding: 1rem;
    text-decoration: underline;
    cursor: pointer;
`;

export const FilterOptions = styled.ul`
    ${optionsContainer};
`;

export const SortOptions = styled.ul`
    ${optionsContainer};

    right: 0;
`;

export const DropPanel = styled.div`
    ul {
        display: none;
    }

    &:hover ul {
        display: block;
    }
`;
