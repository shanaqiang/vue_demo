<template>
  <div>
    <div class="lowin lowin-red">
      <div class="lowin-wrapper">
        <div class="lowin-box lowin-register">
          <div class="lowin-box-inner">
            <div>
              <p>成为新用户</p>
              <div class="lowin-group">
                <label>用户名</label>
                <input type="text" v-model="user.name" class="lowin-input">
              </div>
              <div class="lowin-group">
                <label>联系方式</label>
                <input   type="text" v-model="user.mobilephone" class="lowin-input">
                <button  id="aa" style="color:white;float: right;width: 100px;height:40px;border-radius: 10px;background: orange;border: 0px;margin-top: 20px" @click="getPhoneCode()">
                  获取验证码
                </button>
              </div>

              <div class="lowin-group">
                <label>验证码</label>
                <div class="form-inline">
                  <input type="text" v-model="user.phoneCode" class="lowin-input">
                </div>
              </div>
              <div class="lowin-group">
                <label>密码</label>
                <input type="password" v-model="user.password" autocomplete="current-password" class="lowin-input">
              </div>
              <button class="lowin-btn" @click="register()">
                注 册
              </button>

              <div class="text-foot">
                已经有账户? <a href="/login" class="login-link">去登录</a>
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
                    mobilephone:"",
                    phoneCode:"",
                },
            }
        },
        methods:{
            getPhoneCode:function () {
                const _this=this
                this.$axios({
                    method: 'post',
                    url: 'http://127.0.0.1:10010/api/item/front/getPhoneCode',
                    data: {
                        mobilephone:this.user.mobilephone
                    }
                }).then(function (response) {
                    if(response.data=="0"){
                        _this.$message("联系方式格式错误请重新输入");
                        _this.user.mobilephone=""
                    } else if(response.data=="1"){
                        _this.$message("验证码发送失败,请重新发送");
                        _this.user.mobilephone=""
                    }else if(response.data=="2"){
                        _this.$message("验证码发送成功");
                        $("#aa").attr(disabled,true);
                        var time=60
                        for(let a=60;a>0;a--){
                            setTimeout(function(){
                                time-=1
                                $("#aa").html(time+"秒");
                            },1000*a)
                        }
                        setTimeout(function(){
                            $("#aa").attr(disabled,false)
                            $("#aa").html("获取验证码")
                        },1000*60)

                    }
                })
            }
        },
        register:function(){
            const _this=this
            this.$axios({
                method: 'post',
                url: 'http://127.0.0.1:10010/api/item/front/register',
                data: {
                    mobilephone:this.user.mobilephone,
                    account:this.user.account,
                    password:this.user.password,
                    phoneCode:this.user.phoneCode
                }
            }).then(function (response) {
                if(response.data="0"){
                    _this.$message("验证码已失效");
                }else if(response.data="1"){
                    _this.$message("账号已存在");
                    _this.user.mobilephone="",
                     _this.user.account="",
                      _this.user.password="",
                      _this.user.phoneCode=""
                }else if(response.data="2"){
                    _this.$message("注册成功");
                    setTimeout(function(){
                        location.href="/";
                    })
                }else{
                    _this.$message("注册失败,网络出了小差");
                    _this.$message("账号已存在");
                    _this.user.mobilephone="",
                        _this.user.account="",
                        _this.user.password="",
                        _this.user.phoneCode=""
                }

            })
        }
    };
</script>

<style>
  @import "../../../static/login/auth.css";

</style>
