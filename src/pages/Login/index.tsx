import * as React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'js-cookie'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { get, post } from '../../net'
import './login.less'

interface ResType{
    flg:boolean
}

class Login extends React.Component<any> {
    constructor(props: any) {
        super(props)
    }
    async componentDidMount() {


    }
    login = (e: React.FormEvent): void => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                const result:any = await post({url:'/login',toast:true}, values)
                if(result.flg){
                    cookie.set('username',result.username)
                    setTimeout(() => {
                        this.props.history.push('/user')
                    }, 500)
                }
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form,
            { login } = this;
        return <div className='login'>
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Link className="login-form-forgot" to="">忘记密码？</Link>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}

                    <Button type="primary" onClick={login} className="login-form-button">登录</Button>

                    <Link to="/register">马上去注册！</Link>
                </Form.Item>
            </Form>
        </div>
    }
}
export default Form.create({ name: 'normal_login' })(Login);