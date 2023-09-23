import NProgress from 'nprogress'
import { useAppStoreWithOut } from '@mito/store'
import type { Router } from 'vue-router'

export function createRouterGuard(router: Router) {
  createPageLoadedGuard(router)
  createPageLoadingBarGuard(router)
  createNprogressGuard(router)
}

function createPageLoadedGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>()

  router.beforeEach((to) => {
    Object.assign(to.meta, { loaded: loadedPageMap.has(to.path) })

    return true
  })

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true)

    return true
  })
}

function createPageLoadingBarGuard(router: Router) {
  const appStore = useAppStoreWithOut()

  router.beforeEach((to) => {
    if (to.meta?.loaded === true) return true

    appStore.setPageLoading(true)

    return true
  })

  router.afterEach(() => {
    setTimeout(() => {
      appStore.setPageLoading(false)
    }, 180)

    return true
  })
}

function createNprogressGuard(router: Router) {
  router.beforeEach(() => {
    NProgress.start()
    return true
  })

  router.afterEach(() => {
    // NProgress.done()
    return true
  })
}