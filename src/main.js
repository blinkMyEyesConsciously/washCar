import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
import MpvueRouterPatch from 'mpvue-router-patch'
wx.cloud.init({
  traceUser: true
})
Vue.prototype.db = wx.cloud.database({
  env: 'meow-helper-1b5609'
})

Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
