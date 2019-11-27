<template>
  <div class="container">
    <div style="color: red;font-size: 20px;margin-top: 20px"><a href="/">返回首页</a></div>
    <hr style="margin-top:30px">
    <div class="row" style="margin-top: 20px">
      <div class="col-sm-2" style="height: 402px;margin-left: 50px;background:yellow">
        <div style="height:100px;width: 100px;margin-left:25px;margin-top: 10px" id="aa"><img :src="this.user.headimg" width="100%" height="100%" id="img"></div>

        <el-upload
          class="upload-demo"
          action="http://127.0.0.1:10010/api/item/front/uploadImg"
          :on-preview="handlePreview"
          :on-success="uploaded"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary" style="margin-top: 5px;margin-left: -10px;margin-left: 35px">更换头像</el-button>
        </el-upload>



        <div class="bb" ><a href="/myInfo">个人信息</a></div>
        <div class="bb"><a href="">我的民宿</a></div>
      </div>
      <div class="col-sm-8" style="height: 100%;margin-left: 20px">


        <div id="widget-otherinfo" style="margin-left:20px">
          <div class="userSetting-setWrap">


<!--账号-->
            <div class="userSetting-setWrap-item even" data-otherinfo-line="blood">
              <span class="vl-inline item-title"><label>账号：</label></span>
              <span data-line-elem="editline" style="display:none;">
              <span class="checkBox_wrap checkBox_wrap-normal clearfix" data-line-elem="bloodtype">
                  <span data-pcselect-elem="handler">
                      <span class="checkBox checkBox_wrap-default" data-line-elem="value">请选择</span>
                      <span class="checkBoxBtn"></span>
                  </span>
                  <ul class="checkBoxList" style="display:none;" data-pcselect-elem="optionList"></ul>
              </span>
              <span class="item-opt">
                <a href="javascript:;" data-line-elem="cancel">取消</a>
                 <span class="ml10">保存</span>
              </span>
            </span>
              <span data-line-elem="displayline">
              <span class="vl-inline">
                <em class="c666" data-line-elem="display" id="account " v-model="user.account" style="text-align: left">{{user.account}}</em>
              </span>
            </span>
            </div>


<!--性别-->
            <div class="userSetting-setWrap-item odd" data-otherinfo-line="gender">
              <span class="vl-inline item-title"><label>性别：</label></span>
              <span data-line-elem="editline" style="display:none;">
              <span class="vl-inline">
                  <label id="maile" class="radio-item  mr10 radio-selected" data-line-elem="genderin" data-pcradio-selectedclass="radio-selected" data-pcradio-name="gender" data-pcradio-value="1">
                      <i class="site-icons icon-radio"></i>
                      <span class="title">男</span>
                  </label>
                  <label d="fmaile" class="radio-item " data-line-elem="genderin" data-pcradio-selectedclass="radio-selected" data-pcradio-name="gender" data-pcradio-value="0">
                      <i class="site-icons icon-radio"></i>
                      <span class="title">女</span>
                  </label>
              </span>
              <span class="item-opt">
                <a href="javascript:;" data-line-elem="cancel">取消</a>
                 <span class="ml10" @click="sex()" data-line-elem="cancel">保存</span>
              </span>
            </span>
              <span data-line-elem="displayline">
              <span class="vl-inline">
                <em  class="c666" data-line-elem="display" id="sex"></em>
              </span>
              <span class="item-opt"><a href="javascript:;" data-line-elem="edit">修改</a></span>
            </span>
            </div>

<!--年龄-->

            <div class="userSetting-setWrap-item even" data-otherinfo-line="blood">
              <span class="vl-inline item-title"><label>年龄：</label></span>
              <span data-line-elem="editline" style="display:none;">
              <span class="checkBox_wrap checkBox_wrap-normal clearfix" data-line-elem="bloodtype">
                  <span data-pcselect-elem="handler">
                      <span class="checkBox checkBox_wrap-default" data-line-elem="value">请选择</span>
                      <span class="checkBoxBtn"></span>
                  </span>
                  <ul class="checkBoxList" style="display:none;" data-pcselect-elem="optionList"></ul>
              </span>
              <span class="item-opt">
                <a href="javascript:;" data-line-elem="cancel">取消</a>
                 <span class="ml10">保存</span>
              </span>
            </span>
              <span data-line-elem="displayline">
              <span class="vl-inline">
                <input class="c666" data-line-elem="display" v-model="user.age" style="border:0px" id="age">
              </span>
            </span>
            </div>

