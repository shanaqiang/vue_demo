<template>
  <div class="container">
    <div style="margin-top: 30px;color: black;font-size: 20px;margin-left: 140px">1.预定您的行程   >   2.确认并支付</div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-4">
        <div style="margin-top:20px;font-weight:bold;font-size: 30px;margin-left: 60px">确认并支付</div>
        <div style="margin-top:20px;font-weight:bold;font-size: 20px;margin-left: 60px">选择支付方式</div>
        <div class="row" style="margin-top:20px">

          <div class="col-sm-1" style="margin-left: 60px" >
            <div  @click="zfb()"style="border-radius: 5px;width:100px;height: 50px;border:1px grey solid"><img src="../../../static/img/zfb.jpg" width="100%" height="100%"></div>
          </div>
          <div class="col-sm-1" style="margin-left:80px">
            <div @click="wx()" style="border-radius: 5px;width:100px;height: 50px;border:1px grey solid"><img src="../../../static/img/wx.jpg" width="100%" height="100%"></div>
          </div>
        </div >
        <div style="margin-left: 60px;margin-top:20px" >
          <div style="color:red;font-size: 25px" id="mm"></div>
          <div style="color:red;font-size: 25px">￥:{{orderSearch.orders.totalprice}}</div>
          <button style="border-radius: 5px;width:100px;height: 50px;border:0px;background:green;color: white;margin-top: 10px" @click="pay()">确认支付</button>
        </div>
      </div>


      <div class="col-sm-4">
        <div style="width: 400px;height:450px;border:red 1px solid">
          <div class="row">
            <div class="col-sm-7" style="height:200px;border: red 1px solid">
              <div style="font-size: 15px;padding:3px;border:aqua 1px solid;font-size: 15px;font-weight: bold" class="divcss5" >AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
              <div style="font-size: 15px;padding:3px;border:aqua 1px solid;font-size: 15px;font-weight: bold">aaaaaaa</div>
              <div style="font-size: 15px;padding:3px;border:aqua 1px solid;font-size: 15px;font-weight: bold">aaaaaaa</div>
            </div>
            <div class="col-sm-5" style="height:200px"><div style="height: 140px;width: 100%;margin-top:40px"><img :src=orderSearch.house.img  width="100%" height="100%"></div></div>
          </div>
            <div style="height: 100px">
              <div style="height: 50px;line-height: 50px;font-size: 20px;padding: 15px">人数:{{orderSearch.orders. peoplenum}}</div>
              <div style="height: 50px;line-height: 50px;font-size: 20px;padding: 15px">aaaaaa</div>
              <div style="height: 50px;line-height: 50px;font-size: 20px;padding: 15px;text-align: right">单价:￥{{orderSearch.orders.price}}</div>
              <div style="height: 50px;line-height: 50px;font-size: 20px;padding: 15px;text-align: right">总价:￥{{orderSearch.orders.totalprice}}</div>
            </div>


        </div>
      </div>


    </div>
  </div>



</template>

<script>
    export default {
        data(){
            return{
                zf:0,
                datea:"",
                orderSearch:{
                    orders:{
                        oid:"",
                        uid:"",
                        hid:"",
                        price:"",
                        startDate:"",		//租房开始日期
                        endDate:"",				//租房结束日期
                        price:"",		//单价/日
                        totalprice:"",				//总价
                        peoplenum:""
                    },
                    house:{
                        hid:"",
                        location:"",
                        city:"",
                        housingtype:"",
                        rentaltype:"",
                        img:"",
                        price:"",
                        seecount:""
                    },
                    houserule:{
                        child:"",
                        baby:"",
                        pets:"",
                        smoking:"",
                        party:"",
                        others:""
                    }

                }

            }
        },
        computed:{
            datea:function(){
                var date=new Date();
                return formatDate(date)

            }

        },
        created:function(){
            const _this=this
            var oid=this.$route.query.oid;
            this.$axios({
                method: 'post',
                url: 'http://127.0.0.1:10010/api/item/front/order',
                data: {
                    oid:oid
                }
            }).then(function (response) {
                var time=response.data.num
                var time1=10*60-time/1000
                var b=0;
                for(let a=600;a>0;a--){
                    setInterval(function(){
                        time1--
                        b++
                        if(b==59){
                            b=0
                        }
                        a=parseInt(time1/60)
                        var t="订单还剩"+a+"分"+b+"秒"+"失效"
                        $("#mm").text(t)
                    },1000*a)
                }
                _this.orderSearch.orders.hid=response.data.orders.hid
                _this.orderSearch.orders.oid=response.data.orders.oid
                _this.orderSearch.orders.uid=response.data.orders.uid
                _this.orderSearch.orders.price=response.data.orders.price
                _this.orderSearch.orders.createDate=response.data.orders.createDate
                _this.orderSearch.orders.startDate=response.data.orders.startDate.split(" ")[0]
                _this.orderSearch.orders.endDate=response.data.orders.endDate.split(" ")[0]
                _this.orderSearch.orders.totalprice=response.data.orders.totalprice
                _this.orderSearch.orders.peoplenum=response.data.orders.peoplenum
                _this.orderSearch.house.location=response.data.house.location
                _this.orderSearch.house.city=response.data.house.city
                _this.orderSearch.house.housingtype=response.data.house.housingtype
                _this.orderSearch.house.rentaltype=response.data.house.rentaltype
                _this.orderSearch.house.img=response.data.house.img
                _this.orderSearch.house.price=response.data.house.price
                _this.orderSearch.house.seecount=response.data.house.seecount
                _this.orderSearch.houserule.child=response.data.houserule.child
                _this.orderSearch.houserule.baby=response.data.houserule.baby
                _this.orderSearch.houserule.pets=response.data.houserule.pets
                _this.orderSearch.houserule.smoking=response.data.houserule.smoking
                _this.orderSearch.houserule.party=response.data.houserule.party
                _this.orderSearch.houserule.others=response.data.houserule.others

            })
        },
        methods:{
            zfb:function(){
                const _this=this
                alert(this.zf)
            },
            wx:function(){
                const _this=this
                _this.zf=2
            },
            pay:function(){
                const _this=this
                if(zf=1){
                    this.$axios({
                        method: 'post',
                        url: 'http://127.0.0.1:10010/api/item/alipay/pay',
                        data: {
                            oid:this.orders.oid,
                            price:this.orders.price
                        }
                    }).then(function (response) {

                    })
                }

            },

        }


    }
</script>

<style>
  .divcss5{ border:1px solid #00F; height:90px; width:230px;word-wrap:break-word;margin-top:30px }


</style>
