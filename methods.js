// eslint-disable-next-line prefer-const
const array = [];

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}

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
export function shift(arrayShift) {
    let counter = 0;
    const item = arrayShift[0];
    if (arrayShift.length === 0) return undefined;
    else {
        for (let i = 1; i < arrayShift.length; i++) {
            arrayShift[counter] = arrayShift[i];
            counter++;
        }
        pop(arrayShift);
        return item;
    }
}

export function unshift() {}

export function some(arraySome, myFunction) {
    for (let i = 0; i < arraySome.length; i++) {
        if (myFunction(arraySome[i]) === true) return true;
    }
    return false;
}
