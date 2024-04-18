import { Link, useNavigate } from 'react-router-dom';
import { memo, forwardRef, useImperativeHandle, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types'
import { Navbar, Form, FormControl } from 'react-bootstrap';

import { actionsFillter } from '~/layouts/Filter/FillterSlice';
import { productListBySearchValueSelector } from '~/pages/ProductPage/ProductSelector';
import Button from '~/components/Button';
import ProductCard from '~/components/ProductCard';
import { SearchIcon, CrossIcon } from '~/components/Icon';

import styles from './Search.module.css';
const cx = classnames.bind(styles);


const Search = forwardRef(
    ({ value, cancelSearch,
        changeSearchValue, clearSearchValue,
        ...props
    }, ref) => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const productList = useSelector(productListBySearchValueSelector);

        const searchRef = useRef(null);
        useImperativeHandle(ref, () => {
            return {
                onShow: () => searchRef.current.style.display = 'flex',
                onHidden: () => searchRef.current.style.display = 'none'
            }
        })

        const handleOverItemTopSearch = (e) => {
            let itemValue = e.target.innerText;
            dispatch(actionsFillter.changeSearchValue(itemValue));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }

        const handleOutItemTopSearch = (e) => {
            dispatch(actionsFillter.changeSearchValue(value));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }

        const handleSearchBySearchValue = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (value) {
                searchRef.current.style.display = 'none';
                navigate('/products');
            }
        }


        return (
            <div className={cx('search')} ref={searchRef}
                {...props}
            >
                <div className={cx('search-container')}>
                    <header className={cx('header')}>
                        <Navbar bg='light' className={cx('navbar')}>
                            <Link to='/' className={cx('navbar-brand')}>
                                <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img">
                                    <path fill="currentColor" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z">
                                    </path>
                                </svg>
                            </Link>
                            <Form className={cx('navbar-form')} >
                                <Button
                                    className={cx('navbar-form-btn', 'navbar-form-btn-search')}
                                    onClick={handleSearchBySearchValue}
                                >
                                    <SearchIcon />
                                </Button>
                                <FormControl type='text' placeholder='Search'
                                    className={cx('navbar-form-value')}
                                    onChange={changeSearchValue}
                                    value={value}
                                />
                                <Button
                                    className={cx('navbar-form-btn', 'navbar-form-btn-cancel')}
                                    onClick={clearSearchValue}
                                >
                                    <CrossIcon />
                                </Button>
                            </Form>
                            <button className={cx('navbar-btn-cancel')}
                                onClick={cancelSearch}
                            >
                                Cancel
                            </button>
                        </Navbar>
                    </header>
                    <main className={cx('content')}>
                        <div className={cx('content-topSearch')}>
                            <h2 className={cx('content-topSearch-title')}>Top Search</h2>
                            <Link className={cx('content-topSearch-item')}
                                to='/products/Shoes'
                                onMouseOver={handleOverItemTopSearch}
                                onMouseOut={handleOutItemTopSearch}
                            >
                                Shoes
                            </Link>
                            <Link className={cx('content-topSearch-item')}
                                to='/products/Clothing'
                                onMouseOver={handleOverItemTopSearch}
                                onMouseOut={handleOutItemTopSearch}
                            >
                                Clothing
                            </Link>
                            <Link className={cx('content-topSearch-item')}
                                to='/products/Accessories-Equipment'
                                onMouseOver={handleOverItemTopSearch}
                                onMouseOut={handleOutItemTopSearch}
                            >
                                Accessories-Equipment
                            </Link>
                        </div>
                        <div className={cx('content-search-result', 'container-fluid')}>
                            <div className={cx('row', 'row-cols-5')}>
                                {productList?.length > 0 &&
                                    productList?.map((product, index) =>
                                        <div className={cx('content-search-item')} key={index}>
                                            <Link className={cx('content-search-link')}
                                                to={`/product/detail/${product.id}`}
                                            >
                                                <ProductCard productImgSrc={product?.img}
                                                    productTitle={product?.name}
                                                    subProductTitle={product?.subTitle}
                                                    productPrice={product?.price}
                                                />
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </main>
                </div>
                <div className={cx('search-overlay')} onClick={() =>
                    searchRef.current.style.display = 'none'}
                />
            </div>
        )
    })

Search.propTypes = {
    value: PropTypes.string,
    cancelSearch: PropTypes.func,
    changeSearchValue: PropTypes.func,
    clearSearchValue: PropTypes.func,
}
export default memo(Search);