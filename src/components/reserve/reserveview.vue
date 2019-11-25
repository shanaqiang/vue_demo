<template>
  <div class="container">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-steps :active="active" finish-status="success" simple style="background-color: white;margin-top: 20px;">
          <el-step title="预定您的行程"></el-step>
          <el-step title="确认并支付"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row class="mt-5" :gutter="10">
      <el-col :span="14">
        <h3>预定您的行程</h3>
        <h4 style="font-weight: bold" class="mt-3">房客</h4>
        <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="min"
                         :max="max"></el-input-number>
        <h4 class="mt-3">说明</h4>
        <div>根据有关部门规定，所有在中国预定住宿的旅客都必须提供以下信息。</div>
        <div>您所填的信息将不会与房东分享。房客信息将由我们妥善保管，以便下次预订时使用。</div>
        <div v-for="i in num" class="mt-3">
          <h4 v-text="'房客'+i"></h4>
          <el-row :gutter="10">
            <el-col :span="10">姓名</el-col>
            <el-col :span="14">身份证号码</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="10">
              <el-input v-model="customerList[i-1].cname" placeholder="请输入姓名"></el-input>
            </el-col>
            <el-col :span="14">
              <el-input v-model="customerList[i-1].cId" placeholder="请输入身份证号码"></el-input>
            </el-col>
          </el-row>
        </div>
        <h4 class="mt-3">取消政策</h4>
        <div>在11月30日3:00PM前取消预订可获全额退款。 之后，在12月13日 3:00PM前取消预订可获得全额退款（服务费除外）。</div>
        <el-button type="danger" plain class="mt-3">继续</el-button>
        <div>您暂时不会被收费</div>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-card class="border" shadow="never">
          <el-row>
            <el-col :span="14">
              <div>鹿头舍xHALO设计师严选改造之惬意独享完备功能小宅 百寸投影 舒适大床 闹中取静中心街区</div>
              <div>上海的整套房子</div>
              <div>33条评价</div>
            </el-col>
            <el-col :span="10">
              <div style="height: 150px;text-align: center;line-height: 150px;">
                <img width="80%"
                     src="https://z1.muscache.cn/im/pictures/4fe3547f-fafd-4e7d-bb90-dfd94f5e594f.jpg?aki_policy=large"/>
              </div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-user-solid"></i>
            <span v-text="num+'人'"></span>
          </el-row>
          <el-row>
            <i class="el-icon-date"></i>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <div style="float: left;">￥327.00X1晚</div>
            <div style="float: right">￥327.00</div>
          </el-row>
          <el-row>
            <div style="float: left;">清洁费</div>
            <div style="float: right">￥70.00</div>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <div style="float: left;">总价</div>
            <div style="float: right">￥397.00</div>
          </el-row>
        </el-card>
        <el-card class="mt-3" shadow="never">
          <div>入住须知</div>
          <div>ruzhuxuzhi</div>
        </el-card>
        <el-card class="mt-3" shadow="never">
          <div>发票</div>
          <div>若需要开具房费发票，请您与房东协商。</div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "reserveview",
    data() {
      return {
        active: 1,
        num: 1,
        min: 1,
        max: 5,
        customerList: [{
          cname: '',
          cId: '',
        }, {
          cname: '',
          cId: '',
        }, {
          cname: '',
          cId: '',
        }, {
          cname: '',
          cId: '',
        }, {
          cname: '',
          cId: '',
        },]
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      customerChange(value) {
        alert(value)
      }
    },
  }
</script>

<style scoped>

</style>
