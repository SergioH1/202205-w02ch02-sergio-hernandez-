const array = [];

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}
push(array, 0);
