import * as React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Layout } from 'antd'
import Footer from '../components/Footer'
import HooksTest from './HooksTest'

import '../assets/style/header.less'

const { Header } = Layout




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
const App = (props: any) => {
    return (
        <>
            <Header>
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
            </Header>

            <div>

                <div style={{ background: '#ccc', height: '100%', width: '100%' }}>
                    {props.routes}
                </div>
            </div>
            <Footer />
            <HooksTest />
        </>
    )
};

export default App