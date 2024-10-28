import { computed } from 'vue'
import { useCatalogStore } from '~/stores/catalog'

export function useCatalog() {
  const store = useCatalogStore()

  const products = computed(() => store.products)
  const filteredProducts = computed(() => store.filteredProducts)
  const searchQuery = computed({
    get: () => store.searchQuery,
    set: (value) => store.setSearchQuery(value),
  })
  const viewMode = computed({
    get: () => store.viewMode,
    set: (value) => store.setViewMode(value),
  })
  const currentPage = computed({
    get: () => store.currentPage,
    set: (value) => store.setCurrentPage(value),
  })
  const itemsPerPage = computed(() => store.itemsPerPage)
  const isLoading = computed(() => store.isLoading)

  const fetchProducts = async () => {
    store.isLoading = true
    try {
      await store.fetchProducts()
    } finally {
      store.isLoading = false
    }
  }

  const setSearchQuery = (query: string) => {
    store.setSearchQuery(query)
    store.setCurrentPage(1)
  }

  const setViewMode = (mode: 'grid' | 'carousel') => {
    store.setViewMode(mode)
  }

  const setCurrentPage = (page: number) => {
    store.setCurrentPage(page)
  }

  return {
    products,
    filteredProducts,
    searchQuery,
    viewMode,
    currentPage,
    itemsPerPage,
    isLoading,
    fetchProducts,
    setSearchQuery,
    setViewMode,
    setCurrentPage,
  }
}
