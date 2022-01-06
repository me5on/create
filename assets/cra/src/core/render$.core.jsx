import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../component/root/root.vis.jsx';
import '../style/global.scss';


const render$ = (

    $ => ReactDOM.render(
        <React.StrictMode>
            <Root/>
        </React.StrictMode>,
        $,
    )
);


// noinspection JSUnusedGlobalSymbols
export default render$;
