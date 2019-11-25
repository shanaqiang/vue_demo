<template>
  <div id="app">

    <!--模态框-->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">房屋设施</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left" style="padding: 45px">
              <div v-for="ins in installist" class="text-center" style="display:inline-block;height: 100px;width: 100px;">
                <div style="margin-top: 20px">
                  <div v-if="ins.name=='needed'" class="text-center"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='airconditioner'" class="text-center"><i class="fa fa-tty fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='heating'" class="text-center"><i class="fa fa-deaf fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='hairdrier'" class="text-center"><i class="fa fa-microchip fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='iron'" class="text-center"><i class="fa fa-clone fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='television'" class="text-center"><i class="fa fa-desktop fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='independententry'" class="text-center"><i class="fa fa-university fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='shampoo'" class="text-center"><i class="fa fa-tint fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='wifi'" class="text-center"><i class="fa fa-wifi fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='desk'" class="text-center"><i class="fa fa-table fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='breakfast'" class="text-center"><i class="fa fa-coffee" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='fireextinguisher'" class="text-center"><i class="fa fa-fire-extinguisher fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='coalarm'" class="text-center"><i class="fa fa-free-code-camp fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='smokedetector'" class="text-center"><i class="fa fa-fire fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='firstaidkit'" class="text-center"><i class="fa fa-medkit fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='kitchen'" class="text-center"><i class="fa fa-home fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='washingmachine'" class="text-center"><i class="fa fa-envelope-open fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='dryer'" class="text-center"><i class="fa fa-thermometer-empty fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='parkingspace'" class="text-center"><i class="fa fa-car fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='gym'" class="text-center"><i class="fa fa-grav fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='swimmingpool'" class="text-center"><i class="fa fa-th fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='bathtub'" class="text-center"><i class="fa fa-bath fa-2x" aria-hidden="true"></i></div>
                  <div v-if="ins.name=='elevator'" class="text-center"><i class="fa fa-sort-amount-desc fa-2x" aria-hidden="true"></i></div>
                </div>
                <div style="margin-top: 5px">
                  <div v-if="ins.name=='needed'">生活必需品</div>
                  <div v-if="ins.name=='airconditioner'">空调</div>
                  <div v-if="ins.name=='heating'">暖气</div>
                  <div v-if="ins.name=='hairdrier'">吹风机</div>
                  <div v-if="ins.name=='iron'">熨斗</div>
                  <div v-if="ins.name=='television'">电视</div>
                  <div v-if="ins.name=='independententry'">独立入口</div>
                  <div v-if="ins.name=='shampoo'">洗发水</div>
                  <div v-if="ins.name=='wifi'">无线网络</div>
                  <div v-if="ins.name=='desk'">书桌</div>
                  <div v-if="ins.name=='breakfast'">早餐</div>
                  <div v-if="ins.name=='fireextinguisher'">灭火器</div>
                  <div v-if="ins.name=='coalarm'">一氧化碳报警器</div>
                  <div v-if="ins.name=='smokedetector'">烟雾报警器</div>
                  <div v-if="ins.name=='firstaidkit'">急救包</div>
                  <div v-if="ins.name=='kitchen'">厨房</div>
                  <div v-if="ins.name=='washingmachine'">洗衣机</div>
                  <div v-if="ins.name=='dryer'">干衣机</div>
                  <div v-if="ins.name=='parkingspace'">停车位</div>
                  <div v-if="ins.name=='gym'">健身房</div>
                  <div v-if="ins.name=='swimmingpool'">泳池</div>
                  <div v-if="ins.name=='bathtub'">浴缸</div>
                  <div v-if="ins.name=='elevator'">电梯</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <!--顶部-->
    <div class="row">
      <div class="col-12 border border-1 border-success" style="height: 440px">
        <!--导航栏-->
        <top></top>

        <div class="row" style="height: 440px">
          <div class="col col-6 border border-1 div1" ><img :src="houseimgs[0].img" style="width: 100%;height: 100%;"></div>

          <div class="col col-6 border border-1">
            <div class="row">
              <div class="col col-6 border border-1 div1" style="height: 220px"><img :src="houseimgs[1].img" height="100%" width="100%"></div>
              <div class="col col-6 border border-1 div1" style="height: 220px"><img :src="houseimgs[2].img" height="100%" width="100%"></div>
            </div>
            <div class="row">
              <div class="col col-6 border border-1 div1" style="height: 220px"><img :src="houseimgs[3].img" height="100%" width="100%"></div>
              <div class="col col-6 border border-1 div1" style="height: 220px"><img :src="houseimgs[4].img" height="100%" width="100%"></div>
            </div>
          </div>


        </div>
      </div>
    </div>


    <!--中间-->
    <div class="row">

      <div class="col offset-1 col-6 border border-1 border-dark">

        <el-breadcrumb separator="·" class="mt-3">
          <el-breadcrumb-item><a href="#detail">详情</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#comment">评价</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#orderdate">可订日期</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#location">位置</a></el-breadcrumb-item>
        </el-breadcrumb>

        <hr />

        <!--房屋简述-->
        <h1 style="text-align: left">{{housedetail.hname}}</h1>

        <div class="form-inline" id="detail">
          <div><i class="fas fa-door-open mr-2"></i>{{housedetail.bedroomnum}}间卧室</div>
          <div class="ml-3"><i class="fas fa-bed mr-2"></i>{{housedetail.bednum}}张床</div>
          <div class="ml-3"><i class="fas fa-bath mr-2"></i>{{housedetail.bathroomnum}}间卫生间</div>
          <div class="ml-3"><i class="fas fa-user-alt mr-2"></i>最多住{{housedetail.maxtenant}}人</div>
        </div>

        <hr>

        <!--房东信息-->
        <div class="form-inline">
          <div class="demo-basic--circle">
            <div class="block"><el-avatar :size="70" :src="circleUrl"></el-avatar></div>
          </div>
          <div style="margin-left: 10px;">
            <div style="font-size: 20px;">房东：{{housedetail.account}}<a class="ml-2" href="#">联系房东</a></div>
            <div class="mt-2" style="font-size: 15px;font-weight: bold;float:left">共收到{{housecommentcount}}条评价·已验证</div>
          </div>
        </div>
        <div style="background-color:#eaebeb;width: 100%;height: 100px;margin-top: 20px">
          <div style="text-align: left">{{housedetail.description}}</div>
        </div>

        <hr />
        <div style="text-align: left">
          <div class="border border-1" style="width: 120px;height: 100px;padding: 10px;display: inline-block" v-for="h in housebed">
            <div style="font-size: small;font-weight:bold;text-align: left">卧室{{h.bedroomname}}</div>
            <div style="text-align: left;margin-top: 8px;"><i class="fa fa-bed fa-2x" aria-hidden="true"></i></div>
            <div style="text-align: left;font-size: small;margin-top: 3px">
              <div v-if="h.bedtype==1">{{h.bedcount}}张小号双人床</div>
              <div v-if="h.bedtype==2">{{h.bedcount}}张标准双人床</div>
              <div v-if="h.bedtype==3">{{h.bedcount}}张标准单人床</div>
              <div v-if="h.bedtype==4">{{h.bedcount}}张沙发床</div>
            </div>
          </div>
        </div>
        <hr />
        <div class="form-inline mt-4">
          <div style="font-size: 18px;font-weight: bold">整套房子/公寓</div>
          <div style="margin-left: 100px">独享整个房源，无需与房东或他人共住</div>
        </div>
        <div class="form-inline mt-4 mb-4">
          <div style="font-size: 18px;font-weight: bold">入住/退房</div>
          <div style="margin-left: 134px">入住时间 <b>14:00后</b>· 退房时间 <b>12:00</b></div>
        </div>
        <hr />
        <div class="text-left">
          <div v-for="(ins,index) in installist" v-if="index<5" style="display:inline-block;margin-right: 60px">
            <div>
              <div v-if="ins.name=='needed'" class="text-center"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='airconditioner'" class="text-center"><i class="fa fa-tty fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='heating'" class="text-center"><i class="fa fa-deaf fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='hairdrier'" class="text-center"><i class="fa fa-microchip fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='iron'" class="text-center"><i class="fa fa-clone fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='television'" class="text-center"><i class="fa fa-desktop fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='independententry'" class="text-center"><i class="fa fa-university fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='shampoo'" class="text-center"><i class="fa fa-tint fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='wifi'" class="text-center"><i class="fa fa-wifi fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='desk'" class="text-center"><i class="fa fa-table fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='breakfast'" class="text-center"><i class="fa fa-coffee" aria-hidden="true"></i></div>
              <div v-if="ins.name=='fireextinguisher'" class="text-center"><i class="fa fa-fire-extinguisher fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='coalarm'" class="text-center"><i class="fa fa-free-code-camp fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='smokedetector'" class="text-center"><i class="fa fa-fire fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='firstaidkit'" class="text-center"><i class="fa fa-medkit fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='kitchen'" class="text-center"><i class="fa fa-home fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='washingmachine'" class="text-center"><i class="fa fa-envelope-open fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='dryer'" class="text-center"><i class="fa fa-thermometer-empty fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='parkingspace'" class="text-center"><i class="fa fa-car fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='gym'" class="text-center"><i class="fa fa-grav fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='swimmingpool'" class="text-center"><i class="fa fa-th fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='bathtub'" class="text-center"><i class="fa fa-bath fa-2x" aria-hidden="true"></i></div>
              <div v-if="ins.name=='elevator'" class="text-center"><i class="fa fa-sort-amount-desc fa-2x" aria-hidden="true"></i></div>
            </div>
            <div>
              <div v-if="ins.name=='needed'">生活必需品</div>
              <div v-if="ins.name=='airconditioner'">空调</div>
              <div v-if="ins.name=='heating'">暖气</div>
              <div v-if="ins.name=='hairdrier'">吹风机</div>
              <div v-if="ins.name=='iron'">熨斗</div>
              <div v-if="ins.name=='television'">电视</div>
              <div v-if="ins.name=='independententry'">独立入口</div>
              <div v-if="ins.name=='shampoo'">洗发水</div>
              <div v-if="ins.name=='wifi'">无线网络</div>
              <div v-if="ins.name=='desk'">书桌</div>
              <div v-if="ins.name=='breakfast'">早餐</div>
              <div v-if="ins.name=='fireextinguisher'">灭火器</div>
              <div v-if="ins.name=='coalarm'">一氧化碳报警器</div>
              <div v-if="ins.name=='smokedetector'">烟雾报警器</div>
              <div v-if="ins.name=='firstaidkit'">急救包</div>
              <div v-if="ins.name=='kitchen'">厨房</div>
              <div v-if="ins.name=='washingmachine'">洗衣机</div>
              <div v-if="ins.name=='dryer'">干衣机</div>
              <div v-if="ins.name=='parkingspace'">停车位</div>
              <div v-if="ins.name=='gym'">健身房</div>
              <div v-if="ins.name=='swimmingpool'">泳池</div>
              <div v-if="ins.name=='bathtub'">浴缸</div>
              <div v-if="ins.name=='elevator'">电梯</div>
            </div>
          </div>

          <div class="text-left"  style="display:inline-block;">
            <a href="javascript:" data-toggle="modal" data-target="#myModal">
            <div class="text-center" style="margin-bottom: 7px">{{installistlength-5}}+</div>
            <div class="text-center" >更多设施</div>
            </a>
          </div>

        </div>
        <hr/>
        <div id="comment">
          <div style="text-align: left;margin-top: 70px;font-size: 25px;font-weight: bold">评价</div>
        </div>
        <div style="text-align: left;margin-top: 30px" v-for="(c,index) in housecomments" v-if="index<3">
          <hr>
          <div style="float: left; margin-right: 20px"><img :src="c.headimg" style="height: 50px;width: 50px;border-radius:50px"></div>
          <div>
            {{c.account}}<br/>
            {{c.createdate}}
          </div>
          <div style="margin-top: 10px">{{c.message}}</div>
        </div>
        <div class="text-center" style="margin-top: 20px;font-size: large"><a href="javascript:" @click="selectcomment()">查看更多评价</a></div>
        <div>
          <div id="orderdate" style="text-align: left;margin-top: 70px;font-size: 25px;font-weight: bold">可订日期</div>
        </div>
        <div class="border border-1" style="text-align: left;margin-top: 40px;height: 400px">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">

            </el-date-picker>
          </div>
        </div>
        <div>
          <div id="location">
            <div style="text-align: left;margin-top: 70px;font-size: 25px;font-weight: bold">位置</div>
            <div class="border border-1" style="text-align: left;margin-top: 40px;height: 400px">此处是一个地图大插件</div>
          </div>
        </div>

        <div>
          <div style="text-align: left;margin-top: 70px;font-size: 25px;font-weight: bold">须知</div>

          <div class="form-inline" style="margin-top: 30px;text-align: left;">
            <div style="font-size: 18px;font-weight: bold;">取消政策</div>
            <div style="margin-left: 100px">入住前24小时可取消</div>
          </div>
          <div class="form-inline" style="margin-top: 30px;text-align: left;">
            <div style="font-size: 18px;font-weight: bold;">安全须知</div>
            <div style="margin-left: 100px">该房源未安装烟雾报警器或一氧化碳报警器</div>
          </div>
          <div class="form-inline" style="margin-top: 30px;text-align: left;">
            <div style="font-size: 18px;font-weight: bold;">交易提示</div>
            <div style="margin-left: 100px">若需要开具房费发票，请您与房东协商。</div>
          </div>


        </div>

        <!--方便观察-->
        <div style="margin-top: 600px"></div>
      </div>





      <!--中间右侧-->
      <div class="col col-4 offset-1 border border-1 border-dark" style="height: 500px;">
        <div class="border border-1" style="padding: 20px;height: 450px;margin-top: 45px">
          <div class="form-inline">
            <div style="font-size: 24px;font-weight: bold">￥{{housedetail.price}}</div>
            <div style="font-size: 14px;margin-top: 10px;margin-left: 5px">每晚</div>
          </div>

          <hr />
          <div>
            <div style="text-align: left;font-weight: bold">日期</div>
            <input type="text" class="form-control">
          </div>

          <div class="mt-4">
            <div style="text-align: left;font-weight: bold">人数</div>
              <select value="" class="form-control" id="selectnum">
                  <option v-for="t in tenant" :value="t">{{t}}人</option>
              </select>
            <!--<input type="text" class="form-control">-->
            <!--<el-input-number v-model="num1":min="1" :max="housedetail.maxtenant" label="描述文字"></el-input-number>-->
          </div>

          <hr />
          <div class="form-inline">
            <div style="text-align: left;font-weight: bold">总价：</div>
            <div style="text-align: right;font-weight: bold">￥998</div>
          </div>

          <button class="btn btn-danger" style="margin-top: 80px;width: 100%;height: 50px">预   定</button>

        </div>
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
          tenant:[],  //住的人数数组
          houseimgs:[],    //房屋图片
          housecomments:[], //房屋评价
          housebed:[],
          housecommentcount:{},
          installist:[],    //房屋设施
          installistlength:{},//房屋设施数量
          value6:'',        //日期选择
          num1:1,
          pickerOptions: {}
        }
      },
      created(){
        this.gethid();
        this.getHouseData();
        this.getHouseImg();
        this.getHouseComment();
        this.getHouseBed();
        this.getHouseCommentCount();
        this.getHouseInstallations();
      },
      mounted(){
        //this.getStartAndEndDate();
      },
      beforeUpdate() {
        // console.log(this.housedetail.startdate);
        // alert(this.housedetail.enddate);
        // this.pickerOptions = {
        //   disabledDate(time) {
        //     //return time.getTime() < Date.now() - 8.64e7;
        //    return time.getTime()<new Date(this.housedetail.enddate).getTime();
        //   }
        // }
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
             // console.log(resp);
             this.housedetail=resp.data;
             for(var i=1;i<=resp.data.maxtenant;i++){
               this.tenant.push(i);
             }
          })
        },
        getHouseImg(){  //图片
          this.$axios({
            method:'get',
            url:'http://127.0.0.1:10010/api/item/house/houseimg/'+this.hid
          }).then(resp=>{
            //console.log(resp);
            this.houseimgs=resp.data;
          })
        },
        getHouseComment(){   //评论
          this.$axios({
            method:'get',
            url:'http://127.0.0.1:10010/api/item/house/housecomment/'+this.hid
          }).then(resp=>{
            //console.log(resp);
            this.housecomments=resp.data;
          })
        },
        getHouseCommentCount(){  //评论数
          this.$axios({
            method:'get',
            url:'http://127.0.0.1:10010/api/item/house/housecommentcount/'+this.hid
          }).then(resp=>{
            //console.log(resp);
            this.housecommentcount=resp.data;
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
        },
        getHouseInstallations(){
          this.$axios({
            method:'get',
            url:'http://127.0.0.1:10010/api/item/house/houseinstallations/'+this.hid
          }).then(resp=>{
            console.log(resp);
            this.installist=resp.data;
            this.installistlength=resp.data.length;
          })
        },
        selectcomment(){
          this.$router.push({
            path:'/comment'
          })
        }
      }

    }

</script>

<style>
  .div1{
    height: 440px;
    overflow: hidden;
  }
  .div1 img{
    cursor: pointer;
    transition: all 0.6s;
    transform: scale(1.2);
  }
  .div1 img:hover{
    transform: scale(1.3);
  }

</style>
