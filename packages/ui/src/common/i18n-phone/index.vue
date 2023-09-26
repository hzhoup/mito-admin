<template>
  <el-input
    :model-value="modelValue.phone"
    :placeholder="t('placeholder')"
    @input="(v) => handleChangeProperty(v, 'phone')"
  >
    <template #prepend>
      <el-select :model-value="modelValue.code" style="width: 110px" @change="(v) => handleChangeProperty(v, 'code')">
        <el-option
          v-for="option in countryList"
          :key="option.country_code"
          :label="option.label"
          :value="option.phone_code"
        />
      </el-select>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { useLocale } from '@mito/locale'
import countries from './countries'

defineOptions({ name: 'I18nPhone' })

const { t } = useI18n()
const { getLocale } = useLocale()

const countryList = computed(() => {
  const key = toValue(getLocale) === 'zh-cn' ? 'chinese_name' : 'english_name'
  return countries.map((item) => ({
    ...item,
    label: `${item[key]} +${item.phone_code}`
  }))
})

interface ModelValue {
  code: string
  phone: string
}
const props = defineProps({
  modelValue: {
    type: Object as PropType<ModelValue>,
    default: () => ({ code: '86', phone: '' })
  }
})
const emit = defineEmits<{
  'update:modelValue': [value: ModelValue]
}>()

function handleChangeProperty(value: string, key: string) {
  emit('update:modelValue', { ...props.modelValue, [key]: value })
}
</script>

<i18n lang="yaml">
zh-cn:
  placeholder: 请输入手机号
en:
  placeholder: Please enter your phone number
</i18n>
