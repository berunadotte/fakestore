<template>
  <div class="catalog">
    <div v-if="viewMode === 'carousel'" class="carousel">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="carouselContainer" class="carousel-container">
        <CatalogItem
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <button @click="scrollRight" class="scroll-button right">&gt;</button>
    </div>
    <div v-else class="grid">
      <CatalogItem
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCatalog } from '~/composables/useCatalog'
import CatalogItem from './CatalogItem.vue'

const { filteredProducts, currentPage, itemsPerPage, viewMode } = useCatalog()

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProducts.value.slice(start, end)
})

const carouselContainer = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
.catalog {
  display: grid;
  min-height: 670px;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .carousel {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;

    .carousel-container {
      display: flex;
      overflow-x: auto;
      gap: 20px;
      scroll-behavior: smooth;
      padding: 0 20px;

      .catalog-item {
        flex: 0 0 250px;
      }
    }

    .scroll-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      z-index: 1;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }
    }
  }
}
</style>
