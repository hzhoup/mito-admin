<template>
  <el-dropdown @command="changeLocale">
    <el-icon size="24">
      <icon-mdi-web />
    </el-icon>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="option in localeOptions" :key="option.value" :command="option.value">
          {{ option.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { localeOptions, useLocale } from '@mito/locale'

const { changeLocale } = useLocale()
</script>
