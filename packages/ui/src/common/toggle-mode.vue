<template>
  <el-icon size="24" @click="toggleDark">
    <icon-mdi-weather-night v-if="appStore.isDark" />
    <icon-mdi-weather-sunny v-else />
  </el-icon>
</template>

<script setup lang="ts">
import { useAppStore } from '@mito/store'

const appStore = useAppStore()

function toggleDark() {
  appStore.toggleDark()
}
</script>
