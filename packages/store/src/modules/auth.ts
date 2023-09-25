import { store } from '../setupStore'

interface AuthState {
  token: string | null
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    token: null
  }),
  persist: {
    paths: ['token']
  }
})

export const useAuthStoreWithOut = () => useAuthStore(store)
