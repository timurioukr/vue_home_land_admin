import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      avatar:'',
      email: '',
      first_name: '',
      id: '',
      last_name: ''
    },
    posts: []
  },
  mutations: {
    SET_DATA_PROFILE (state, data) {
      state[Object.entries(data)[0][0]] = Object.entries(data)[0][1]
    },
    DELETE_DATA_PROFILE (state, data) {
      state[Object.entries(data)[0][0]] = state[Object.entries(data)[0][0]].filter(item => item.id !== Object.entries(data)[0][1])
    }
  },
  actions: {
    async getUserProfile (context) {
       const response = await fetch('https://reqres.in/api/users/2')
        const data = await response.json()
        response && context.commit('SET_DATA_PROFILE', {profile: data })
        return response
    },
    async getPosts (context) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      response && context.commit('SET_DATA_PROFILE', {posts: data })
      return response
    },
  },
})

