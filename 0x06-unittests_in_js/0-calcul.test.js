const assert = require('assert');
const calculateNumber = require("./0-calcul.js");
//const { describe } = require('node:test');

describe('calculateNumber', () => {
    it('floating point whole number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    });

    it('rounding down b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });

    it('rounding down a\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.0), 3);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });

    it('rounding up a\'s floating point number', () => {
        assert.strictEqual(calculateNumber(1.5, 2.0), 4);
    });
    
    it('rounding up b\'s floating point number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.5), 4);
    });

    it('rounding up a and b\'s floating point number', () => {
        assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    });

    it('rounding down a and b floating point fractionals with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(2.4999, 2.4999), 4);
    });
});
