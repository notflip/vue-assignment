<template>
  <div>
    <ul>
      <li v-for="(repo, key) in repositories" :key="key" data-testid="repository">
        <router-link
          :to="{ name: 'commits', params: { repositoryId: key } }"
          >{{ repo.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'RepositoryList',
  mounted () {
    this.loadRepositories()
  },
  methods: mapActions({
    loadRepositories: 'repositories/load'
  }),
  computed: mapState({
    repositories: (state) => state.repositories.data
  })
}
</script>
