<template>
  <div id="app">

    <!--顶部-->
    <div class="row">
      <div class="col-12 border border-1 border-success" style="height: 640px">
        <!--导航栏-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="height: 60px">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">主页</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">成为房东</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">登录</a>
              </li><li class="nav-item active">
              <a class="nav-link" href="#">注册</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="搜索" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
            </form>
          </div>
        </nav>

        <div class="row" style="height: 640px">
          <div class="col col-6 border border-1">图片1</div>

          <div class="col col-6 border border-1">
            <div class="row">
              <div class="col col-6 border border-1" style="height: 320px">图片2</div>
              <div class="col col-6 border border-1" style="height: 320px">图片3</div>
            </div>
            <div class="row">
              <div class="col col-6 border border-1" style="height: 320px">图片4</div>
              <div class="col col-6 border border-1" style="height: 320px">图片5</div>
            </div>
          </div>


        </div>
      </div>
    </div>


    <!--中间-->
    <div class="row">

      <div class="col offset-2 col-5 border border-1 border-dark">

        <el-breadcrumb separator="·" class="mt-3">
          <el-breadcrumb-item><a href="#">详情</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">评价</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">可订日期</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">位置</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">房东</a></el-breadcrumb-item>
        </el-breadcrumb>

        <hr />

        <!--房屋简述-->
        <h1>这是一个房屋的名称，大概字数有50个字左右ZSBDZWSBD</h1>

        <div class="form-inline">
          <div><i class="fas fa-door-open mr-2"></i>n间卧室</div>
          <div class="ml-3"><i class="fas fa-bed mr-2"></i>n张床</div>
          <div class="ml-3"><i class="fas fa-bath mr-2"></i>n间卫生间</div>
          <div class="ml-3"><i class="fas fa-user-alt mr-2"></i>最多住n人</div>
        </div>

        <hr>

        <!--房东信息-->
        <div class="form-inline">
          <div class="demo-basic--circle">
            <div class="block"><el-avatar :size="70" :src="circleUrl"></el-avatar></div>
          </div>
          <div style="margin-left: 10px;">
            <div style="font-size: 20px;">房东：房东的名字 <a class="ml-2" href="#">联系房东</a></div>
            <div class="mt-2" style="font-size: 15px;font-weight: bold;float:left">共收到n条评价·已验证</div>
          </div>
        </div>
        <div style="background-color:#eaebeb;width: 100%;height: 100px">
          <div style="text-align: left">房主留言房主留言房主留言房主留言房主留言房主留言房主留言房主留言房主留言房主留言
            房主留言房主留言房主留言房主留言房主留言房主留言
            房主留言房主留言房主留言房主留言房主留言房主留言房主留言房主留言房主留言</div>
        </div>

        <hr />
        <div class="border border-1" style="width: 120px;height: 100px;padding: 10px"></div>
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
        <div>
          <div style="text-align: left;margin-top: 70px;font-size: 25px;font-weight: bold">评价</div>
        </div>
        <div style="text-align: left;margin-top: 40px">尚无评价</div>

        <div>
          <div style="text-align: left;margin-top: 70px;font-size: 25px;font-weight: bold">可订日期</div>
        </div>
        <div class="border border-1" style="text-align: left;margin-top: 40px;height: 400px">此处是一个日期大插件</div>

        <div>
          <div style="text-align: left;margin-top: 70px;font-size: 25px;font-weight: bold">位置</div>
          <div class="border border-1" style="text-align: left;margin-top: 40px;height: 400px">此处是一个地图大插件</div>
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
      <div class="col col-3 border border-1 border-dark" style="height: 500px;">
        <div class="border border-1" style="padding: 20px;height: 450px;margin-top: 45px">
          <div class="form-inline">
            <div style="font-size: 24px;font-weight: bold">￥999</div>
            <div style="font-size: 14px;margin-top: 10px;margin-left: 5px">每晚</div>
          </div>

          <hr />
          <div>
            <div style="text-align: left;font-weight: bold">日期</div>
            <input type="text" class="form-control">
          </div>

          <div class="mt-4">
            <div style="text-align: left;font-weight: bold">人数</div>
            <input type="text" class="form-control">
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
    export default {
      name:'App',
    }
</script>

<style>

</style>
