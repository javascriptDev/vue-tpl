
export default {}

let env = process.env.NODE_ENV
/**
 * 不同环境 主机地址不同.
 */
const baseMap = {
    development: 'http://localhost',
    production: '',
    testing: ''
}
export const UserAPI = `/a.json`
export const baseURL = baseMap[env]
