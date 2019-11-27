<template>
  <div>
    <top-bar></top-bar>
    <div>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" class="fixed-top" style="margin-top: 60px"></el-progress>
    </div>
    <div class="row">
      <div class="col col-6 offset-3">
        <div style="font-size: 35px;margin-top: 100px">第1步（共2步）</div>

        <!--房源类型-->
        <div>
          <div style="font-size: 25px;margin-top: 100px">为您的房源起个名字</div>

          <div>为房源起一个能突出其独特之处的标题，吸引更多房客。</div>
          <div class="mt-3">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="hname"
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
              v-model="description"
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
    components:{
      topBar
    },
    data() {
      return {
        hname:'',
        description:'',
      };
    },
    methods: {
      before:()=>{
        location.href='/addhouse'
      },
      next:function () {
        const _this=this
        if((this.hname=='')||(this.description=='')){
          this.$message({
            offset:400,
            message:"请填写完整信息"
          });
        }else{
          this.$axios({
            method: 'post',
            url: 'http://127.0.0.1:10010/api/item/house/addhousename',
            data: {
              hname:this.hname,
              description:this.description,
            }
          }).then(function (response) {
            console.log(response)
            if(response.data==1){
              location.href="/addhouse12"
            }else{
              _this.$message("会话超时")
              setTimeout(function () {
                location.href="/addhouse00"
              },2000)
            }
          })
        }
      }
    },
    mounted:function () {
      const _this=this
      this.$axios({
        method: 'post',
        url:'http://127.0.0.1:10010/api/item/house/findhousehid',
        data:{},
      }).then(function (response) {
        if(response.data!=null){
          _this.hname=response.data.hname
          _this.description=response.data.description

        }
      })
    }
  }
</script>

<style>

</style>
