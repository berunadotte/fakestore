<template>
  <div class="pagination">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="setCurrentPage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePagination } from '~/composables/usePagination'

const { totalPages, currentPage, setCurrentPage } = usePagination()
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;

    &.active {
      background-color: #007bff;
      color: #fff;
    }
  }
}
</style>