<!--生日-->
            <div class="userSetting-setWrap-item odd" data-otherinfo-line="birthday">
              <span class="vl-inline item-title"><label>生日：</label></span>
              <span data-line-elem="editline" style="display:none;">
              <span class="checkBox_wrap checkBox_wrap-min clearfix" data-line-elem="yearin" id="year">
                  <span data-pcselect-elem="handler">
                      <span class="checkBox checkBox_wrap-default" data-line-elem="value">请选择</span>
                      <span class="checkBoxBtn"></span>
                  </span>
                  <ul class="checkBoxList" style="display:none;" data-pcselect-elem="optionList"></ul>
              </span>
              <span class="mainColor mr5">&nbsp;年</span>
              <span class="checkBox_wrap checkBox_wrap-min clearfix" data-line-elem="monthin" id="month">
                  <span data-pcselect-elem="handler">
                      <span class="checkBox checkBox_wrap-default" data-line-elem="value">请选择</span>
                      <span class="checkBoxBtn"></span>
                  </span>
                  <ul class="checkBoxList" style="display:none;" data-pcselect-elem="optionList"></ul>
              </span>
              <span class="mainColor mr5">&nbsp;月</span>
              <span class="checkBox_wrap checkBox_wrap-min clearfix" data-line-elem="dayin" id="day">
                  <span data-pcselect-elem="handler">
                      <span class="checkBox checkBox_wrap-default" data-line-elem="value">请选择</span>
                      <span class="checkBoxBtn"></span>
                  </span>
                  <ul class="checkBoxList" style="display:none;" data-pcselect-elem="optionList"></ul>
              </span>
              <span class="mainColor mr5">&nbsp;日</span>
              <span class="item-opt">
                <a href="javascript:;" data-line-elem="cancel">取消</a>
                 <span class="ml10" data-line-elem="cancel" @click="birtha()">保存</span>
              </span>
            </span>
              <span data-line-elem="displayline">
              <span class="vl-inline">
                <input class="c666" data-line-elem="display" v-model="user.birthday" style="border:0px"  placeholder="出生日期" id="birthday">
              </span>
              <span class="item-opt"><a href="javascript:;" data-line-elem="edit">设置</a></span>
            </span>
            </div>


<!-- 邮箱账号           -->
            <div class="userSetting-setWrap-item even" data-otherinfo-line="location">
              <span class="vl-inline item-title"><label>邮箱账号：</label></span>
              <span data-line-elem="editline" style="display:none;">
              <span class="vl-inline item-input"><input class="input-common" type="text" placeholder="加个好友吧" data-line-elem="qqin"  id="ema"></span>
              <span class="item-opt">
                <a href="javascript:;" data-line-elem="cancel">取消</a>
                <span class="ml10" data-line-elem="cancel" @click="changeEmail()">保存</span>
              </span>
            </span>
              <span data-line-elem="displayline">
              <span class="vl-inline">
                <input class="c666" data-line-elem="display" v-model="user.email" style="border:0px" placeholder="还没设置邮箱" id="email">
              </span>
              <span class="item-opt"><a href="javascript:;" data-line-elem="edit">设置</a></span>
            </span>
            </div>


<!-- 联系方式           -->
            <div class="userSetting-setWrap-item odd" data-otherinfo-line="qq">
              <span class="vl-inline item-title"><label>联系方式：</label></span>
              <span data-line-elem="editline" style="display:none;">
              <span class="vl-inline item-input"><input class="input-common" type="text" placeholder="给个联系方式吧" data-line-elem="qqin" id="pho"></span>
              <span class="item-opt">
                <a href="javascript:;" data-line-elem="cancel">取消</a>
                <span class="ml10"  data-line-elem="cancel" @click="changePhone()">保存</span>
              </span>
            </span>
              <span data-line-elem="displayline">
              <span class="vl-inline">
                <input class="c666" data-line-elem="display" v-model="user.mobilephone" style="border:0px" placeholder="还没设置联系方式" id="mobilephone">
              </span>
              <span class="item-opt"><a href="javascript:;" data-line-elem="edit">设置</a></span>
            </span>
            </div>

