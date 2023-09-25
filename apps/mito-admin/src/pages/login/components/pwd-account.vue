<template>
  <div class="w-full mt-12">
    <el-space direction="vertical" alignment="flex-start">
      <div class="text-2xl">{{ t('welcome') }}</div>
      <div>
        <el-text type="info">{{ t('register.message') }}</el-text>
        <el-link type="primary" :auto-insert-space="false" @click="emit('change', 'sign-up')">
          {{ t('register.button') }}
        </el-link>
      </div>
    </el-space>

    <el-form :model="model" size="large" class="mt-6">
      <el-form-item prop="username">
        <el-input v-model="model.username" :placeholder="t('username.placeholder')">
          <template #prefix>
            <el-icon><icon-mdi-email-outline /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="model.password" :placeholder="t('password.placeholder')" show-password>
          <template #prefix>
            <el-icon><icon-mdi-lock-outline /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-full">{{ t('login') }}</el-button>
      </el-form-item>
    </el-form>

    <el-divider>
      <el-text>or</el-text>
    </el-divider>

    <el-row :gutter="12">
      <el-col :span="12">
        <el-button class="w-full">
          <template #icon>
            <el-icon size="20"><icon-local-wechat /></el-icon>
          </template>
          <el-text>{{ t('wechat') }}</el-text>
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="w-full">
          <template #icon>
            <el-icon size="20"><icon-local-dingtalk /></el-icon>
          </template>
          <el-text>{{ t('dingtalk') }}</el-text>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  change: [key: string]
}>()

const { t } = useI18n()

const model = reactive({
  username: '',
  password: ''
})
</script>

<i18n lang="yaml">
zh-cn:
  welcome: 欢迎回来!
  login: 登录
  wechat: 微信
  dingtalk: 钉钉
  username:
    label: 用户名
    placeholder: 请输入用户名 / 邮箱 / 手机号
  password:
    label: 密码
    placeholder: 请输入密码
  register:
    message: 还没有账号？
    button: 注册
en:
  welcome: Welcome back!
  login: Sign in
  wechat: WeChat
  dingtalk: DingTalk
  username:
    label: Username
    placeholder: Please enter your username / email / mobile number
  password:
    label: Password
    placeholder: Please enter your password
  register:
    message: Don't have an account?
    button: Sign Up
</i18n>