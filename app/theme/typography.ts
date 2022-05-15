import {css} from '@emotion/react';
import {mediumGrey} from "~/theme/colors";

export const weight = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
};

export const h1 = css`
    font-size: 2.4rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1.1;
    letter-spacing: -0.05rem;
`;

export const h2 = css`
    font-size: 1.8rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: -0.05rem;
`;

export const h3 = css`
    font-size: 1.4rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: -0.05rem;
`;

export const h4 = css`
    font-size: 1.4rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 0.05rem;
`;

export const h5 = css`
    font-size: 1.2rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 0.05rem;
`;

export const title1 = css`
    font-size: 1.6rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1.35;
    letter-spacing: 0.05rem;
`;

export const title2 = css`
    font-size: 1.4rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 0.05rem;
`;

export const title3 = css`
    font-size: 1.2rem;
    font-weight: ${weight.regular};
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 0.05rem;
`;

export default {
    weight,
    h1,
    h2,
    h3,
    h4,
    h5,
    title1,
    title2,
    title3,
    p: {
        small: css`
            font-size: 1.1rem;
            font-weight: ${weight.regular};
            font-stretch: normal;
            font-style: normal;
            line-height: 1.46;
            letter-spacing: 0.1rem;
            text-transform: initial;
        `,
        large: css`
            font-size: 1.6rem;
            font-weight: ${weight.regular};
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: 0.05rem;
        `,
        default: css`
            font-size: 1.4rem;
            font-weight: ${weight.regular};
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: 0.05rem;
            text-transform: none;
        `,
        strikethrough: css`
            text-decoration: line-through;
        `,
    },
    a: css`
        color: inherit;
        font-size: 1.4rem;
        font-weight: ${weight.regular};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: 0.05rem;
        text-decoration: underline;

        &:hover {
            color: ${mediumGrey};
            text-decoration: none;
        }
    `,
};
