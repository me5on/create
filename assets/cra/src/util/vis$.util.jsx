import classicist from '@me5on/classicist';
import hoistNonReactStatic from 'hoist-non-react-statics';


const dnOf = $ => $?.displayName || $?.name || 'Component';


const vis$ = (

    ({displayName, classNames} = {}) => Component => {

        const $dn = displayName || dnOf(Component);
        const $cn = classicist({names: classNames, root: $dn});

        const Vis$ = props => {

            const extra = {$dn, $cn};

            return <><Component {...props} {...extra} /></>;
        };

        hoistNonReactStatic(Vis$, Component);
        Component.displayName = $dn;
        Vis$.displayName = `Vis$(${$dn})`;
        return Vis$;
    }

);


// noinspection JSUnusedGlobalSymbols
export default vis$;
