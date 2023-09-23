import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    title: Record<string, string>
  }
}
