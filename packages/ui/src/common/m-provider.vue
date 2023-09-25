<template>
  <el-config-provider :button="{ autoInsertSpace: true }" :locale="getElLocale">
    <div v-loading="appStore.getPageLoading" class="h-full">
      <slot />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useLocale } from '@mito/locale'
import { useAppStore } from '@mito/store'

const appStore = useAppStore()
const { getElLocale } = useLocale()
</script>
