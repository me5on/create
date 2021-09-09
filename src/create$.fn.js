import {readdir} from 'node:fs/promises';
import {join} from 'node:path';
import bail$ from './helpers/bail$.fn.js';
import choices$ from './helpers/choices$.fn.js';
import question$ from './helpers/question$.fn.js';
import empty$ from './scripts/empty$.prep.js';
import project$ from './scripts/project$.prep.js';


const BASE = 'node_modules/@me5on/create';
const assets = join(BASE, './assets');
const scripts = join(BASE, './scripts');
const cwd = process.cwd();


const PREP = Object.freeze({empty$, project$});


const create$ = (async () => {

    const choices = await readdir(assets);
    choices$('Available templates', choices);

    const {answer: template} = await question$({message: 'What to create: ', choices});

    if (!template) {
        return void bail$('Nothing to create');
    }

    if (!choices.includes(template)) {
        return void bail$('Not available option');
    }

    const prep$ = PREP[`${template}$`];
    await prep$({template, assets, scripts, cwd});

    return void (1);

});


// noinspection JSUnusedGlobalSymbols
export default create$;
