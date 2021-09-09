import {access} from 'node:fs/promises';


const exists$ = (
    async path => {
        try {
            await access(path);
            return true;
        } catch {
            return false;
        }
    }
);


// noinspection JSUnusedGlobalSymbols
export default exists$;
