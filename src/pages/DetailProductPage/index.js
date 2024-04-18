import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import classnames from 'classnames/bind';

import { ProductService, CartService } from '~/services';

import Image from '~/components/Image';
import Button from '~/components/Button';
import Input from '~/components/Input';
import ProductListForYou from '~/layouts/ProductListForYou';
import {
    ArrowLeftIcon, ArrowRightBoldIcon,
    HeartIcon, ArrowDownIcon,
}
    from '~/components/Icon';
import { formatPrice } from '~/helper';
import { actionsCart } from '~/pages/CartPage/cartSlice';
import { favouritesSlector } from '~/pages/FavouritePage/favouriteSelector';

import styles from './DetailProductPage.module.css';
import { actionsFavourite } from '../FavouritePage/favouriteSlice';
const cx = classnames.bind(styles);


function DetailProductPage() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [checkFavouriteValue, setCheckFavourite] = useState(false);
    const [sizeProductAddToCart, setSizeProductAddToCart] = useState('');
    const [colorProductAddToCart, setColorProductAddToCart] = useState('');

    let pathName = window.location.pathname.split('/');
    if (pathName[pathName.length - 1] === '') pathName.pop();
    let id = pathName[pathName.length - 1];

    const favouritesList = useSelector(favouritesSlector) ?? [];

    const imgProductRef = useRef(null);
    const indexImgDetailProduct = useRef(0);

    useEffect(() => {
        const getInforProductDetail = async (id) => {
            const res = await ProductService.getProductService('/productList/' + id);
            setProduct(res);
        }
        getInforProductDetail(id);
    }, [id])

    useEffect(() => {
        // handle check product favourite
        favouritesList.forEach((item) => {
            if (item.id === product?.id) {
                setCheckFavourite(true);
                return;
            }
        })
        return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    function handleChangeQuantity(e) {
        let quantityValue = e.target.value;
        if (!quantityValue) {
            setQuantity(0);
            return;
        }
        const regx = /^\d{1,4}$/;
        if (!regx.test(quantityValue)) return;
        quantityValue = parseInt(quantityValue);
        setQuantity(quantityValue);
    }

    function handleIncreaseQuantity() {
        setQuantity((prev) => {
            let value = parseInt(prev) + 1;
            if (value > 9999) return value - 1;
            return value;
        });
    }

    function handleSubtractQuantity() {
        setQuantity((prev) => {
            let value = parseInt(prev) - 1;
            if (value < 0) value = 0;
            return value;
        });
    }

    async function handleAddProductToCart() {
        const productAddToCart = {
            // itemCode: nanoid(),
            id: nanoid(),
            idProduct: product?.id,
            name: product?.name,
            subType: product?.subTitle,
            color: colorProductAddToCart,
            size: sizeProductAddToCart,
            price: product?.price,
            img: imgProductRef.current.src,
            quantity,
            total: product?.price * quantity
        }
        //add product to cart in database
        await CartService.addProductToCartService('/cart', productAddToCart);
        dispatch(actionsCart.addProductToCart(productAddToCart));
        alert('Added product to cart');
        imgProductRef.current.src = product?.img;
        setColorProductAddToCart('');
        setSizeProductAddToCart('');
        setQuantity('0');
    }

    async function handleAddProductToFavorite(e) {
        let element = e.target;
        while (!element.classList.contains(cx('content-detail-btn-addFavorite'))) {
            element = element.parentNode;
        }
        element.classList.toggle(cx('active'));
        if (element.classList.contains(cx('active'))) {
            const inforProduct = {
                ...product,
                idUser: 1,
            }
            dispatch(actionsFavourite.addFavourite(inforProduct));
            //add product to cart in database
            await ProductService.tickProductFavoriteService('/favourites', inforProduct);
            return;
        }
        // cancel product favorites
        dispatch(actionsFavourite.cancelFavourite(product?.id));
        ProductService.cancelProductFavoriteService('/favourites', product?.id);

    }


    return (
        //Nếu có product thì ta mới render ra detail infor của product
        <div className={cx('row', 'content-detail')}>
            {product &&
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-7', 'container-fluid', 'content-detail-left')}>
                            <div className={cx('row')}>
                                {/* hình ảnh mô tả chi tiết sản phẩm */}
                                {product?.imgsProductDetail.length > 0 &&
                                    <div className={cx('col-lg-2', 'content-detail-imgsDetail')}>
                                        {product?.imgsProductDetail.map((img, index) =>
                                            <div className={cx('content-detail-imgsDetail-item')}
                                                key={index}
                                            >
                                                <Image src={img} alt='img-detail' index-value={index}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        let src = e.target?.src;
                                                        let index = +e.target.getAttribute('index-value');
                                                        imgProductRef.current.src = src;
                                                        indexImgDetailProduct.current = index;
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                }
                                {/* Hình ảnh chính của sản phẩm */}
                                <div className={cx('col', 'content-detail-imgProduct')}>
                                    <div className={cx('content-detail-imgProduct-img')}>
                                        <Image src={product?.img} alt='img-product' ref={imgProductRef} />
                                    </div>
                                    <div className={cx('content-detail-control')}>
                                        <button
                                            className={cx('content-detail-control-prev', 'content-detail-control-item')}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                let indexPrev = indexImgDetailProduct.current - 1;
                                                if (indexPrev === -1) {
                                                    indexPrev = product?.imgsProductDetail.length - 1;
                                                    indexImgDetailProduct.current = indexPrev;
                                                }
                                                else {
                                                    indexImgDetailProduct.current = indexPrev;
                                                }
                                                let srcImg = product?.imgsProductDetail[indexPrev];
                                                imgProductRef.current.src = srcImg;
                                            }}
                                        >
                                            <ArrowLeftIcon width='8px' heihgt='8px' />
                                        </button>
                                        <button
                                            className={cx('content-detail-control-next', 'content-detail-control-item')}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                let indexNext = indexImgDetailProduct.current + 1;
                                                if (indexNext === product?.imgsProductDetail.length) {
                                                    indexNext = 0;
                                                    indexImgDetailProduct.current = indexNext;
                                                }
                                                else {
                                                    indexImgDetailProduct.current = indexNext;
                                                }
                                                let srcImg = product?.imgsProductDetail[indexNext];
                                                imgProductRef.current.src = srcImg;
                                            }}
                                        >
                                            <ArrowRightBoldIcon width='8px' heihgt='8px' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-5', 'content-detail-right')}>
                            {/* name product */}
                            <div className={cx('content-detail-infor')}>
                                <h2 className={cx('content-detail-title')}>{product?.name}</h2>
                                <h4 className={cx('content-detail-subTitle')}>{product?.subTitle}</h4>
                                <p className={cx('content-detail-price')}>{formatPrice(product?.price)}</p>
                            </div>
                            {/* list imgs of product by color*/}
                            {product?.imgsProductByColor.length > 0 &&
                                <div className={cx('content-detail-imgSimilar', 'container-fluid')}>
                                    <h3 className={cx('content-detail-imgSimilar-title', 'row')}>
                                        Colors:
                                    </h3>
                                    <div className={cx('row')}>
                                        {product?.imgsProductByColor?.map((imgItem, index) =>
                                            <div className=
                                                {cx('col-lg-3', 'content-detail-imgSilimar-item')}
                                                key={index}
                                            >
                                                <Image src={imgItem?.src}
                                                    className={cx('content-detail-imgSilimar-img', {
                                                        'active': colorProductAddToCart === imgItem.typeColor
                                                    })}
                                                    alt='imgSimilar-item' data-value={imgItem?.typeColor}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (!e.target.classList.contains(cx('active'))) {
                                                            let color = e.target.getAttribute('data-value');
                                                            imgProductRef.current.src = e.target.getAttribute('src');
                                                            indexImgDetailProduct.current = -1;
                                                            setColorProductAddToCart(color);
                                                            return;
                                                        }
                                                        e.target.classList.remove(cx('active'));
                                                        setColorProductAddToCart('');
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                            {/* list sizes của product */}
                            <div className={cx('content-detail-selectSize', 'container-fluid')}>
                                <h3 className={cx('row', 'content-detail-selectSize-title')}>
                                    Select Size:
                                </h3>
                                {product?.sizes.length > 0 &&
                                    <div className={cx('row', 'content-detail-selectSize-list')}>
                                        {product?.sizes.map((size, index) =>
                                            <div key={index}
                                                className={cx('content-detail-selectSize-item', 'col-lg-4')}>
                                                <button className={cx('content-detail-selectSize-btn',
                                                    {
                                                        'active': sizeProductAddToCart === size
                                                    }
                                                )}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (!e.target.classList.contains(cx('active'))) {
                                                            let size = e.target.innerText;
                                                            setSizeProductAddToCart(size);
                                                            return;
                                                        }
                                                        e.target.classList.remove(cx('active'));
                                                        setSizeProductAddToCart('');
                                                    }}
                                                >
                                                    {size}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                            {/* Số lượng mua */}
                            <div className={cx('content-detail-quantity')}>
                                <h3 className={cx('content-detail-quantity-title')}>Quantity: </h3>
                                <div className={cx('content-detail-quantity-control')}>
                                    <Button
                                        outline
                                        className={cx('content-detail-quantity-control-btn', 'disable')}
                                        onClick={handleSubtractQuantity}
                                    >
                                        -
                                    </Button>
                                    <Input className={cx('content-detail-quantity-value')} type='text'
                                        value={quantity}
                                        onChange={handleChangeQuantity}
                                    />
                                    <Button
                                        outline
                                        className={cx('content-detail-quantity-control-btn')}
                                        onClick={handleIncreaseQuantity}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('content-detail-btn')}>
                                <div className={cx('content-detail-btn-group')}>
                                    <Button classNameAdd={cx('content-detail-btn-addBag')}
                                        primary block
                                        disable={
                                            !(colorProductAddToCart !== '' &&
                                                sizeProductAddToCart !== '' &&
                                                quantity !== 0
                                            )
                                        }
                                        onClick={handleAddProductToCart}
                                    >
                                        Add to Bag
                                    </Button>
                                </div>
                                <div className={cx('content-detail-btn-group')}>
                                    <Button classNameAdd={cx('content-detail-btn-addFavorite', {
                                        'active': checkFavouriteValue
                                    })}
                                        outline block
                                        iconRight={<HeartIcon width='16px' height='16px' />}
                                        onClick={handleAddProductToFavorite}
                                    >
                                        Favourite
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* infor detail về sản phẩm */}
                    <div className={cx('row')} >
                        {
                            product?.inforProductDetail.length > 0 &&
                            <div className={cx('content-detail-feature', 'col-lg-12')}>
                                {product?.inforProductDetail.map((feature, index) =>
                                    <div className={cx('cotent-detail-feature-item')} key={index}>
                                        <button className={cx('content-detail-feature-title')}
                                            data-target={`#${feature?.id}`} data-toggle='collapse'
                                        >
                                            {feature?.title}
                                            <span className={cx('content-feature-icon')}>
                                                <ArrowDownIcon width='16px' height='16px' />
                                            </span>
                                        </button>
                                        <div className={cx('collapse', 'show')} id={feature?.id}>
                                            <p className={cx('content-detail-feature-subtitle')}>
                                                {feature?.subTitle}
                                            </p>
                                            {/* Danh sách các thông tin của tính năng đó */}
                                            {feature?.content &&
                                                <ul className={cx('content-detail-feature-list')}>
                                                    {feature?.content.split(/\n/).map((featureItem, index) =>
                                                        <li key={index}
                                                            className={cx('content-detail-feature-list-item')}
                                                        >
                                                            {featureItem}
                                                        </li>
                                                    )}
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        }
                    </div >
                    {/* Reviews */}
                    <div className={cx('row')}>
                        <div className={cx('col-lg-12', 'content-detail-reviews')}>
                            <button className={cx('content-detail-reviews-btnToggle')}
                                data-target='#reviews' data-toggle='collapse'
                            >
                                <span>
                                    Reviews
                                    <span className={cx('content-detail-reviews-count')}> (0)</span>
                                </span>
                                <ArrowDownIcon height='16px' width='16px' />
                            </button>
                            <ul className={cx('content-detail-reviews-list')} id='reviews'></ul>
                        </div>
                    </div>
                    {/* Danh sách sản phẩm bạn có thể thích */}
                    <ProductListForYou className={cx('row')} />
                </div >
            }
            {!product &&
                <div className={cx('col')}>
                    <h2 className={cx('text-center')}>Can't find what you requested!</h2>
                </div>
            }
        </div >
    );
}

export default DetailProductPage;