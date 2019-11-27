<template>
  <div>
    <section class="hero">
      <top></top>

      <section class="caption">
      <h2 class="caption">Find You Dream Home</h2>
      <h3 class="properties">Appartements - Houses - Mansions</h3>
     </section>
    </section><!--  end hero section  -->



    <section class="listings">
      <div class="wrapper">

        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style="margin-bottom: 60px">
          <div class="btn-group mr-3" role="group" aria-label="First group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="上海" @click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">上 海</div></button>
          </div>

          <div class="btn-group mr-3" role="group" aria-label="Second group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="北京"@click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">北 京</div>
            </button>
          </div>

          <div class="btn-group mr-3" role="group" aria-label="Second group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="成都"@click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">成 都</div>
            </button>
          </div>

          <div class="btn-group mr-3" role="group" aria-label="Second group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="重庆"@click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">重 庆</div>
            </button>
          </div>

          <div class="btn-group mr-3" role="group" aria-label="Second group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="杭州"@click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">杭 州</div>
            </button>
          </div>

          <div class="btn-group mr-3" role="group" aria-label="Second group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="厦门"@click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">厦 门</div>
            </button>

          </div>

          <div class="btn-group mr-3" role="group" aria-label="Second group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="苏州"@click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">苏 州</div>
            </button>
          </div>

          <div class="btn-group mr-3" role="group" aria-label="Second group">
            <button style="width: 110px;height:50px;background-color: seagreen" class="btn " id="南京"@click="selecthouse($event)">
              <div style="font-size: 18px;font-weight: bold;color: white">南 京</div><
            </button>



        </div>

        <ul class="properties_list">
          <li v-for="h in houselist">
            <div class="card" @click="toone(h.hid)" style="width: 22rem; height: 30rem;padding: 20px;">
              <img class="card-img-top" style="height: 280px" :src="h.img" alt="Card image cap" />
              <div class="card-body">
                <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="h.housetype==0">整套公寓·{{h.bednum}}张床</div>
                <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="h.housetype==1">独栋房·{{h.bednum}}张床</div>
                <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="h.housetype==2">别墅·{{h.bednum}}张床</div>
                <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="h.housetype==3">loft·{{h.bednum}}张床</div>
                <div style="font-size: 15px;line-height: 20px;text-align: left;color: brown" v-if="h.housetype==4">酒店·{{h.bednum}}张床</div>
                <div style="font-size: 20px;font-weight: bold;line-height: 30px;text-align: left" >{{h.hname}}</div>
                <div style="font-size: 16px;line-height: 30px;text-align: left" class="mt-2">￥{{h.price}} 每晚</div>
              </div>
            </div>
          </li>
        </ul>
        <!--<div class="more_listing">
          <a href="#" class="more_listing_btn">View More Listings</a>
        </div>-->

         </div>
      </div>
    </section>	<!--  end listing section  -->

    <footer>
      <div class="wrapper footer">
        <ul>
          <li class="links">
            <ul>
              <li><a href="#">关于</a></li>
              <li><a href="#">支持</a></li>
              <li><a href="#">项目</a></li>
              <li><a href="#">政策</a></li>
              <li><a href="#">联系</a></li>
            </ul>
          </li>

          <li class="links">
            <ul>
              <li><a href="#">伙伴</a></li>
              <li><a href="#">房屋</a></li>
              <li><a href="#">差旅</a></li>
              <li><a href="#">杂志</a></li>
              <li><a href="#">...</a></li>
            </ul>
          </li>

          <li class="links">
            <ul>
              <li><a href="#">上海</a></li>
              <li><a href="#">北京</a></li>
              <li><a href="#">广州</a></li>
              <li><a href="#">深圳</a></li>
              <li><a href="#">...</a></li>
            </ul>
          </li>

          <li class="about">
            <p>La Casa is real estate minimal html5 website template, designed and coded by pixelhint, tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum</p>
            <ul>
              <li><a href="#" class="facebook" target="_blank"></a></li>
              <li><a href="#" class="twitter" target="_blank"></a></li>
              <li><a href="#" class="google" target="_blank"></a></li>
              <li><a href="#" class="skype"></a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="copyrights wrapper">
        Copyright © 2015 La-Casa . All Rights Reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
      </div>
    </footer><!--  end footer  -->

  </div>
</template>

<script>
  import Top from '../navbars/topnavbar'
    export default {
      components:{Top},
      data() {
        return {
          activeIndex: '1',
          houselist:[]
        }
      },
      mounted(){
        this.selectHouseShangHai();
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        toone:function (hid) {
          this.$router.push({
            path:'/one',
            query:{
              hid:hid
            }
          })
          // alert(hid);
          // location.href="/one"
        },
        selecthouse(event){
          var city=event.currentTarget.id;
          this.$axios.get('http://127.0.0.1:10010/api/item/house/selectbycity',{params:{city:city},headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }})
            .then((resp) => {
              console.log(resp);
              this.houselist=resp.data;
            })
            .catch((error) => {
              console.log(error)
            })
        },
        selectHouseShangHai(){
          this.$axios.get('http://127.0.0.1:10010/api/item/house/selectbycity',{params:{city:"上海"},headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }})
            .then((resp) => {
              console.log(resp);
              this.houselist=resp.data;
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    }
</script>

<style scoped>
  @import "../../../static/css/main.css";
  @import "../../../static/css/reset.css";
  @import "../../../static/css/responsive.css";
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .card{
    cursor: pointer;
  }

</style>
