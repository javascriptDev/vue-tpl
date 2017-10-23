// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n/index'
import { Container, Header, Main, Loading } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/main.css'
import App from './App'
import router from './router'
import store from './store/index'
import fetch from './plugins/fetch'

Vue.config.productionTip = false

Array.from([
    Container,
    Header,
    Main,
    Loading,
    fetch,
    Vuex
]).forEach(mid => Vue.use(mid))

Vue.use(i18n, 'cn')

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store(),
    template: '<App/>',
    components: { App }
})
