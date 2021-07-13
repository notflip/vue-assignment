import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import RepositoryList from '../../src/components/RepositoryList.vue'

describe('RepositoryList', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  // Test load the repositories on mounting
  it('loads repositories on mounting', () => {
    const repositoryModule = {
      namespaced: true,
      actions: {
        load: jest.fn().mockName('load')
      }
    }

    const store = new Vuex.Store({
      modules: {
        repositories: repositoryModule
      }
    })

    shallowMount(RepositoryList, { localVue, store })

    expect(repositoryModule.actions.load).toHaveBeenCalled()
  })

  // Test display the repositories after loading
  it('displays the repositories', () => {
    const repositoryModuleWithLoadedData = {
      namespaced: true,
      state: {
        data: [
          { id: 1 },
          { id: 2 },
          { id: 3 }
        ]
      },
      actions: {
        load: jest.fn().mockName('load')
      }
    }

    const store = new Vuex.Store({
      modules: {
        repositories: repositoryModuleWithLoadedData
      }
    })

    const wrapper = shallowMount(RepositoryList, {
      localVue,
      store,
      stubs: ['router-link']
    })

    expect(wrapper.findAll('[data-testid="repository"]').length).toBe(3)
  })
})
