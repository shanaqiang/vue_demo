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
          <div style="font-size: 25px;margin-top: 100px">给房源添加照片</div>
        </div>

        <div>
          <el-upload
            action="http://127.0.0.1:10010/api/item/upload/uploadimg"
            name="file"
            limit="5"
            list-type="picture-card"
            :on-success="uploaded"
            :on-preview="handlePictureCardPreview"
            :on-exceed="outlimit"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>

          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
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
          dialogImageUrl: '',
          dialogVisible: false,
          imgname:'',
        };
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        uploaded(response, file, fileList){
          console.log(response)
          this.imgname=response;
        },
        outlimit(files, fileList){
          this.$message('最多只支持上传五张图片');
        },
        before:()=>{
          location.href='/addhouse'
        },
        next:()=>{
          location.href="/addhouse12"
        }
      }
    }
</script>

<style>

</style>
