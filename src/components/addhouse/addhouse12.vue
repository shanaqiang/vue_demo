<template>
  <div>
    <top-bar></top-bar>
    <div>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="99" status="exception" class="fixed-top" style="margin-top: 60px"></el-progress>
    </div>
    <div class="row">
      <div class="col col-6 offset-3">
        <div style="font-size: 35px;margin-top: 100px">第2步（共2步）</div>

        <!--房源类型-->
        <div>
          <div style="font-size: 25px;margin-top: 100px">向房客描述一下您的房源</div>

          <div>为房源起一个能突出其独特之处的标题，吸引更多房客。</div>
          <div class="mt-3">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea"
              maxlength="50"
              show-word-limit
            >
            </el-input>
          </div>

          <hr />
          <div style="font-size: 25px;margin-top: 100px">向房客描述一下您的房源</div>
          <div>请撰写房源简介。 不妨突出房源和街区的特别之处，以及您的待客之道有何特色。</div>
          <div class="mt-3">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea1"
              maxlength="500"
              show-word-limit
            >
            </el-input>
          </div>

        </div>



        <div class="fixed-bottom offset-3 col-6" style="background-color: white">
          <hr />
          <div style="height: 60px">
            <div style="float: left"><el-button type="danger" style="width: 140px;height: 50px" @click="before">返回</el-button></div>
            <div style="float: right"><el-button type="danger" style="width: 140px;height: 50px" @click="next">完成</el-button></div>
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
    components:{
      topBar
    },
    data() {
      return {
        textarea:'',
        textarea1:'',
      };
    },
    methods: {
      before:()=>{
        location.href='/addhouse11'
      },
      next:()=>{
        location.href="/addhouse"
      }
    }
  }
</script>

<style>

</style>
