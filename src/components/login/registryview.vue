<template>
  <div>
    <div class="lowin lowin-red">
      <div class="lowin-wrapper">
        <div class="lowin-box lowin-register">
          <div class="lowin-box-inner">
            <form>
              <p>成为新用户</p>
              <div class="lowin-group">
                <label>用户名</label>
                <input type="text" name="name" autocomplete="name" class="lowin-input">
              </div>
              <div class="lowin-group">
                <label>邮箱</label>
                <input type="email" autocomplete="email" name="email" class="lowin-input">
              </div>
              <div class="lowin-group">
                <label>密码</label>
                <input type="password" name="password" autocomplete="current-password" class="lowin-input">
              </div>
              <button class="lowin-btn">
                注 册
              </button>

              <div class="text-foot">
                已经有账户? <a href="/login" class="login-link">去登录</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  @import "../../../static/login/auth.css";

</style>
