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
          <el-button style="background-color: #44a0b3;color: white;margin-top: 10px" @click="goadd02">立即添加</el-button>

          <hr />
          <div style="font-size: 14px;font-weight: bold;margin-top: 50px">步骤2</div>
          <div style="font-size: 25px;">添加房屋配置</div>
          <div>添加床、浴室、便利设施等等</div>
          <el-button style="background-color: #44a0b3;color: white;margin-top: 10px" @click="goadd01">立即添加</el-button>

          <hr />
          <div style="font-size: 14px;font-weight: bold;margin-top: 50px">步骤3</div>
          <div style="font-size: 25px;">最好准备接待访客</div>
          <div>决定价格、预订设置和日历</div>
          <el-button style="background-color: #44a0b3;color: white;margin-top: 10px" @click="goadd03">立即添加</el-button>
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
      }
    }
</script>

<style>

</style>
