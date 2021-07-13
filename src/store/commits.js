const initialData = []

export default (api) => ({
  namespaced: true,
  state: {
    data: initialData
  },
  actions: {
    load: ({ commit }, repositoryId) => {
      commit('resetState')
      api.loadCommits(repositoryId).then((data) => {
        commit('storeCommits', data)
      })
    }
  },
  mutations: {
    resetState (state) {
      state.data = initialData
    },
    storeCommits (state, data) {
      state.data = data
    }
  }
})