<!-- 账号状态           -->
            <div class="userSetting-setWrap-item even" data-otherinfo-line="blood">
              <span class="vl-inline item-title"><label>账号状态：</label></span>
              <span data-line-elem="editline" style="display:none;">
              <span class="checkBox_wrap checkBox_wrap-normal clearfix" data-line-elem="bloodtype">
                  <span data-pcselect-elem="handler">
                      <span class="checkBox checkBox_wrap-default" data-line-elem="value">请选择</span>
                      <span class="checkBoxBtn"></span>
                  </span>
                  <ul class="checkBoxList" style="display:none;" data-pcselect-elem="optionList"></ul>
              </span>
              <span class="item-opt">
                <a href="javascript:;" data-line-elem="cancel">取消</a>
                 <span class="ml10">保存</span>
              </span>
            </span>
              <span data-line-elem="displayline">
              <span class="vl-inline">
                <em  class="c666" data-line-elem="display" id="status"></em>
              </span>
            </span>
            </div>


          </div>
        </div>
        <div  class="userSetting-pop" style="display:none;">
          <div id="widget-schoolselector" class="userSetting-pop_inner" style="width:545px;">
          </div>
        </div>

        <div class="upLoad_userHeadWrap" style="margin: 100px auto; display:none;" id="changeIconBox">

          <div class="upLoad_userHead-con" id="widget-avatarform">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
       data(){
            return {
                fileList: "",
                user:{
                    uid: "",
                    account: "",
                    password: "",
                    sex: "",
                    birthday: "",
                    age: "",
                    email: "",
                    mobilephone: "",
                    selfintroduction: "",
                    headimg: "",
                    createDate: "",
                    status: ""
                },
            }
       },
        created:function(){
            Q.projectName = 'qiyiV2';
            Q.load("ugcBasicInfo");

        },
        mounted:function(){
            this.userlist()

        },

        methods: {
            userlist:function(){
                const _this=this
                this.$axios({
                    method: 'post',
                    url: 'http://127.0.0.1:10010/api/item/front/myInfo',
                    data: {
                    }
                }).then(function (response) {
                    _this.user.password=response.data.password
                    _this.user.mobilephone=response.data.mobilephone
                    _this.user.account=response.data.account
                    _this.user.sex=response.data.sex
                    _this.user.email=response.data.email
                    _this.user.age=response.data.age
                    _this.user.headimg=response.data.headimg
                    _this.user.status=response.data.status
                    _this.user.birthday=response.data.birthday.split(" ")[0]
                    if(response.data.account==null){
                        $("#sex").text("男");
                    }else{
                        $("#sex").text(response.data.sex);
                    }
                    $("#email").text(response.data.email);
                    $("#mobilephone").text(response.data.mobilephone);
                    $("#age").text(response.data.age);
                    $("#birthday").text(response.data.birthday);
                    if(response.data.status==0){
                        $("#status").text("封号中....");
                    }else{
                        $("#status").text("正常");
                    }

                })

            },
            sex: function () {
                const _this = this
                if (this.user.sex == "男" || this.user.sex == null) {
                    _this.user.sex = "女"
                    $('#sex').text("女")
                } else {
                    _this.user.sex = "男"
                    $('#sex').text("男")
                }
                this.$axios({
                    method: 'post',
                    url: 'http://127.0.0.1:10010/api/item/front/changeSex',
                    data: {
                        sex: this.user.sex
                    }
                }).then(function (response) {

                })


            },
            birtha: function () {
                const _this = this
                var birth = $("#year").text().substring(0, 4) + "-" + $("#month").text().substring(0, 2).trim() + "-" + $("#day").text().substring(0, 2).trim()
                this.$axios({
                    method: 'post',
                    url: 'http://127.0.0.1:10010/api/item/front/birth',
                    data: {
                        birth: birth
                    }
                }).then(function (response) {
                    _this.user.birthday = birth
                    _this.user.age = response.data

                })
            },
            changeEmail: function () {
                var ema=$("#ema").val()
                alert(ema)
                this.$axios({
                    method: 'post',
                    url: 'http://127.0.0.1:10010/api/item/front/changeEmail',
                    data: {
                        email: ema
                    }
                }).then(function (response) {
                    $("#email").val(ema)
                    _this.$message("修改成功")
                })

            },

            changePhone: function () {
                var ema=$("#pho").val()
                this.$axios({
                    method: 'post',
                    url: 'http://127.0.0.1:10010/api/item/front/changePhone',
                    data: {
                        mobilephone: ema
                    }
                }).then(function (response) {
                    $("#mobilephone").val(ema)
                    _this.$message("修改成功")
                })
            },
            uploaded(response, file, fileList){
                $('#img').attr("src", response);
            },

        }
    }
</script>
<style>
  @import "../../../static/css/personalCenter-new.css";
  @import "../../../static/css/v3-basic_other.css";
  .bb{
    height: 50px;
    width:120%;
    text-align: center;
    line-height: 50px;
    background: orange;
    margin-top:5px;
    margin-left: -16px;
    font-size: 17px;
  }
  .bb:hover{
    background: gold;
    border-left:red 2px solid;
  }
  .bb a:hover{
    text-decoration:none
  }
</style>
