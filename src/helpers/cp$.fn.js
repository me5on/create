import {copyFile as copy$, mkdir as md$, readdir as dir$, stat as stat$} from 'node:fs/promises';
import {join} from 'node:path';
import exists$ from './exists$.fn.js';


const cp$ = async (src, dst) => {

    if (await exists$(src) && (await stat$(src)).isDirectory()) {

        if (!await exists$(dst)) {
            await md$(dst);
        }

        for (const item of (await dir$(src))) {

            const from = join(src, item);
            const to = join(dst, item);

            // eslint-disable-next-line no-console
            // console.log(dye`{:dim::copying ${from} -> ${to} ...:}`);

            await cp$(from, to);
        }

    } else {
        await copy$(src, dst);
    }
};


// noinspection JSUnusedGlobalSymbols
export default cp$;
