export default (api) => ({
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    load: ({ commit }) => {
      api.loadRepositories().then((data) => {
        commit('storeRepositories', data)
      })
    }
  },
  mutations: {
    storeRepositories (state, data) {
      state.data = data
    }
  }
})
