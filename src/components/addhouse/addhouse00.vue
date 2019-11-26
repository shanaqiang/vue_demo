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

            <div style="font-size: 25px;margin-left: 10px;margin-top: 30px">修改已存在房源</div>

        </div>

        <div style="margin-left: 60px;margin-right: 60px;margin-top: 40px" id="hou">
          <div v-for="h in houses" style="height: 160px;width: 100%;padding: 20px;" class="form-inline .abc" @mouseover="show1($event)"
               @mouseleave="show2($event)" @click="go3(h.hid)" :hid="h.hid">
            <div style="width: 180px;height: 100%;">
              <img :src="h.img" style="width: 100%;height: 100%;"/>
            </div>
            <div style="width: 180px;margin-left: 20px;">
              <div class="limitwords01">{{h.hname}}</div>
              <div v-if="h.rentaltype==0" style="margin-top: 5px;font-weight: bold">整个房源</div>
              <div v-if="h.rentaltype==1" style="margin-top: 5px;font-weight: bold">独立房间</div>
              <div v-if="h.rentaltype==2" style="margin-top: 5px;font-weight: bold">合住房间</div>
            </div>

          </div>
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
        houses:[],
      };
    },
    methods: {
      before:()=>{
        location.href="/"
      },
      next:function(){
        if(this.radio==0){
          this.$axios({
            method: 'post',
            url: 'http://127.0.0.1:10010/api/item/house/cleansession',
            data: {}
          }).then(function (response) {
          });
          location.href="/addhouse"
        }
      },
      findHouses:function () {
        const _this=this
        this.$axios({
          method: 'post',
          url:'http://127.0.0.1:10010/api/item/house/finduserhouse',
          data:{},
        }).then(function (response) {
          console.log(response)
          _this.houses=response.data
        })
      },
      show1:function ($event) {
        $event.currentTarget.className="form-inline bgcq";
      },
      show2:function ($event) {
        $event.currentTarget.className="form-inline"
      },
      go3:function (hid) {
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/sethid/'+hid
        })
        location.href="/addhouse"
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
    },mounted:function () {
      this.findHouses();
    }
  }
</script>

<style>
  .limitwords01 {
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bgcq{
    border: solid 1px gold;
  }

</style>
