import { Nav, Navbar, Carousel } from 'react-bootstrap';
import { useContext, useRef, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tipy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { actionsFillter } from '~/layouts/Filter/FillterSlice';
import { FillterSearchValueSelector } from '../Filter/FillterSelector';
import { cartSelector } from '~/pages/CartPage/cartSelector';

import MenuItem from '~/components/Menu/MenuItem';
import ListMenu from '~/components/ListMenu';
import AccountMenu from '~/components/AccoutMenu';

import {
    SearchIcon,
    HeartIcon,
    CartIcon,
    UserIcon,
    MenuIcon,
    CloseIcon,
    ArrowRightIcon,
    OrderIcon,
    ShopIcon,
    HelpIcon,
    CloseBackgroundBoldIcon,
} from '~/components/Icon';
import { MENU_ACCOUNT_CONTEXT, NAVIGATION_ITEM_CONTEXT } from './HeaderContext';

import styles from './Header.module.css';
import Search from '../Search';
const cx = classnames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const NAVIGATION_ITEM = useContext(NAVIGATION_ITEM_CONTEXT);
    const MENU_ACCOUNT = useContext(MENU_ACCOUNT_CONTEXT);

    const [dataSidebarMenu, setDataSidebarMenu] = useState(() => {
        return [NAVIGATION_ITEM];
    });
    const [dataListMenu, setDataListMenu] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const valueSearch = useSelector(FillterSearchValueSelector);
    const carSize = useSelector(cartSelector).length ?? 0;
    const state = useSelector((state) => {
        return state.auth;
    });
    const listMenuRef = useRef(null);
    const searchRef = useRef(null);
    const dataSiderbarMenuCurrent = dataSidebarMenu[dataSidebarMenu.length - 1];

    function handleChangeSiderbarMenu(dataMenu) {
        setDataSidebarMenu((pre) => {
            return [...pre, dataMenu];
        });
    }

    const handleChangeSearchValue = useCallback((e) => {
        setSearchValue(e.target.value);
        dispatch(actionsFillter.changeSearchValue(e.target.value));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClearSearchValue = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setSearchValue('');
        dispatch(actionsFillter.changeSearchValue(''));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCancelSearch = useCallback(() => {
        setSearchValue('');
        searchRef.current.onHidden();
        dispatch(actionsFillter.changeSearchValue(''));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className={cx('header')}>
            <Navbar className={cx('header-top', 'justify-content-between', 'align-items-center')} bg="light">
                <Link to="/jordan" className={cx('navbar-brand', 'header-top-brand')}>
                    <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                        <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
                    </svg>
                </Link>
                <Nav as="ul" className={cx('header-top-nav')}>
                    <Nav.Item as="li" className={cx('header-top-item')}>
                        <Link to="/shop" className={cx('nav-link', 'header-top-link')}>
                            Find a Store
                        </Link>
                    </Nav.Item>
                    <span className={cx('header-top-separator')}>|</span>
                    <Nav.Item as="li" className={cx('header-top-item')}>
                        <Link to="/help" className={cx('nav-link', 'header-top-link')}>
                            Help
                        </Link>
                    </Nav.Item>
                    <span className={cx('header-top-separator')}>|</span>
                    {state.login.currentUser ? (
                        <Nav.Item as="li" className={cx('header-top-item')}>
                            <AccountMenu data={MENU_ACCOUNT}>
                                <Link to="#" className={cx('nav-link', 'header-top-link')}>
                                    Hi, {state.login.currentUser}
                                    <span className={cx('header-top-icon')}>
                                        <UserIcon />
                                    </span>
                                </Link>
                            </AccountMenu>
                        </Nav.Item>
                    ) : (
                        <>
                            <Nav.Item as="li" className={cx('header-top-item')}>
                                <Link to="/signup" className={cx('nav-link', 'header-top-link')}>
                                    Join Us
                                </Link>
                            </Nav.Item>
                            <span className={cx('header-top-separator')}>|</span>
                            <Nav.Item as="li" className={cx('header-top-item')}>
                                <Link to="/login" className={cx('nav-link', 'header-top-link')}>
                                    Login
                                </Link>
                            </Nav.Item>
                        </>
                    )}
                </Nav>
            </Navbar>
            <Navbar className={cx('header-center', 'justify-content-between')}>
                <Link to="/" className={cx('navbar-brand', 'header-center-brand')}>
                    <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img">
                        <path
                            fill="currentColor"
                            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                        ></path>
                    </svg>
                </Link>
                <nav className={cx('h-100', 'align-items-center', 'header-navigation')}>
                    <Nav as="ul" className={cx('h-100', 'align-items-center', 'header-navigation-list')}>
                        {NAVIGATION_ITEM.map((item, index) => {
                            return (
                                <Nav.Item as="li" className={cx('header-center-item', 'h-100')} key={index}>
                                    <Link
                                        to={item.url}
                                        className={cx(
                                            'nav-link',
                                            'header-center-link',
                                            'd-flex',
                                            'align-items-center',
                                            'justify-content-center',
                                            'h-100',
                                        )}
                                        onMouseOver={() => {
                                            listMenuRef.current.onShow();
                                            setDataListMenu(item.children);
                                        }}
                                        onMouseOut={() => listMenuRef.current.onHidden()}
                                    >
                                        {item.title}
                                    </Link>
                                </Nav.Item>
                            );
                        })}
                    </Nav>
                </nav>
                <div className={cx('header-action')}>
                    <div className={cx('header-search')}>
                        <span className={cx('header-search-icon')}>
                            <SearchIcon />
                        </span>
                        <input
                            className={cx('header-search-input')}
                            placeholder="Search"
                            type="text"
                            value={valueSearch}
                            onChange={(e) => {
                                searchRef.current.onShow();
                                setSearchValue(e.target.value);
                                dispatch(actionsFillter.changeSearchValue(e.target.value));
                            }}
                        />
                        <span
                            className={cx('header-search-closeIcon')}
                            onClick={() => {
                                setSearchValue('');
                                dispatch(actionsFillter.changeSearchValue(''));
                            }}
                        >
                            <CloseBackgroundBoldIcon width="16px" height="16px" />
                        </span>
                    </div>
                    <div className={cx('header-btn')}>
                        <Link to="/favorites" className={cx('header-btn-item')}>
                            <HeartIcon />
                            <span className={cx('badge badge-light', 'header-center-cart-size')}>0</span>
                        </Link>
                        <Link to="/cart" className={cx('header-btn-item')}>
                            <CartIcon />
                            <span className={cx('badge badge-light', 'header-center-cart-size')}>{carSize}</span>
                        </Link>
                    </div>
                </div>
            </Navbar>
            <div className={cx('header-dropmenu')}>
                <ListMenu ref={listMenuRef} data={dataListMenu?.children} overlay hidden height_full />
            </div>

            {/* Reponse IPad, Mobile */}
            <Navbar className={cx('navbar-reponsive')}>
                <Link to="/" className={cx('navbar-brand', 'navbar-reponsive-logo')}>
                    <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img">
                        <path
                            fill="currentColor"
                            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                        ></path>
                    </svg>
                </Link>
                <nav className={cx('navbar-reponsive-menu')}>
                    <Nav as="ul" className={cx('navbar-reponsive-menuitem')}>
                        <Nav.Item>
                            <Link to="/search" className={cx('nav-reponsive-btn')}>
                                <SearchIcon />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/card" className={cx('nav-reponsive-btn')}>
                                <CartIcon />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/profile" className={cx('nav-reponsive-btn')}>
                                <UserIcon />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Tipy
                                visible
                                interactive
                                placement="bottom-end"
                                render={() => {
                                    return (
                                        <div className={cx('siderbar')}>
                                            <div className={cx('siderbar-overlay')}></div>
                                            <div className={cx('siderbar-container')}>
                                                <button
                                                    className={cx('border-0 bg-transparent', 'siderbar-btn-close')}
                                                    onClick={(e) => console.log('close')}
                                                >
                                                    <CloseIcon />
                                                </button>
                                                {currentUser && (
                                                    <MenuItem
                                                        title={`Hi, ${currentUser}`}
                                                        classNameAdd="d-flex justify-content-between mb-2"
                                                        iconLeft={<UserIcon />}
                                                        iconRight={<ArrowRightIcon />}
                                                    />
                                                )}
                                                <ul className="siderbar-list">
                                                    {dataSiderbarMenuCurrent.map((item, index) => (
                                                        <MenuItem
                                                            key={index}
                                                            title={item.title}
                                                            classNameAdd={cx(
                                                                'd-flex justify-content-between',
                                                                'siderbar-item',
                                                            )}
                                                            iconRight={<ArrowRightIcon />}
                                                            onClick={() => {
                                                                const dataMenu =
                                                                    item?.children.children ?? item?.children;
                                                                handleChangeSiderbarMenu(dataMenu);
                                                            }}
                                                        />
                                                    ))}
                                                    <MenuItem
                                                        title="Favorite"
                                                        classNameAdd="d-flex"
                                                        iconLeft={<HeartIcon />}
                                                    />
                                                    <MenuItem
                                                        title="Bag"
                                                        classNameAdd="d-flex"
                                                        iconLeft={<CartIcon />}
                                                    />
                                                    <MenuItem
                                                        title="Favorite"
                                                        classNameAdd="d-flex"
                                                        iconLeft={<OrderIcon />}
                                                    />
                                                    <MenuItem
                                                        title="Find a Store"
                                                        classNameAdd="d-flex"
                                                        iconLeft={<ShopIcon />}
                                                    />
                                                    <MenuItem
                                                        title="Help"
                                                        classNameAdd="d-flex"
                                                        iconLeft={<HelpIcon />}
                                                    />
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                }}
                            >
                                <button className={cx('nav-reponsive-btn')}>
                                    <MenuIcon />
                                </button>
                            </Tipy>
                        </Nav.Item>
                    </Nav>
                </nav>
            </Navbar>

            <Carousel className={cx('header-bottom')} controls={false} indicators={false}>
                <Carousel.Item interval={3000}>
                    <h3 className={cx('header-bottom-title', 'text-center')}>Hello Nike App</h3>
                    <p className={cx('header-bottom-text', 'text-center')}>
                        Download the app to access everything Nike
                        <a
                            className={cx('header-bottom-link')}
                            href="https://www.nike.com/sg/nike-app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Get Your Great
                        </a>
                    </p>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <h3 className={cx('header-bottom-title', 'text-center')}>Free Delivery</h3>
                    <p className={cx('header-bottom-text', 'text-center')}>
                        Applies to orders of 5.000.000₫ or more.
                        <a
                            className={cx('header-bottom-link')}
                            href="https://www.nike.com/vn/help/a/shipping-delivery-gs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View details
                        </a>
                    </p>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <h3 className={cx('header-bottom-title', 'text-center')}>New Styles on Sale: Up to 40% Off</h3>
                    <p className={cx('header-bottom-text', 'text-center')}>
                        <Link className={cx('header-bottom-link')}>Shop All Our New Markdowns</Link>
                    </p>
                </Carousel.Item>
            </Carousel>
            {/* Search component */}
            <Search
                value={searchValue}
                ref={searchRef}
                cancelSearch={handleCancelSearch}
                changeSearchValue={handleChangeSearchValue}
                clearSearchValue={handleClearSearchValue}
            />
        </header>
    );
}
export default Header;
