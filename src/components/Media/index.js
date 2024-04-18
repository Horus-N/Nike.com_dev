import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import Button from '~/components/Button';
import styles from './Media.module.css';
const cx = classnames.bind(styles);


function Media({ classNameAdd, img, title, subtitle, button, to, href }) {
    let Comp = 'div';
    const className = cx('media', classNameAdd);

    const props = {
        className: 'media-link',
    }
    const propsButton = {}

    if (to) {
        props.to = to;
        propsButton.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        propsButton.href = href;
        Comp = 'a';
    }

    return (
        <div className={className}>
            <Comp {...props} >
                <img src={img?.src} alt="media-img" className={cx('media-img')} />
                <div className={cx('media-body')}>
                    <h4 className={cx('media-subtitle')}>{subtitle}</h4>
                    <h2 className={cx('media-title')}>{title}</h2>
                    {button && <Button href={href} {...propsButton} classNameAdd={cx('media-btn', button?.className)}>{button?.title}</Button>}
                </div>
            </Comp>
        </div>
    );
}

Media.propTypes = {
    classNameAdd: Proptypes.string,
    img: Proptypes.object,
    title: Proptypes.string,
    subtitle: Proptypes.string,
    button: Proptypes.object,
    to: Proptypes.string,
    href: Proptypes.string
}

export default Media;