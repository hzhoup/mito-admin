import { useLocaleStore } from '@mito/store'
import { LocaleKey } from './helper'
import { i18n } from './setupI18n'

type UseLocaleReturnType = {
  t: typeof i18n.global.t
  getLocale: LocaleKey
  getElLocale: any
}

export function useLocale(): UseLocaleReturnType {
  const localeStore = useLocaleStore()

  const getElLocale = computed(() => {
    // @ts-expect-error
    return i18n.global.getLocaleMessage(localeStore.getLocale)?.elLocale
  })

  return {
    t: i18n.global.t,
    getLocale: localeStore.getLocale,
    getElLocale
  }
}
