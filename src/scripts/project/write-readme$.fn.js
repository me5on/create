import {writeFile as write$} from 'node:fs/promises';
import exists$ from '../../helpers/exists$.fn.js';


const writeReadme$ = (

    // eslint-disable-next-line no-shadow
    async ({name, file}) => void (

        await exists$(file)
            ? null
            : await write$(file, `\n# ${name.toUpperCase()}\n`)

    )

);


// noinspection JSUnusedGlobalSymbols
export default writeReadme$;
