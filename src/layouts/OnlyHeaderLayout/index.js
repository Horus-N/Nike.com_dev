import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import styles from './OnlyHeaderLayout.module.css';
const cx = classnames.bind(styles);

function OnlyHeaderLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('content container-fluid px-0')}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

OnlyHeaderLayout.propTypes = {
    children: PropTypes.element
}


export default OnlyHeaderLayout;