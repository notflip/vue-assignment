import axios from 'axios'

export default {
  async loadRepositories (query = '') {
    const { data } = await axios.get('https://api.github.com/search/repositories?q=' + query + '+user:notflip')

    // Map the github api data to more readable names and only the data we need
    return data.items.map(item => ({
      id: item.id,
      name: item.full_name
    }))
  },

  loadCommits (repositoryId) {
    const commits = {
      repo1: {
        commit1: { id: 1, name: 'commit 1' },
        commit2: { id: 2, name: 'commit 2' }
      },
      repo2: {
        commit3: { id: 3, name: 'commit 3' },
        commit4: { id: 4, name: 'commit 4' }
      }
    }

    return Promise.resolve(commits[repositoryId])
  }
}
