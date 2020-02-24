
import { Link,useHistory } from 'react-router-dom'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Layout, Icon } from 'antd'
import cookie from 'js-cookie';

const { Header } = Layout


const Head: React.FC = () => {
    console.log(cookie.get('username'))
    const [state,setState] = useState(false)
    const history = useHistory()
    const loginOut = ():void => {
        cookie.remove('username')
        setState(!state)
        history.push('/login')
        console.log(111)
    }
    // useEffect(() => {
        
        
    // })
    
    return <Header>
        <header>
            <div className='header-left fl'>
                <ul className='header-nav'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/user">user</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                    <li>
                        <Link to="/notfound">NotFound</Link>
                    </li>
                    <li>
                        <Link to="/111">NotFoundPage</Link>
                    </li>
                </ul>
            </div>
            <div className='header-right fr'>
                {
                    cookie.get('username') ?
                        <div className='header-user'>
                            <a href=""><Icon type="user" className='user-touxing' />{cookie.get('username')}</a>
                            <ul className='header-user-hidden'>
                                <li>
                                    <Link to="/user">个人中心</Link>
                                </li>
                                <li>
                                    <a onClick={loginOut} href="javascript:void(0);">退出</a>
                                </li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link className='btn-login' to="/login">登录</Link>
                            <Link className='btn-regisiter' to="/register">注册</Link>
                        </div>
                }
            </div>
        </header>

    </Header>

}

export default Head

