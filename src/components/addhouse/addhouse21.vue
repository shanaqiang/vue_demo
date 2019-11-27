<template>
  <div>
    <top-bar></top-bar>
    <div>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="99" status="exception" class="fixed-top" style="margin-top: 60px"></el-progress>
    </div>
    <div class="row">
      <div class="col col-6 offset-3">
        <div style="font-size: 35px;margin-top: 100px">第1步（共1步）</div>

        <div>
          <div style="font-size: 25px;margin-top: 100px">选择房源的出租日期</div>

          <div>选择要开放租房的日期。</div>
          <div class="mt-3">
            <el-date-picker
              v-model="date"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              unlink-panels
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div style="margin-top: 50px"></div>

        </div>
        <hr />
        <div style="font-size: 25px;margin-top: 20px">为房客制定房屋守则</div>

        <div>房客必须同意您的《房屋守则》才能预订住宿。</div>
        <div style="margin-top: 20px">
          <div>适合儿童（2-12岁）</div>
          <div class="form-inline mt-2">
            <el-radio v-model="houserule.child" label="1">是</el-radio>
            <el-radio v-model="houserule.child" label="0">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>适合婴幼儿（2岁以下）</div>
          <div class="form-inline mt-2">
            <el-radio v-model="houserule.baby" label="1">是</el-radio>
            <el-radio v-model="houserule.baby" label="0">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>适合携带宠物入住</div>
          <div class="form-inline mt-2">
            <el-radio v-model="houserule.pets" label="1">是</el-radio>
            <el-radio v-model="houserule.pets" label="0">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>允许吸烟</div>
          <div class="form-inline mt-2">
            <el-radio v-model="houserule.smoking" label="1">是</el-radio>
            <el-radio v-model="houserule.smoking" label="0">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>允许举办活动或聚会</div>
          <div class="form-inline mt-2">
            <el-radio v-model="houserule.party" label="1">是</el-radio>
            <el-radio v-model="houserule.party" label="0">否</el-radio>
          </div>
        </div>

        <hr />
        <div style="font-size: 25px;margin-top: 20px">为房源定价</div>
        <div style="margin-top: 10px">
          <el-form :model="numberValidateForm" :rules="rules" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="价格：" prop="price">
              <el-input v-model.number="numberValidateForm.price" placeholder="¥" style="width: 300px"></el-input>
            </el-form-item>
          </el-form>
        </div>



        <div style="margin-top: 200px"></div>
      </div>





      <div class="fixed-bottom offset-3 col-6" style="background-color: white">
        <hr />
        <div style="height: 60px">
          <div style="float: left"><el-button type="danger" style="width: 140px;height: 50px" @click="before">返回</el-button></div>
          <div style="float: right"><el-button type="danger" style="width: 140px;height: 50px" @click="next">完成</el-button></div>
        </div>
      </div>

    </div>


    <el-dialog
      title="添加成功"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>房源正在等待审核，点击确定返回首页</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary"  @click="gohome">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
  import topBar from '../navbars/topnavbar'
  export default {
    components:{
      topBar
    },
    data() {
      return {
        date:[],
        houserule:{
          child:'',
          baby:'',
          pets:'',
          smoking:'',
          party:'',
        },
        numberValidateForm: {
          price:'',
        },
        rules:{
          price:[
            { required: true, message: '价格不能为空'},
            { type: 'number', message: '价格必须为数字值'}
          ]
        },
        dialogVisible: false,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      };
    },
    methods: {
      before: () => {
        location.href = '/addhouse'
      },


      next: function () {
        const _this=this
        if (this.date == '') {
          _this.$message("请选择日期")
          return
        }
        if ((this.houserule.child == '')||(this.houserule.baby == '')||(this.houserule.pets == '')
          ||(this.houserule.smoking == '')||(this.houserule.party == '')) {
          _this.$message("请选择房屋守则")
          return
        }
        if(this.numberValidateForm.price==''){
          _this.$message("请输入房子的价格")
          return
        }
        this.$axios({
          method: 'post',
          url: 'http://127.0.0.1:10010/api/item/house/addhouserule',
          data: this.houserule,
        }).then(function (response) {
          if(response.data==1){

          }else{
            _this.$message("addhouserule会话超时")
            setTimeout(function () {
              location.href="/addhouse00"
            },2000)
          }
        });
        this.$axios({
          method: 'post',
          url: 'http://127.0.0.1:10010/api/item/house/addhouse02',
          data: {
            startdate:this.date[0],
            enddate:this.date[1],
            price:this.numberValidateForm.price,
          }
        }).then(function (response) {
          if(response.data==1){
            _this.dialogVisible=true
          }else{
            _this.$message("addhouse02会话超时")
            setTimeout(function () {
              location.href="/addhouse00"
            },2000)
          }
        });
      },


      gohome: () => {
        location.href = "/"
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
    },mounted:function () {

      const _this=this

      this.$axios({
        method:'post',
        url:'http://127.0.0.1:10010/api/item/house/findhousehid'
      }).then(function (response) {
        if(response.data!=null){
          console.log(response.data)
          //_this.date='["'+response.data.startdate+'","'+response.data.enddate+'"]'
          _this.date.push(response.data.startdate)
          _this.date.push(response.data.enddate)
          _this.numberValidateForm.price=response.data.price
        }
      })
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:10010/api/item/house/findhouserulehid'
      }).then(function (response) {
        if(response.data!=null){
          console.log(response.data)
          //_this.date='["'+response.data.startdate+'","'+response.data.enddate+'"]'
          _this.houserule.child=response.data.child.toString()
          _this.houserule.baby=response.data.baby.toString()
          _this.houserule.pets=response.data.pets.toString()
          _this.houserule.smoking=response.data.smoking.toString()
          _this.houserule.party=response.data.party.toString()
        }
      })
    }
  }
</script>

<style>

</style>
