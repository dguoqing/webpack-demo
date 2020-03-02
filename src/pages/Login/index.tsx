import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import cookie from 'js-cookie'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { get, post } from '../../net'
import './login.less'

interface ResType {
    flg: boolean
}


const Login: React.FC = (props: any) => {
    const [loginForm] = Form.useForm()
    const login = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(props)

        loginForm.validateFields().then(async (values: any) => {
            console.log(values)
            const result: any = await post({ url: '/login', toast: true }, values)
                if (result.flg) {
                    cookie.set('username', result.username)
                    setTimeout(() => {
                        props.history.push('/user')
                    }, 500)
                }
        }).catch((err: any) => {
            console.error(err)
        })


        // this.loginForm.current.validateFields(async (err: any, values: any) => {
        //     console.log(err,values)
        //     if (!err) {
        //         const result: any = await post({ url: '/login', toast: true }, values)
        //         if (result.flg) {
        //             cookie.set('username', result.username)
        //             setTimeout(() => {
        //                 this.props.history.push('/user')
        //             }, 500)
        //         }
        //         console.log('Received values of form: ', values);
        //     }
        // });
    };

    return <div className='login'>
        <Form
            name="normal_login"
            className="login-form"
            form={loginForm}
        >
            <Form.Item
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input
                    prefix={<UserOutlined />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}>

                <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <Link className="login-form-forgot" to="">忘记密码？</Link>

            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={login} className="login-form-button">登录</Button>
                <Link to="/register">马上去注册！</Link>
            </Form.Item>
        </Form>
    </div>
}
// class Login extends React.Component<any> {
//     private loginForm:any;
//     constructor(props: any) {
//         super(props)
//         this.loginForm = React.createRef()
//     }
//     async componentDidMount() {


//     }
//     login = (e: React.FormEvent): void => {
//         e.preventDefault();
//         console.log(this.loginForm.current)

//         this.loginForm.current.validateFields().then((valus:any) => {
//             console.log(valus)
//         }).catch((err:any) => {
//             console.error(err)
//         })


//         // this.loginForm.current.validateFields(async (err: any, values: any) => {
//         //     console.log(err,values)
//         //     if (!err) {
//         //         const result: any = await post({ url: '/login', toast: true }, values)
//         //         if (result.flg) {
//         //             cookie.set('username', result.username)
//         //             setTimeout(() => {
//         //                 this.props.history.push('/user')
//         //             }, 500)
//         //         }
//         //         console.log('Received values of form: ', values);
//         //     }
//         // });
//     };
//     render() {
//         const { login } = this;
//         return <div className='login'>
//             <Form
//                 name="normal_login"
//                 className="login-form"
//                 ref={this.loginForm}
//                 >
//                 <Form.Item
//                     name='username'
//                     rules={[{ required: true, message: 'Please input your username!' }]}
//                 >
//                     <Input
//                         prefix={<UserOutlined />}
//                         placeholder="Username"
//                     />
//                 </Form.Item>
//                 <Form.Item
//                     name='password'
//                     rules={[{ required: true, message: 'Please input your Password!' }]}>

//                     <Input
//                         prefix={<LockOutlined />}
//                         type="password"
//                         placeholder="Password"
//                     />
//                 </Form.Item>
//                 <Link className="login-form-forgot" to="">忘记密码？</Link>
//                 <Form.Item
//                     name='remember'
//                     valuePropName='checked'>
//                     <Checkbox>记住密码</Checkbox>
//                     <Button type="primary" onClick={login} className="login-form-button">登录</Button>
//                     <Link to="/register">马上去注册！</Link>
//                 </Form.Item>
//             </Form>
//         </div>
//     }
// }
export default Login;