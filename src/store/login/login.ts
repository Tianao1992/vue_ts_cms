import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootType } from '../type'
import { IAccount } from '@/network/login/type'

import router from '@/router'
import {
  accountRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/network/login/login'
import LocalCache from '@/utils/cache'
const loginModule: Module<ILoginState, IRootType> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeMenus(state, userMenus) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, playload: IAccount) {
      const res = await accountRequest(playload)
      const { id, token } = res.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)
      //请求用户信息
      const userRes = await requestUserInfoById(id)
      const userInfo = userRes.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeMenus', userMenus)
      }
    }
  }
}

export default loginModule
