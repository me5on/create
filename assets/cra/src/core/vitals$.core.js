// If you want to start measuring performance in your app, pass a function to log results
const {log, error} = console;

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// noinspection NpmUsedModulesInstalled
const vitals$ = (
    ({enabled}) => enabled && import('web-vitals').then(
        ({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(log);
            getFID(log);
            getFCP(log);
            getLCP(log);
            getTTFB(log);
        },
    ).catch(error)
);


// noinspection JSUnusedGlobalSymbols
export default vitals$;
