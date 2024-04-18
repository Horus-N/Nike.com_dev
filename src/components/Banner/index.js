import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import styles from './Banner.module.css';

import Button from '~/components/Button';
const cx = classnames.bind(styles);

function Banner({ img, classNameAdd = '', title = '', subtitle = '', text = '', to = '', button = null }) {
    let Comp = 'div';

    const className = cx('banner', classNameAdd);
    const props = {
        className,
    }

    if (to) {
        Comp = Link;
        props.to = to;
    }

    return (
        <Comp {...props}>
            <div className={cx('banner-img')} width={img?.width} height={img?.height}>
                <img src={img.src} alt='banner img' className={cx('banner-img')} />
            </div>
            {title &&
                <div className={cx('banner-body')}>
                    <p className={cx('banner-subitlte')}>{subtitle}</p>
                    <h2 className={cx('banner-title')}>{title}</h2>
                    <p className={cx('banner-text')}>{text}</p>
                </div>
            }
            {button &&
                <div className={cx('d-flex', 'justify-content-center')}>
                    <Button classNameAdd={cx('banner-btn-item')} {...button}>{button.title}</Button>
                </div>
            }
        </Comp>
    );
}

Banner.propTypes = {
    img: Proptypes.object,
    classNameAdd: Proptypes.string,
    title: Proptypes.string,
    subtitle: Proptypes.string,
    text: Proptypes.string,
    to: Proptypes.string,
    button: Proptypes.object
}

export default Banner;