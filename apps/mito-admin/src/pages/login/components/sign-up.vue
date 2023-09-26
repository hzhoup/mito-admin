<template>
  <div class="w-full pt-12">
    <el-space direction="vertical" alignment="flex-start">
      <div class="text-2xl">{{ t('signup') }}</div>
      <div>
        <el-text type="info">{{ t('login.message') }}</el-text>
        <el-link type="primary" :auto-insert-space="false" @click="emit('change', 'pwd-account')">
          {{ t('login.button') }}
        </el-link>
      </div>
    </el-space>

    <el-form :model="model" :rules="rules" size="large" class="mt-6" label-position="top">
      <el-form-item prop="username" :label="t('username.label')">
        <el-input v-model="model.username" :placeholder="t('username.placeholder')" />
      </el-form-item>

      <el-form-item prop="email" :label="t('email.label')">
        <el-input v-model="model.email" :placeholder="t('email.placeholder')" />
      </el-form-item>

      <el-form-item prop="phone" :label="t('phone.label')">
        <i18n-phone v-model:code="model.code" v-model:phone="model.phone" />
      </el-form-item>

      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item prop="password" :label="t('password.label')">
            <el-input v-model="model.password" :placeholder="t('password.placeholder')" show-password />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="confirmPwd" :label="t('confirmPwd.label')">
            <el-input v-model="model.confirmPwd" :placeholder="t('confirmPwd.placeholder')" show-password />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item size="small">
        <el-checkbox v-model="model.policy">
          <el-text>
            <el-text>{{ t('policy.label') }}</el-text>
            <el-text type="primary">{{ t('policy.link') }}</el-text>
            <el-text>{{ t('policy.text') }}</el-text>
            <el-text type="primary">{{ t('policy.link2') }}</el-text>
          </el-text>
        </el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="w-full">{{ t('signup') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { I18nPhone } from '@mito/ui'
import type { FormRules } from 'element-plus'

const emit = defineEmits<{
  change: [key: string]
}>()

const { t } = useI18n()

interface RegisterForm {
  username: string
  email: string
  code: string
  phone: string
  password: string
  confirmPwd: string
  policy: boolean
}
const model = reactive<RegisterForm>({
  username: '',
  email: '',
  code: '',
  phone: '',
  password: '',
  confirmPwd: '',
  policy: false
})
const rules: FormRules<RegisterForm> = {
  username: [
    { required: true, message: t('username.required') },
    { min: 3, max: 20, message: t('username.length'), trigger: 'blur' }
  ],
  email: [
    { required: true, message: t('email.required') },
    { type: 'email', message: t('email.format'), trigger: 'blur' }
  ],
  phone: [{ required: true, message: t('phone.required'), trigger: 'blur' }],
  password: [
    { required: true, message: t('password.required') },
    { min: 6, max: 20, message: t('password.length'), trigger: 'blur' }
  ],
  confirmPwd: [
    {
      required: true,
      validator: (_, value, callback) => {
        if (value === '') {
          callback(new Error(t('password.required')))
        } else if (value !== model.password) {
          callback(new Error(t('confirmPwd.error')))
        } else {
          callback()
        }
      }
    }
  ],
  policy: [{ validator: (_, value, callback) => (value ? callback() : callback(new Error(t('policy.required')))) }]
}
</script>

<i18n lang="yaml">
zh-cn:
  signup: 注册
  login:
    message: 已有账号？
    button: 登录
  username:
    label: 用户名
    placeholder: 请输入用户名
    required: 请输入用户名
    length: 用户名长度在 3 到 20 个字符
  email:
    label: 邮箱
    placeholder: 请输入邮箱
    required: 请输入邮箱
    format: 请输入正确的邮箱格式
  phone:
    label: 手机号
    placeholder: 请输入手机号
    required: 请输入手机号
  password:
    label: 密码
    placeholder: 请输入密码
    required: 请输入密码
    length: 密码长度为6-20位
  confirmPwd:
    label: 确认密码
    placeholder: 请再次输入密码
    error: 两次输入密码不一致
  policy:
    label: 我已阅读并同意
    link: 《隐私政策》
    text: 和
    link2: 《服务条款》
    required: 请阅读并同意隐私政策和服务条款
en:
  signup: Sign Up
  login:
    message: Already have an account?
    button: Sign in
  username:
    label: Username
    placeholder: Please enter your username
    required: Please enter your username
    length: Username length is 3-20 bits
  email:
    label: Email
    placeholder: Please enter your email
    required: Please enter your email
    format: Please enter the correct email format
  phone:
    label: Phone
    placeholder: Please enter your phone
    required: Please enter your phone
  password:
    label: Password
    placeholder: Please enter your password
    required: Please enter your password
    length: Password length is 6-20 bits
  confirmPwd:
    label: Confirm Password
    placeholder: Please enter your password again
    error: The two passwords entered are inconsistent
  policy:
    label: I have read and agree to the
    link: Privacy Policy
    text: and
    link2: Terms of Service
    required: Please read and agree to the Privacy Policy and Terms of Service
</i18n>
