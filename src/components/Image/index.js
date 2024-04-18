import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types'
import images from '~/assets/images';
import styles from './Image.module.css';

const Image = forwardRef((
    { src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: propTypes.string.isRequired,
    alt: propTypes.string,
    customFallback: propTypes.string
}

export default Image;