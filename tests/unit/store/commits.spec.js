import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import commits from '@/store/commits'

describe('commits load action', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  it('adds the commits to the store', async () => {
    const fakeData = {
      repo1: {
        commit1: { id: 1, name: 'commit 1' },
        commit2: { id: 2, name: 'commit 2' }
      },
      repo2: {
        commit1: { id: 3, name: 'commit 1' },
        commit2: { id: 4, name: 'commit 2' }
      }
    }

    const fakeApi = {
      loadCommits: repositoryId => Promise.resolve(fakeData[repositoryId])
    }

    const store = new Vuex.Store({
      modules: {
        commits: commits(fakeApi)
      }
    })

    await store.dispatch('commits/load', { repositoryId: 'repo1' })
    expect(store.state.commits.data).toEqual(fakeData.repo1)

    await store.dispatch('commits/load', { repositoryId: 'repo2' })
    expect(store.state.commits.data).toEqual(fakeData.repo2)
  })
})
