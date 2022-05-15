import React, {forwardRef} from 'react';

import type {PropTypes} from './Button.types';
import {NativeButton} from './Button.styles';

const Button = forwardRef<HTMLButtonElement, PropTypes>((props, ref) => {
    const {loading, disabled, children, ...remainingProps} = props;

    const content =
        typeof children === 'string' ? <span>{children}</span> : children;

    return (
        <NativeButton
            ref={ref}
            disabled={disabled || loading}
            loading={loading}
            {...remainingProps}
        >
            {loading ? 'Loading...' : content}
        </NativeButton>
    );
});

Button.displayName = 'Button';

export default Button;
