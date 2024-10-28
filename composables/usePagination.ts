import { computed } from 'vue'
import { useCatalogStore } from '~/stores/catalog'
import { scrollToTop } from '~/utils/scroll'

export function usePagination() {
  const store = useCatalogStore()

  const totalPages = computed(() =>
    Math.ceil(store.filteredProducts.length / store.itemsPerPage)
  )

  const currentPage = computed({
    get: () => store.currentPage,
    set: (value) => {
      store.setCurrentPage(value)
      scrollToTop()
    },
  })

  const setCurrentPage = (page: number) => {
    store.setCurrentPage(page)
    scrollToTop()
  }

  return {
    totalPages,
    currentPage,
    setCurrentPage,
  }
}
