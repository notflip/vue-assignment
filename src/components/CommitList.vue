<template>
  <div>
    <ul>
      <li v-for="(commit, key) in commitSearchResults" :key="key" data-testid="commit">
        {{ commit.message }} {{ commit.author }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CommitList',
  props: ['repositoryId'],
  mounted () {
    this.loadCommits(this.repositoryId)
  },
  methods: mapActions({
    loadCommits: 'commits/load'
  }),
  computed: mapState({
    search: (state) => state.search,
    commits: (state) => state.commits.data,
    commitSearchResults () {
      if (!this.search) {
        return this.commits
      }
      return this.commits.filter(commit => commit.message.toLowerCase().includes(this.search.toLowerCase()))
    }
  })
}
</script>
