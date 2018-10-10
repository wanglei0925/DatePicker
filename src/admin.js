// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Two from './Two'
import router from './router/second'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#two',
    router,
    components: { Two },
    template: '<Two/>'
})