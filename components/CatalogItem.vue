<template>
  <div class="catalog-item" @click="goToProductDetails(product.id)">
    <img
      :src="product.image"
      :alt="product.title"
      class="catalog-item__image"
    />
    <h3 class="catalog-item__title">{{ product.title }}</h3>
    <p class="catalog-item__price">${{ product.price }}</p>
    <p class="catalog-item__rating">
      Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Product } from '~/types/Product'

const props = defineProps<{
  product: Product
}>()

const router = useRouter()

const goToProductDetails = (productId: number) => {
  router.push(`/product/${productId}`)
}
</script>

<style scoped lang="scss">
.catalog-item {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  height: 300px;
  width: 250px;
  justify-content: space-between;

  &__image {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  &__title {
    font-size: 16px;
    margin: 10px 0;
    text-align: center;
  }

  &__price {
    font-size: 14px;
    color: #333;
    margin-top: auto;
  }

  &__rating {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
  }
}
</style>
