import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: '',
      manager: false
    },
    cartItem1: [],
    count: '0'
  },
  getters: {
    cartItem1Number (state) {
      let total = 0
      state.cartItem1.forEach(function (value) {
        total += value.quantity
      })
      return total
    },
    shipping (state) {
      let total = 0
      const free = 0
      const shippingdai = 350
      state.cartItem1.forEach(function (value) {
        total += value.price * value.quantity
      })
      console.log(total)
      if (total > 10000) {
        console.log(free)
        return free
      } else {
        console.log(shippingdai)
        return shippingdai
      }
    },
    totalPrice2 (state) {
      const cartItem1 = state.cartItem1
      let sum = 0
      for (let i = 0; i < cartItem1.length; i++) {
        sum += cartItem1[i].price * cartItem1[i].quantity
        // cartItem1[i].price * cartItem1[i].quantity
      }
      return sum
    }
  },
  mutations: {
    logout (state) {
      state.user.name = ''
      state.user.id = ''
      state.user.manager = false
    },
    login (state, data) {
      console.log(data)
      state.user.name = data.account
      state.user.id = data._id
      state.user.manager = data.manager
    },
    addCart (state, data) {
      // 是否有相同商品
      const originalProduct = state.cartItem1.find(function (item) {
        return item._id === data._id
      })
      if (originalProduct) {
        originalProduct.quantity += data.quantity
      } else {
        state.cartItem1.push(data)
      }
      state.count++
      console.log(state.count)
      console.log(state.cartItem1.length)
      // console.log(state.cartItems)
    },
    deletee (state, data) {
      const idx = state.cartItem1.indexOf(data)
      // console.log(idx)
      state.cartItem1.splice(idx, 1)
    },
    resetcartItem1 (state) {
      state.cartItem1 = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [PersistedState()]
})
