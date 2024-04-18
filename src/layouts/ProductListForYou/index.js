import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import ProductCard from '~/components/ProductCard';
import {
    ArrowLeftLargeIcon, ArrowRightLargeIcon,
}
    from '~/components/Icon';
import { productListSelector } from '~/pages/ProductPage/ProductSelector';

import styles from './ProductListForYou.module.css';
const cx = classnames.bind(styles);

function ProductListForYou({ className }) {
    const productListForYou = useSelector(productListSelector) ?? [];

    const slider = useRef(null);

    return (
        <div className={cx(className, 'content-productList-ForYou')}>
            <div className={cx('col-lg-12', 'content-productList-ForYou-title')}>
                <h4 className={cx('content-productList-ForYou-text')}>You Might Also Like</h4>
                <div className={cx('slick-slider-controls')}>
                    <button className={cx('slick-slider-btn', 'slick-slider-btn-prev')}
                        onClick={() => slider?.current?.slickPrev()}
                    >
                        <ArrowLeftLargeIcon width='18px' height='18px' />
                    </button>
                    <button className={cx('slick-slider-btn', 'slick-slider-btn-next')}
                        onClick={() => slider?.current?.slickNext()}
                    >
                        <ArrowRightLargeIcon width='18px' height='18px' />
                    </button>
                </div>
            </div>
            <div className={cx('col-lg-12', 'container-fluid', 'content-productList-ForYou-list')}>
                {productListForYou.length > 0 &&
                    <Slider className={cx('row')} ref={slider}
                        slidesToShow={4}
                        slidesToScroll={4}
                        autoplay
                        autoplaySpeed={5000}
                        swipe={false}
                        arrows={false}
                    >
                        {productListForYou?.map((productItem, index) => {
                            return <ProductCard productImgSrc={productItem?.img}
                                key={index}
                                href={`/product/detail/${productItem.id}`}
                                productTitle={productItem?.name}
                                subProductTitle={productItem?.subTitle}
                                productPrice={productItem?.price}
                                productColors={productItem?.colors}
                                imgsProductByColor={productItem?.imgsProductByColor}
                                classNameAdd={cx('content-productList-item')}
                            />
                        })}
                    </Slider>
                }
            </div>
        </div>
    )
}
ProductListForYou.propTypes = {
    classnames: PropTypes.string,
}

export default ProductListForYou;