import styled from "@emotion/styled";
import {css} from "@emotion/react";

import {black, darkGrey, error, lightestGrey, lightGrey, mediumGrey} from "~/theme/colors";
import typography from "~/theme/typography";

import type {
    ThemeComponentType,
    StylingProps,
} from './Input.types';


export const Div = styled.div<StylingProps>`
    display: flex;
    flex-direction: column;
`;

export const LabelContainer = styled.div<StylingProps>`
    display: flex;
    justify-content: space-between;
    color: ${black};
    margin-bottom: 0.4rem;
    margin-left: 0.8rem;
`;

export const Label = styled.label<StylingProps>`
    ${typography.p.default}

    ${({ disabled }): ThemeComponentType =>
        disabled &&
        css`
            color: ${darkGrey};
        `}
`;

export const BaseInput = styled.input<StylingProps>`
    ${typography.p.large};

    text-transform: initial;
    width: 100%;
    background-color: ${lightestGrey};
    border: none;
    padding: 0.8rem;
    border-radius: 0;

    &:active,
    &:focus {
        opacity: 0.7;
        color: ${black};
    }

    &::placeholder {
        color: ${mediumGrey};
    }

    &[aria-invalid='true']:not(:active):not(:focus) {
        border-left: 0.2rem solid ${error};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${lightGrey};
        color: ${darkGrey};
    }

    ${'' /* To avoid date input to have different height compared with other inputs */}
    &::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
    }

    &[type='date' i]::-webkit-inner-spin-button {
        height: auto;
    }
`;

export const InputWrapper = styled.div<StylingProps>`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
`;

export const Error = styled.span<StylingProps>`
    ${typography.p.small};

    color: ${error};
`;

export const ErrorWrapper = styled.span<StylingProps>`
    margin-top: 0.4rem;
    min-height: 2.2rem;
`;
