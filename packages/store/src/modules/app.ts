import { store } from '../setupStore'

interface AppState {
  pageLoading: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    pageLoading: false
  }),
  getters: {
    getPageLoading(state): boolean {
      return state.pageLoading
    }
  },
  actions: {
    setPageLoading(loading: boolean) {
      this.pageLoading = loading
    }
  }
})

export const useAppStoreWithOut = () => useAppStore(store)
