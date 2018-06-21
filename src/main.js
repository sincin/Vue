// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Api from './Api'
import {getCookie, delCookie} from './cookie/cookie'
import store from './vuex/store'
import VueI18n from 'vue-i18n'
import FastClick from'fastclick'
import './assets/js/rem'
import './assets/css/init.css'
import './assets/css/base.css'
import VueScroller from 'vue-scroller'
window.addEventListener('load', () => {
  FastClick.attach(document.body)
})
Vue.use(VueI18n);
Vue.use(VueScroller);
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./assets/lang/zh'),   // 中文语言包
    'en-US': require('./assets/lang/en')    // 英文语言包
  }
})
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$delCookie = delCookie;
Vue.prototype.$api = Api
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
