const crypto = require('node:crypto');


// monkeypatch a node.js standard library only because webpack hardcodes the algorithm
// @see https://github.com/cockpit-project/starter-kit/commit/3220617fec508aabbbc226a87a165c21fb72e913
const createHashOriginal = crypto.createHash;
crypto.createHash = algorithm => createHashOriginal(algorithm === 'md4' ? 'sha256' : algorithm);


// @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
module.exports = {

    babel:   {loaderOptions: require('./babel.craco.cjs')},
    jest:    {configure: require('./jest.craco.cjs')},
    webpack: {configure: require('./webpack.craco.cjs')},

    style: {
        modules: {localIdentName: '[folder]---[hash:base64:10]'},
        /* @see https://github.com/webpack-contrib/sass-loader*/
        sass: {loaderOptions: {implementation: require('sass')}},
    },


};
