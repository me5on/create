#!/usr/bin/env node

import {createRequire} from 'node:module';
import create$ from './src/create$.fn.js';
import bail$ from './src/helpers/bail$.fn.js';
import dye from './src/helpers/dye.fn.js';


const {version} = createRequire(import.meta.url)('./package.json') ?? {};


// eslint-disable-next-line no-console
console.log(
    version
        ? dye`{:txt::version: :}{:inf::${version}:}`
        : dye`{:txt::version: :}{:err::unknown:}`,
);


create$().catch(bail$);
