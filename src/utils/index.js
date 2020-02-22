/**
 * @function 获取类型
 * @param   [String] str 传入值
 * @returns [String] 返回类型
 */
const getType = (str = '') => {
    return Object.prototype.toString.call(str).slice(8, -1);
};
/**
 * @function 是否是波尔类型值
 * @param {any} ay
 * @returns [Boolean] 传入值是否是 Array类型
 */
const isArray = (ay = '') => {
    return 'Array' === getType(ay);
};
/**
 * @function 是否是对象
 * @param {any} obj
 * @returns [Boolean] 传入值是否是 Object类型
 */
const isObj = (obj = '') => {
    return 'Object' === getType(obj);
};

/**
 * @function 是否是空对象
 * @param {any} obj
 * @returns [Boolean] 传入值是否是空对象
 */
export const isEmptyObject = (obj) => {
    return typeof obj === 'undefined' ? 'undefined' :  obj === null ? 'null' : Object.keys(obj).length === 0;
};

/**
 * @function 判断一个对象的key是否全部存在于另一个对象，如果存在不匹配直接抛出异常。
 * @param {Object} keys 需要匹配的类
 * @param {Object} obj  被匹配的类
 * @throws not contain
 */
const containsObj = (keys = {}, obj = {}) => {
   if(isObj(keys) && isObj(obj)){
    const getKeys = Object.keys(keys);
    getKeys.forEach((v,i) => {
       if(void 0 === obj[v]){
        throw new Error("not contain")
       }
    })
   } else {
       throw new Error("not contain")
   }
}