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

    <el-form :model="model" size="large" class="mt-6" label-position="top">
      <el-form-item prop="username" :label="t('username.label')">
        <el-input v-model="model.username" :placeholder="t('username.placeholder')" />
      </el-form-item>

      <el-form-item prop="email" :label="t('email.label')">
        <el-input v-model="model.email" :placeholder="t('email.placeholder')" />
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

      <el-form-item>
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
const emit = defineEmits<{
  change: [key: string]
}>()

const { t } = useI18n()

const model = reactive({
  username: '',
  email: '',
  password: '',
  confirmPwd: '',
  policy: false
})
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
  email:
    label: 邮箱
    placeholder: 请输入邮箱
  password:
    label: 密码
    placeholder: 请输入密码
  confirmPwd:
    label: 确认密码
    placeholder: 请再次输入密码
  policy:
    label: 我已阅读并同意
    link: 《隐私政策》
    text: 和
    link2: 《服务条款》
en:
  signup: Sign Up
  login:
    message: Already have an account?
    button: Sign in
  username:
    label: Username
    placeholder: Please enter your username
  email:
    label: Email
    placeholder: Please enter your email
  password:
    label: Password
    placeholder: Please enter your password
  confirmPwd:
    label: Confirm Password
    placeholder: Please enter your password again
  policy:
    label: I have read and agree to the
    link: Privacy Policy
    text: and
    link2: Terms of Service
</i18n>
