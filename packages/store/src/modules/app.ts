import { useDark, useToggle } from '@vueuse/core'
import { store } from '../setupStore'

export const useAppStore = defineStore('app', () => {
  const pageLoading = ref(false)
  function setPageLoading(loading: boolean) {
    pageLoading.value = loading
  }

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  return { pageLoading, setPageLoading, isDark, toggleDark }
})

export const useAppStoreWithOut = () => useAppStore(store)
