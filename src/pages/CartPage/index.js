import classnames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartService } from '~/services/';
import { formatPrice } from '~/helper';
import { actionsCart } from './cartSlice'
import { cartSelector } from './cartSelector';
import Image from '~/components/Image';
import Button from '~/components/Button';

import {
    HeartIcon, DeleteIcon
} from '~/components/Icon';
import styles from './CartPage.module.css';
const cx = classnames.bind(styles);

function CartPage() {

    const productsInCart = useSelector(cartSelector);
    const [subTotalValue, setSubTotalValue] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        let subTotal = productsInCart.reduce((total, item) => total + (item?.price * item?.quantity), 0);
        let total = subTotal * 1;
        setSubTotalValue(formatPrice(subTotal));
        setTotalValue(formatPrice(total));
    }, [productsInCart]);

    async function handleRemoveProductInCart(e) {
        let element = e.target;
        while (!element.classList.contains(cx('cart-item-action-delete'))) {
            element = element.parentNode;
        }
        let id = element.getAttribute('data-target-id');

        await CartService.deleteProductTInCartService('/cart', id);
        dispatch(actionsCart.deleteProductInCart(id));

    }

    return (
        <div className={cx('cart', 'container')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-8', 'cart-infor')}>
                    <h2 className={cx('cart-title')}>Cart</h2>
                    <div className={cx('cart-list')}>
                        {productsInCart.length > 0 &&
                            productsInCart?.map((product, index) => {
                                return (
                                    <div className={cx('cart-item', 'containter-fluid')} key={index}>
                                        <div className={cx('row')}>
                                            <Link className={cx('cart-item-img', 'd-block', 'col-lg-3')}
                                                to={`/product/detail/${product?.idProduct}`}
                                            >
                                                <Image
                                                    src={product?.img}
                                                    alt='img-product'
                                                />
                                            </Link>
                                            <div className={cx('col-lg-9', 'cart-item-infor')}>
                                                <div className={cx('cart-item-group', 'd-flex', 'justify-content-between', 'align-items-center')}>
                                                    <h4 className={cx('cart-item-name')}>
                                                        {product?.name}</h4>
                                                    <span className={cx('cart-item-price')}>
                                                        {formatPrice(product?.price)}
                                                    </span>
                                                </div>
                                                <p className={cx('cart-item-subTitle')}>
                                                    {product?.subTitle}
                                                </p>
                                                <p className={cx('cart-item-color')}>
                                                    Color: {product?.color}
                                                </p>
                                                <div className={cx('cart-item-group', 'd-flex',
                                                    'align-items-center', 'justify-content-between')}
                                                >
                                                    <p className={cx('cart-item-sizes-title')}>
                                                        Size: {product?.size}
                                                    </p>
                                                    <p className={cx('cart-item-quantity-title')}>
                                                        Quantity: {product?.quantity}
                                                    </p>
                                                </div>
                                                <p className={cx('cart-item-total')}>
                                                    Total: {formatPrice(product?.total)}
                                                </p>
                                                <div className={cx('cart-item-action')}>
                                                    <Button
                                                        classNameAdd={cx('cart-item-action-favourite', 'cart-item-action-btn')}
                                                    >
                                                        <HeartIcon />
                                                    </Button>
                                                    <Button data-target-id={product?.id}
                                                        classNameAdd={cx('cart-item-action-delete', 'cart-item-action-btn')}
                                                        onClick={handleRemoveProductInCart}
                                                    >
                                                        < DeleteIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {productsInCart.length === 0 &&
                            <div className={cx('cart-message')}>
                                <h2 className={cx('cart-message-text')}>No products!</h2>
                            </div>
                        }
                    </div>
                </div>
                <div className={cx('col-lg-4', 'cart-payment')}>
                    <h2 className={cx('cart-payment-title')}>Payment</h2>
                    <h4 className={cx('cart-payment-subtotal')}>
                        Subtotal
                        <span className={cx('cart-payment-money')}>{subTotalValue}</span>
                    </h4>
                    <h4 className={cx('cart-payment-ship')}>
                        Estimated Delivery & Handling
                        <span className={cx('cart-payment-ship-value')}>Free</span>
                    </h4>
                    <div className={cx('cart-payment-separate')}></div>
                    <h4 className={cx('cart-payment-total')}>
                        Total
                        <span className={cx('cart-payment-money')}>{totalValue}</span>
                    </h4>
                    <Button block classNameAdd={cx('cart-payment-btn')}
                        disable={productsInCart?.length === 0}
                    >
                        Member Checkout
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default CartPage;