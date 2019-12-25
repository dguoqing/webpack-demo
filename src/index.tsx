import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import { AppContainer } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'

import {App} from './pages/App'

import './assets/style/base.css'
import './assets/style/index.less'


hot(App)


const render = (App: any) => {
    ReactDOM.render(
        <App />,
    document.getElementById('root'))
}

render(App)










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


