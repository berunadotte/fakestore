import { defineStore } from 'pinia'
import axios from 'axios'; 
import { Product } from '~/types/Product';

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    products: [] as Product[],
    filteredProducts: [] as Product[],
    searchQuery: '' as string,
    viewMode: 'grid' as 'grid' | 'carousel', 
    currentPage: 1 as number,
    itemsPerPage: 6 as number,
    isLoading: true as boolean,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        if (Array.isArray(response.data)) {
          this.products = response.data;
          this.filteredProducts = this.products;
        } else {
          console.error('Invalid data format received from API:', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.isLoading = false;
      }
    },
    setSearchQuery(query: string) {
      this.searchQuery = query;
      this.filterProducts();
      this.setCurrentPage(1);
    },
    filterProducts() {
      this.filteredProducts = this.products.filter(product =>
        Object.values(product).some(value =>
          value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    },
    setViewMode(mode: 'grid' | 'carousel') { 
      this.viewMode = mode;
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
  },
});