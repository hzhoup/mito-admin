import { LocaleKey } from '@mito/locale'
import { store } from '../setupStore'

interface LocaleState {
  locale: LocaleKey
  fallbackLocale: LocaleKey
}

export const useLocaleStore = defineStore({
  id: 'locale',
  state: (): LocaleState => ({
    locale: 'zh-cn',
    fallbackLocale: 'zh-cn'
  }),
  getters: {
    getLocale(state): LocaleKey {
      return state.locale || 'zh-cn'
    }
  },
  actions: {
    setLocale(locale: LocaleKey) {
      this.locale = locale
    }
  },
  persist: true
})

export const useLocaleStoreWithOut = () => useLocaleStore(store)
