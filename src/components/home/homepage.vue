<template>
  <div>
    <section class="hero">
      <top></top>

      <section class="caption">
        <h2 class="caption">Find You Dream Home</h2>
        <h3 class="properties">Appartements - Houses - Mansions</h3>
      </section>
    </section><!--  end hero section  -->



    <div class="tlinks">Collect from <a href="http://www.cssmoban.com/"  title="网站模板">网站模板</a></div>
    <section class="listings">
      <div class="wrapper">
        <ul class="properties_list">
          <li>
            <a href="#">
              <img src="img/property_1.jpg" alt="" title="" class="property_img"/>
            </a>
            <span class="price">$2500</span>
            <div class="property_details">
              <h1>
                <a href="#">Fuisque dictum tortor at purus libero</a>
              </h1>
              <h2>2 kitchens, 2 bed, 2 bath... <span class="property_size">(288ftsq)</span></h2>
            </div>
          </li>
        </ul>
        <div class="more_listing">
          <a href="#" class="more_listing_btn">View More Listings</a>
        </div>
      </div>
    </section>	<!--  end listing section  -->

    <footer>
      <div class="wrapper footer">
        <ul>
          <li class="links">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </li>

          <li class="links">
            <ul>
              <li><a href="#">Appartements</a></li>
              <li><a href="#">Houses</a></li>
              <li><a href="#">Villas</a></li>
              <li><a href="#">Mansions</a></li>
              <li><a href="#">...</a></li>
            </ul>
          </li>

          <li class="links">
            <ul>
              <li><a href="#">New York</a></li>
              <li><a href="#">Los Anglos</a></li>
              <li><a href="#">Miami</a></li>
              <li><a href="#">Washington</a></li>
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
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style>
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
</style>
