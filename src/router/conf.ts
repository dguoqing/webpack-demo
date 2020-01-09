/**
 * @author guoqing.dong
 * 
 */
import BaseConfig from '../conf'
const { ROOTPATH } = BaseConfig;

import Home from './../pages/Home';
import Login from './../pages/Login/index';
import User from './../pages/User/index';
interface RouteType {
    path:string,
    component:any,
    key:string,
    
}

console.log(BaseConfig)

const routes:Array<object> = [
    {
        path:ROOTPATH,
        component:Home
    },
    {
        path:ROOTPATH + 'login',
        component:Login
    },
    {
        path:ROOTPATH + 'user',
        component:User
    },
]

const createRoutes = () => {
    return routes
}
export default createRoutes