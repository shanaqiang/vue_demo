<template>
  <div>
    <div class="row" style="margin-top: 20px">
      <div class="col col-4 offset-2">
        <div style="margin-top: 60px;margin-left: 40px">
          <div style="font-size: 30px;">用户名，欢迎注册成为房东</div>
          <div style="margin-top: 10px">只需完成以下三个步骤，即可成为房东</div>

          <div style="font-size: 14px;font-weight: bold;margin-top: 50px">步骤1</div>
          <div style="font-size: 25px;">添加房源详情</div>
          <div>添加照片、简短描述、标题</div>
          <el-button type="primary" style="margin-top: 10px" @click="goadd02" :disabled="isDisabled01">立即添加</el-button>

          <hr />
          <div style="font-size: 14px;font-weight: bold;margin-top: 50px">步骤2</div>
          <div style="font-size: 25px;">添加房屋配置</div>
          <div>添加床、浴室、便利设施等等</div>
          <el-button type="primary" style="margin-top: 10px" @click="goadd01" :disabled="isDisabled02">立即添加</el-button>

          <hr />
          <div style="font-size: 14px;font-weight: bold;margin-top: 50px">步骤3</div>
          <div style="font-size: 25px;">最好准备接待访客</div>
          <div>决定价格、预订设置和日历</div>
          <el-button type="primary" style="margin-top: 10px" @click="goadd03" :disabled="isDisabled03">立即添加</el-button>
        </div>
      </div>


      <div class="col col-4">
        <div style="height: 500px">
          <img src="../../../static/img/pages/photos.6f837cb4.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return{
            isDisabled01:false,
            isDisabled02:false,
            isDisabled03:false,
        }
      },
      methods:{
        goadd01:()=>{
          location.href='/addhouse01'
        },
        goadd02:()=>{
          location.href='/addhouse11'
        },
        goadd03:()=>{
          location.href='/addhouse21'
        },
        getMes:function(){
          const _this=this
          this.$axios({
            method: 'post',
            url: 'http://127.0.0.1:10010/api/item/house/getmes02',
            data: {}
          }).then(function (response) {
            console.log(response.data)
            if(response.data==0){
              _this.isDisabled01=false
              _this.isDisabled02=true
              _this.isDisabled03=true
            }if(response.data==1){
              _this.isDisabled01=false
              _this.isDisabled02=false
              _this.isDisabled03=true
            }if(response.data==2){
              _this.isDisabled01=false
              _this.isDisabled02=false
              _this.isDisabled03=false
            }
          });
        },
      },
      mounted:function () {
        this.getMes();
      }
    }
</script>

<style>

</style>
