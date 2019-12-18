

class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            demo:'demo'
        }
    }
    onClick = () => {
        this.setState({
            demo:'demo1'
        })
    }
    render() {
        return <div onClick={() => this.onClick()}>
            {this.state.demo}
        </div>
    }
}

export default Demo