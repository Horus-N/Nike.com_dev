
export function handleFormatTitle(title) {
    let titleHandle = title.split('/');
    let tmp = '';
    for (let i = 2; i < titleHandle.length; i++) {
        if (titleHandle[i].includes('_')) {
            titleHandle[i] = keepstableSpaces(titleHandle[i]);
            tmp += titleHandle[i];
        }
        else if (titleHandle[i])
            tmp += titleHandle[i][0].toUpperCase() + titleHandle[i].slice(1, titleHandle[i].lenght).toLowerCase();

        if (i !== (titleHandle.length - 1))
            tmp += ' ';
    }
    return tmp;
}

export function keepstableSpaces(str) {
    let result = str.replaceAll('_', ' ');
    return result;
}
