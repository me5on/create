#!/usr/bin/env node


import create$ from './create$.fn.js';
import bail$ from './helpers/bail$.fn.js';


create$().catch(bail$);
