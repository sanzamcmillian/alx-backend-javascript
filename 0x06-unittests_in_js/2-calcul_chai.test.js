const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai');
//const { describe } = require('node:test');

describe('calculateNumber', () => {
    describe('type === "SUM"', () => {
        it('equal positive number', () => {
            expect(calculateNumber('SUM', 1.0, 1.0)).to.equal(2);
        });

        it('positive numbers with rounding', () => {
            expect(calculateNumber('SUM', 1.4, 5.4)).to.equal(6);
        });

        it('equal negative numbers', () => {
            expect(calculateNumber('SUM', -3.0, -3.0)).to.equal(-6);
        });

        it('negative numbers with rounding', () => {
            expect(calculateNumber('SUM', -1.4, -5.6)).to.equal(-7);
        });

        it('negative and positive numbers', () => {
            expect(calculateNumber('SUM', -5.0, 3.0)).to.equal(-2);
        });

        it('positive and negative numbers', () => {
            expect(calculateNumber('SUM', 4.0, -2.0)).to.equal(2);
        });

        it('0 and 0', () => {
            expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
        });
    });

    describe('type === "SUBSTRACT"', () => {
        it('equal positive numbers', () => {
            expect(calculateNumber('SUBSTRACT', 2.0, 2.0)).to.equal(0);
        });

        it('positive numbers with roundings', () => {
            expect(calculateNumber('SUBSTRACT', 3.8, 1.2)).to.equal(3);
        });

        it('equal negative numbers', () => {
            expect(calculateNumber('SUBSTRACT', -2.0, -2.0)).to.equal(0);
        });

        it('negative numbers with roundings', () => {
            expect(calculateNumber('SUBSTRACT', -3.4, -5.6)).to.equal(3);
        });

        it('negative and positive numbers', () => {
            expect(calculateNumber('SUBSTRACT', -3.0, 5.0)).to.equal(-8);
        });

        it('positive and negative numbers', () => {
            expect(calculateNumber('SUBSTRACT', 5.0, -7.0)).to.equal(12);
        });

        it('0 and 0', () => {
            expect(calculateNumber('SUBSTRACT', 0.0, 0.0)).to.equal(0);
        });
    });

    describe('type === "DIVIDE"', () => {
        it('positive numbers', () => {
            expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2);
        });

        it('negative numbers', () => {
            expect(calculateNumber('DIVIDE', -4.0, -2.0)).to.equal(2);
        });

        it('numbers with different signs', () => {
            expect(calculateNumber('DIVIDE', -4.0, 2.0)).to.equal(-2);
        });

        it('numbers with different signs 2', () => {
            expect(calculateNumber('DIVIDE', 4.0, -2.0)).to.equal(-2);
        });

        it('equal positive numbers', () => {
            expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
        });

        it('equal negative numbers', () => {
            expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
        });

        it('equal rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
        });

        it('equal rounded down numbers', () => {
            expect(calculateNumber('DIVIDE', 2.0, 2.4)).to.equal(1);
        });

        it('zero and a positive number', () => {
            expect(calculateNumber('DIVIDE', 0.0, 2.0)).to.equal(0);
        });

        it('zero and a negative number', () => {
            expect(calculateNumber('DIVIDE', 0.0, -2.0)).to.equal(-0);
        });

        it('positive number and zero', () => {
            expect(calculateNumber('DIVIDE', 5.0, 0.0)).to.equal('Error');
        });

        it('negative number and zero', () => {
            expect(calculateNumber('DIVIDE', -4.0, 0.0)).to.equal('Error');
        });

        it('positive number and rounded to zero number', () => {
            expect(calculateNumber('DIVIDE', 5.0, 0.3)).to.equal('Error');
        });

        it('negative number and rounded to zero number', () => {
            expect(calculateNumber('DIVIDE', -4.0, -0.2)).to.equal('Error');
        });

        it('positive number and a negatively rounded to zero number', () => {
            expect(calculateNumber('DIVIDE', 3.0, -0.3)).to.equal('Error');
        });

        it('0 and 0', () => {
            expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
        });
    });
})
