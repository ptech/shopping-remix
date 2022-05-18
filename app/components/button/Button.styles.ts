import styled from '@emotion/styled';

import type {StylingProps, ThemeComponentType} from './Button.types';
import {css} from "@emotion/react";
import {black, white} from "~/theme/colors";

const PROPS_TO_EXCLUDE = [
    'loading',
    'primary',
    'secondary',
    'small',
    'text',
    'fullWidth',
];

const shouldForwardProp = (prop: string): boolean =>
    !PROPS_TO_EXCLUDE.includes(prop);

const sharedStyles = css`
    text-align: center;
    width: auto;

    &:hover,
    &:focus:not(:disabled) {
        cursor: pointer;
        text-decoration: none;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

const primarySecondarySharedStyles = css`
    padding: 1.5rem;
`;

const secondarySmallSharedStyles = css`
    border: 0.1rem solid ${black};
    background-color: ${white};
    color: ${black};

    &:hover,
    &:focus:not(:disabled),
    &:active {
        background-color: ${black};
        color: ${white};
    }
`;

export const NativeButton = styled('button', {
    shouldForwardProp,
})<StylingProps>`
    ${sharedStyles};

    background-color: transparent;
    border: none;
    padding: 0.5rem 0;

    ${({primary}): ThemeComponentType =>
        primary &&
        css`
            ${primarySecondarySharedStyles};
            border: 0.1rem solid ${black};
            background-color: ${black};
            color: ${white};

            &:hover,
            &:focus:not(:disabled),
            &:active {
                background-color: ${white};
                color: ${black};
            }

            &:disabled {
                background-color: #ccc;
                border-color: #ccc;
                color: ${black};
            }
        `};

    ${({secondary}): ThemeComponentType =>
        secondary &&
        css`
            ${primarySecondarySharedStyles};
            ${secondarySmallSharedStyles};

            &:disabled {
                background-color: ${white};
                border-color: ${black};
                color: ${black};
            }
        `};

    ${({fullWidth}): ThemeComponentType =>
        fullWidth &&
        css`
            width: 100%;
        `};

    ${({small}): ThemeComponentType =>
        small &&
        css`
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
        `};
`;
