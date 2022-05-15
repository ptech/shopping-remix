import React, {forwardRef} from 'react';

import {
    BaseSelect,
    Div,
    ErrorWrapperDiv,
    Error,
    SelectWrapper,
    Label,
    StyledArrowDown,
} from './Select.styles';

import type {PropTypes} from './Select.types';

/**
 * Representation of the Select component.
 *
 * @example
 *
 * <Select id="large" label="Label" onChange={ (e) => console.log('Selected Value:', e.target.value); } required>
 *     <option id="option-1" value="Value 1" disabled>Disabled</option>
 *     <option id="option-2" value="Value 2">Option 1</option>
 *     <option id="option-3" value="Value 3">Option 2</option>
 *     <option id="option-4" value="Value 4">Option 3</option>
 * </Select>
 */
const Select = forwardRef<HTMLSelectElement, PropTypes>(
    (
        {
            children,
            'data-test': dataTest = 'select',
            disabled,
            error,
            id,
            label,
            placeholder,
            hideError,
            required,
            className,
            ellipsis,
            ...remainingProps
        },
        ref
    ) => {

        return (
            <Div data-test={`${dataTest}-wrapper`} className={className}>
                {label && (
                    <Label
                        htmlFor={id}
                        id={`${id}-label`}
                        data-test="select-label"
                        disabled={disabled}
                    >
                        {label}
                        {required && ` *`}
                    </Label>
                )}
                <SelectWrapper>
                    <BaseSelect
                        id={id}
                        data-test={dataTest}
                        aria-required={required}
                        aria-disabled={disabled}
                        aria-invalid={!!error}
                        {...(label && {'aria-labelledby': `${id}-label`})}
                        {...(!!error && {'aria-describedby': `${id}-error`})}
                        ref={ref}
                        disabled={disabled}
                        ellipsis={ellipsis}
                        {...remainingProps}
                    >
                        {placeholder && (
                            <option
                                id={`${id}-placeholder`}
                                data-test="placeholder"
                                value=""
                                disabled
                            >
                                {placeholder}
                            </option>
                        )}
                        {children}
                    </BaseSelect>
                    <StyledArrowDown
                        hasValue={
                            !!remainingProps?.value ||
                            !!remainingProps?.defaultValue
                        }
                    />
                </SelectWrapper>
                {!hideError && (
                    <ErrorWrapperDiv>
                        {!!error && (
                            <Error
                                data-test={'input-error'}
                                id={`${id}-error`}
                                role="alert"
                            >
                                {error}
                            </Error>
                        )}
                    </ErrorWrapperDiv>
                )}
            </Div>
        );
    }
);

Select.displayName = 'Select';

export default Select;
