
import { Link } from 'react-router-dom'
import * as React from 'react'
import { Layout } from 'antd'

const { Header } = Layout


const Head: React.FC = () => {

    return <Header>
        <header>
            <div className='header-left fl'>
                <ul className='header-nav'>
                    <li>
                        <Link to="/">ap</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
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
                </ul>
            </div>
            <div className='header-right fr'>
                <div>
                    <Link className='btn-login' to="/login">登录</Link>
                    <Link className='btn-regisiter' to="/register">注册</Link>
                </div>
            </div>
        </header>

    </Header>

}

export default Head

