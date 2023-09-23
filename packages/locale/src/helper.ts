export const loadedLocalePool = new Set<LocaleKey>()

export function setHtmlPageLang(locale: LocaleKey) {
  loadedLocalePool.add(locale)

  document.querySelector('html')?.setAttribute('lang', locale)
}

export const localeOptions = [
  { label: '简体中文', key: 'zh-cn' },
  { label: 'English', key: 'en' }
] as const

export type LocaleKey = (typeof localeOptions)[number]['key']

export const availableLocales: LocaleKey[] = localeOptions.map((locale) => locale.key)
