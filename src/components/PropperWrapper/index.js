import classnames from 'classnames/bind';
import Proptypes from 'prop-types';
import styles from './Propper.module.css';


const cx = classnames.bind(styles);
function ProppWrapper(
    { children, oneMenu }
) {
    const className = cx('wrapper', {
        oneMenu,
    })
    return (
        <div className={className}>
            {children}
        </div>
    )
}

ProppWrapper.propTypes = {
    children: Proptypes.node,
    oneMenu: Proptypes.bool,
}

export default ProppWrapper;