export function handlecCheckColor(product, filterColor) {
    for (let color of filterColor) {
        if (product.colors.includes(color))
            return true;
    }
    return false;
}

export function handlecCheckSize(product, filterSizes) {
    for (let size of filterSizes) {
        if (product.sizes.includes(size))
            return true;
    }
    return false;
}
export function handlecCheckGender(product, filterGender) {
    for (let item of filterGender) {
        if (product.gender.includes(item))
            return true;
    }
    return false;
}