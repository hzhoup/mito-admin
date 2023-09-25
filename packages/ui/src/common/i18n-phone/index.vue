<template>
  <el-input v-model="phone" :placeholder="t('placeholder')">
    <template #prepend>
      <el-select v-model="code" style="width: 120px">
        <el-option
          v-for="option in countryList"
          :key="option.country_code"
          :label="getCountrySelectLabel(option)"
          :value="option.phone_code" />
      </el-select>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { useLocale } from '@mito/locale'
import countries from './countries.json'

defineOptions({ name: 'I18nPhone' })

const props = defineProps<{
  code: string
  phone: string
}>()
const emit = defineEmits<{
  'update:code': [key: string]
  'update:phone': [key: string]
}>()

const { t } = useI18n()
const { getLocale } = useLocale()

const countryList = countries

function getCountrySelectLabel(option: any) {
  return getLocale === 'zh-cn'
    ? `${option.chinese_name}(${option.country_code}) +${option.phone_code}`
    : `${option.english_name}(${option.country_code}) +${option.phone_code}`
}

const code = computed({
  get() {
    return props.code
  },
  set(val) {
    emit('update:code', val)
  }
})
const phone = computed({
  get() {
    return props.phone
  },
  set(val) {
    emit('update:phone', val)
  }
})

onMounted(() => {
  if (!code.value) code.value = getLocale === 'zh-cn' ? '86' : '1'
})
</script>

<i18n lang="yaml">
zh-cn:
  placeholder: 请输入手机号
en:
  placeholder: Please enter your phone number
</i18n>
