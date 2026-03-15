const { describe, it, expect } = require('jest');
const sum = require('./index.js');

describe('sum function checking', () => {
    it('sum has to return the correct sum of two numbers', () => {
        expect(sum(3, 5)).toBe(8);
    });
});
