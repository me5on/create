import {writeFile as write$} from 'node:fs/promises';
import exists$ from '../../helpers/exists$.fn.js';
import split from '../../helpers/split.fn.js';


// eslint-disable-next-line no-magic-numbers
const stringifyVer = $ => JSON.stringify($, null, 4);


// eslint-disable-next-line no-shadow
const writeVer$ = async ({name, file}) => void (
    await exists$(file)
        ? null
        : await write$(
            file,
            stringifyVer([
                '0',
                ...split(name),
            ]),
        )
);


// noinspection JSUnusedGlobalSymbols
export default writeVer$;
