/**
 * @author guoqing.dong
 * @description 静态变量
 */

 // development, production
const ENV: string = process.env.NODE_ENV || 'development';


//域名、url相关
const LOCATION = window.location;
const PROTOCOL = LOCATION["protocol"];
export const DOMAIN_BASE = document.domain.split('.').slice(-2).join('.');
const PASSVIP =  ENV == 'development' ? '': '';
export const DOMAIN_VIP = PROTOCOL + "//" + LOCATION["host"] + PASSVIP;
export const DOMAIN_TRANS = PROTOCOL + "//" + "t." + DOMAIN_BASE;
export const DOMAIN_COOKIE = "." + DOMAIN_BASE;


const BaseConfig = {
    ROOTPATH:'',

};
const ReqConfigs = {
    'production':{
        baseUrl:DOMAIN_VIP + '/'
    },
    'development':{
        baseUrl:DOMAIN_VIP + '/api'
    }
}

const configs = {...BaseConfig,...(ReqConfigs as any)[ENV]};


export default configs
