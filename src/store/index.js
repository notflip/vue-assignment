import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/api/api'
import repositories from '@/store/repositories'
import commits from '@/store/commits'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: ''
  },
  mutations: {
    updateSearch (state, value) {
      state.search = value
    }
  },
  actions: {},
  modules: {
    repositories: repositories(api),
    commits: commits(api)
  }
})
