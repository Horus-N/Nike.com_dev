import classnames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import {
    useContext, forwardRef,
    useImperativeHandle, useRef,
    useEffect, useState
}
    from 'react';
import {
    TypesProduct, TypesSuitable,
    ColorsList, SizeList,
    BrandList, TypesClothing,
    typesClothingOfWoment, typesClothingOfMen
}
    from './FilterContext';
import {
    FillterBrandsSelector, FillterGendersSelector,
    FillterSuitableSelector, FillterTypeSelector
}
    from './FillterSelector';
import { actionsFillter } from './FillterSlice';
import { capitalizeFirstLetter, handleStr } from '~/helper/';
import { CheckIcon, ArrowDownIcon } from '~/components/Icon';

import styles from './Filter.module.css';
const cx = classnames.bind(styles);

function Filter({ ...props }, ref) {
    const dispatch = useDispatch();
    const typesProduct = useContext(TypesProduct);
    const typesSuitableList = useContext(TypesSuitable);
    const typesClothingList = useContext(TypesClothing);
    const colorsList = useContext(ColorsList);
    const sizeList = useContext(SizeList);
    const brandList = useContext(BrandList);

    const [menuTypesSuitable, setMenuTypesSuitable] = useState(false);
    const [menuTypesClothing, setMenuTypesClothing] = useState([]);
    const [menuTypesProduct, setMenuTypesProduct] = useState(false);
    const [blockGender, setBlockGender] = useState(false);

    useEffect(() => {
        handleTypeContent();
        return () => {
            // console.log('re-rendering')
            dispatch(actionsFillter.clearFilter());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleTypeContent() {
        let pathNameSplited = window.location.pathname.split('/');
        pathNameSplited.shift();
        //handle exception;
        if (pathNameSplited[pathNameSplited.length - 1] === '') pathNameSplited.pop();
        if (pathNameSplited.length === 1) {
            setMenuTypesProduct(true);
            return; //render all products;
        }
        //handle type content

        //với pathName có 3 tham số;
        if (pathNameSplited.length === 3) {
            if (pathNameSplited[0] === 'products') {
                let checkGender = capitalizeFirstLetter(pathNameSplited[2]);
                let suitable = handleStr.keepstableSpaces(pathNameSplited[2]);
                let type = pathNameSplited[1].toLowerCase();
                if (!['clothing', 'shoes', 'accessories-equipment'].includes(type))
                    window.location.href = '/';

                if (['Men', 'Women'].includes(checkGender)) {
                    setBlockGender(true);
                    if (type === 'clothing') {
                        (checkGender === 'Women')
                            ? setMenuTypesClothing([...typesClothingList, ...typesClothingOfWoment])
                            : setMenuTypesClothing([...typesClothingList, ...typesClothingOfMen])
                        dispatch(actionsFillter.changeType(type));
                    }
                    else {
                        setMenuTypesSuitable(true);
                        dispatch(actionsFillter.changeType(type));
                    }
                    dispatch(actionsFillter.addGender(checkGender));
                }
                else {
                    (type === 'clothing')
                        ? setMenuTypesClothing(typesClothingList)
                        : setMenuTypesSuitable(true);
                    dispatch(actionsFillter.addGender('Men'));
                    dispatch(actionsFillter.addGender('Women'));
                    dispatch(actionsFillter.changeType(type));
                    dispatch(actionsFillter.changeSuitable(suitable));
                }
            }
            //với pathName /shopbybrand/brand/gender
            else {
                let gender = capitalizeFirstLetter(pathNameSplited[2]);
                let brand = capitalizeFirstLetter(pathNameSplited[1]);
                setMenuTypesProduct(true);
                switch (gender) {
                    case 'Women': {
                        setBlockGender(true);
                        dispatch(actionsFillter.addBrand(brand));
                        dispatch(actionsFillter.addGender(gender));
                        return;
                    }
                    case 'Men': {
                        setBlockGender(true);
                        dispatch(actionsFillter.addBrand(brand));
                        dispatch(actionsFillter.addGender(gender));
                        return;
                    }
                    default: {
                        //Content không hợp lệ!;
                        window.location.href = '/'
                        return;
                    }
                }
            }
        }
        //với pathName có 2 tham số;
        else if (pathNameSplited.length === 2) {
            switch (pathNameSplited[0]) {
                case 'products': {
                    //fillter for products is shoes
                    let type = pathNameSplited[1].toLowerCase();
                    if (type === 'shoes') {
                        setMenuTypesSuitable(true);
                        dispatch(actionsFillter.changeType(type));
                        dispatch(actionsFillter.changeSuitable('All'));
                    }
                    else if (type === 'clothing') {
                        //fillter for products is clothing
                        setMenuTypesSuitable(true);
                        dispatch(actionsFillter.changeType(type));
                        dispatch(actionsFillter.changeSuitable('All'));
                    }
                    else if (type === 'accessories-equipment') {
                        //fillter for accessories-equipment
                        setMenuTypesSuitable(true);
                        dispatch(actionsFillter.changeType(type));
                        dispatch(actionsFillter.changeSuitable('All'));
                    }
                    else {
                        window.location.href = '/'
                    }
                    return;
                }
                case 'shopbybrand': {
                    //fillter for products by brand;
                    let brand = capitalizeFirstLetter(pathNameSplited[1]);
                    if (!['Nike', 'Jordan', 'ACG'].includes(brand)) {
                        window.location.href = '/';
                        return;
                    }
                    setMenuTypesProduct(true);
                    dispatch(actionsFillter.addBrand(brand));
                    return;
                }
                case 'shopbygender': {
                    //filter for products by gender
                    let gender = capitalizeFirstLetter(pathNameSplited[1]);
                    if (!['Men', 'Women'].includes(gender)) {
                        window.location.href = '/';
                        return;
                    }
                    setBlockGender(gender);
                    setMenuTypesProduct(true);
                    dispatch(actionsFillter.addGender(gender));
                    return;
                }
                default: {
                    //Content khong hop le
                    window.location.href = '/'
                    return;
                }
            }
        }
        //với pathName: /products/:type/:gender/:suitable;
        else {
            //filter for products by type , gender, suitable for;
            let type = pathNameSplited[1].toLowerCase();
            let gender = capitalizeFirstLetter(pathNameSplited[2]);
            let suitable = handleStr.keepstableSpaces(pathNameSplited[3]);
            if (!['Men', 'Women'].includes(gender)) {
                window.location.href = '/';
                return;
            }
            if (!['shoes', 'clothing', 'accessories-equipment'].includes(type)) {
                window.location.href = '/';
                return;
            }
            (type === 'clothing' && gender === 'Men')
                ? setMenuTypesClothing(typesClothingList)
                : setMenuTypesClothing([...typesClothingList, ...typesClothingOfWoment]);

            setBlockGender(true);
            dispatch(actionsFillter.changeType(type));
            dispatch(actionsFillter.addGender(gender));
            dispatch(actionsFillter.changeSuitable(suitable));
        }

    }

    const FillterRef = useRef(null);
    const brands = useSelector(FillterBrandsSelector);
    const gender = useSelector(FillterGendersSelector);
    const type_suitable = useSelector(FillterSuitableSelector);
    const type_product = useSelector(FillterTypeSelector);


    useImperativeHandle(ref, () => {
        return {
            onToggle: () => {
                let result = '';
                FillterRef.current.classList.toggle(cx('hidden'));
                (FillterRef.current.classList.contains(cx('hidden')))
                    ? (result = 'Show fillter')
                    : (result = 'Hidden fillter');
                return result;
            },
        }
    }, []);

    return (
        <div className={cx('fillter', 'col-lg-2')} ref={FillterRef} {...props}>
            {
                menuTypesProduct &&
                <>
                    <div className={cx('fillter-typesproduct')}>
                        <ul className={cx('fillter-types-list')}>
                            {typesProduct.map((type, index) => {
                                return (
                                    <li key={index} className={cx('fillter-types-item', {
                                        'active': type.title.toLowerCase() === type_product
                                    })}
                                        data-title={type.title.toLowerCase()}
                                        onClick={(e) => {
                                            let title = e.target.getAttribute('data-title');
                                            setMenuTypesSuitable(typesClothingList);
                                            if (title !== type_product)
                                                dispatch(actionsFillter.changeType(title));
                                        }}
                                    >
                                        {type.title}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={cx('fillter-separator')}></div>
                </>
            }
            {menuTypesClothing.length > 0 &&
                <div className={cx('fillter-typesproduct')}>
                    <button className={cx('btn-toggle-suitable')} data-toggle='collapse' data-target='#typesClothing'>
                        Types Clothing
                        <span><ArrowDownIcon width='18px' height='18px' /></span>
                    </button>
                    <ul className={cx('fillter-types-clothing', 'collapse', 'show')} id='typesClothing'>
                        {menuTypesClothing.map((type, index) => {
                            return (
                                <li key={index} className={cx('fillter-types-item', {
                                    'active': type.title === type_suitable
                                })}
                                    onClick={(e) => {
                                        if (e.target.innerText !== type_suitable)
                                            dispatch(actionsFillter.changeSuitable(e.target.innerText));
                                    }}
                                >
                                    {type.title}
                                </li>
                            )
                        })}
                    </ul>
                    <div className={cx('fillter-separator')}></div>
                </div>
            }
            {menuTypesSuitable &&
                <div className={cx('fillter-suitable')}>
                    <button className={cx('btn-toggle-suitable')} data-toggle='collapse' data-target='#suitable'>
                        Suitable
                        <span><ArrowDownIcon width='18px' height='18px' /></span>
                    </button>
                    <ul className={cx('fillter-suitable-list', 'show', 'collapse')} id='suitable'>
                        {typesSuitableList.map((type, index) => {
                            return (
                                <li key={index} className={cx('fillter-suitable-item', {
                                    'active': type.title === type_suitable
                                })}
                                    onClick={(e) => {
                                        if (e.target.innerText !== type_suitable)
                                            dispatch(actionsFillter.changeSuitable(e.target.innerText));
                                    }}
                                >
                                    {type.title}
                                </li>
                            )
                        })}
                    </ul>
                    <div className={cx('fillter-separator')}></div>
                </div>
            }
            {brandList &&
                <div className={cx('fillter-brands')}>
                    <button className={cx('btn-toggle-brand')} data-toggle='collapse' data-target='#brandlist'>
                        Brands
                        <span><ArrowDownIcon width='18px' height='18px' /></span>
                    </button>
                    <div className={cx('row', 'collapse', 'show', 'fillter-brands-list')} id='brandlist'>
                        {brandList.map((brand, index) => {
                            return (
                                <div className={cx('fillter-brands-item')} key={index}>
                                    <input type='checkbox'
                                        checked={(brands.includes(brand))}
                                        value={brand}
                                        onChange={(e) => {
                                            let check = !e.target.checked;
                                            let value = e.target.value;
                                            (!check)
                                                ? dispatch(actionsFillter.addBrand(value))
                                                : dispatch(actionsFillter.cancelBrand(value));
                                        }}
                                    />
                                    <span className={cx('fillter-brands-title')}>{brand}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            <div className={cx('fillter-separator')}></div>
            {colorsList &&
                <div className={cx('fillter-colors', 'container-fluid', 'px-0')}>
                    <button className={cx('btn-toggle-color')} data-toggle='collapse' data-target='#colorlist'>
                        Colour
                        <span><ArrowDownIcon width='18px' height='18px' /></span>
                    </button>
                    <div className={cx('row', 'collapse', 'show', 'fillter-colors-list')} id='colorlist'>
                        {colorsList.map((color, index) => {
                            return (
                                <div className={cx('fillter-colors-item', 'col-lg-4', 'px-0')} key={index}>
                                    <div className={cx('fillter-colors-value')}
                                        style={{ backgroundColor: color.value }}
                                        data-value={color.title}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            let element = e.target;
                                            while (!element.classList.contains(cx('fillter-colors-value'))) {
                                                element = element.parentNode;
                                            }
                                            let nameColor = element.getAttribute('data-value');
                                            if (element.classList.contains(cx('active'))) {
                                                element.classList.remove(cx('active'));
                                                dispatch(actionsFillter.cancelColor(nameColor));
                                            }
                                            else {
                                                element.classList.add(cx('active'));
                                                dispatch(actionsFillter.addColor(nameColor));
                                            }
                                        }}
                                    >
                                        <CheckIcon className={cx('fillter-colors-icon')} width='16px' height='16px'
                                        />
                                    </div>
                                    <span className={cx('fillter-colors-name')}

                                    >{color.title}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            <div className={cx('fillter-separator')}></div>
            {sizeList &&
                <div className={cx('fillter-sizes', 'container-fluid', 'px-0')}>
                    <button className={cx('btn-toggle-sizes', 'mx-0')} data-target='#sizelist' data-toggle='collapse'>
                        Sizes
                        <span><ArrowDownIcon width='18px' height='18px' /></span>
                    </button>
                    <div className={cx('fillter-sizes-list', 'row', 'collapse', 'show')} id='sizelist'>
                        {sizeList.map((size, index) => {
                            return (
                                <div className={cx('fillter-sizes-item', 'col-4')} key={index}>
                                    <button className={cx('fillter-sizes-item_btn')}
                                        data-size={size}
                                        onClick={(e) => {
                                            let size = e.target.getAttribute('data-size');
                                            if (e.target.classList.contains(cx('active'))) {
                                                e.target.classList.remove(cx('active'));
                                                dispatch(actionsFillter.cancelSize(size));
                                            }
                                            else {
                                                e.target.classList.add(cx('active'));
                                                dispatch(actionsFillter.addSize(size));
                                            }
                                        }}
                                    >
                                        {size}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            {!blockGender &&
                <>
                    <div className={cx('fillter-separator')}></div>
                    <div className={cx('fillter-gender', 'container-fluid', 'px-0')}>
                        <button className={cx('btn-toggle-gender', 'mx-0')} data-target='#genderlist' data-toggle='collapse'>
                            Gender
                            <span><ArrowDownIcon width='18px' height='18px' /></span>
                        </button>
                        <div className={cx('fillter-gender-list', 'row', 'collapse', 'show')} id='genderlist'>
                            <div className={cx('fillter-gender-item')}>
                                <input type='checkbox' checked={(gender.includes('Men'))} value={'Men'}
                                    className={cx('filter-gender-checkbox')}
                                    onChange={(e) => {
                                        let check = !e.target.checked;
                                        let value = e.target.value;
                                        (!check)
                                            ? dispatch(actionsFillter.addGender(value))
                                            : dispatch(actionsFillter.cancelGender(value));
                                    }}
                                />
                                <span className={cx('fillter-gender-title')}>Men</span>
                            </div>
                            <div className={cx('fillter-gender-item')}>
                                <input type='checkbox' checked={(gender.includes('Women'))} value={'Women'}
                                    className={cx('filter-gender-checkbox')
                                    }
                                    onChange={(e) => {
                                        let check = !e.target.checked;
                                        let value = e.target.value;
                                        (!check)
                                            ? dispatch(actionsFillter.addGender(value))
                                            : dispatch(actionsFillter.cancelGender(value));
                                    }}

                                />
                                <span className={cx('fillter-gender-title')}>Women</span>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default forwardRef(Filter);