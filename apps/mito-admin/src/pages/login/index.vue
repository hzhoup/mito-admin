<template>
  <div class="px-4">
    <main>
      <component :is="getActiveModule" @change="changeModule" />
    </main>
  </div>
</template>

<script setup lang="ts">
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
