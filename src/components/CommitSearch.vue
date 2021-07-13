<template>
  <div>
    <input type="text" v-model="search" />
  </div>
</template>

<script>
export default {
  name: 'CommitSearch',
  computed: {
    search: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        this.$store.commit('updateSearch', value)
      }
    }
  }
}
</script>
