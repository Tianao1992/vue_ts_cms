<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <User />
            <span>账号密码</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <Iphone />
            <span>手机号</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPsw">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    //属性
    const isKeepPsw = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const currTab = ref('account')

    //方法
    const handleLoginClick = () => {
      if (currTab.value == 'account') {
        console.log('父级点击登录')
        accountRef.value?.loginAction(isKeepPsw.value)
      } else {
        console.log('phone 点击登录')
      }
    }
    return {
      isKeepPsw,
      handleLoginClick,
      accountRef,
      currTab
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  text-align: center;
}
.custom-tabs-label svg {
  vertical-align: middle;
}
.custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
svg {
  width: 20px;
  height: 20px;
}
</style>
