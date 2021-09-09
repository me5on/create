import {readFile as read$, writeFile as write$} from 'node:fs/promises';
import question$ from '../../helpers/question$.fn.js';


// eslint-disable-next-line no-magic-numbers
const stringifyPkg = $ => JSON.stringify($, null, 2);


const answerOf = (({answer}) => answer);


const writePackage$ = (

    // eslint-disable-next-line no-shadow
    async ({name, file}) => {

        const pkg = JSON.parse((await read$(file)).toString());

        pkg.name = name;
        pkg.description = answerOf(await question$('How to describe it: '));
        pkg.author = {
            name:  answerOf(await question$('Who made it: ')),
            email: answerOf(await question$('What is their email: ')),
        };

        await write$(file, stringifyPkg(pkg));
    }
);


// noinspection JSUnusedGlobalSymbols
export default writePackage$;
