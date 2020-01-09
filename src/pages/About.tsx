import * as React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

interface Props {
    name: String
}
const About = (props: Props) => {
    let { id } = useParams()
    let { path, url } = useRouteMatch()

    return (<div>{props.name}id : {id}
        <p>path:{path}</p>
        <p>url:{url}</p>
    </div>)
}

export default About