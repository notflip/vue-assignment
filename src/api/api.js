export default {
  loadRepositories () {
    const repositories = {
      repo1: { id: 1, name: 'repo 1' },
      repo2: { id: 2, name: 'repo 2' }
    }

    return Promise.resolve(repositories)
  }
}
