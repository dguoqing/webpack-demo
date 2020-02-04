/**
 * @author guoqing.dong
 * @description 测试实验
 */

import * as React from 'react'
import { connect, } from 'react-redux'
import { Dispatch } from 'redux'
import { increment, decrement, TestStateType, Props, ModifyAction, doIncrement, doDecrement } from '../redux/module/test'
import { Button } from 'antd'





class Test extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        const { doIncrement, doDecrement, count } = this.props
        return (
            <div>
                <Button type='primary' onClick={() => doIncrement(count + 1)}>增加</Button>
                <Button type='danger' onClick={() => doDecrement(count - 1)}>减少</Button>
                <p style={{ height: '100px', width: '100px' }}>次数：{count}</p>
            </div>
        )
    }
}


const mapStateToProps = ({ test }: TestStateType) => {
    console.log(test)
    return {
        count: test.count
    }
}
// const mapDispatchToProps = () => {

// return {
//     doIncrement: () => disaptch(increment()),
//     doDecrement: () => disaptch(decrement())
// }
// return {
//     doDecrement,doIncrement
// }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Test)

export default connect(({ test }: TestStateType) => ({ count: test.count }), { doDecrement, doIncrement })(Test)