<template>
  <div class="login-account">
    <el-form label-width="60px" :model="account" :rules="rules" ref="formEl">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import cache from '@/utils/cache'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formEl = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const loginAction = (isKeepPsw: boolean) => {
      formEl.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑')
          if (isKeepPsw) {
            console.log('保存')
            cache.setCache('name', account.name)
            cache.setCache('password', account.password)
          } else {
            cache.deleCache('name')
            cache.deleCache('password')
          }
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formEl
    }
  }
})
</script>

<style lang="less" scoped></style>
