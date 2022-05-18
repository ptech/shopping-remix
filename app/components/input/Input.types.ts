import type { SerializedStyles } from '@emotion/serialize';

export type Ref = HTMLInputElement;

export type PropTypes = {
    disabled?: boolean;
    /** Prefix for data-test attributes */
    'data-test'?: string;
    /** Error message*/
    error?: string;
    /** aria-label **/
    ariaLabel?: string;
    /** Input label*/
    label?: React.ReactNode;
    /** Input right icon */
    rightIcon?: React.ReactNode;
    /** Input left icon */
    leftIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type ThemeComponentType = SerializedStyles | boolean | undefined;

export type StylingProps = {
    disabled?: boolean;
    error?: boolean;
};
