import classnames from 'classnames/bind';
import { useSelector } from 'react-redux';
import ProductCard from '~/components/ProductCard';

import { productListRemainingSelector } from './ProductSelector'

import styles from './Product.module.css';
const cx = classnames.bind(styles);


function ProductPage() {
    const dataProductList = useSelector(productListRemainingSelector) ?? [];
    return (
        <div className={cx('product', 'container-fluid', 'col',)}>
            <div className={cx('row', 'product-list')}>
                {dataProductList.length > 0 &&
                    dataProductList?.map((product, index) =>
                        <div className={cx('product-card-item', 'col-lg-4')} key={index}>
                            <ProductCard to={`/product/detail/${product?.id}`}
                                productImgSrc={product?.img}
                                productTitle={product?.name}
                                subProductTitle={product?.subTitle}
                                imgsProductByColor={product?.imgsProductByColor}
                                productPrice={product?.price}
                                productColors={product?.colors}
                            />
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default ProductPage;