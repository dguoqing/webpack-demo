import Axios from './Axios'
import { UrlType } from './Axios'

export const axios = new Axios

const urlType = (url: string | UrlType): UrlType => {
    if (typeof url === 'string') {
        return {
            url,
        }
    } else if (typeof url == 'object') {
        return {
            ...url
        }
    } else {
        console.error('url错误')
        return {
            url: ''
        }
    }
}
export const get = (urls: string | UrlType, params?: any, config?: object): Function => {
    const { url, ...rest } = urlType(urls)
    return axios.request({
        method: 'get',
        url,
        params,
        ...config
    }, rest)
}

export const post = (urls: string | UrlType, params: any, config?: object): Function => {
    const { url, ...rest } = urlType(urls)
    return axios.request({
        method: 'post',
        url,
        data: params,
        ...config
    }, rest)
}








