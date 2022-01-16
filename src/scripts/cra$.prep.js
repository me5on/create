import {rename as rename$} from 'node:fs/promises';
import {basename, join} from 'node:path';
import bail$ from '../helpers/bail$.fn.js';
import cp$ from '../helpers/cp$.fn.js';
import dye from '../helpers/dye.fn.js';
import exists$ from '../helpers/exists$.fn.js';
import question$ from '../helpers/question$.fn.js';
import run$ from '../helpers/run$.fn.js';
import writePackage$ from './project/write-package$.fn.js';
import writeReadme$ from './project/write-readme$.fn.js';
import writeVer$ from './project/write-ver$.fn.js';


const PKG_FILE = './package.json';
const RDM_FILE = './README.md';
const VER_FILE = './ver.json';


const answerOf = (({answer}) => answer);


const project$ = (
    async ({assets, template, cwd}) => {

        if (await exists$(join(cwd, PKG_FILE))) {
            bail$('package.json already exists');
            return;
        }

        const deFault = basename(cwd);

        // eslint-disable-next-line no-shadow
        const name = answerOf(await question$(dye`How to name it: {:dim::(${deFault}):} `)) || deFault;
        if (!name) {
            bail$('No name provided');
            return;
        }

        await cp$(join(assets, template, './'), join(cwd, './'));

        // workaround, @see https://github.com/npm/npm/issues/3763
        await rename$(join(cwd, './_.gitignore'), join(cwd, './.gitignore'));
        await rename$(join(cwd, './.husky/_.gitignore'), join(cwd, './.husky/.gitignore'));


        await writePackage$({name, file: PKG_FILE});
        await writeVer$({name, file: VER_FILE});
        await writeReadme$({name, file: RDM_FILE});

        const cmds = [
            'git init',
            'npm i --legacy-peer-deps',
            'git add .',
            'git commit -m init',
            'git branch -M trunk',
            'npx npm-check-updates',
        ];

        for (const cmd of cmds) {
            await run$(cmd);
        }
    }
);


// noinspection JSUnusedGlobalSymbols
export default project$;
