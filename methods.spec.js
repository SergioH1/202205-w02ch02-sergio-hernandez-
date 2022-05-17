import { push, length, pop } from './methods.js';

describe('Given push function', () => {
    describe('When it is run with 0', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const result = push(aData, 0);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and undefined', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const result = push(aData, undefined);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and array', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const aData2 = [];
            const result = push(aData, aData2);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and object', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const aData2 = {};
            const result = push(aData, aData2);
            expect(result).toBe(aData.length);
        });
    });
});

describe('Given length function', () => {
    describe('When it is run aData', () => {
        test('Then it should return aData.length', () => {
            const aData = [3];
            const result = length(aData);
            expect(result).toBe(aData.length);
        });
    });
});

describe('Given pop function', () => {
    describe('When it is run array', () => {
        test('Then it should return 9', () => {
            const array = [6, 9];
            const result = pop(array);
            expect(result).toBe(9);
        });
    });
    describe('When it is run array', () => {
        test('Then it should return array.length -1 ', () => {
            const array = [6, 9];
            const result = pop(array);
            expect(result).not.toContain(9);
        });
    });
});
