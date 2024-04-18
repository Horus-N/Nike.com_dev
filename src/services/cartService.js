import { post, get, deleteMethod } from '~/utils/requests';

export const addProductToCartService = async (url, product, options = {}) => {
    try {
        const res = await post(url, product, options);
        return res;
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteProductTInCartService = async (url, id, options = {}) => {
    try {
        const res = await deleteMethod(url + '/' + id, options);
        return res;
    }
    catch (err) {
        console.log(err);
    }
}



export const getProductsTFromCartService = async (url, options = {}) => {
    try {
        const res = await get(url, options);
        return res;
    }
    catch (err) {
        console.log(err);
    }
}