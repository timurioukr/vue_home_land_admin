import Vue from 'vue'

export default {
  state: () => ({
    profile: {
      id: 0,
      email: '',
      first_name: '',
      last_name: '',
      avatar: '',
    },
  }),
  mutations: {
    SET_DATA_PROFILE (state, data) {
      state[Object.entries(data)[0][0]] = Object.entries(data)[0][1]
    },
    DELETE_DATA_PROFILE (state, data) {
      state[Object.entries(data)[0][0]] = state[Object.entries(data)[0][0]].filter(item => item.id !== Object.entries(data)[0][1])
    }
  },
  actions: {
    async getProfile (context) {
      return await api.get('user/2').then(response => {
        context.commit('SET_DATA_PROFILE', { profile: response.data })
        return response
      })
    },
  },
}
