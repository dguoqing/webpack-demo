import ReactDOM from 'react-dom';

import App from './pages/App'

import './assets/style/base.css'
import './assets/style/index.less'
import { HotModuleReplacementPlugin } from 'webpack';


const render = App => {
    
    ReactDOM.render(<App />, document.getElementById('root'))
}


render(App)


if(module.hot){
    module.hot.accept('./pages/App.js', () => {
        console.log('热更新了....')
        const NextRootContainer = require('./pages/App').default;
        render(NextRootContainer)
    })
}


