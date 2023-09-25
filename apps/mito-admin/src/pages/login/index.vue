<template>
  <div class="px-4 relative">
    <el-space class="absolute top-6 right-4">
      <toggle-lang />
      <toggle-mode />
    </el-space>

    <main>
      <transition name="fade-slide" mode="out-in" appear>
        <component :is="getActiveModule" @change="changeModule" />
      </transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ToggleLang, ToggleMode } from '@mito/ui'
import PwdAccount from './components/pwd-account.vue'
import SignUp from './components/sign-up.vue'

const module = ref('pwd-account')
const modules = [
  { key: 'pwd-account', component: PwdAccount },
  { key: 'sign-up', component: SignUp }
]
const getActiveModule = computed(() => {
  const activeModule = modules.find((item) => item.key === module.value)
  return activeModule?.component ?? PwdAccount
})

function changeModule(key: string) {
  module.value = key
}
</script>

<route lang="yaml">
meta:
  ignoreAuth: true
  title:
    zh-cn: 登录
    en: Sign in
</route>
