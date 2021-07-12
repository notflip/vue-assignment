import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import repositories from '@/store/repositories';

describe('repositories load action', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  it('adds the repositories to the store', async () => {
    const fakeData = [
      { id: 1, name: 'repo 1' },
      { id: 2, name: 'repo 2' },
    ];

    const fakeApi = {
      loadRepositories: () => Promise.resolve(fakeData),
    };

    const store = new Vuex.Store({
      modules: {
        repositories: repositories(fakeApi),
      },
    });

    await store.dispatch('repositories/load');

    expect(store.state.repositories.data).toEqual(fakeData);
  });
});
