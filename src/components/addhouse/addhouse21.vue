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
              v-model="value1"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              unlink-panels
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div style="margin-top: 50px">{{value1}}</div>

        </div>
        <hr />
        <div style="font-size: 25px;margin-top: 20px">为房客制定房屋守则</div>

        <div>房客必须同意您的《房屋守则》才能预订住宿。</div>
        <div style="margin-top: 20px">
          <div>适合儿童（2-12岁）</div>
          <div class="form-inline mt-2">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>适合婴幼儿（2岁以下）</div>
          <div class="form-inline mt-2">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>适合携带宠物入住</div>
          <div class="form-inline mt-2">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>允许吸烟</div>
          <div class="form-inline mt-2">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div>允许举办活动或聚会</div>
          <div class="form-inline mt-2">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </div>
        </div>

        <hr />
        <div style="font-size: 25px;margin-top: 20px">为房源定价</div>
        <div style="margin-top: 10px">
          <el-input v-model="input" placeholder="¥"></el-input>
        </div>


        <div style="margin-top: 200px"></div>
      </div>





      <div class="fixed-bottom offset-3 col-6" style="background-color: white">
        <hr />
        <div style="height: 60px">
          <div style="float: left"><el-button type="danger" style="width: 140px;height: 50px" @click="before">返回</el-button></div>
          <div style="float: right"><el-button type="danger" style="width: 140px;height: 50px" @click="dialogVisible = true">完成</el-button></div>
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
        value1:'',
        dialogVisible: false,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      };
    },
    methods: {
      before:()=>{
        location.href='/addhouse'
      },
      gohome:()=>{
        location.href="/"
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    }
  }
</script>

<style>

</style>
