import { get, post, deleteMethod } from '~/utils/requests';

export async function getProductService(url, options = {}) {
    try {
        const res = await get(url, options);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function tickProductFavoriteService(url, data, options = {}) {
    try {
        const res = await post(url, data, options);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function cancelProductFavoriteService(url, id, options = {}) {
    try {
        const res = await deleteMethod(url + '/' + id, options);
        return res;
    }
    catch (error) {
        console.log(error);
    }
}
