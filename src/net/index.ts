import Axios from './Axios'


export const axios = new Axios

export const get = (url: string, params?: any, config?: object): Function => {
    return axios.request({
        method: 'get',
        url,
        params,
        ...config
    })
}

export const post = (url: string, params: any, config?: object): Function => {
    return axios.request({
        method: 'post',
        url,
        data: params,
        ...config
    })
}








