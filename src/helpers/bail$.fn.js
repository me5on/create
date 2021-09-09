import CRAYON from './crayon.const.js';


const {bg: {black: BG}, fg: {red: FG}, reset: RST} = CRAYON;


const bail$ = (

    message => {
        // eslint-disable-next-line no-console
        console.log(`${FG}${BG}${message}!${RST}`);
        process.exit(1);
    }

);


// noinspection JSUnusedGlobalSymbols
export default bail$;
