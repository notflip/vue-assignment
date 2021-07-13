import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import CommitList from '../../src/components/CommitList.vue'

describe('CommitList', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  // Test load the commits on mounting
  it('loads commits for chosen repository on mounting', () => {
    const commitModule = {
      namespaced: true,
      actions: {
        load: jest.fn().mockName('load')
      }
    }

    const store = new Vuex.Store({
      modules: {
        commits: commitModule
      }
    })

    shallowMount(CommitList, {
      propsData: { repositoryId: 'repo1' },
      localVue,
      store
    })

    expect(commitModule.actions.load).toHaveBeenCalled()
  })

  // Test display the commits on mounting
  it('displays the commits', () => {
    const commitModuleWithLoadedData = {
      namespaced: true,
      state: {
        data: {
          commit1: { id: 1 },
          commit2: { id: 2 }
        }
      },
      actions: {
        load: jest.fn().mockName('load')
      }
    }

    const store = new Vuex.Store({
      modules: {
        commits: commitModuleWithLoadedData
      }
    })

    const wrapper = shallowMount(CommitList, {
      propsData: { repositoryId: 'repo1' },
      localVue,
      store
    })

    expect(wrapper.findAll('[data-testid="commit"]').length).toBe(2)
  })
})
