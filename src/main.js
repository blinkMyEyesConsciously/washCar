import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
