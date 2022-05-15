import styled from '@emotion/styled';
import {css} from '@emotion/react';

import ArrowDown from "~/components/icons/ArrowDown";

import {black, error, grey, lightestGrey, mediumGrey} from "~/theme/colors";
import typography from "~/theme/typography";

import type {ThemeComponentType, StylingProps} from './Select.types';

const shouldForwardPropDisabled = {
    shouldForwardProp: (prop: string): boolean => prop !== 'disabled',
};

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled('label', shouldForwardPropDisabled)<StylingProps>`
    ${typography.p.default};

    margin-bottom: 0.4rem;
    margin-left: 0.8rem;
    color: ${black};

    ${({disabled}): ThemeComponentType =>
        disabled &&
        css`
            color: ${grey};
        `}
`;

export const BaseSelect = styled.select<StylingProps>`
    ${typography.p.default};

    text-transform: initial;
    flex: 1;
    background-color: ${lightestGrey};
    border: 0.1rem solid ${lightestGrey};
    padding: 0.8rem;
    appearance: none;
    border-radius: 0;

    &:active,
    &:focus {
        opacity: 0.7;
        color: ${black};
    }

    &::-ms-clear {
        display: none;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: #ccc;
        color: ${mediumGrey};
    }

    &[aria-invalid='true'] {
        border-left: 0.2rem solid ${error};
        padding-left: 0.6rem;
    }

    ${({value, defaultValue}): ThemeComponentType =>
        !value && !defaultValue
            ? css`
                color: ${mediumGrey};
            `
            : css`
                color: ${black};
            `}

    ${({ellipsis}) =>
        ellipsis &&
        css`
            padding-right: 2.4rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `};
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
`;

export const StyledArrowDown = styled(ArrowDown, {
    shouldForwardProp: (prop: string): boolean => prop !== 'hasValue',
})<StylingProps>`
    position: absolute;
    right: 0.4rem;
    pointer-events: none;
    font-size: 2.4rem;

    ${({hasValue}): ThemeComponentType =>
        !hasValue
            ? css`
                color: ${mediumGrey};
            `
            : css`
                color: ${black};
            `}
`;

export const Error = styled.div`
    ${typography.p.small};

    color: ${error};
`;

export const ErrorWrapperDiv = styled.div`
    margin-top: 1rem;
    min-height: 2.2rem;
`;
