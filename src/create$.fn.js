import {readdir} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import bail$ from './helpers/bail$.fn.js';
import choices$ from './helpers/choices$.fn.js';
import question$ from './helpers/question$.fn.js';
import empty$ from './scripts/empty$.prep.js';
import project$ from './scripts/project$.prep.js';


const PREP = Object.freeze({empty$, project$});


const BASE = resolve(dirname(fileURLToPath(import.meta.url)), '../');

const assets = join(BASE, './assets');
const scripts = join(BASE, './scripts');
const cwd = process.cwd();


const create$ = (async () => {

    try {

        const choices = await readdir(assets);
        choices$('Available templates', choices);

        const {answer: template} = await question$({message: 'What to create: ', choices});

        if (!template) {
            bail$('Nothing to create');
            return;
        }

        if (!choices.includes(template)) {
            bail$('Not available option');
            return;
        }

        const prep$ = PREP[`${template}$`];
        await prep$({template, assets, scripts, cwd});

    } catch (e) {
        bail$(e);
    }

});


// noinspection JSUnusedGlobalSymbols
export default create$;
