<template>
  <div>
    <top-bar></top-bar>
    <div>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="33" status="exception" class="fixed-top" style="margin-top: 60px"></el-progress>
    </div>
    <div class="row">
      <div class="col col-6 offset-3">
        <div style="font-size: 35px;margin-top: 100px">第1步（共3步）</div>

        <!--房源类型-->
        <div>
          <div style="font-size: 25px;margin-top: 100px">房源类型</div>
          <div id="type">
            <div style="padding: 10px;float: left">
              <div style="width: 120px;height: 35px;text-align: center;line-height: 35px;border-radius: 5px;" class="brown" id="type0" value="0">
                公寓型住宅
              </div>
            </div>

            <div style="padding: 10px;float: left">
              <div style="width: 120px;height: 35px;text-align: center;line-height: 35px;border-radius: 5px;" class="brown" id="type1" value="1">
                独栋房
              </div>
            </div>

            <div style="padding: 10px;float: left">
              <div style="width: 120px;height: 35px;text-align: center;line-height: 35px;border-radius: 5px;" class="brown" id="type2" value="2">
                别墅
              </div>
            </div>

            <div style="padding: 10px;float: left">
              <div style="width: 120px;height: 35px;text-align: center;line-height: 35px;border-radius: 5px;" class="brown" id="type3" value="3">
                loft
              </div>
            </div>

            <div style="padding: 10px;float: left">
              <div style="width: 120px;height: 35px;text-align: center;line-height: 35px;border-radius: 5px;" class="brown" id="type4" value="4">
                酒店
              </div>
            </div>
          </div>
        </div>

        <!--出租类型-->
        <div id="rentaltype">
          <div style="font-size: 25px;margin-top: 100px">出租类型</div>

          <div style="padding: 10px;position: relative;display: inline-block">
            <div style="width: 220px;height: 250px;border-radius: 5px;" class="brown rental" id="rental0" value="0">
              <div style="padding: 20px;"><i class="fa fa-home fa-3x" aria-hidden="true"></i></div>
              <div style="font-size: 20px;font-weight: bold;margin-left: 20px">整个房源</div>
              <div style="font-size: 16px;padding: 10px;margin-left: 10px;margin-right: 20px">房客独享整个房源，无需与您或他人共住</div>
            </div>
          </div>

          <div style="padding: 10px;position: relative;display: inline-block">
            <div style="width: 220px;height: 250px;border-radius: 5px;" class="brown rental" id="rental1" value="1">
              <div style="padding: 20px;"><i class="fa fa-key fa-3x" aria-hidden="true"></i></div>
              <div style="font-size: 20px;font-weight: bold;margin-left: 20px">独立房间</div>
              <div style="font-size: 16px;padding: 10px;margin-left: 10px;">房客有自己独立的房间，与他人共享客厅等空间</div>
            </div>
          </div>

          <div style="padding: 10px;position: relative;display: inline-block">
            <div style="width: 220px;height: 250px;border-radius: 5px;" class="brown rental" id="rental2" value="2">
              <div style="padding: 20px;"><i class="fa fa-bed fa-3x" aria-hidden="true"></i></div>
              <div style="font-size: 20px;font-weight: bold;margin-left: 20px">合住房间</div>
              <div style="font-size: 16px;padding: 10px;margin-left: 10px;margin-right: 20px">房客住在与他人合用的卧室或公共区域</div>
            </div>
          </div>

          <!--容纳房客数-->
          <div class="form-inline">
            <div style="font-size: 25px;margin-top: 100px">最多容纳房客数:</div>
            <div style="margin-top: 100px;margin-left: 50px">
              <el-input-number v-model="maxtenant" :min="1" :max="16" label="房客"></el-input-number>
            </div>
            <div style="margin-top: 100px;margin-left: 20px">人</div>
          </div>

          <!--卧室数量-->
          <div class="form-inline">
            <div style="font-size: 25px;margin-top: 100px">卧室数量:</div>
            <div style="margin-top: 100px;margin-left: 125px">
              <el-input-number v-model="bedroomnum" :min="1" :max="20" label="卧室"></el-input-number>
            </div>
            <div style="margin-top: 100px;margin-left: 20px">间</div>
          </div>

          <!--床铺数量-->
          <div class="form-inline">
            <div style="font-size: 25px;margin-top: 100px">床铺数量:</div>
            <div style="margin-top: 100px;margin-left: 125px">
              <el-input-number v-model="bednum" :min="1" :max="20" label="床铺"></el-input-number>
            </div>
            <div style="margin-top: 100px;margin-left: 20px">床</div>
          </div>

          <!--卫生间数量-->
          <div class="form-inline">
            <div style="font-size: 25px;margin-top: 100px">卫生间数量:</div>
            <div style="margin-top: 100px;margin-left: 100px">
              <el-input-number v-model="bathroomnum" :min="0" :max="20" :precision="1" :step="0.5" label="卫生间"></el-input-number>
            </div>
            <div style="margin-top: 100px;margin-left: 20px">间（没有淋浴区或浴缸的卫生间算半个卫生间。）</div>
          </div>

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
  </div>
</template>

<script>
  import topBar from '../navbars/topnavbar'

  var housetype=''
  var rentaltype=''
  $(function () {
    $("#type div div").click(function () {
      housetype=$(this).attr("value")
      $("#type div div").attr("class","brown")
      $(this).attr("class","gold")
    }),

      $("#rentaltype .rental").click(function () {
        rentaltype=$(this).attr("value")
        $("#rentaltype .rental").attr("class","brown rental")
        $(this).attr("class","gold rental")
      })
  })
    export default {
      data() {
        return {
          maxtenant:1,
          bedroomnum:1,
          bednum:1,
          bathroomnum:1,
        };
      },
      components:{
        topBar,
      },
      methods: {
        before:function () {
          location.href="/addhouse"
        },
        next:function () {
          const _this=this;
          if(((housetype=="")&&(housetype!=0))||(rentaltype=="")&&(rentaltype!=0)){
            this.$message({
              offset:400,
              message:"请填写完整信息"+housetype
            });
            return
          }
          this.$axios({
            method: 'post',
            url: 'http://127.0.0.1:10010/api/item/house/addhousetype',
            data: {
              housetype:housetype,
              rentaltype:rentaltype,
              maxtenant:_this.maxtenant,
              bedroomnum:_this.bedroomnum,
              bednum:_this.bednum,
              bathroomnum:_this.bathroomnum,
            }
          }).then(function (response) {
            if(response.data==1){
              location.href="/addhouse02"
            }else{
              _this.$message("会话超时")
              setTimeout(function () {
                location.href="/addhouse00"
              },2000)
            }
          })

        },
        over:function (obj) {
          alert($(obj).attr("style"))
        }
      },
      mounted:function () {
        const _this=this
        this.$axios({
          method:'post',
          url:'http://127.0.0.1:10010/api/item/house/findhousehid',
        }).then(function (response) {
          if(response==null){
            return
          }
          _this.maxtenant=response.data.maxtenant
          _this.bedroomnum=response.data.bedroomnum
          _this.bednum=response.data.bednum
          _this.bathroomnum=response.data.bathroomnum
          housetype=response.data.housetype
          $("#type"+housetype).attr("class","gold")
          rentaltype=response.data.rentaltype
          $("#rental"+rentaltype).attr("class","gold rental")
        })
      }

    }



</script>

<style>
.brown{
  background-color:#eaebeb;
}
.red{
  background-color:#D0EF84;
}
  .rental{

  }
  .gold{
    background-color:#ffff99;
  }
</style>
