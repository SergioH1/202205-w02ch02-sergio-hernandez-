import { push } from './methods.js';

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
            expect(result).toEqual(expect.arrayContaining(result)); // borrar
        });
    });
});
