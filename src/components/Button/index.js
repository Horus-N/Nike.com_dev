import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import styles from './Button.module.css';
const cx = classNames.bind(styles);

function Button(
    {
        children,
        to,
        href,
        text,
        primary = false,
        small = false,
        large = false,
        block,
        outline = false,
        disable = false,
        iconLeft = false,
        iconRight = false,
        separator = false,
        classNameAdd,
        ...passProps
    }
) {
    let Comp = 'button';

    const className = cx('wrapper', classNameAdd, {
        text,
        primary,
        small,
        large,
        outline,
        disable,
        separator,
        block
    });

    const props = {
        className,
        ...passProps
    }

    if (to) {
        Comp = Link;
        props.to = to;
    }
    else if (href) {
        Comp = 'a';
        props.href = href;
    }

    //remove events DOM on element
    if (disable) {
        Object.keys(props).forEach(key => {
            if (
                (key.startsWith('on') && typeof props[key] === 'function')
                || key.startsWith('to') || key.startsWith('href')
            ) {
                delete props[key];
            }
        })
    }

    return (
        <Comp {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>
                {children}
            </span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    )
}

Button.propTypes = {
    children: propTypes.any.isRequired,
    to: propTypes.string,
    href: propTypes.string,
    text: propTypes.bool,
    primary: propTypes.bool,
    small: propTypes.bool,
    large: propTypes.bool,
    outline: propTypes.bool,
    disable: propTypes.bool,
    iconLeft: propTypes.node,
    iconRight: propTypes.node,
    separator: propTypes.bool,
    classNameAdd: propTypes.string
}

export default Button;