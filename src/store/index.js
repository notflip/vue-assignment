import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api/api';
import repositories from '@/store/repositories';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { repositories: repositories(api) },
});
