
/**
 * @author guoqing.dong
 * 
 * @description lazy component
*/
import * as React from 'react'

const { Fragment, Suspense} = React;

const Loading = ():object => <h1>loading...</h1>

/**
 * 
 * @param Cp Function
 * @param loading Function
 */
export default (Cp:Function,loading = Loading()):Function => (props:any):object => {
    return (
        <Fragment>
            <Suspense fallback = {loading}>
                <Cp {...props} />
            </Suspense>
        </Fragment>
    )
}

