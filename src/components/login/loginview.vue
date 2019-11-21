<template>
  <div>
    <div class="lowin lowin-red">
      <div class="lowin-wrapper">
        <div class="lowin-box lowin-login">
          <div class="lowin-box-inner">
            <div>
              <p>请登录</p>
              <div class="lowin-group">
                <label>用户名 </label>
                <input type="text" name="email" class="lowin-input" v-model="user.account">
              </div>
              <div class="lowin-group password-group">
                <label>密码 <a href="#" class="forgot-link">忘记密码?</a></label>
                <input type="password" name="password" autocomplete="current-password" class="lowin-input" v-model="user.password">
              </div>
              <button class="lowin-btn login-btn" @click="login()">
                登 录
              </button>

              <div class="text-foot">
                没有账户? <a href="/registry" class="register-link">注册</a>
                <a href="/" class="register-link">浏览主页</a>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          user:{
            account:"",
            password:"",
          }
        }
      },
      methods:{
        login:function () {
          const _this=this
          this.$axios({
            method: 'post',
            url: 'http://127.0.0.1:10010/api/item/front/login',
            data: {
              account:this.user.account,
              password:this.user.password,
            }
          }).then(function (response) {
            console.log(response)
            if(response.data==1){
              _this.$message("登陆成功");
              setTimeout(function () {
                location.href="/"
              },2000)
            }
            if(response.data==0){
              _this.$message("用户名或密码错误");
            }
          })
        }
      },
    };

</script>

<style>
@import "../../../static/login/auth.css";

</style>
