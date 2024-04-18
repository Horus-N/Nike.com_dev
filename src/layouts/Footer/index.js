import classnames from 'classnames/bind';
import { Nav, ListGroup } from 'react-bootstrap';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import {
    LocationIcon, FacebookIcon,
    TwitterIcon, YouTubeIcon,
    IntagramIcon
} from '~/components/Icon';

import { ABOUT_NIKE_MENU_CONTEXT, GET_HELP_MENU_CONTEXT } from './FooterContext';
import styles from './Footer.module.css'
const cx = classnames.bind(styles);

function Footer() {
    const ABOUT_NIKE_MENU = useContext(ABOUT_NIKE_MENU_CONTEXT);
    const GET_HELP_MENU = useContext(GET_HELP_MENU_CONTEXT);


    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-top', 'd-flex', 'justify-content-between', 'mb-5')}>
                    <div className={cx('footer-top-left')}>
                        <nav className={cx('footer-top-nav')}>
                            <Nav as='ul' className={cx('footer-top-nav-list', 'flex-column')}>
                                <Nav.Item className={cx('footer-top-nav-item')} as='li'>
                                    <Nav.Link href='#' className={cx('footer-top-nav-link')}>
                                        FIND A STORE
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={cx('footer-top-nav-item')} as='li'>
                                    <Link to='/signup' className={cx('footer-top-nav-link')}>
                                        BECOME A MEMBER
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className={cx('footer-top-nav-item')} as='li'>
                                    <Nav.Link href='#' className={cx('footer-top-nav-link')}>
                                        Send Us Feedback
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </nav>
                        <div className={cx('footer-top-menu')}>
                            <h4 className={cx('footer-top-menu-title')}>GET HELP</h4>
                            <ListGroup className={cx('footer-top-menu-list')}>
                                {GET_HELP_MENU.map((item, index) => {
                                    return (
                                        <ListGroup.Item key={index} className={cx('footer-top-menu-item')}>
                                            <Link to={item?.url} className={cx('footer-top-menu-link')}>{item?.title}</Link>
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </div>
                        <div className={cx('footer-top-menu')}>
                            <h4 className={cx('footer-top-menu-title')}>GET HELP</h4>
                            <ListGroup className={cx('footer-top-menu-list')}>
                                {ABOUT_NIKE_MENU.map((item, index) => {
                                    return (
                                        <ListGroup.Item key={index} className={cx('footer-top-menu-item')}>
                                            <Link to={item?.url} className={cx('footer-top-menu-link')}>{item?.title}</Link>
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </div>
                    </div>
                    <div className={cx('footer-top-right')}>
                        <nav className={cx('footer-top-right-nav')}>
                            <Nav as='ul' className={cx('footer-top-right-social')}>
                                <Nav.Item as='li' className={cx('footer-top-right-social-item')}>
                                    <Nav.Link href='#' className={cx('footer-top-right-link')}>
                                        <TwitterIcon width='30px' height='30px' color='#7e7e7e' />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' className={cx('footer-top-right-social-item')}>
                                    <Nav.Link href='#' className={cx('footer-top-right-link')}>
                                        <FacebookIcon width='30px' height='30px' color='#7e7e7e' />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' className={cx('footer-top-right-social-item')}>
                                    <Nav.Link href='#' className={cx('footer-top-right-link')}>
                                        <YouTubeIcon width='30px' height='30px' color='#7e7e7e' />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' className={cx('footer-top-right-social-item')}>
                                    <Nav.Link href='#' className={cx('footer-top-right-link')}>
                                        <IntagramIcon width='30px' height='30px' color='#7e7e7e' />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </nav>
                    </div>
                </div>
                <div
                    className={cx('footer-bottom', 'py-3', 'd-flex', 'justify-content-between', 'align-items-center')}
                >
                    <div className={cx('footer-bottom-left', 'd-flex', 'align-items-center')}>
                        <p className={cx('footer-bottom-location', 'my-0')}>
                            <LocationIcon color='#fff' width='18px' height='18px' />
                            <span className={cx('footer-location-label')}>Việt Nam</span>
                        </p>
                        <span className={cx('footer-bottom-copyright')}>
                            © 2023 Nike, Inc. All Rights Reserved
                        </span>
                    </div>
                    <nav className={cx('footer-bottom-nav')}>
                        <Nav as='ul'>
                            <Nav.Item>
                                <Nav.Link target='_blank' href='#' className={cx('footer-bottom-nav-link')}>Guides</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link target='_blank' href='#' className={cx('footer-bottom-nav-link')}>Terms of Sale</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link target='_blank' href='#' className={cx('footer-bottom-nav-link')}>Terms of Use</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link target='_blank' href='#' className={cx('footer-bottom-nav-link')}>Nike Privacy Policy</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </nav>
                </div>
            </div>
        </footer >
    )
}

export default Footer;