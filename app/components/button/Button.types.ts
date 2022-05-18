import type {SerializedStyles} from '@emotion/serialize';

export type PropTypes = {
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    small?: boolean;
    fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type StylingProps = Pick<PropTypes,
    'primary' | 'secondary' | 'small' | 'fullWidth' | 'loading'>;

export type ThemeComponentType = SerializedStyles | boolean | undefined;
