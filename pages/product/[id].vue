<template>
  <div class="product-details">
    <img
      v-if="product.image"
      :src="product.image"
      :alt="product.title"
      class="product-details__image"
    />
    <h1 class="product-details__title">{{ product.title }}</h1>
    <p class="product-details__description">{{ product.description }}</p>
    <p class="product-details__price">${{ product.price }}</p>
    <p class="product-details__rating">
      Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
    </p>
    <button @click="goBack">Back to Catalog</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCatalogStore } from '~/stores/catalog'
import { Product } from '~/types/Product'

const route = useRoute()
const router = useRouter()
const store = useCatalogStore()

const productId = parseInt(route.params.id as string, 10)
const product = store.products.find((p) => p.id === productId) as Product

const goBack = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &__image {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }

  &__title {
    font-size: 24px;
    margin: 20px 0;
  }

  &__description {
    font-size: 16px;
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }

  &__rating {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
  }
}
</style>
