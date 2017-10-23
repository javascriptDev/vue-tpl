import Vue from 'vue'
import Router from 'vue-router'

import User from './user'
import Main from './main'

Vue.use(Router)

export default new Router({
    routes: User.concat(Main)
})
