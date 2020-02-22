import * as React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Layout } from 'antd'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HooksTest from './HooksTest'

import '../assets/style/header.less'
import '../assets/style/app.less'

const { Content } = Layout




// export interface AppProps { compiler: string; framework: string;cd?:Function  }
// export class App extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         console.log(this)
//         return <div>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/login">login</Link>
//                 </li>
//                 <li>
//                     <Link to="/user">user</Link>
//                 </li>
//             </ul>
//             <div>
//                 {this.props.cd && this.props.cd()}
//             </div>
//         </div>
//     }
// }
const App: React.FC = (props: any) => {

    return (
        <div className='main'>
            <Layout>

                <Header />
                <div className='app-content'>
                    <Content>
                        <div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
                            {props.routes}
                        </div>
                    </Content>
                    <HooksTest />
                </div>



                <Footer />

            </Layout>
        </div>
    )
};

export default App