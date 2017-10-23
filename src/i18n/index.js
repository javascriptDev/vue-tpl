
let valid = ['cn', 'en']
let defaultLang = {}

export default {
    install: (vue, lang) => {
        if (valid.indexOf(lang) !== -1) {
            let langMap = require(`./${lang}`)
            defaultLang = vue.prototype.$lang = langMap.default
        }
    }
}

export const getL = (key) => {
    let result
    key.split('.').forEach(item => {
        result = (result || defaultLang)[item]
    })
}
