<template>
<div id="app">
  <!--顶部-->
  <div class="row">
    <div class="col-12 border border-1 border-success">
      <!--导航栏-->
      <top></top>
    </div>
  </div>

  <div class="row">
    <div class="card col-3 offset-2 border border-1 border-dark" style="width: 16rem; height: 30rem;margin-top: 50px;">
      <div class="card" style="width: 16rem; height: 30rem;margin-top: 10px">
        <img class="card-img-top" style="height: 200px" :src="housedetail.img" alt="Card image cap" />
        <div class="card-body">
          <div class="text-left"><h4>{{housedetail.account}}邀请您预定该房源</h4></div>
          <div class="text-left">此邀请允许您在接下来的23小时内完成闪订</div>
          <div class="text-center" style="margin-top: 20px;"><button class="btn-lg btn-danger">立即预定</button></div>
        </div>
      </div>
    </div>
    <div class="col-5 text-left border border-1 border-dark" style="margin-left: 30px;margin-top: 50px">
    <!--发送消息-->

      <div class="card" style="width: 20rem; height: 10rem;margin-top: 10px;display: inline-block">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <div class="card-body text-right" style="background-color: lightgray">
          <el-button @click="send()">发送</el-button>
        </div>
      </div>
      <div style="display:inline-block;margin-left: 20px;">
        <div class="demo-basic--circle" >
          <div class="block"><el-avatar :size="60" :src="circleUrl"></el-avatar></div>
        </div>
      </div>
      <hr>
      <div>
        <!--接受消息区-->
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-3 offset-2 border border-1 border-dark" style="margin-bottom: 30px">
      <hr/>
        <div class="text-left row"style="padding: 20px">
          <div class="col-10">
          <div><h4>行程详情</h4></div>
            <a style="color: black;" href="javascript:" @click="detailhouse()">
            <div>{{housedetail.hname}}</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;" v-if="housedetail.housetype==0">整套公寓·{{housedetail.location}}</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;" v-if="housedetail.housetype==1">独栋房·{{housedetail.location}}</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;" v-if="housedetail.housetype==2">别墅·{{housedetail.location}}</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;" v-if="housedetail.housetype==3">loft·{{housedetail.location}}</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;" v-if="housedetail.housetype==4">酒店·{{housedetail.location}}</div>
            </a>
          </div>
          <div class="col-2 text-center" style="margin-top: 100px"><h4> ></h4></div>
        </div>
      <hr/>
      <div >
        <div class="text-left" style="font-size: 20px;display: inline-block;">房东: {{housedetail.account}}</div>
        <div class="text-center"style="margin-left: 30px;display: inline-block"><img style="height:50px;width: 50px;border-radius:50px;" :src="housedetail.headimg" /></div>
      </div>
      <hr/>
      <div class="text-left" style="margin-left: 18px"><h5>请始终通过本平台进行交流</h5></div>
      <div class="text-left" style="margin-top:10px;margin-left: 18px">为了保护您的付款安全，请绝对不要在本站外或App以外转账或交流</div>
      <hr/>
    </div>

    <div class="col-5 border border-1 border-dark"style="margin-left: 30px;margin-bottom: 30px">
      <div>
        <div class="text-center" style="font-size:12px;">安全小贴士</div>
        <div style="text-align: center;margin-top: 10px;font-size:15px;">为了您的安全以及为了保护您自己，请只通过本平台进行交流，并直接通过本平台付款</div>
        <hr>
      </div>
      <div style="text-align: left;margin-top: 30px" v-for="">
        <!--消息展示区-->
      </div>
      <div class="text-center" style="margin-top: 20px;font-size: large"v-if="clickcount<clickselectmore" ><a href="javascript:"@click="selectmore()">查看更多评价</a></div>
    </div>
  </div>
  <div class="row"></div>
</div>




</template>

<script>
  import Top from '../navbars/topnavbar'
  export default {
    name:'App',
    components:{Top},
    data(){
      return{
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        hid:{}, //房屋hid
        housedetail:{},//房屋详情
        houseimgs:[],    //房屋图片
        housebed:[],
        textarea: '',
      }
    },
    created(){
      this.gethid();
      this.getHouseData();
      this.getHouseComment();
      this.getHouseCommentCount();
    },
    mounted(){
    },
    beforeUpdate() {
    },
    methods:{
      gethid(){
        this.hid=this.$route.query.hid;
      },
      getHouseData(){   //房屋详细
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/housedetail/'+this.hid
        }).then(resp=>{
          console.log(resp);
          this.housedetail=resp.data;
          for(var i=1;i<=resp.data.maxtenant;i++){
            this.tenant.push(i);
          }
        })
      },
      getHouseCommentCount(){  //评论数
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/housecommentcount/1'
        }).then(resp=>{
          //console.log(resp);
          this.housecommentcount=resp.data;
          this.clickselectmore=Math.ceil((resp.data-this.number)/this.number);

        })
      },
      detailhouse(){
        this.$router.push({
          path:'/one',
          query:{
            hid:this.hid
          }
        })
      },
      send(){

        alert(this.textarea)
        // this.$axios({
        //   method:'post',
        //   url:'http://127.0.0.1:10010/api/item/house/message/',
        //   data:{
        //     uid:this.housedetail.uid,
        //     hid:this.hid,
        //     message:this.textarea
        //   }
        // }).then(resp=>{
        //   //console.log(resp);
        //   this.housecommentcount=resp.data;
        //   this.clickselectmore=Math.ceil((resp.data-this.number)/this.number);
        //
        // })
      }
    }

  }

</script>

<style>


</style>
