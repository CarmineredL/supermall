import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  //mutations唯一的目的就是修改state中的状态 
  //mutations中的每个方法尽可能完成的事件比较单一一点
  mutations,
  actions,
  getters,
  modules: {}
})
export default store
