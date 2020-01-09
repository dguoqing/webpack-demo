/**
 * @author guoqing.dong
 * @description 静态变量
 */

 // development, production
const ENV = process.env.NODE_ENV;


//域名、url相关
const LOCATION = window.location;
const PROTOCOL = LOCATION["protocol"];
export const DOMAIN_BASE = document.domain.split('.').slice(-2).join('.');
const PASSVIP =  ENV == 'development' ? '/bbApi': '';
export const DOMAIN_VIP = PROTOCOL + "//" + LOCATION["host"] + PASSVIP;
//export const DOMAIN_TRANS = PROTOCOL + "//" + "t." + DOMAIN_BASE;
export const DOMAIN_COOKIE = "." + DOMAIN_BASE;


const BaseConfig = {
    ROOTPATH:'/'
};

const configs = {...BaseConfig};


export default configs
