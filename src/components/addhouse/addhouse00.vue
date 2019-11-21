<template>
  <div>
    <div class="row">
      <div class="col col-6 offset-3">
        <div style="font-size: 35px;margin-top: 100px">您想先做什么？</div>

        <!--房源类型-->
        <div class="form-inline">
          <el-radio type="radio" style="margin-top: 30px" v-model="radio" label="0" :size="mediunm">
            <div style="font-size: 25px;margin-left: 10px">创建新房源</div>
          </el-radio>
        </div>
        <div style="margin-top: 40px"></div>

        <hr />
        <div class="form-inline">
          <el-radio type="radio" style="margin-top: 30px" v-model="radio" label="1" :size="mediunm">
            <div style="font-size: 25px;margin-left: 10px">修改已存在房源</div>
          </el-radio>
        </div>


        <div class="fixed-bottom offset-3 col-6" style="background-color: white">
          <hr />
          <div style="height: 60px">
            <div style="float: left"><el-button type="danger" style="width: 140px;height: 50px" @click="before">返回</el-button></div>
            <div style="float: right"><el-button type="danger" style="width: 140px;height: 50px" @click="next" :disabled="flag1">下一步</el-button></div>
          </div>
        </div>
        <!--预留-->
        <div style="margin-top: 300px"></div>


      </div>
    </div>


  </div>

</template>

<script>
  export default {

    data() {
      return {
        radio:'3',
        flag1:true,
      };
    },
    methods: {
      before:()=>{
        location.href="/"
      },
      next:function(){
        if(this.radio==0){
          location.href="/addhouse"
        }
      }
    },
    watch:{
      //监听器
      radio:function (newRadio,oldRadio) {
        if((oldRadio=1)||(oldRadio=0)){
          this.flag1=false;
        }else{
          this.flag1=true;
        }
      },
    }
  }
</script>

<style>

</style>
