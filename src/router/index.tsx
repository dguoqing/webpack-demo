/**
 * @author guoqing.dong
 * @description 路由
 * 
 */

import * as React  from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import cookie from 'js-cookie'
import routes from './conf'


const { Fragment } = React
const fmtRoutes = (Routes:Array<any>) => {
    return (<Fragment>
            <Switch>
                {Routes.map((route) => {
                    const {component,...rest} = route
                    if(route.auth && !cookie.get('username')){
                        return <Redirect {...rest} to='/login'/>
                    }
                    return <Route {...rest} render={props => {
                        return <Fragment><route.component {...props}  tt='1' routes ={route.routes ? fmtRoutes(route.routes) : null } /></Fragment>
                    }} />
                })}
            </Switch>
        </Fragment>)
}

export default () => fmtRoutes(routes)