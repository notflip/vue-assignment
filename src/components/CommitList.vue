<template>
  <div>
    <ul>
      <li v-for="(commit, key) in commits" :key="key" data-testid="commit">
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
    commits: (state) => state.commits.data
  })
}
</script>
