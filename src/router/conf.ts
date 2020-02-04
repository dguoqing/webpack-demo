/**
 * @author guoqing.dong
 * 
 */

import * as React from 'react'
import BaseConfig from '../conf'
import Lazy from './lazy'
const { ROOTPATH } = BaseConfig;
console.log(BaseConfig)

const Test = Lazy(React.lazy(() => import('../pages/Test')))

const Home = Lazy(React.lazy(() => import('../pages/Home')));
const App = Lazy(React.lazy(() => import('../pages/App')))
const Login = Lazy(React.lazy(() => import('../pages/Login/index')))
const User = Lazy(React.lazy(() => import('../pages/User')))



const routes = [
    {
        path:ROOTPATH,
        component:App,
        // exact: true,
        key:'App',
        routes:[
            {
                path:ROOTPATH + '/test',
                component:Test,
                key:'Test',
                exact: true, 
            },
            {
                path:ROOTPATH + '/home',
                component:Home,
                key:'Home',
                exact: true,

            },
            {
                path:ROOTPATH + '/login',
                component:Login,
                key:'Login'
            },
            {
                path:ROOTPATH + '/user',
                component:User,
                key:'User'
            },
        ]
    },
    
]

export default routes