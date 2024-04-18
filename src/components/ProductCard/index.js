import { useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import classnames from 'classnames/bind';

import { formatPrice } from '~/helper';
import styles from './ProductCard.module.css';
import Image from '~/components/Image';
const cx = classnames.bind(styles);

function ProductCard({
    to = '', href = '',
    classNameAdd, productImgSrc, productTitle, subProductTitle,
    productPrice = '0', productColors = [], imgsProductByColor = [], ...propsAdd
}) {

    let Comp = 'div';
    const className = cx('card', 'product-card', classNameAdd);
    const props = {
        className,
        ...propsAdd
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const productRef = useRef(null);
    const productImgSimilarRef = useRef(null);
    const productInforRef = useRef(null);


    function handleShowImgSimilar(e) {
        const imgsrc = e.target?.src;
        const productImg = productRef.current.querySelector('img');
        productImg.src = imgsrc;
    }

    function handleMouseOverProductCard() {
        productImgSimilarRef.current.style.display = 'block';
        productInforRef.current.style.display = 'none';
    }

    function handleMouseOutProductCard() {
        productImgSimilarRef.current.style.display = 'none';
        productInforRef.current.style.display = 'block';
    }

    return (
        <Comp {...props} ref={productRef}
            onMouseOver={handleMouseOverProductCard}
            onMouseOut={handleMouseOutProductCard}
        >
            <Image src={productImgSrc} className={cx('card-img-top', 'product-card-img')} alt="product-card" />
            <div className={cx('card-body', 'product-card-infomation', 'px-0')} ref={productInforRef}>
                <h3 className={cx('card-title', 'product-card-title')}>{productTitle}</h3>
                <h4 className={cx('product-card-types')}>{subProductTitle}</h4>
                <p className={cx('product-card-colors')}>
                    {(!productColors) ? 'Không xác định' : productColors.length} Colours
                </p>
                <p className={cx('product-card-price', 'card-text')}>{formatPrice(productPrice)}</p>
            </div>
            <div className={cx('card-body', 'product-card-ImgSimilar', 'px-0')} ref={productImgSimilarRef}>
                {imgsProductByColor?.length > 0 &&
                    <div className={cx('product-card-ImgSimilar-list')}>
                        {(imgsProductByColor?.length > 3) ?
                            <Fragment>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <Image src={imgsProductByColor[0]?.src} alt='img 1'
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                    />
                                </div>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <Image src={imgsProductByColor[1]?.src} alt='img 2'
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                    />
                                </div>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <Image src={imgsProductByColor[2]?.src} alt='img 3'
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                    />
                                </div>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <span>+{imgsProductByColor.length - 3}</span>
                                </div>
                            </Fragment>
                            :
                            imgsProductByColor.map((img, index) => {
                                return <div className={cx('product-card-ImgSimilar-item')} key={index}>
                                    <Image src={img?.src} alt={`img ${index}`}
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                    />
                                </div>
                            })
                        }
                    </div>
                }
                <h3 className={cx('card-title', 'product-card-title')}>{productTitle}</h3>
                <p className={cx('product-card-price', 'card-text')}>{formatPrice(productPrice)}</p>
            </div>
        </Comp>
    )
}
ProductCard.propTypes = {
    to: Proptypes.string,
    href: Proptypes.string,
    classNameAdd: Proptypes.string,
    productImgSrc: Proptypes.string,
    productTitle: Proptypes.string,
    subProductTitle: Proptypes.string,
    productPrice: Proptypes.number,
    productColors: Proptypes.array,
    imgsProductByColor: Proptypes.array,
}
export default ProductCard;