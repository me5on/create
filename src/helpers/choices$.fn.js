import dye from './dye.fn.js';


const choices$ = (

    (message, choices) => {

        if (!choices?.length) {
            return;
        }

        const joined = choices.join(', ');

        // eslint-disable-next-line no-console
        console.log(dye`{:wrn::${message}: ${joined}`);
    }

);


// noinspection JSUnusedGlobalSymbols
export default choices$;
