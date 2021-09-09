import CRAYON from './crayon.const.js';


const {bg: {black: BG}, fg: {yellow: FG}, reset: RST} = CRAYON;


const choices$ = (

    (message, choices) => {

        if (!choices?.length) {
            return;
        }

        const joined = choices.join(', ');

        // eslint-disable-next-line no-console
        console.log(`${FG}${BG}${message}: ${joined}${RST}`);
    }

);


// noinspection JSUnusedGlobalSymbols
export default choices$;
