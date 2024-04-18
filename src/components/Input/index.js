import { memo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.css';
const cx = classNames.bind(styles);

function Input({
    type = 'text', placeholder = '', name, value = '',
    autoComplete = "off", spellcheck = false, classNameAdd,
    ...props
}) {
    const className = cx('input-control', 'form-control', classNameAdd);
    return (

        <input
            type={type} name={name}
            placeholder={placeholder} value={value}
            autoComplete={autoComplete} spellCheck={spellcheck}
            className={className}
            {...props}
        />
    );
}


Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    autoComplete: PropTypes.bool,
    spellCheck: PropTypes.bool,
    classNameAdd: PropTypes.string,
}

export default memo(Input);