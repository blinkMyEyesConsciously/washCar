import Vue from 'vue'
import App from './App'
import Dialog from '@/../static/vant/dialog/dialog'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.config._mpTrace = true
import MpvueRouterPatch from 'mpvue-router-patch'

wx.cloud.init({
  traceUser: true
})
Vue.prototype.db = wx.cloud.database({
  env: 'meow-helper-1b5609'
})




Vue.prototype.wx = wx
Vue.prototype.Dialog = Dialog

Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
