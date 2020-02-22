/**
 * @author guoqing.dong
 * @description Axios 
 * 
 */

import axios from 'axios'
import cookie from 'js-cookie'
import { message } from 'antd'
import configs from '../conf'
const { baseUrl } = configs
const CancelToken = axios.CancelToken

export interface RequestTip {
    toast?: boolean,//是否全局提示
    msg?: string,
}
export interface UrlType extends RequestTip {
    url:string,
}

class Axios {
    private baseURL: string;
    private loading: boolean = false;
    private requestList: any[] = []; //每次发送请求将请求的url写入数组中
    private sources: any = {}

    constructor() {
        this.baseURL = baseUrl;
    }
    //全局配置
    private getInstanceConfig(): object {
        const config = {
            baseURL: this.baseURL,
            header: {  //统一设置请求头
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                //如果将token放入请求头供服务端验证 也是放在这里 如：
                token: cookie.get('token') ? cookie.get('token') : null,

            },
            timeout: 8000 //设置超时时间
        }
        return config
    }
    //拦截器
    private interceptors(instance: any): void {

        //请求拦截
        instance.interceptors.request.use((config: any): object => {
            const { url, data } = config;
            const request = JSON.stringify(url) + JSON.stringify(data)
            config.cancelToken = new CancelToken((cancel) => {
                this.sources[request] = cancel
            })
            //此处设置loading
            if (this.requestList.length) {
                this.loading = true
            }
            if (this.requestList.includes(request)) {
                this.sources[request]('取消重复请求')
            } else {

                this.requestList.push(config.url)
            }
            return config
        }, (err: any): any => {
            return Promise.reject(err)
        })

        //相应拦截
        instance.interceptors.response.use((res: any): any => {
            this.requestList.shift()
            if (this.requestList.length === 0) {
                this.loading = false
            }
            return res
        }, (err: any): any => {
            this.requestList.shift()
            if (this.requestList.length === 0) {
                this.loading = false
            }
            return Promise.reject(err)
        })
    }
    urlType(url: string | UrlType):UrlType{
        if(typeof url === 'string'){
            return {
                url,
            }
        }else if(typeof url == 'object'){
            return {
                ...url
            }
        }else{
            console.error('url错误')
            return {
                url:''
            }
        }
    }

    //请求
    public request(options: any, { toast, msg }: RequestTip = { toast: false, msg: '' }): any {
        const instance = axios.create();
        options = Object.assign({}, this.getInstanceConfig(), options)
        this.interceptors(instance)

        return new Promise((resolve: any, reject: any) => {
            instance(options).then((res: any) => {
                const result: any = res.data;

                if (result.code === 0) {
                    toast && message.success(msg || result.msg)
                    resolve(result.data)
                } else {
                    message.error(msg || result.msg)
                    reject(result.msg)
                }
            }).catch((err: any) => {
                reject(err)
            })
        }).catch((err: any) => {
            console.error(err)
        })
    }
    public get(url: string | UrlType, params?: any, config?: object): any {
        console.log(this)
        const {} = this.urlType(url)
        return this.request({
            method: 'get',
            url,
            params,
            ...config
        })
    }
    public delete(url: string, params: any, config?: object): any {
        return this.request({
            method: 'DELETE',
            url,
            params,
            ...config
        })
    }
    public post(url: string, params: any, config?: object): any {
        return this.request({
            method: 'post',
            url,
            data: params,
            ...config
        })
    }
    public put(url: string, params: any, config?: object): any {
        return this.request({
            method: 'put',
            url,
            data: params,
            ...config
        })
    }
}
export default Axios