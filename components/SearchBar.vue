<template>
  <input
    type="text"
    v-model="searchQuery"
    @input="updateSearchQuery"
    placeholder="Search..."
    class="search-bar"
  />
</template>

<script setup lang="ts">
import { useCatalog } from '~/composables/useCatalog'

const { searchQuery } = useCatalog()

const updateSearchQuery = () => {
  searchQuery.value = searchQuery.value
}
</script>

<style scoped lang="scss">
.search-bar {
  width: 70%;
  max-width: 900px;
  padding: 10px;
  margin-top: 10px;
  border: 0px;
  border-radius: 4px;
}
</style>
