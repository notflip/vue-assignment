import Vue from 'vue';
import Vuex from 'vuex';

import repositories from './repositories';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { repositories },
});
