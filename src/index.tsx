import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import { AppContainer } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import {
    HashRouter,
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux'
import App from './pages/App'
import Router from './router'

import moment from 'moment'
import 'moment/locale/zh-cn';

import './assets/style/base.css'
import './assets/style/index.less'
import 'antd/dist/antd.css'



hot(Router)

const render = (Router: any) => {
    ReactDOM.render(
        <Provider store={store()}>
            <HashRouter>
                <Router />
            </HashRouter>
        </Provider>
        ,
        document.getElementById('root') as HTMLElement)
}

render(Router)










/**
 *
 * @description 老版本的热更新
 *
const render = App => {

    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('root'))
}

render(App)

if (module.hot) {
    module.hot.accept('./pages/App.js', () => {
        console.log('热更新了....')
        const NextRootContainer = require('./pages/App').default;
        render(NextRootContainer)
    })
}
*/


