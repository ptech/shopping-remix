import React, { forwardRef } from 'react';


import {
    BaseInput,
    Div,
    Error,
    ErrorWrapper,
    InputWrapper,
    Label,
    LabelContainer,
} from './Input.styles';

import type { PropTypes, Ref } from './Input.types';

/**
 * @example
 *
 * <Input id="id" name="input" label="Label" placeholder="Placeholder" />
 *
 */
const Input = forwardRef<Ref, PropTypes>(
    (
        {
            'data-test': dataTest = 'input',
            className,
            error,
            id,
            label,
            ariaLabel = '',
            required,
            value,
            disabled,
            ...remainingProps
        },
        ref
    ) => {

        return (
            <Div data-test={`${dataTest}-wrapper`} className={className}>
                {label && (
                    <LabelContainer>
                        <Label
                            htmlFor={id}
                            aria-label={ariaLabel}
                            id={`${id}-label`}
                            data-test="input-label"
                            disabled={disabled}
                            error={!!error}
                        >
                            {label}
                            {required && '*'}
                        </Label>
                    </LabelContainer>
                )}
                <InputWrapper>
                    <BaseInput
                        ref={ref}
                        data-test={dataTest}
                        aria-invalid={!!error}
                        aria-required={required}
                        disabled={disabled}
                        id={id}
                        required={required}
                        value={value}
                        {...(label && {
                            'aria-labelledby': `${id}-label`,
                        })}
                        {...(error && {
                            'aria-describedby': `${id}-error`,
                        })}
                        {...remainingProps}
                    />
                </InputWrapper>
                <ErrorWrapper>
                    {error && (
                        <Error
                            data-test="input-error"
                            id={`${id}-error`}
                            role="alert"
                        >
                            {error}
                        </Error>
                    )}
                </ErrorWrapper>
            </Div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
