import axios from 'axios'
import { Loading } from 'element-ui'
import { baseURL } from '../constans/api'

let loadingConfig = {
    text: '加载中'
}

let loadingInstance

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 5000

let instance = axios.create()

let map = {}

/**
 * 代理方法
 * @return [Object] 获取的数据或者异常信息
 */
Array.from(['get', 'post', 'options', 'update', 'delete', 'put']).forEach(method => {
    map[method] = async (...args) => {
        let data = await instance[method](...args).then(data => data.data).catch(e => e)
        return (loadingInstance.close(), data)
    }
})

/**
 * 统一获取数据
 * @return {[type]} [description]
 */
const _fetch = () => {
    loadingInstance = Loading.service(loadingConfig)
    return map
}

export default {
    install: vue => {
        vue.prototype.fetch = _fetch
    }
}

/**
 * 供非组件作用域使用
 */
export let fetch = _fetch
