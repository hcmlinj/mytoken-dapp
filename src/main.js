'use strict'

import 'bootstrap'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App.vue'

const Info = resolve => require(['@/pages/Info.vue'], resolve)
const TokenFactory = resolve => require(['@/pages/TokenFactory.vue'], resolve)
const MyToken = resolve => require(['@/pages/MyToken.vue'], resolve)

Vue.use(VueRouter)

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: Info },
        { path: '/info', component: Info },
        { path: '/token-factory', component: TokenFactory },
        { path: '/my-token', component: MyToken },
        { path: '/my-token/:tokenProp', component: MyToken, props: true }
    ]
})

new Vue({
    router,
    template: '<App></App>',
    components: { App }
}).$mount('#app')