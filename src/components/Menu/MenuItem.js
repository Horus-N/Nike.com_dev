import { ListGroup } from 'react-bootstrap';
import classnames from 'classnames/bind';
import styles from './Menu.module.css';
const cx = classnames.bind(styles);


function MenuItem({
    title = '', url = '', as = 'li', iconLeft = null, iconRight = null,
    classNameAdd, ...propsAdd
}) {
    const className = cx('border-0', 'menu-item', classNameAdd);

    const props = {
        as,
        className,
        ...propsAdd
    }

    return (
        <ListGroup.Item {...props}>
            {iconLeft && <span className={cx('menu-item-icon')}>{iconLeft}</span>}
            <a href={url} className={cx('menu-link')}>
                {title}
            </a>
            {iconRight && <span className={cx('menu-item-icon')}>{iconRight}</span>}
        </ListGroup.Item>
    )
}

export default MenuItem;
