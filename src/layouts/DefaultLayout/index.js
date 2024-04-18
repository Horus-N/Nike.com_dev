import { useState, useRef } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FilterIcon } from '~/components/Icon';

import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import Filter from '~/layouts/Filter';

import { handleStr } from '~/helper';
import { productListRemainingSelector } from '~/pages/ProductPage/ProductSelector';

import styles from './Default.module.css';
import { actionsFillter } from '../Filter/FillterSlice';
const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    const [sortByValue, setSortByValue] = useState('Price: High-Low');
    // eslint-disable-next-line no-unused-vars
    const [typeContent, setTypeContent] = useState(() => {
        const titleSplited = window.location.pathname;
        let title = handleStr.handleFormatTitle(titleSplited);
        if (!title) title = 'Products';
        return title;
    });
    const [btnToggleFillterValue, setBtnToggleFillterValue] = useState('Hidden fillter');

    const optionSortByRef = useRef(null);
    const fillterRef = useRef(null);
    const countProduct = useSelector(productListRemainingSelector).length;
    const dispatch = useDispatch();

    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('main', 'container-fluid')}>
                <div className={cx('row', 'main-TitleAndSort')}>
                    <h2 className={cx('main-title')}>
                        {typeContent}:<span className={cx('main-title-count')}>({countProduct})</span>
                    </h2>
                    <div className={cx('main-sortby')}>
                        <button
                            className={cx('btn-toggle-fillter')}
                            onClick={() => {
                                let result = fillterRef.current.onToggle();
                                setBtnToggleFillterValue(result);
                            }}
                        >
                            {btnToggleFillterValue}
                            <FilterIcon />
                        </button>
                        <div className={cx('main-dropdown-menu')}>
                            <button
                                className={cx('btn-toggle-dropmenu', 'sort')}
                                onClick={() => optionSortByRef.current.classList.toggle(cx('hidden'))}
                            >
                                Sort by:
                                <span className={cx('sorby-value')}>{sortByValue}</span>
                            </button>
                            <ul className={cx('dropdownMenu', 'hidden')} ref={optionSortByRef}>
                                <li
                                    className={cx('dorpdown-menu-item', 'sort-item')}
                                    data-value="desc"
                                    onClick={(e) => {
                                        let value = e.target.getAttribute('data-value');
                                        setSortByValue(e.target.textContent);
                                        optionSortByRef.current.classList.toggle(cx('hidden'));
                                        dispatch(actionsFillter.changeSort(value));
                                    }}
                                >
                                    Price: High-Low
                                </li>
                                <li
                                    className={cx('dorpdown-menu-item', 'sort-item')}
                                    value="asc"
                                    onClick={(e) => {
                                        let value = e.target.getAttribute('data-value');
                                        setSortByValue(e.target.textContent);
                                        optionSortByRef.current.classList.toggle(cx('hidden'));
                                        dispatch(actionsFillter.changeSort(value));
                                    }}
                                >
                                    Price: Low-High
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <Filter ref={fillterRef} />
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element,
};
export default DefaultLayout;
