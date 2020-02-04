import * as React from 'react'
import {Button,Input} from 'antd'
import {get} from '../../net'



class Login extends React.Component{
    constructor(props:any){
        super(props)
    }
    async componentDidMount(){
        const result = await get('/login',1)

    }
    
    render(){
        return <div>Login</div>
    }
}
export default Login