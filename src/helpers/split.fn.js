const RE = /^@/u;


const split = (

    $ => String($ ?? '')
        .replace(RE, '')
        .split('/')
        .map($ => $.trim())
        .filter($ => $)
        .reverse()

);


export default split;
