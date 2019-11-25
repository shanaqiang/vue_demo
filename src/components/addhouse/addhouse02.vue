<template>
  <div>
    <top-bar></top-bar>
    <div>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="66" status="exception" class="fixed-top" style="margin-top: 60px"></el-progress>
    </div>
    <div class="row">
      <div class="col col-3 offset-3">
        <div style="font-size: 35px;margin-top: 200px">第2步（共3步）</div>
        <!--房源类型-->
        <div>
          <div style="font-size: 25px;margin-top: 100px">房源位置</div>

          <div style="margin-top: 20px">房客只有在确认预订后才会获知确切的房源地址。</div>
          <div>
            <el-cascader
              size="large"
              :options="options"
              v-model="selectedOptions"
              style="width: 280px;margin-top: 20px"
              @change="handleChange">
            </el-cascader>

            <div style="font-size: 25px;margin-top: 50px">具体地址</div>
            <div style="margin-top: 10px">
              <textarea class="form-control" rows="3" placeholder="详细地址" v-model="address"></textarea>
            </div>
            <div style="margin-top: 20px;text-align: right">
              <el-button type="primary" icon="el-icon-search" style="background-color: orange" @click="showmap">查 询</el-button>
            </div>
          </div>
        </div>
      </div>

        <div class="col col-4 ">
          <div style="width: 100%;height: 100%;margin-top: 280px">

            <div id="allmap" ref="allmap" :style="mapStyle"></div>

          </div>
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
</template>

<script>
  import topBar from '../navbars/topnavbar'
  import { provinceAndCityData,
    regionData,
    provinceAndCityDataPlus,
    regionDataPlus,
    CodeToText,
    TextToCode } from 'element-china-area-data'

  export default {
    data() {
      return {
        CodeToText,
        TextToCode,
        options: regionData,
        location1:'',
        city:'',
        address:'',
        selectedOptions: '',
        mapStyle:{
          width:'100%',
          height: '500px'
        }
      };
    },
    components:{
      topBar,
      handleChange (value) {
        console.log(value)
      },

    },
    methods: {
      before:()=>{
        location.href="/addhouse01"
      },
      next:function () {
        if(this.selectedOptions==''){
          this.$message("请选择地址")
          return;
        }
        if(this.address==''){
          this.$message("请输入详细地址")
          return
        }
        this.location1=this.city+this.address;
        this.$axios({
          method: 'post',
          url: 'http://127.0.0.1:10010/api/item/house/addhouselocation',
          data: {
            location:this.location1,
            city:this.city,
          }
        }).then(function (response) {
          if(response==1){
            location.href="/addhouse03"
          }else{
            this.$message("会话超时")
            setTimeout(function () {
              location.href="/addhouse00"
            },2000)
          }
        })
      },
      handleChange (value) {
        this.city=CodeToText[this.selectedOptions[0]]+CodeToText[this.selectedOptions[1]]+CodeToText[this.selectedOptions[2]]
      },
      showmap:function () {
        if(this.selectedOptions==''){
          this.$message("请选择地址")
          return;
        }
        if(this.address==''){
          this.$message("请输入详细地址")
          return
        }
        this.location1=this.city+this.address;
        this.drawmap();
      },

      //百度地图部分
      drawmap: function () {
        // 百度地图API功能
        console.log(this.$refs.allmap)
        // let amap = this.$refs.allmap
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        var myGeo = new BMap.Geocoder();
        map.enableScrollWheelZoom();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint(this.location1, function(point){
          if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
          }else{
            alert("您选择地址没有解析到结果!");
          }
        }, "北京市");
      },
    },
    mounted: function(){
      this.drawmap()
    }
  }
</script>

<style>


</style>

