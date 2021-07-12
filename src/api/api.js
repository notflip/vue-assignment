export default {
  loadRepositories() {
    const repositories = [
      { id: 1, name: 'repo 1' },
      { id: 2, name: 'repo 2' },
    ];

    return Promise.resolve(repositories);
  },
};
