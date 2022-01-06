import render$ from './core/render$.core.jsx';
import vitals$ from './core/vitals$.core.js';


render$(document.getElementById('root'));
vitals$({enabled: false});
