/* eslint-disable no-sequences */
import Vue from 'vue'
import Vuex from 'vuex'
import {addCookie, delCookie} from '../cookie/cookie'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 全局变量
  state: {
    user: undefined,
    access_token: undefined,
    pwd: undefined
  },
  // 修改全局变量必须通过mutations中的方法
  // mutations只能采用同步方法
  mutations: {
    login (state, data) {
      state.user = data.user,
      state.access_token = data.access_token,
      state.pwd = data.pwd,
      addCookie('user', data.user,1),
      addCookie('access_token', data.access_token,1),
      addCookie('pwd', data.pwd,1)
    },
    logout (state) {
      state.user = undefined,
      state.access_token = undefined,
      state.pwd = undefined,
      delCookie('user'),
      delCookie('access_token'),
      delCookie('pwd')
    }
  },
  // 异步方法用actions
  // actions不能直接修改全局变量，需要调用commit方法来触发mutation中的方法
  actions: {
    login (context, data) {
      context.commit('login', data)
    },
    logout (context) {
      context.commit('logout')
    }
  }
})

export default store
