export default (api) => ({
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    load: ({ commit }, repositoryId) => {
      api.loadCommits(repositoryId).then((data) => {
        commit('storeCommits', data)
      })
    }
  },
  mutations: {
    storeCommits (state, data) {
      state.data = data
    }
  }
})
