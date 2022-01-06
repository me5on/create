// @see https://jestjs.io/docs/en/configuration
module.exports = (cfg, {env, paths, resolve, rootDir} = {}) => ({

    ...cfg,
    collectCoverageFrom:     [...cfg.collectCoverageFrom, 'src/**/*.(js|jsx)'],
    coverageReporters:       ['json', 'lcov', 'text-summary'],
    transformIgnorePatterns: ['node_modules/(?!@me5on)/'],
    testMatch:               ['<rootDir>/(src|tst)/**/*.(spec|test).(js|jsx)'],
    setupFilesAfterEnv:      ['<rootDir>/jest.setup.js'],

});
