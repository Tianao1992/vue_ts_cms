import { createStore } from 'vuex'

import { IRootType } from './type'
import login from './login/login'
const store = createStore<IRootType>({
  state: () => {
    return {
      name: 'lisi',
      age: 20
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
