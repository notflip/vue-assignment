<template>
<div>
  <commit-search></commit-search>
  <commit-list :repositoryId="repositoryId"></commit-list>
</div>

</template>

<script>
import CommitList from '../components/CommitList.vue'
import CommitSearch from '../components/CommitSearch.vue'

export default {
  props: ['repositoryId'],
  components: { CommitList, CommitSearch }
}
</script>
