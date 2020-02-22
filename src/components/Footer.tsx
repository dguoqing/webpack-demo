
import * as React from 'react'
import { connect, } from 'react-redux';
import { Layout } from 'antd'

import '../assets/style/footer.less'
const { Footer } = Layout

class Foot extends React.Component<any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <Footer style={{ textAlign: 'center', backgroundColor: '#001529' }}>
            <footer>
                footer:
            {this.props.count}
            </footer>
        </Footer>
    }
}
export default connect(({ test }: any): any => ({ count: test.count }))(Foot)