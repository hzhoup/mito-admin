<template>
  <div v-loading="appStore.getPageLoading" class="h-full">
    <el-config-provider :button="{ autoInsertSpace: true }" :locale="getElLocale">
      <slot />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '@mito/locale'
import { useAppStore } from '@mito/store'

const appStore = useAppStore()
const { getElLocale } = useLocale()
</script>
