#!/usr/bin/env node

import {createRequire} from 'node:module';
import create$ from './src/create$.fn.js';
import bail$ from './src/helpers/bail$.fn.js';
import CRAYON from './src/helpers/crayon.const.js';


const {bg: {black: BG}, fg: {white: FG, blue: VER, red: ERR}, reset: RST} = CRAYON;


const {version} = createRequire(import.meta.url)('./package.json') ?? {};
// eslint-disable-next-line no-console
console.log(
    version
        ? `${FG}${BG}version: ${VER}${version}${RST}`
        : `${FG}${BG}version: ${ERR}unknown${RST}`,
);


create$().catch(bail$);
