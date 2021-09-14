#!/usr/bin/env node


import create$ from './src/create$.fn.js';
import bail$ from './src/helpers/bail$.fn.js';


create$().catch(bail$);
