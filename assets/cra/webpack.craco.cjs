// const CssMinimizer = require('css-minimizer-webpack-plugin');


// @see https://webpack.js.org/configuration

// noinspection JSUnusedLocalSymbols
module.exports = (cfg, {env, paths} = {}) => ({

    ...cfg,

    // optimization: {
    //     ...cfg.optimization,
    //     minimize:  true, // set true to run minimizers also in development
    //     minimizer: [new CssMinimizer()],
    // },

});


// const configureWebpack = (
//     (config, {env, paths}) => {
//
//         const found = (
//             config
//                 .module
//                 .rules
//                 ?.find(({oneOf}) => oneOf)
//         )
//             ?.oneOf
//             ?.filter(
//                 rule => (
//                     Array.isArray(rule?.test) ? rule.test : [rule?.test]
//                 ).some(
//                     test => test?.toString()?.startsWith('/\\.module'),
//                 ),
//             );
//
//         for (const f of found) {
//             for (const u of f.use) {
//                 const getLocalIdent = u?.options?.modules?.getLocalIdent;
//                 if (getLocalIdent) {
//                     u.options.modules.getLocalIdent = function getLocalIdentImproved(...args) {
//                         return getLocalIdent(...args)?.replaceAll('_', '-');
//                     };
//                 }
//             }
//         }
//
//         return config;
//     }
// );
