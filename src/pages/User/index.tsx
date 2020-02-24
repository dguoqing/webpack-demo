import * as React from 'react'
import { connect, } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './user.less'





class User extends React.Component<any> {
    constructor(props: any) {
        super(props)
        this.state = {
            menu: [
                {
                    linkTo: '/user',
                    activeClass: 'active',
                    text: '个人信息'
                },
                {
                    linkTo: '/user/loginlogs',
                    activeClass: 'active',
                    text: '登录日志'
                },
                {
                    linkTo: '/user/notification',
                    activeClass: 'active',
                    text: '通知中心'
                }
            ]
        }
    }
    render() {
        const { menu }: any = this.state
        return (
            <div className='user-main'>
                <h1>个人中心</h1>
                <div className='content clearfix'>

                    <div className="u-left fl">
                        <Menu>
                            {
                                menu.map((v: any) => {
                                    return <Menu.Item key={v.linkTo}>
                                        <Link to={v.linkTo} >{v.text}</Link>
                                    </Menu.Item>
                                })
                            }
                        </Menu>
                    </div>
                    <div className="u-right fl">{
                        this.props.routes
                    }</div>
                </div>

            </div>
        )
    }
}




export default User