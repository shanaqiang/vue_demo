<template>
  <div>
    <top-bar></top-bar>
    <div>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="66" status="exception" class="fixed-top" style="margin-top: 60px"></el-progress>
    </div>
    <div class="row">
      <div class="col col-6 offset-3">
        <div style="font-size: 35px;margin-top: 100px">第2步（共3步）</div>

        <!--房源类型-->
        <div>
          <div style="font-size: 25px;margin-top: 100px">房源位置</div>

          <div>房客只有在确认预订后才会获知确切的房源地址。</div>

        </div>


        <!--底部-->
        <div class="fixed-bottom offset-3 col-6" style="background-color: white">
          <hr />
          <div style="height: 60px">
            <div style="float: left"><el-button type="danger" style="width: 140px;height: 50px" @click="before">返回</el-button></div>
            <div style="float: right"><el-button type="danger" style="width: 140px;height: 50px" @click="next">下一步</el-button></div>
          </div>
        </div>
        <!--预留-->
        <div style="margin-top: 300px"></div>

      </div>
    </div>
  </div>
</template>

<script>
  import topBar from '../navbars/topnavbar'
  export default {
    data() {
      return {
      };
    },
    components:{
      topBar,

    },
    methods: {
      before:()=>{
        location.href="/addhouse01"
      },
      next:function () {
        location.href="/addhouse03"
      }
    },
  }
</script>

<style>

</style>

