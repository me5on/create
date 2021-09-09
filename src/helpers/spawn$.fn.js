import {spawn} from 'node:child_process';


const WHITESPACE = /\s+/u;


const parse = (

    options => {

        if (String(options) !== options) {
            return options;
        }

        const [cmd, ...args] = options.split(WHITESPACE);
        return {cmd, args};
    }
);


const run$ = (

    options => new Promise((resolve, reject) => {

        const {cmd, args} = parse(options);

        // eslint-disable-next-line no-shadow
        const process = spawn(cmd, args, {stdio: 'inherit'});

        process.addListener('error', reject);
        process.addListener('exit', resolve);
    })

);


// noinspection JSUnusedGlobalSymbols
export default run$;
