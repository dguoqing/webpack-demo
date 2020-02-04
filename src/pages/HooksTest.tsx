import { useReducer } from 'react'
import { connect, useSelector } from 'react-redux'
import * as React from 'react'
import { withRouter } from 'react-router-dom'


// class HooksTest extends React.Component<any>{
//     constructor(props:any){
//         super(props)
//     }
//     render (){

//         return <div>
//             HooksTest:{this.props.count}
//         </div>
//     }
// }

const HooksTest = (props: any): any => {
    const {count } = useSelector((state:any):any => state.test)
    console.log(useSelector((state:any):any => state.test))
    console.log(props)
    return <div>HooksTest:{count}</div>
}
export default withRouter(HooksTest)