<template>
  <div class="catalog-page">
    <div class="header">
      <img class="logo" src="assets/logo.png" />
      <span class="store-name">FakeStore</span>
    </div>
    <SearchBar />
    <div class="view-mode">
      <button
        @click="setViewMode('grid')"
        :class="{ active: viewMode === 'grid' }"
      >
        Grid
      </button>
      <button
        @click="setViewMode('carousel')"
        :class="{ active: viewMode === 'carousel' }"
      >
        Carousel
      </button>
    </div>
    <LoadingSpinner v-if="isLoading" />
    <CatalogList v-else />
    <Pagination v-if="viewMode == 'grid'" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCatalog } from '~/composables/useCatalog'
import SearchBar from '~/components/SearchBar.vue'
import CatalogList from '~/components/CatalogList.vue'
import Pagination from '~/components/Pagination.vue'
import LoadingSpinner from '~/components/LoadingSpinner.vue'

const { viewMode, isLoading, fetchProducts, setViewMode } = useCatalog()

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped lang="scss">
.catalog-page {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    .logo {
      width: 40px;
      margin-right: 10px;
    }

    .store-name {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .view-mode {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;

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
}
</style>
