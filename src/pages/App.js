
import Demo from './demo'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Test:'Test'
        }
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        import('./tool').then(data => {
            console.log(data)
        })
        this.setState({
            Test:'Test1'
        })
    }

    render() {
        return <div >
            <div onClick={() => this.onClick()}>{this.state.Test}</div>
            aaaaaaa
            <Demo></Demo>
        </div>
    }
}

export default App