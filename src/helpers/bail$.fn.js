import dye from './dye.fn.js';


const bail$ = (

    message => {
        // eslint-disable-next-line no-console
        console.log(dye`{:err::${message}!:}`);
        process.exit(1);
    }

);


// noinspection JSUnusedGlobalSymbols
export default bail$;
