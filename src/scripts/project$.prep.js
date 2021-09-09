import {join} from 'node:path';
import bail$ from '../helpers/bail$.fn.js';
import cp$ from '../helpers/cp$.fn.js';
import exists$ from '../helpers/exists$.fn.js';
import question$ from '../helpers/question$.fn.js';
import run$ from '../helpers/spawn$.fn.js';
import writePackage$ from './project/write-package$.fn.js';
import writeReadme$ from './project/write-readme$.fn.js';
import writeVer$ from './project/write-ver$.fn.js';


const PKG_FILE = './package.json';
const RDM_FILE = './README.md';
const VER_FILE = './ver.json';


const answerOf = (({answer}) => answer);

const project$ = (
    async ({assets, template}) => {

        if (await exists$(PKG_FILE)) {
            return void bail$('package.json already exists');
        }

        // eslint-disable-next-line no-shadow
        const name = answerOf(await question$('How to name it: '));
        if (!name) {
            return void bail$('No name provided');
        }

        await cp$(join(assets, template, './'), './');

        await writePackage$({name, file: PKG_FILE});
        await writeVer$({name, file: VER_FILE});
        await writeReadme$({name, file: RDM_FILE});

        const cmds = [
            'git init',
            'npm i',
            'git add .',
            'git commit -m init',
            'git branch -M trunk',
        ];

        for (const cmd of cmds) {
            await run$(cmd);
        }

        return void (1);
    }
);


// noinspection JSUnusedGlobalSymbols
export default project$;
