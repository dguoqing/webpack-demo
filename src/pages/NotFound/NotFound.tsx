import { useReducer } from 'react'
import { connect, useSelector } from 'react-redux'
import * as React from 'react'
import { withRouter,Link } from 'react-router-dom'


const NotFound = (): any => {

    return <div>
        出错啦！您访问的网页不存在。" 
        <Link to='/'>访问主页</Link>
        </div>
}
export default NotFound