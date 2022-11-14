import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
    className, value, name, readOnly, onBlur, disabled, onKeyPress, onKeyDown,
    minDate, maxDate, type, onChange, label, placeholder, error
}) {

    return (
        <div className={`${className} relative`}>
            <label htmlFor={name} className="flex text-labelColor mb-1">
                {label}
            </label>

            <input
                className={`${error ? 'error-field' : ''
                    }bg-inputBg text-textColor rounded h-12 px-3 outline-none w-full border border-borderColor disabled:bg-gray-200`}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                placeholder={placeholder}
                onBlur={onBlur}
                disabled={disabled}
                onKeyPress={onKeyPress}
                onKeyDown={onKeyDown}
                min={minDate}
                max={maxDate}
            />

        </div>
    );
}
TextInput.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    onKeyPress: PropTypes.func,
    onKeyDown: PropTypes.func,
    minDate: PropTypes.number,
    maxDate: PropTypes.number,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

TextInput.defaultProps = {
    className: '',
    type: 'text',
    onChange: () => { },
    value: '',
    name: '',
    readOnly: false,
    onBlur: () => { },
    disabled: false,
    onKeyPress: () => { },
    onKeyDown: () => { },
    minDate: undefined,
    maxDate: undefined,
    label: '',
    placeholder: '',
    error: undefined
};
export default TextInput;
