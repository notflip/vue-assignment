<template>
    <commit-list :repositoryId="repositoryId"></commit-list>
</template>

<script>
import CommitList from '../components/CommitList.vue'

export default {
  props: ['repositoryId'],
  components: { CommitList }
}
</script>
