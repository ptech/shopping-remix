import type {SerializedStyles} from '@emotion/serialize';

export type SelectTheme = {
    wrapper?: SerializedStyles;
    selectWrapper?: SerializedStyles;
    label?: {
        default?: SerializedStyles;
        disabled?: SerializedStyles;
    };
    select?: SerializedStyles;
    error?: SerializedStyles;
    errorWrapper?: SerializedStyles;
    icon?: SerializedStyles;
};

export type SelectThemeProps = {
    select: SelectTheme;
};

export type PropTypes = {
    theme?: SelectThemeProps;
    /** Prefix for data-test attributes */
    'data-test'?: string;
    /** Error message or component*/
    error?: string | React.ReactNode;
    /** Label message or component*/
    label?: string | React.ReactNode;
    /** Required attribute, used for aria and required asterisk*/
    required?: boolean;
    /** Disabled attribute */
    disabled?: boolean;
    /** Select placeholder */
    placeholder?: string;
    hideError?: boolean;
    ellipsis?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export type StylingProps = Pick<PropTypes,
    'value' | 'defaultValue' | 'disabled' | 'theme' | 'ellipsis'> & {
    hasValue?: boolean;
};

export type ThemeComponentType = SerializedStyles | boolean | undefined;
