import { store } from '../setupStore'

interface AppState {
  loading: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    loading: false
  })
})

export const useAppStoreWithOut = () => useAppStore(store)
