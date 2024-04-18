import { ListGroup } from 'react-bootstrap';
import Proptypes from 'prop-types';
import classnames from 'classnames/bind';

import MenuItem from './MenuItem';
import styles from './Menu.module.css';
const cx = classnames.bind(styles);


function Menu({ title, menuItems }) {
    return (
        <div className={cx('menu', 'col', 'px-0')}>
            {title && <h2 className={cx('menu-header')}>{title}</h2>}
            <ListGroup as='ul'>
                {
                    menuItems.map((item, index) =>
                        <MenuItem key={index} url={item?.url} title={item?.title} />
                    )
                }
            </ListGroup>
        </div>
    )
}

Menu.propTypes = {
    title: Proptypes.string,
    menuItems: Proptypes.array.isRequired
}


export default Menu;
