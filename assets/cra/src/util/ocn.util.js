const SEPARATOR = ' ';

const predicate = ([, v]) => v;

const mapper = ([k]) => k;


const ocn = (

    $ => Object
        .entries($ ?? {})
        .filter(predicate)
        .map(mapper)
        .join(SEPARATOR)

);


// noinspection JSUnusedGlobalSymbols
export default ocn;
