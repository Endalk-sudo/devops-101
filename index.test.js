const { describe, it, expect } = require('jest');
const sum = require('./index.js');

describe('sum function checking', () => {
    it('sun has to return the correct sum of two numbers', () => {
        expect(sum(3, 5)).toBe(8);
        expect(sum(0, 0)).toBe(0);
        expect(sum(2, 2)).toBe(4);
        expect(sum(1, 9)).toEqual(10);
    });
});
