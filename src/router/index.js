import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    history: false,
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }]
})