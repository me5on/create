// noinspection JSUnusedGlobalSymbols

import {expect} from '@jest/globals';


// message shown when positive scenario fails
const pos = (
    message => ({pass: false, message: () => message})
);


// message shown when negative scenario fails
const neg = (
    message => ({pass: true, message: () => message})
);


const message = (

    ({that, test, fn, args, actual, result}) => {
        
        const act = that.utils.printExpected(actual);
        const res = that.utils.printReceived(result);
        const arg = that.utils.printReceived(args);

        return (
            test
                ? neg(`Expected ${fn} to not map ${arg} -> ${res}, instead got ${act}`)
                : pos(`Expected ${fn} to map ${arg} -> ${res}, instead got ${act}`)

        );
    }

);


expect.extend({


    // eslint-disable-next-line no-shadow
    toBeFun(received, name) {

        const printed = this.utils.printReceived(received);

        return 'function' === typeof received
            ? (
                name
                    ? neg(`Expected "${name}" not to be function, instead got ${printed}`)
                    : neg(`Expected ${printed} not to be function`)
            )
            : (
                name
                    ? pos(`Expected "${name}" to be function, instead got ${printed}`)
                    : pos(`Expected ${printed} to be function`)
            );
    },


    toMapExact(fn, result, ...args) {

        const that = this;
        const actual = fn(...args);
        const test = (actual === result);

        return message({that, test, fn, args, actual, result});
    },


    toMapEquals(fn, result, ...args) {

        const that = this;
        const actual = fn(...args);
        const test = this.equals(result, actual);

        return message({that, test, fn, args, actual, result});
    },


});
