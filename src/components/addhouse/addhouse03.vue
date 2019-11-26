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
            <el-checkbox v-model="houseinstallations.needed" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">生活必需品（毛巾、床单、洗浴用品、卫生纸和枕头空调)</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.airconditioner" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">空调</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.heating" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">暖气</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.hairdrier" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">吹风机</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.iron" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">熨斗</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.television" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">电视</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.independententry" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">独立入口</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.shampoo" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">洗发水</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.wifi" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">无线网络</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.desk" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">书桌、工作区</div>
            </el-checkbox>
          </div>
          <div style="margin-top: 30px;" class="form-inline" >
            <el-checkbox v-model="houseinstallations.breakfast" true-label="1" falseLabel="0">
              <div style="font-size: 20px" class="ml-2">早餐</div>
            </el-checkbox>
          </div>
        </div>

        <!--安全设施-->
        <div style="margin-top: 50px"></div>
        <hr />
        <div style="font-size: 25px;margin-top: 50px">安全设施</div>

        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.fireextinguisher" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">灭火器</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.coalarm" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">一氧化碳报警器</div>
          </el-checkbox>
        </div>
        <div style="margin-left: 20px;margin-top: 10px">请查阅您当地的法律，可能有条款规定每个房间都要配备一个能正常工作的一氧化碳报警器</div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.smokedetector" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">烟雾报警器</div>
          </el-checkbox>
        </div>
        <div style="margin-left: 20px;margin-top: 10px">请查阅您当地的法律，可能有条款规定每个房间都要配备一个能正常工作的烟雾报警器</div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.firstaidkit" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">急救包</div>
          </el-checkbox>
        </div>

        <!--公共空间-->
        <div style="margin-top: 50px"></div>
        <hr />
        <div style="font-size: 25px;margin-top: 50px">公共空间</div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.kitchen" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">厨房</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.washingmachine" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">洗衣机</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.dryer" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">干衣机</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.parkingspace" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">停车位</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.gym" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">健身房</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.swimmingpool" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">泳池</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.bathtub" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">浴缸</div>
          </el-checkbox>
        </div>
        <div style="margin-top: 30px;" class="form-inline" >
          <el-checkbox v-model="houseinstallations.elevator" true-label="1" falseLabel="0">
            <div style="font-size: 20px" class="ml-2">电梯</div>
          </el-checkbox>
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
        houseinstallations:{
          needed:0,
          airconditioner:0,
          heating:0,
          hairdrier:0,
          iron:0,
          television:0,
          independententry:0,
          shampoo:0,
          wifi:0,
          desk:0,
          breakfast:0,
          fireextinguisher:0,
          coalarm:0,
          smokedetector:0,
          firstaidkit:0,
          kitchen:0,
          washingmachine:0,
          dryer:0,
          parkingspace:0,
          gym:0,
          swimmingpool:0,
          bathtub:0,
          elevator:0,
        },
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
      next:function () {
        console.log(this.houseinstallations)
        const _this=this
        this.$axios({
          method: 'post',
          url: 'http://127.0.0.1:10010/api/item/house/addhouseinstallations',
          data: _this.houseinstallations,

        }).then(function (response) {
          if(response.data==1){
            location.href="/addhouse"
          }else{
            _this.$message("会话超时")
            setTimeout(function () {
              location.href="/addhouse00"
            },2000)
          }
        })
        //location.href="/addhouse"
      }
    },
    mounted:function () {
      const _this=this
       this.$axios({
         method:'post',
         url:'http://127.0.0.1:10010/api/item/house/findhouseinstallationshid',
       }).then(function (response) {
         if(response.data!=null){
           console.log(response.data)
           _this.houseinstallations.needed=response.data.needed.toString()
           _this.houseinstallations.airconditioner=response.data.airconditioner.toString()
           _this.houseinstallations.heating=response.data.heating.toString()
           _this.houseinstallations.hairdrier=response.data.hairdrier.toString()
           _this.houseinstallations.iron=response.data.iron.toString()
           _this.houseinstallations.television=response.data.television.toString()
           _this.houseinstallations.independententry=response.data.independententry.toString()
           _this.houseinstallations.shampoo=response.data.shampoo.toString()
           _this.houseinstallations.wifi=response.data.wifi.toString()
           _this.houseinstallations.desk=response.data.desk.toString()
           _this.houseinstallations.breakfast=response.data.breakfast.toString()
           _this.houseinstallations.fireextinguisher=response.data.fireextinguisher.toString()
           _this.houseinstallations.coalarm=response.data.coalarm.toString()
           _this.houseinstallations.smokedetector=response.data.smokedetector.toString()
           _this.houseinstallations.firstaidkit=response.data.firstaidkit.toString()
           _this.houseinstallations.kitchen=response.data.kitchen.toString()
           _this.houseinstallations.washingmachine=response.data.washingmachine.toString()
           _this.houseinstallations.dryer=response.data.dryer.toString()
           _this.houseinstallations.parkingspace=response.data.parkingspace.toString()
           _this.houseinstallations.gym=response.data.gym.toString()
           _this.houseinstallations.swimmingpool=response.data.swimmingpool.toString()
           _this.houseinstallations.bathtub=response.data.bathtub.toString()
           _this.houseinstallations.elevator=response.data.elevator.toString()
         }
       })
    }
  }
</script>

<style>

</style>

