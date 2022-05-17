// eslint-disable-next-line prefer-const
const array = [];

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}
push(array, 0);

export function length() {
    return array.length;
}

export function pop(array) {
    if (array === []) return undefined;
    else {
        const param = array[array.length - 1];
        array.length = array.length - 1;
        return param;
    }
}
export function map(array, myFunction) {
    const mapArray = [];
    for (let i = 0; i < array.length; i++) {
        push(mapArray, myFunction(array[i]));
    }
    return mapArray;
}
export function shift() {}
