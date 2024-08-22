const assert = require('assert')
const calculateNumber = require('./1-calcul');
//const { describe } = require('node:test');

describe('calculateNumber', () => {
    describe('type === "SUM"', () => {
        it('equal positive number', () => {
            assert.strictEqual(calculateNumber('SUM', 1.0, 1.0), 2);
        });

        it('positive numbers with rounding', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 5.4), 6);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -3.0, -3.0), -6);
        });

        it('negative numbers with rounding', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, -5.6), -7);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -5.0, 3.0), -2);
        });

        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 4.0, -2.0), 2);
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
        });
    });

    describe('type === "SUBSTRACT"', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBSTRACT', 2.0, 2.0), 0);
        });

        it('positive numbers with roundings', () => {
            assert.strictEqual(calculateNumber('SUBSTRACT', 3.8, 1.2), 3);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBSTRACT', -2.0, -2.0), 0);
        });

        it('negative numbers with roundings', () => {
            assert.strictEqual(calculateNumber('SUBSTRACT', -3.4, -5.6), 3);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBSTRACT', -3.0, 5.0), -8);
        });

        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBSTRACT', 5.0, -7.0), 12);
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUBSTRACT', 0.0, 0.0), 0);
        });
    });

    describe('type === "DIVIDE"', () => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2);
        });

        it('negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -4.0, -2.0), 2);
        });

        it('numbers with different signs', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -4.0, 2.0), -2);
        });

        it('numbers with different signs 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.0, -2.0), -2);
        });

        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
        });

        it('equal rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
        });

        it('equal rounded down numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.4), 1);
        });

        it('zero and a positive number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 2.0), 0);
        });

        it('zero and a negative number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, -2.0), -0);
        });

        it('positive number and zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.0), 'Error');
        });

        it('negative number and zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -4.0, 0.0), 'Error');
        });

        it('positive number and rounded to zero number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.3), 'Error');
        });

        it('negative number and rounded to zero number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -4.0, -0.2), 'Error');
        });

        it('positive number and a negatively rounded to zero number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 3.0, -0.3), 'Error');
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
        });
    });
})
