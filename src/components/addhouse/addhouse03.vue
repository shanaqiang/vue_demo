<template>
  <div>
    <top-bar></top-bar>
    <div>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="99" status="exception" class="fixed-top" style="margin-top: 60px"></el-progress>
    </div>
    <div class="row">
      <div class="col col-6 offset-3">
        <div style="font-size: 35px;margin-top: 100px">第3步（共3步）</div>

        <!--房源类型-->
        <div>
          <div style="font-size: 25px;margin-top: 100px">您提供的便利设施有哪些？</div>

          <div>这些只是房客通常会期望享受的便利设施，您亦可在房源发布后添加更多。</div>

          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">生活必需品（毛巾、床单、洗浴用品、卫生纸和枕头空调)</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">空调</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">暖气</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">吹风机</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">熨斗</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">电视</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">独立入口</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">洗发水</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">无线网络</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">书桌、工作区</div>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox></el-checkbox>
            <div style="font-size: 20px" class="ml-2">早餐</div>
          </div>
        </div>

        <!--安全设施-->
        <div style="font-size: 25px;margin-top: 50px">安全设施</div>

        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">灭火器</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">一氧化碳报警器</div>
        </div>
        <div style="margin-left: 20px">请查阅您当地的法律，可能有条款规定每个房间都要配备一个能正常工作的一氧化碳报警器</div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">烟雾报警器</div>
        </div>
        <div style="margin-left: 20px">请查阅您当地的法律，可能有条款规定每个房间都要配备一个能正常工作的烟雾报警器</div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">急救包</div>
        </div>

        <!--公共空间-->
        <div style="font-size: 25px;margin-top: 50px">公共空间</div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">厨房</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">洗衣机</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">干衣机</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">停车位</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">健身房</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">泳池</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">浴缸</div>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox></el-checkbox>
          <div style="font-size: 20px" class="ml-2">电梯</div>
        </div>


        <!--底部-->
        <div class="fixed-bottom offset-3 col-6" style="background-color: white">
          <hr />
          <div style="height: 60px">
            <div style="float: left"><el-button type="danger" style="width: 140px;height: 50px" @click="before">返回</el-button></div>
            <div style="float: right"><el-button type="danger" style="width: 140px;height: 50px" @click="next">完成</el-button></div>
          </div>
        </div>
        <!--预留-->
        <div style="margin-top: 200px"></div>

      </div>
    </div>
  </div>
</template>

<script>
  import topBar from '../navbars/topnavbar'
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox.vue";
  export default {
    data() {
      return {
      };
    },
    components:{
      ElCheckbox,
      topBar,

    },
    methods: {
      before:()=>{
        location.href="/addhouse02"
      },
      next:()=>{
        location.href="/addhouse"
      }
    },
  }
</script>

<style>

</style>

