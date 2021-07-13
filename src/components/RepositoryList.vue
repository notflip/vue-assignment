<template>
  <div>
    <div v-for="repo in repositories" :key="repo.id" data-testid="repository">
      <router-link
        class="block my-4 px-6 py-4 bg-gray-200 hover:bg-gray-300 rounded"
        :to="{ name: 'commits', params: { repositoryId: repo.name } }"
        >{{ repo.full_name.toLowerCase() }}</router-link
      >
    </div>
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
