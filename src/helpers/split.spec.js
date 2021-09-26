import {describe, expect, it} from '@jest/globals';
import split from './split.fn.js';


describe('split', () => {


    it(
        'is a function',
        () => void expect(split).toBeFun(),
    );


    it.each([
        [[], ''],
        [[], void (1)],
        [[], null],
        [['globals', 'jest'], '@jest/globals'],
        [['split.fn.js'], 'split.fn.js'],
        [['but...', 'invalid-package'], '/invalid-package/but...'],
    ])(
        'returns %p for %p',
        expect(split).toMapEquals,
    );


});
