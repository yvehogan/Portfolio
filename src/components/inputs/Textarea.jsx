import React from 'react';
import PropTypes from 'prop-types';

function TextareaInput({
    className, value, name, readOnly, disabled,
    onChange, label, placeholder, rows, onBlur, onKeyPress, onKeyDown, error
}) {
    return (
        <div className={`${className} relative`}>
            <label htmlFor={name} className="text-labelColor mb-1">
                {label}
            </label>

            <textarea
                className="bg-inputBg text-textColor rounded  px-3 py-2 outline-none w-full border border-borderColor"
                value={value}
                name={name}
                readOnly={readOnly}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                rows={rows}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}

TextareaInput.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyDown: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
    rows: PropTypes.number,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

TextareaInput.defaultProps = {
    className: '',
    onChange: () => { },
    onBlur: () => { },
    onKeyPress: () => { },
    onKeyDown: () => { },
    value: '',
    name: '',
    readOnly: false,
    disabled: false,
    rows: undefined,
    label: '',
    placeholder: '',
    error: undefined
};
export default TextareaInput;
