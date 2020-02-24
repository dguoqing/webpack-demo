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
const LoginLogs = Lazy(React.lazy(() => import('../pages/User/LoginLogs/LoginLogs')))
const Notifications = Lazy(React.lazy(() => import('../pages/User/Notifications/Notifications')))
const UserInfo = Lazy(React.lazy(() => import('../pages/User/UserInfo/UserInfo')))
const NotFound = Lazy(React.lazy(() => import('../pages/NotFound/NotFound')))




const routes = [
    {
        path: ROOTPATH,
        component: App,
        exact: true,
        key: 'App',
        routes: [
            {
                path: ROOTPATH + '/',
                component: Home,
                key: 'Home',
                exact: true,

            },
            {
                path: ROOTPATH + '/test',
                component: Test,
                key: 'Test',
                exact: true,
            },
            {
                path: ROOTPATH + '/login',
                component: Login,
                exact: true,
                key: 'Login'
            },
            {
                path: ROOTPATH + '/user',
                component: User,
                key: 'User',
                // exact: true,
                auth: true,
                routes: [
                    {
                        path: ROOTPATH + '/user',
                        component: UserInfo,
                        key: 'UserInfo',
                        exact: true,
                        auth: true,
                    },
                    {
                        path: ROOTPATH + '/user/loginlogs',
                        component: LoginLogs,
                        key: 'LoginLogs',
                        exact: true,
                        auth: true,
                    },
                    {
                        path: ROOTPATH + '/user/notification',
                        component: Notifications,
                        key: 'Notifications',
                        exact: true,
                        auth: true,
                    },
                ]
            },
            {
                path: '*',
                component: NotFound,
                key: 'notfound',

            }
        ]
    },
    //全局接口失败跳转
    {
        path: '*',
        component: NotFound,
        key: 'notfound',

    }

]

export default routes