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
      <div class="card col-4 offset-1" style="width: 22rem; height: 30rem;margin-top: 50px;">
        <div class="text-center" style="margin-top:20px;">
          <img class="card-img-top" style="height:120px;width: 120px;border-radius:120px;" :src="housedetail.headimg" alt="Card image cap" />
        </div>
        <hr/>
        <div class="card-body">
          <div style="font-size: 20px;font-weight: bold;line-height:20px;text-align: left" >
            <i class="fa fa-check-square fa-1x" style="color: green" aria-hidden="true"></i>
            已验证
          </div><hr>
          <div style="text-align: left" class="mt-2">
            <div style="font-size: 16px; ;font-weight: bold">{{housedetail.account}}已提供</div>
            <div style="font-size: 16px;margin-top: 14px;"><i class="fa fa-check-square fa-1x" style="color: green" aria-hidden="true"></i> 身份证</div>
            <div style="font-size: 16px;margin-top: 14px;"><i class="fa fa-check-square fa-1x" style="color: green" aria-hidden="true"></i> 真人照片验证</div>
            <div style="font-size: 16px;margin-top: 14px;"><i class="fa fa-check-square fa-1x" style="color: green" aria-hidden="true"></i> 电子邮件地址</div>
            <div style="font-size: 16px;margin-top: 14px;"><i class="fa fa-check-square fa-1x" style="color: green" aria-hidden="true"></i> 手机号</div>
          </div>
        </div>
      </div>
      <div class="col-6" style="margin-left: 30px;margin-top: 50px">
        <div class="text-left" style="font-size: 50px;">您好, 我叫{{housedetail.account}}</div>
        <div class="text-left" style="margin-top: 10px;">本房源注册时间: {{housedetail.createdate}}</div>
        <div class="text-left"  style="margin-top: 50px;">{{housedetail.selfintroduction}}</div>
      </div>
    </div>
    <!--右侧评论展示区-->
    <div class="row">
      <div class="col-4 offset-1" style="margin-bottom: 30px">
        <div class="card" style="width: 22rem; height: 30rem;margin-top: 10px">
          <img class="card-img-top" style="height: 280px" :src="housedetail.img" alt="Card image cap" />
          <div class="card-body">
            <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="housedetail.housetype==0">整套公寓·{{housedetail.bednum}}张床</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="housedetail.housetype==1">独栋房·{{housedetail.bednum}}张床</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="housedetail.housetype==2">别墅·{{housedetail.bednum}}张床</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="housedetail.housetype==3">loft·{{housedetail.bednum}}张床</div>
            <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="housedetail.housetype==4">酒店·{{housedetail.bednum}}张床</div>
            <div style="font-size: 20px;font-weight: bold;line-height: 30px;text-align: left" >{{housedetail.hname}}</div>
            <div style="font-size: 16px;line-height: 30px;text-align: left" class="mt-2">￥{{housedetail.price}} 每晚</div>
          </div>
        </div>
      </div>

      <div class="col-6"style="margin-left: 30px;margin-bottom: 30px">
        <div id="comment">
          <div style="text-align: left;margin-top: 20px;font-size: 25px;font-weight: bold">评价</div>
        </div>
        <div style="text-align: left;margin-top: 30px" v-for="c in housecomments">
          <hr>
          <div style="float: left; margin-right: 20px"><img :src="c.headimg" style="height: 50px;width: 50px;border-radius:50px"></div>
          <div>
            {{c.account}}<br/>
            {{c.createdate}}
          </div>
          <div style="margin-top: 10px">{{c.message}}</div>
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
        hid:{}, //房屋hid
        housedetail:{},//房屋详情
        houseimgs:[],    //房屋图片
        housecomments:[], //房屋评价
        page:0,
        number:1,
        housebed:[],
        housecommentcount:{},
        clickselectmore:0,//需要点击更多次数
        clickcount:0  //实际点击次数
      }
    },
    created(){
      this.gethid();
      this.getHouseData();
      this.getHouseComment();
      this.getHouseBed();
      this.getHouseCommentCount();
    },
    mounted(){
    },
    beforeUpdate() {
    },
    methods:{
      gethid(){
        alert(this.$route.query.hid);
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
      getHouseComment(){   //评论
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/housecomment/'+this.hid
        }).then(resp=>{
          //console.log(resp);
          this.housecomments=resp.data.slice(this.page,this.number);
        })
      },
      selectmore(){
        this.clickcount=this.clickcount+1;
        this.page=this.page+1;
        this.number=this.number+this.number;
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/housecomment/'+this.hid
        }).then(resp=>{
          //console.log(resp);
          let commentdata=resp.data.slice(this.page,this.number);
          commentdata.forEach((item,index)=>{
            this.housecomments.push(item);
          })
        })
      },
      getHouseCommentCount(){  //评论数
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/housecommentcount/'+this.hid
        }).then(resp=>{
          //console.log(resp);
          this.housecommentcount=resp.data;
          this.clickselectmore=Math.ceil((resp.data-this.number)/this.number);

        })
      },
      getStartAndEndDate(){
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/startAndEndDate/'+this.hid
        }).then(resp=>{
          //console.log(resp);
          this.rangedate=resp.data;
        })
      },
      getHouseBed(){   //房间床
        this.$axios({
          method:'get',
          url:'http://127.0.0.1:10010/api/item/house/housebed/'+this.hid
        }).then(resp=>{
          //console.log(resp);
          this.housebed=resp.data;
        })
      }
    }

  }

</script>

<style>


</style>
