<template>
  <div>
    <ul>
      <li
        v-for="repo in repositories"
        :key="repo.id"
        data-testid="repository"
    >{{ repo.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'RepositoryList',
  mounted() {
    this.loadRepositories();
  },
  methods: mapActions({
    loadRepositories: 'repositories/load',
  }),
  computed: mapState({
    repositories: (state) => state.repositories.data,
  }),
};
</script>
