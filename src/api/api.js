export default {
  loadRepositories () {
    const repositories = {
      repo1: { id: 1, name: 'repo 1' },
      repo2: { id: 2, name: 'repo 2' }
    }

    return Promise.resolve(repositories)
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
