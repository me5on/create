import logo from '../../asset/logo.svg';
import vis$ from '../../util/vis$.util.jsx';
import classNames from './root.module.scss';


const PATH = 'src/component/root/root.vis.jsx';


export default vis$(
    {
        displayName: 'Root',
        classNames,
    },
)(
    ({$cn}) => (
        <div className={$cn.b()}>
            <header className={$cn.e('header')}>
                <img src={logo} className={$cn.e('logo')} alt="logo"/>
                <p className={$cn.e('message')}>
                    Edit
                    {' '}
                    <code className={$cn.e('code')}>{PATH}</code>
                    {' '}
                    and save to reload!
                </p>
                <a
                    className={$cn.e('link')}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    ),
);
