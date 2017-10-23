import Vuex from 'vuex'

import User from './modules/user'

export default () => {
    return new Vuex.Store({
        modules: {
            User
        }
    })
}
