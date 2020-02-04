
import * as React from 'react'
import { connect, } from 'react-redux'

class Footer extends React.Component<any>{
    constructor(props:any){
        super(props)
    }
    render(){
        console.log(this.props)
        return <footer>
            footer:
            {this.props.count}
        </footer>
    }
}
export default connect(({test}:any):any =>({count:test.count}))(Footer)