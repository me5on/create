#!/usr/bin/env node

import {createRequire} from 'node:module';
import create$ from './src/create$.fn.js';
import bail$ from './src/helpers/bail$.fn.js';
import CRAYON from './src/helpers/crayon.const.js';


const {bg: {black: BG}, fg: {white: FG, blue: VER}, reset: RST} = CRAYON;


const {version} = createRequire(import.meta.url)('./data.json') ?? {};
// eslint-disable-next-line no-console
console.log(`${FG}${BG}version: ${VER}${version}${RST}`);


create$().catch(bail$);
